import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { CELVisitor } from './generated/CELVisitor';
import {
  StartContext,
  ExprContext,
  ConditionalOrContext,
  ConditionalAndContext,
  RelationContext,
  CalcContext,
  UnaryContext,
  MemberContext,
  PrimaryContext,
  LiteralContext
} from './generated/CELParser';

interface CelValue {
  int64_value?: number;
  uint64_value?: number;
  double_value?: number;
  string_value?: string;
  bytes_value?: string;
  bool_value?: boolean;
  null_value?: null;
  list_value?: { values?: CelValue[] };
  map_value?: { entries?: { key: CelValue, value: CelValue }[] };
}

export class CELInterpreter extends AbstractParseTreeVisitor<CelValue> implements CELVisitor<CelValue> {
  private activation: Record<string, any>;

  constructor(activation: Record<string, any>) {
    super();
    this.activation = activation;
  }

  protected defaultResult(): CelValue {
    return {};
  }

  visitStart(ctx: StartContext): CelValue {
    return this.visit(ctx.expr());
  }

  visitExpr(ctx: ExprContext): CelValue {
    if (ctx.conditionalOr()) {
      return this.visit(ctx.conditionalOr());
    }
    if (ctx.op) {
      const cond = this.visit(ctx.e);
      if (cond.bool_value) {
        return this.visit(ctx.e1);
      } else {
        return this.visit(ctx.e2);
      }
    }
    return {};
  }

  visitConditionalOr(ctx: ConditionalOrContext): CelValue {
    let result = this.visit(ctx.e);
    for (let i = 0; i < ctx.ops.length; i++) {
      if (ctx.ops[i].text === '||') {
        result = { bool_value: result.bool_value || this.visit(ctx.e1[i]).bool_value };
      }
    }
    return result;
  }

  visitConditionalAnd(ctx: ConditionalAndContext): CelValue {
    let result = this.visit(ctx.e);
    for (let i = 0; i < ctx.ops.length; i++) {
      if (ctx.ops[i].text === '&&') {
        result = { bool_value: result.bool_value && this.visit(ctx.e1[i]).bool_value };
      }
    }
    return result;
  }

  visitRelation(ctx: RelationContext): CelValue {
    if (ctx.calc()) {
      return this.visit(ctx.calc());
    }
    const left = this.visit(ctx.relation(0));
    const right = this.visit(ctx.relation(1));
    const op = ctx.op.text;
    switch (op) {
      case '<': return { bool_value: left.int64_value! < right.int64_value! };
      case '<=': return { bool_value: left.int64_value! <= right.int64_value! };
      case '>': return { bool_value: left.int64_value! > right.int64_value! };
      case '>=': return { bool_value: left.int64_value! >= right.int64_value! };
      case '==': return { bool_value: left.int64_value === right.int64_value };
      case '!=': return { bool_value: left.int64_value !== right.int64_value };
      case 'in': return { bool_value: right.list_value?.values?.some(v => v.int64_value === left.int64_value) || false };
      default: return {};
    }
  }

  visitCalc(ctx: CalcContext): CelValue {
    if (ctx.unary()) {
      return this.visit(ctx.unary());
    }
    const left = this.visit(ctx.calc(0));
    const right = this.visit(ctx.calc(1));
    const op = ctx.op.text;
    switch (op) {
      case '+': return { int64_value: left.int64_value! + right.int64_value! };
      case '-': return { int64_value: left.int64_value! - right.int64_value! };
      case '*': return { int64_value: left.int64_value! * right.int64_value! };
      //case '/': return { int64_value: left.int64_value! / right.int64_value! };
      case '%': return { int64_value: left.int64_value! % right.int64_value! };
      default: return {};
    }
  }

  visitUnary(ctx: UnaryContext): CelValue {
    if (ctx.member()) {
      return this.visit(ctx.member());
    }
    const op = ctx.ops[0].text;
    const value = this.visit(ctx.member());
    if (op === '!') {
      return { bool_value: !value.bool_value };
    } else if (op === '-') {
      return { int64_value: -value.int64_value! };
    }
    return {};
  }

  visitMember(ctx: MemberContext): CelValue {
    if (ctx.primary()) {
      return this.visit(ctx.primary());
    }
    if (ctx.id) {
      const obj = this.visit(ctx.member());
      return obj.map_value?.entries?.find(entry => entry.key.string_value === ctx.id.text)?.value || {};
    }
    return {};
  }

  visitPrimary(ctx: PrimaryContext): CelValue {
    if (ctx.literal()) {
      return this.visit(ctx.literal());
    }
    if (ctx.e) {
      return this.visit(ctx.e);
    }
    return {};
  }

  visitLiteral(ctx: LiteralContext): CelValue {
    if (ctx.NUM_INT()) {
      return { int64_value: parseInt(ctx.text, 10) };
    }
    if (ctx.NUM_FLOAT()) {
      return { double_value: parseFloat(ctx.text) };
    }
    if (ctx.STRING()) {
      return { string_value: ctx.text.slice(1, -1) }; // Remove quotes
    }
    if (ctx.CEL_TRUE()) {
      return { bool_value: true };
    }
    if (ctx.CEL_FALSE()) {
      return { bool_value: false };
    }
    if (ctx.NUL()) {
      return { null_value: null };
    }
    if (ctx.RAW_STRING()) {
      return { string_value: ctx.text.slice(2, -1) }; // Remove r and quotes
    }
    if (ctx.BYTES()) {
      return { bytes_value: ctx.text.slice(2, -1) }; // Remove b and quotes
    }
    return {};
  }
}
