import CELVisitor from './generated/CELVisitor';
import Context from './Context';

class TypeChecker extends CELVisitor {
    private context: Context;

    private functionSignatures = {
        min: { args: ['int'], varArgs: true, returnType: 'int' },
        max: { args: ['int'], varArgs: true, returnType: 'int' },
        abs: { args: ['int'], returnType: 'int' },
        ceil: { args: ['float'], returnType: 'int' },
        floor: { args: ['float'], returnType: 'int' },
        round: { args: ['float'], returnType: 'int' },
        contains: { args: ['string', 'string'], returnType: 'bool' },
        endsWith: { args: ['string', 'string'], returnType: 'bool' },
        indexOf: { args: ['string', 'string'], returnType: 'int' },
        length: { args: ['string'], returnType: 'int' },
        lower: { args: ['string'], returnType: 'string' },
        replace: { args: ['string', 'string', 'string'], returnType: 'string' },
        split: { args: ['string', 'string'], returnType: 'list<string>' },
        startsWith: { args: ['string', 'string'], returnType: 'bool' },
        upper: { args: ['string'], returnType: 'string' },
        size: { args: [['string', 'list<any>', 'int']], returnType: 'int' },
        int: { args: ['any'], returnType: 'int' },
        uint: { args: ['any'], returnType: 'int' },
        double: { args: ['any'], returnType: 'float' },
        string: { args: ['any'], returnType: 'string' },
        bool: { args: ['any'], returnType: 'bool' },
        exists: { args: ['any'], returnType: 'bool' },
        existsOne: { args: ['list<any>'], returnType: 'bool' },
        matches: { args: ['string', 'string'], returnType: 'bool' },
        timestamp: { args: ['string'], returnType: 'timestamp' },
        type: { args: ['any'], returnType: 'string' },
        duration: { args: ['int'], returnType: 'duration' },
        time: { args: ['int', 'int', 'int', 'int', 'int', 'int', 'int'], returnType: 'timestamp' },
        date: { args: ['int', 'int', 'int'], returnType: 'date' },
        getFullYear: { args: ['timestamp'], returnType: 'int' },
        getMonth: { args: ['timestamp'], returnType: 'int' },
        getDate: { args: ['timestamp'], returnType: 'int' },
        getHours: { args: ['timestamp'], returnType: 'int' },
        getMinutes: { args: ['timestamp'], returnType: 'int' },
        getSeconds: { args: ['timestamp'], returnType: 'int' },
        has: { args: ['list<any>', 'any'], returnType: 'bool' }
    };

    constructor(context: Context) {
        super();
        this.context = context;
    }

    visit(ctx: any) {
        const ruleName = this.constructor.name + '.' + this.getRuleName(ctx);
        const result = super.visit(ctx);
        return result;
    }

    getRuleName(ctx) {
        return ctx.constructor.name.replace('Context', '');
    }

    visitStart(ctx) {
        return this.visit(ctx.expr());
    }

    visitExpr(ctx) {
        const child = this.visit(ctx.getChild(0));
        return normalizeType(child);
    }

    visitIdentOrGlobalCall(ctx) {
        const idToken = ctx.IDENTIFIER();
        let id = idToken.getText();

        if (ctx.IDENTIFIER().length > 1) {
            let baseId = id;
            for (let i = 1; i < ctx.IDENTIFIER().length; i++) {
                const field = ctx.IDENTIFIER(i).getText();
                baseId += `.${field}`;
            }
            id = baseId;
        }

        if (ctx.getChildCount() >= 3 && ctx.getChild(1).getText() === '(') {
            const args = ctx.exprList().expr().map((exprCtx) => this.visit(exprCtx));

            const flattenedArgs = args.map(arg => normalizeType(arg));

            const signature = this.functionSignatures[id];
            if (!signature) {
                throw new Error(`Function '${id}' is not defined`);
            }

            if (signature.varArgs && flattenedArgs.length < signature.args.length) {
                throw new Error(`Function '${id}' expects at least ${signature.args.length} arguments, but got ${flattenedArgs.length}`);
            } else if (!signature.varArgs && flattenedArgs.length !== signature.args.length) {
                throw new Error(`Function '${id}' expects ${signature.args.length} arguments, but got ${flattenedArgs.length}`);
            }

            for (let i = 0; i < flattenedArgs.length; i++) {
                const expectedTypes = signature.args[signature.varArgs ? 0 : i] || 'any';
                const actualType = flattenedArgs[i];
                let expectedTypeArray = Array.isArray(expectedTypes) ? expectedTypes : [expectedTypes];
                let typeMatched = false;

                for (const expectedType of expectedTypeArray) {
                    if (expectedType === 'any' || expectedType === actualType) {
                        typeMatched = true;
                        break;
                    }

                    if (expectedType.startsWith('list<') && actualType.startsWith('list<')) {
                        const expectedElemType = expectedType.slice(5, -1);
                        const actualElemType = actualType.slice(5, -1);
                        if (expectedElemType === 'any' || expectedElemType === actualElemType) {
                            typeMatched = true;
                            break;
                        }
                    }
                }

                if (!typeMatched) {
                    throw new Error(`Argument ${i + 1} of function '${id}' expects type '${expectedTypes}', but got '${actualType}'`);
                }
            }

            return signature.returnType;
        } else {
            let varType = this.context.getType(id);

            if (ctx.DOT()) {
                const fields = id.split('.');
                fields.shift();
                for (const field of fields) {
                    if (varType[field]) {
                        varType = varType[field];
                    } else {
                        throw new Error(`Field '${field}' does not exist on variable '${id}'`);
                    }
                }
            }

            if (!varType) {
                throw new Error(`Undefined variable: ${id}`);
            }

            return varType;
        }
    }

    visitCalcAddSub(ctx) {
        let leftType = this.visit(ctx.getChild(0));

        for (let i = 1; i < ctx.getChildCount(); i += 2) {
            const operator = ctx.getChild(i).getText();
            const rightType = this.visit(ctx.getChild(i + 1));

            if (operator === '+' && leftType === 'string' && rightType === 'string') {
                leftType = 'string';
            } else if (['+', '-'].includes(operator) && (leftType === 'int' || leftType === 'float')) {
                leftType = leftType === 'float' || rightType === 'float' ? 'float' : 'int';
            } else {
                throw new Error(`Operator '${operator}' requires matching types, but got '${leftType}' and '${rightType}'`);
            }
        }

        return leftType;
    }

    visitCalcMulDiv(ctx) {
        let leftType = this.visit(ctx.getChild(0));

        for (let i = 1; i < ctx.getChildCount(); i += 2) {
            const operator = ctx.getChild(i).getText();
            const rightType = this.visit(ctx.getChild(i + 1));

            if (['*', '/', '%'].includes(operator) && (leftType === 'int' || leftType === 'float')) {
                leftType = leftType === 'float' || rightType === 'float' ? 'float' : 'int';
            } else {
                throw new Error(`Operator '${operator}' requires numeric operands, but got '${leftType}' and '${rightType}'`);
            }
        }

        return leftType;
    }

    visitLogicalNot(ctx) {
        const exprType = this.visit(ctx.getChild(1));
        if (exprType !== 'bool') {
            throw new Error(`Logical '!' requires boolean operand, but got '${exprType}'`);
        }
        return 'bool';
    }

    visitConditionalAnd(ctx) {
        let resultType = this.visit(ctx.getChild(0));

        for (let i = 1; i < ctx.getChildCount(); i += 2) {
            const nextExprType = this.visit(ctx.getChild(i + 1));

            if (resultType !== 'bool' || nextExprType !== 'bool') {
                throw new Error(`Logical '&&' requires boolean operands, but got '${resultType}' and '${nextExprType}'`);
            }

            resultType = 'bool';
        }

        return resultType;
    }

    visitConditionalOr(ctx) {
        let resultType = this.visit(ctx.getChild(0));

        for (let i = 1; i < ctx.getChildCount(); i += 2) {
            const nextExprType = this.visit(ctx.getChild(i + 1));

            if (resultType !== 'bool' || nextExprType !== 'bool') {
                throw new Error(`Logical '||' requires boolean operands, but got '${resultType}' and '${nextExprType}'`);
            }

            resultType = 'bool';
        }

        return resultType;
    }

    visitPrimaryExpr(ctx) {
        if (ctx.getChildCount() === 1) {
            const result = this.visit(ctx.getChild(0));
            return result;
        } else if (ctx.getChildCount() === 3 && ctx.getChild(0).getText() === '(') {
            const result = this.visit(ctx.getChild(1));
            return result;
        } else {
            throw new Error('Invalid primary expression');
        }
    }

    visitConstantLiteral(ctx) {
        const text = ctx.getText();
        if (!isNaN(Number(text))) {
            if (text.includes('.')) {
                return 'float';
            } else {
                return 'int';
            }
        }

        if (text === 'true' || text === 'false') {
            return 'bool';
        }

        if ((text.startsWith('"') || text.startsWith("'")) && (text.endsWith('"') || text.endsWith("'"))) {
            return 'string';
        }

        if (text.startsWith('timestamp(') && text.endsWith(')')) {
            return 'timestamp';
        }

        if (text.startsWith('[') && text.endsWith(']')) {
            return 'list';
        }

        return text;
    }
}

function normalizeType(input) {
    if (typeof input === 'string') {
        return input;
    } else if (Array.isArray(input)) {
        const flatArray = input.flat(Infinity);
        if (flatArray.length === 1) {
            return String(flatArray[0]);
        }
        return flatArray.map(String).join(',');
    } else {
        throw new Error(`Unsupported input type: ${typeof input}`);
    }
}

export default TypeChecker;
