import CELVisitor from './generated/CELVisitor';
import { builtInFunctions } from './BuiltInFunctions';
import Context from './Context';

export class Evaluator extends CELVisitor<any> {
  private context: Context;

  constructor(context: Context = new Context({})) {
    super();
    this.context = context;
  }

  setContext(context: Context) {
    this.context = context;
  }

  visitStart = (ctx: any) => {
    return this.visit(ctx.expr());
  };

  visitExpr = (ctx: any) => {
    return this.visit(ctx.getChild(0));
  };

  visitConditionalOr = (ctx: any) => {
    if (ctx.children.length === 1) {
      return this.visit(ctx.getChild(0));
    } else if (ctx.children.length === 5 && ctx.getChild(1).getText() === '?') {
      const condition = this.visit(ctx.getChild(0));
      return condition ? this.visit(ctx.getChild(2)) : this.visit(ctx.getChild(4));
    } else {
      let result = this.visit(ctx.getChild(0));
      for (let i = 1; i < ctx.children.length; i += 2) {
        const right = this.visit(ctx.getChild(i + 1));
        result = result || right;
        if (result) break;
      }
      return result;
    }
  };

  visitConditionalAnd = (ctx: any) => {
    if (ctx.children.length === 1) {
      return this.visit(ctx.getChild(0));
    } else {
      let result = this.visit(ctx.getChild(0));
      for (let i = 1; i < ctx.children.length; i += 2) {
        const right = this.visit(ctx.getChild(i + 1));
        result = result && right;
        if (!result) break;
      }
      return result;
    }
  };

  visitRelationOp = (ctx: any) => {
    const left = this.visit(ctx.getChild(0));
    const operator = ctx.getChild(1).getText();
    const right = this.visit(ctx.getChild(2));
    switch (operator) {
      case '==':
        return left === right;
      case '!=':
        return left !== right;
      case '<':
        return left < right;
      case '<=':
        return left <= right;
      case '>':
        return left > right;
      case '>=':
        return left >= right;
      default:
        throw new Error(`Unknown operator: ${operator}`);
    }
  };

  visitRelationCalc = (ctx: any) => {
    return this.visit(ctx.getChild(0));
  };

  visitCalcAddSub = (ctx: any) => {
    if (ctx.children.length === 1) {
      return this.visit(ctx.getChild(0));
    } else {
      let result = this.visit(ctx.getChild(0));
      for (let i = 1; i < ctx.children.length; i += 2) {
        const operator = ctx.getChild(i).getText();
        const right = this.visit(ctx.getChild(i + 1));
        switch (operator) {
          case '+':
            result = result + right;
            break;
          case '-':
            result = result - right;
            break;
          default:
            throw new Error(`Unknown operator: ${operator}`);
        }
      }
      return result;
    }
  };

  visitCalcMulDiv = (ctx: any) => {
    if (ctx.children.length === 1) {
      return this.visit(ctx.getChild(0));
    } else {
      let result = this.visit(ctx.getChild(0));
      for (let i = 1; i < ctx.children.length; i += 2) {
        const operator = ctx.getChild(i).getText();
        const right = this.visit(ctx.getChild(i + 1));
        switch (operator) {
          case '*':
            result = result * right;
            break;
          case '/':
            result = result / right;
            break;
          case '%':
            result = result % right;
            break;
          default:
            throw new Error(`Unknown operator: ${operator}`);
        }
      }
      return result;
    }
  };

  visitCalcUnary = (ctx: any) => {
    if (ctx.children.length === 1) {
      return this.visit(ctx.getChild(0));
    } else {
      const operator = ctx.getChild(0).getText();
      const operand = this.visit(ctx.getChild(1));
      switch (operator) {
        case '!':
          return !operand;
        case '-':
          return -operand;
        default:
          throw new Error(`Unknown unary operator: ${operator}`);
      }
    }
  };

  visitLogicalNot = (ctx: any) => {
    const value = this.visit(ctx.getChild(1));
    return !value;
  };

  visitNegate = (ctx: any) => {
    const value = this.visit(ctx.getChild(1));
    return -value;
  };

  visitMemberExpr = (ctx: any) => {
    return this.visit(ctx.getChild(0));
  };

  visitSelectOrCall = (ctx: any) => {
    if (ctx.children.length === 1) {
      return this.visit(ctx.getChild(0));
    }

    const object = this.visit(ctx.getChild(0));
    const member = ctx.getChild(2).getText();

    if (ctx.children.length === 3) {
      if (object && typeof object === 'object' && member in object) {
        return object[member];
      } else {
        throw new Error(`Property '${member}' does not exist on object`);
      }
    } else if (ctx.children.length >= 4 && ctx.getChild(3).getText() === '(') {
      let args = [];
      if (ctx.children.length === 5) {
        args = this.visitExprList(ctx.getChild(4));
      }

      if (builtInFunctions.hasOwnProperty(member)) {
          try {
              // @ts-ignore              
            return builtInFunctions[member](object, args);            

        } catch (error) {
          throw new Error(`Error in method '${member}': ${(error as Error).message}`);
        }
      } else {
        throw new Error(`Method '${member}' is not defined`);
      }
    } else {
      throw new Error('Invalid member expression');
    }
  };

  visitPrimaryExpr = (ctx: any) => {
    if (ctx.children.length === 1) {
      return this.visit(ctx.getChild(0));
    } else if (ctx.children.length === 3 && ctx.getChild(0).getText() === '(') {
      return this.visit(ctx.getChild(1));
    } else {
      throw new Error('Invalid primary expression');
    }
  };

  visitIdentOrGlobalCall = (ctx: any) => {
    const id = ctx.getChild(0).getText();

    if (ctx.children.length === 1) {
      const variableValue = this.context.getVariable(id);
      if (variableValue !== undefined) {
        return variableValue;
      }
      throw new Error(`Variable '${id}' is not defined`);
    } else if (ctx.children.length >= 3 && ctx.getChild(1).getText() === '(') {
      let args = [];
      if (ctx.children.length === 4) {
        args = this.visitExprList(ctx.getChild(2));
      }

      if (builtInFunctions.hasOwnProperty(id)) {
          try {
              // @ts-ignore  
              return builtInFunctions[id](...args);
        } catch (error) {
          throw new Error(`Error in function '${id}': ${(error as Error).message}`);
        }
      } else {
        throw new Error(`Function '${id}' is not defined`);
      }
    } else {
      throw new Error('Invalid function call');
    }
  };

  visitNested = (ctx: any) => {
    return this.visit(ctx.expr());
  };

  visitExprList = (ctx: any) => {
    const exprs = [];
    for (let i = 0; i < ctx.children.length; i += 2) {
      exprs.push(this.visit(ctx.getChild(i)));
    }
    return exprs;
  };

  visitConstantLiteral = (ctx: any) => {
    return this.visit(ctx.getChild(0));
  };

  visitInt = (ctx: any) => {
    const text = ctx.getText();
    return parseInt(text, 10);
  };

  visitUint = (ctx: any) => {
    const text = ctx.getText();
    return parseInt(text, 10);
  };

  visitDouble = (ctx: any) => {
    const text = ctx.getText();
    return parseFloat(text);
  };

  visitString = (ctx: any) => {
    let text = ctx.getText();
    text = text.substring(1, text.length - 1).replace(/\\'/g, "'");
    return text;
  };

  visitBoolTrue = (ctx: any) => {
    return true;
  };

  visitBoolFalse = (ctx: any) => {
    return false;
  };

  visitNull = (ctx: any) => {
    return null;
  };

  visitIdent = (ctx: any) => {
    const id = ctx.getText();
    const variableValue = this.context.getVariable(id);
    if (variableValue !== undefined) {
      return variableValue;
    }
    throw new Error(`Variable '${id}' is not defined`);
  };

  visitConditionalExpr = (ctx: any) => {
    if (ctx.children.length === 1) {
      return this.visit(ctx.getChild(0));
    } else {
      const condition = this.visit(ctx.getChild(0));
      return condition ? this.visit(ctx.getChild(2)) : this.visit(ctx.getChild(4));
    }
  };
}

export default Evaluator;
