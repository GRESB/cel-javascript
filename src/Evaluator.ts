import antlr4 from 'antlr4';
import CELVisitor from './generated/CELVisitor';
import CELParser from './generated/CELParser';
import { builtInFunctions } from './BuiltInFunctions';
import Context from './Context';

export class Evaluator extends CELVisitor {
  private context: Context;

  constructor(context: Context = new Context({})) {
    super();
    this.context = context;
  }

  setContext(context: Context) {
    this.context = context;
  }

  visitStart(ctx) {
    return this.visit(ctx.expr());
  }


  visitExpr(ctx) {
    return this.visit(ctx.getChild(0));
  }


visitConditionalOr(ctx) {
  if (ctx.children.length === 1) {
    return this.visit(ctx.getChild(0));
  } else if (ctx.children.length === 5 && ctx.getChild(1).getText() === '?') {
    // Handle ternary operator
    const condition = this.visit(ctx.getChild(0));
    if (condition) {
      return this.visit(ctx.getChild(2));
    } else {
      return this.visit(ctx.getChild(4));
    }
  } else {
    // Existing logic for '||' operator
    let result = this.visit(ctx.getChild(0));
    for (let i = 1; i < ctx.children.length; i += 2) {
      const right = this.visit(ctx.getChild(i + 1));
      result = result || right;
      if (result) break; // Short-circuit evaluation
    }
    return result;
  }
}



  visitConditionalAnd(ctx) {
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
  }

  visitRelationOp(ctx) {
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
  }

  visitRelationCalc(ctx) {
    return this.visit(ctx.getChild(0));
  }


  visitCalcAddSub(ctx) {
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
  }

  visitCalcMulDiv(ctx) {
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
  }


  visitCalcUnary(ctx) {
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
  }

  visitLogicalNot(ctx) {
    const value = this.visit(ctx.getChild(1));
    return !value;
  }


  visitNegate(ctx) {
    const value = this.visit(ctx.getChild(1));
    return -value;
  }


  visitMemberExpr(ctx) {
    return this.visit(ctx.getChild(0));
  }


  visitSelectOrCall(ctx) {
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
      // Method call
      let args = [];
      if (ctx.children.length === 5) {
        args = this.visitExprList(ctx.getChild(4));
      }

      // Check for built-in methods
      if (builtInFunctions.hasOwnProperty(member)) {
        try {
          return builtInFunctions[member](object, ...args);
        } catch (error) {
          throw new Error(`Error in method '${member}': ${error.message}`);
        }
      } else {
        throw new Error(`Method '${member}' is not defined`);
      }
    } else {
      throw new Error('Invalid member expression');
    }
  }


visitPrimaryExpr(ctx) {
  if (ctx.children.length === 1) {
    return this.visit(ctx.getChild(0));
  } else if (ctx.children.length === 3 && ctx.getChild(0).getText() === '(') {
    // Parentheses: '(' expr ')'
    return this.visit(ctx.getChild(1));
  } else {
    throw new Error('Invalid primary expression');
  }
}


  visitIdentOrGlobalCall(ctx) {
    const id = ctx.getChild(0).getText();

    if (ctx.children.length === 1) {
      // Variable
      const variableValue = this.context.getVariable(id);
      if (variableValue !== undefined) {
        return variableValue;
      }
      throw new Error(`Variable '${id}' is not defined`);
    } else if (ctx.children.length >= 3 && ctx.getChild(1).getText() === '(') {
      // Function call
      let args = [];
      if (ctx.children.length === 4) {
        args = this.visitExprList(ctx.getChild(2));
      }

      // Check for built-in functions
      if (builtInFunctions.hasOwnProperty(id)) {
        try {
          return builtInFunctions[id](...args);
        } catch (error) {
          throw new Error(`Error in function '${id}': ${error.message}`);
        }
      } else {
        throw new Error(`Function '${id}' is not defined`);
      }
    } else {
      throw new Error('Invalid function call');
    }
  }

  visitNested(ctx) {
    return this.visit(ctx.expr());
  }

  visitExprList(ctx) {
    const exprs = [];
    for (let i = 0; i < ctx.children.length; i += 2) {
      exprs.push(this.visit(ctx.getChild(i)));
    }
    return exprs;
  }

  visitConstantLiteral(ctx) {
    return this.visit(ctx.getChild(0));
  }


  visitInt(ctx) {
    const text = ctx.getText();
    return parseInt(text, 10);
  }


  visitUint(ctx) {
    const text = ctx.getText();
    return parseInt(text, 10);
  }


  visitDouble(ctx) {
    const text = ctx.getText();
    return parseFloat(text);
  }


  visitString(ctx) {
    let text = ctx.getText();
    text = text.substring(1, text.length - 1).replace(/\\'/g, "'");
    return text;
  }


  visitBoolTrue(ctx) {
    return true;
  }


  visitBoolFalse(ctx) {
    return false;
  }


  visitNull(ctx) {
    return null;
  }


  visitIdent(ctx) {
    const id = ctx.getText();
    const variableValue = this.context.getVariable(id);
    if (variableValue !== undefined) {
      return variableValue;
    }
    throw new Error(`Variable '${id}' is not defined`);
  }

    visitConditionalExpr(ctx) {
        if (ctx.children.length === 1) {
            return this.visit(ctx.getChild(0));
        } else {
            // Ternary operator
            const condition = this.visit(ctx.getChild(0));
            if (condition) {
                return this.visit(ctx.getChild(2));
            } else {
                return this.visit(ctx.getChild(4));
            }
        }
    }

}



export default Evaluator;
