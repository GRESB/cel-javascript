import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { CELVisitor } from './generated/CELVisitor';
import {
  StartContext, ExprContext, ConditionalOrContext, ConditionalAndContext, RelationContext, CalcContext, UnaryContext, MemberContext, PrimaryContext, ExprListContext, FieldInitializerListContext, MapInitializerListContext, IntContext, UintContext, DoubleContext, StringContext, BytesContext, BoolTrueContext, BoolFalseContext, NullContext, RelationOpContext, RelationCalcContext, CalcUnaryContext, CalcMulDivContext, CalcAddSubContext, MemberExprContext, LogicalNotContext, NegateContext, SelectOrCallContext, IndexContext, CreateMessageContext, IdentOrGlobalCallContext, NestedContext, CreateListContext, CreateStructContext, ConstantLiteralContext
} from './generated/CELParser';

type CelValue = any;
type CelObject = { [key: string]: CelValue };

class CELInterpreter extends AbstractParseTreeVisitor<any> implements CELVisitor<any> {
  private globalFunctions: { [key: string]: Function } = {};
  private variables: { [key: string]: any } = {};

  protected defaultResult() {
    return null;
  }

  visitStart(ctx: StartContext) {
    return this.visit(ctx.expr());
  }

  visitExpr(ctx: ExprContext): CelValue {
    if (ctx.QUESTIONMARK()) {
      const condition = this.visit(ctx.conditionalOr(0));
      const trueBranch = this.visit(ctx.conditionalOr(1));
      const falseBranch = this.visit(ctx.expr()!);
      return condition ? trueBranch : falseBranch;
    }
    return this.visit(ctx.conditionalOr(0));
  }

  visitConditionalOr(ctx: ConditionalOrContext): CelValue {
    console.log('visitConditionalOr', ctx.constructor.name, ctx.text)
    let result = this.visit(ctx.conditionalAnd(0));
    for (let i = 1; i < ctx.conditionalAnd().length; i++) {
      result = result || this.visit(ctx.conditionalAnd(i));
    }
    return result;
  }

  visitConditionalAnd(ctx: ConditionalAndContext): CelValue {
    console.log('visitConditionalAnd', ctx.constructor.name, ctx.text);

    let result: CelValue;
    if (ctx.relation().length > 0) {
      const firstRelation = ctx.relation(0);
      console.log('First relation context:', firstRelation.constructor.name);
      result = this.visit(firstRelation);
    }

    for (let i = 1; i < ctx.relation().length; i++) {
      console.log('Visit relation in loop:', ctx.relation(i).constructor.name);
      result = result && this.visit(ctx.relation(i));
    }
    return result;
  }

  visitRelation(ctx: RelationContext): CelValue {
    console.log('visitRelation', ctx.constructor.name, ctx.text);
    if (ctx instanceof RelationCalcContext) {
      return this.visitRelationCalc(ctx);
    } else if (ctx instanceof RelationOpContext) {
      return this.visitRelationOp(ctx);
    } else {
      return this.visit(ctx);
    }
  }


  visitRelationOp(ctx: RelationOpContext): CelValue {
    const left = this.visit(ctx.relation(0));
    const right = this.visit(ctx.relation(1));
    const operator = ctx._op.text;

    switch (operator) {
      case "==":
        return left === right;
      case "!=":
        return left !== right;
      case "<":
        return left < right;
      case "<=":
        return left <= right;
      case ">":
        return left > right;
      case ">=":
        return left >= right;
      case "in":
        return right.includes(left);
      default:
        throw new Error(`Unknown operator: ${operator}`);
    }
  }

  visitCalc(ctx: CalcContext): CelValue {
    console.log('visitCalc', ctx.constructor.name, ctx.text);
    if (ctx instanceof CalcUnaryContext) {
      return this.visit(ctx.unary());
    } else if (ctx instanceof CalcMulDivContext) {
      const left = this.visit(ctx.calc(0));
      const right = this.visit(ctx.calc(1));
      const operator = ctx._op?.text;

      switch (operator) {
        case "*":
          return left * right;
        case "/":
          return left / right;
        case "%":
          return left % right;
        default:
          throw new Error(`Unknown operator: ${operator}`);
      }
    } else if (ctx instanceof CalcAddSubContext) {
      let result = this.visit(ctx.calc(0));
      const operator = ctx._op.text;

      for (let i = 1; i < ctx.calc().length; i++) {
        const right = this.visit(ctx.calc(i));

        switch (operator) {
          case "+":
            result += right;
            break;
          case "-":
            result -= right;
            break;
          default:
            throw new Error(`Unknown operator: ${operator}`);
        }
      }
      return result;
    }
    return null;
  }





  visitRelationCalc(ctx: RelationCalcContext): CelValue {
    console.log('visitRelationCalc', ctx.constructor.name, ctx.text)
    console.log('ctx.calc.constructor.name', ctx.constructor.name)
    return this.visitCalc(ctx.calc());

  }

  visitUnary(ctx: UnaryContext): CelValue {
    console.log('visitUnary', ctx.constructor.name, ctx.text)
    if (ctx instanceof MemberExprContext) {
      return this.visit(ctx.member());
    } else if (ctx instanceof LogicalNotContext) {
      let result = this.visit(ctx.member());
      for (let i = 0; i < ctx._ops.length; i++) {
        result = !result;
      }
      return result;
    } else if (ctx instanceof NegateContext) {
      let result = this.visit(ctx.member());
      for (let i = 0; i < ctx._ops.length; i++) {
        result = -result;
      }
      return result;
    }
  }

  visitMember(ctx: MemberContext): CelValue {
    console.log('visitMember', ctx.constructor.name, ctx.text);
    if (ctx instanceof PrimaryContext) {
      return this.visit(ctx);
    } else if (ctx instanceof SelectOrCallContext) {
      const target = this.visit(ctx.member());
      const memberName = ctx._id.text;

      if (ctx.LPAREN()) {
        const args = ctx.exprList() ? this.visit(ctx.exprList()!) : [];
        // @ts-ignore
        if (typeof target === 'object' && target !== null && typeof target[memberName] === "function") {
          // @ts-ignore
          return target[memberName](...args);
        } else {
          throw new Error(`'${memberName}' is not a function`);
        }
      } else {
        // @ts-ignore
        return target?.[memberName];
      }
    } else if (ctx instanceof IndexContext) {
      const target = this.visit(ctx.member());
      const index = this.visit(ctx.expr()!);
      return target[index];
    } else if (ctx instanceof CreateMessageContext) {
      const obj: CelObject = {};
      const fields = ctx.fieldInitializerList()!.expr();

      for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        const key = ctx.fieldInitializerList()!.IDENTIFIER(i).text;
        obj[key] = this.visit(field);
      }

      return obj;
    }
  }

  visitPrimary(ctx: PrimaryContext): CelValue {
    console.log('visitPrimary', ctx.constructor.name, ctx.text)
    if (ctx instanceof IdentOrGlobalCallContext) {
      const identifier = ctx._id.text;
      if (ctx.LPAREN()) {
        const args = ctx.exprList() ? this.visit(ctx.exprList()!) : [];
        // @ts-ignore
        if (typeof this.globalFunctions[identifier] === "function") {
          // @ts-ignore
          return this.globalFunctions[identifier](...args);
        } else {
          throw new Error(`Function '${identifier}' is not defined`);
        }
      } else {
        // @ts-ignore
        return this.variables[identifier];
      }
    } else if (ctx instanceof NestedContext) {
      return this.visit(ctx.expr());
    } else if (ctx instanceof CreateListContext) {
      return ctx.exprList() ? this.visit(ctx.exprList()!) : [];
    } else if (ctx instanceof CreateStructContext) {
      const obj: CelObject = {};
      if (ctx.mapInitializerList()) {
        const entries = ctx.mapInitializerList()!.expr();
        for (let i = 0; i < entries.length; i++) {
          const key = this.visit(entries[i]);
          const value = this.visit(ctx.mapInitializerList()!.expr(i + 1));
          obj[key] = value;
        }
      }
      return obj;
    } else if (ctx instanceof ConstantLiteralContext) {
      return this.visit(ctx.literal());
    }
  }

  visitExprList(ctx: ExprListContext): CelValue[] {
    console.log('visitExprList', ctx.constructor.name, ctx.text);
    return ctx.expr().map(expr => this.visit(expr));
  }

  visitFieldInitializerList(ctx: FieldInitializerListContext): CelObject {
    console.log('visitFieldInitializerList', ctx.constructor.name, ctx.text)
    const fields: CelObject = {};
    for (let i = 0; i < ctx.IDENTIFIER().length; i++) {
      const field = ctx.IDENTIFIER(i).text;
      const value = this.visit(ctx.expr(i));
      fields[field] = value;
    }
    return fields;
  }

  visitMapInitializerList(ctx: MapInitializerListContext): CelObject {
    console.log('visitMapInitializerList', ctx.constructor.name, ctx.text)
    const map: CelObject = {};
    for (let i = 0; i < ctx.expr().length; i++) {
      const key = this.visit(ctx.expr(i));
      const value = this.visit(ctx.expr(i + 1));
      map[key] = value;
    }
    return map;
  }

  visitInt(ctx: IntContext): CelValue {
    console.log('visitInt', ctx.constructor.name, ctx.text)
    const sign = ctx.MINUS() ? -1 : 1;
    return sign * parseInt(ctx.NUM_INT().text, 10);
  }

  visitUint(ctx: UintContext): CelValue {
    console.log('visitUint', ctx.constructor.name, ctx.text)
    return parseInt(ctx.NUM_UINT().text, 10);
  }

  visitDouble(ctx: DoubleContext): CelValue {
    const sign = ctx.MINUS() ? -1 : 1;
    return sign * parseFloat(ctx.NUM_FLOAT().text);
  }

  visitString(ctx: StringContext): CelValue {
    return ctx.STRING().text.slice(1, -1); // Remove the quotes
  }

  visitBytes(ctx: BytesContext): CelValue {
    return Array.from(Buffer.from(ctx.BYTES().text.slice(1, -1), 'hex')); // Convert hex string to buffer representation
  }

  visitBoolTrue(ctx: BoolTrueContext): CelValue {
    return true;
  }

  visitBoolFalse(ctx: BoolFalseContext): CelValue {
    return false;
  }

  visitNull(ctx: NullContext): CelValue {
    return null;
  }
}

export { CELInterpreter };
