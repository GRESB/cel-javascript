import CELVisitor from './generated/CELVisitor';
import Context from './Context';

type FunctionSignature = { args: (string | string[])[]; returnType: string; varArgs?: boolean };

class TypeChecker extends CELVisitor<any> {
    private context: Context;

    private functionSignatures: { [key: string]: FunctionSignature } = {
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
        size: { args: [['string', 'list<any>', 'map']], returnType: 'int' },
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
        if (!(context instanceof Context)) {
            throw new Error('TypeChecker requires a Context object');
        }
        this.context = context;
    }

    visit = (ctx: any): any => {
        return super.visit(ctx);
    }

    getRuleName = (ctx: any): string => {
        return ctx.constructor.name.replace('Context', '');
    }

    visitStart = (ctx: any): any => {
        return this.visit(ctx.expr());
    }

    visitExpr = (ctx: any): any => {
        return this.visit(ctx.getChild(0));
    };
    
    visitSelectOrCall = (ctx: any): string => {
        const objectType = this.visit(ctx.getChild(0));
        const memberName = ctx.getChild(2).getText();
        
        if (objectType && typeof objectType === 'object' && memberName in objectType) {
            return objectType[memberName];
        } else {
            
            const objectName = ctx.getChild(0).getText();
            const objectValue = this.context.getVariable(objectName);
            if (objectValue && typeof objectValue === 'object' && memberName in objectValue) {
                const memberValue = objectValue[memberName];
                const memberType = getType(memberValue);
                return memberType;
            } else {
                throw new Error(`Cannot access property '${memberName}' on object '${objectName}'`);
            }
        }
    };

    
    resolveObjectValue = (node: any): any => {
        const ruleName = node.constructor.name;

        if (ruleName === 'IdentOrGlobalCallContext') {
            const id = node.getText();
            const variableValue = this.context.getVariable(id);
            if (variableValue === undefined) {
                throw new Error(`Variable '${id}' is not defined`);
            }
            return variableValue;
        } else if (ruleName === 'SelectOrCallContext') {
            const objectValue = this.resolveObjectValue(node.getChild(0));
            const memberName = node.getChild(2).getText();
            if (objectValue && typeof objectValue === 'object' && memberName in objectValue) {
                return objectValue[memberName];
            } else {
                throw new Error(`Property '${memberName}' does not exist on object`);
            }
        } else {
            throw new Error(`Cannot resolve value of node type '${ruleName}'`);
        }
    };


    visitIdentOrGlobalCall = (ctx: any): any => {
        const id = ctx.getChild(0).getText();
        
        if (ctx.children.length === 1) {
            let varType = this.context.getType(id);
            if (varType === undefined) {
                const variableValue = this.context.getVariable(id);
                if (variableValue !== undefined) {
                    varType = getType(variableValue) as any;
                    this.context.setType(id, varType);  
                } else {
                    throw new Error(`Variable '${id}' is not defined`);
                }
            }
            return varType;
        } else if (ctx.getChildCount() >= 3 && ctx.getChild(1).getText() === '(') {
            const args: any[] = this.visit(ctx.exprList());
            const flattenedArgs = args.filter(value => value !== undefined && value !== null && value !== '');

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
            throw new Error('Invalid identifier or function call');
        }
    }

    visitCalcAddSub = (ctx: any): string => {
        let leftType = this.visit(ctx.getChild(0));
        leftType = normalizeType(leftType);

        for (let i = 1; i < ctx.getChildCount(); i += 2) {
            const operator = ctx.getChild(i).getText();
            let rightType = this.visit(ctx.getChild(i + 1));
            rightType = normalizeType(rightType);

            const operators: string[] = ['+', '-'];
            const possibleTypesAdd: string[] = ['int', 'float', 'string'];
            const possibleTypesSub: string[] = ['int', 'float'];
            if(!operators.includes(operator)) {
                throw new Error(`Unknown operator '${operator}'`);
            }
            if((leftType !== rightType) || (operator === '+' && !possibleTypesAdd.includes(leftType)) || (operator === '-' && !possibleTypesSub.includes(leftType))) {
                throw new Error(`Operator '${operator}' requires matching types, but got '${leftType}' and '${rightType}'`);
            }
        }

        return leftType;
    };

    visitCalcMulDiv = (ctx: any): string => {
        let leftType = this.visit(ctx.getChild(0));

        for (let i = 1; i < ctx.getChildCount(); i += 2) {
            const operator = ctx.getChild(i).getText();
            let rightType = this.visit(ctx.getChild(i + 1));

            leftType = normalizeType(leftType);
            rightType = normalizeType(rightType);

            const operators: string[] = ['*', '/', '%'];
            const possibleCalcMulDivTypes: string[] = ['int', 'float'];
            if(!operators.includes(operator)) {
                throw new Error(`Unknown operator '${operator}'`);
            }
            if((leftType !== rightType) || (!possibleCalcMulDivTypes.includes(leftType))) {
                throw new Error(`Operator '${operator}' requires matching numeric operands, but got '${leftType}' and '${rightType}'`);
            }
        }

        return leftType;
    };

    visitLogicalNot = (ctx: any): string => {
        let exprType = this.visit(ctx.getChild(1));
        exprType = normalizeType(exprType);
        if (exprType !== 'bool') {
            throw new Error(`Logical '!' requires boolean operand, but got '${exprType}'`);
        }
        return 'bool';
    }

    visitConditionalAnd = (ctx: any): string => {
        let resultType = this.visit(ctx.getChild(0));
        resultType = normalizeType(resultType);
        for (let i = 1; i < ctx.getChildCount(); i += 2) {
            let nextExprType = this.visit(ctx.getChild(i + 1));
            nextExprType = normalizeType(nextExprType);
            if (resultType !== 'bool' || nextExprType !== 'bool') {
                throw new Error(`Logical '&&' requires boolean operands, but got '${resultType}' and '${nextExprType}'`);
            }

            resultType = 'bool';
        }

        return resultType;
    }

    visitConditionalOr = (ctx: any): string => {
        let resultType = this.visit(ctx.getChild(0));
        resultType = normalizeType(resultType);
        for (let i = 1; i < ctx.getChildCount(); i += 2) {
            let nextExprType = this.visit(ctx.getChild(i + 1));
            nextExprType = normalizeType(nextExprType);
            if (resultType !== 'bool' || nextExprType !== 'bool') {
                throw new Error(`Logical '||' requires boolean operands, but got '${resultType}' and '${nextExprType}'`);
            }

            resultType = 'bool';
        }

        return resultType;
    }

    visitPrimaryExpr = (ctx: any): string => {
        if (ctx.getChildCount() === 1) {
            return this.visit(ctx.getChild(0));
        } else if (ctx.getChildCount() === 3 && ctx.getChild(0).getText() === '(') {
            return this.visit(ctx.getChild(1));
        } else {
            throw new Error('Invalid primary expression');
        }
    }

    visitConstantLiteral = (ctx: any): string => {
        return this.visit(ctx.getChild(0));
    };

    visitInt = (ctx: any): string => {
        return 'int';
    };

    visitDouble = (ctx: any): string => {
        return 'float';
    };

    visitString = (ctx: any): string => {
        return 'string';
    };

    visitBoolTrue = (ctx: any): string => {
        return 'bool';
    };

    visitBoolFalse = (ctx: any): string => {
        return 'bool';
    };

    visitNull = (ctx: any): string => {
        return 'null';
    };


    visitRelationOp = (ctx: any): string => {
        const leftType = this.visit(ctx.getChild(0));
        const operator = ctx.getChild(1).getText();
        const rightType = this.visit(ctx.getChild(2));

        const normalizedLeftType: string = normalizeType(leftType);
        const normalizedRightType: string = normalizeType(rightType);

        if (operator === '==' || operator === '!=') {
            if (normalizedLeftType !== normalizedRightType) {
                throw new Error(`Mismatching types: Cannot compare '${normalizedLeftType}' and '${normalizedRightType}' with '${operator}'`);
            }
        } else if (['<', '<=', '>', '>='].includes(operator)) {
            if (normalizedLeftType !== normalizedRightType) {
                throw new Error(`Mismatching types: Cannot compare '${normalizedLeftType}' and '${normalizedRightType}' with '${operator}'`);
            }
            // Allow int, float, string, or timestamp for relational operators
            if (
                !(
                    normalizedLeftType === 'int' ||
                    normalizedLeftType === 'float' ||
                    normalizedLeftType === 'string' ||
                    normalizedLeftType === 'timestamp'
                )
            ) {
                throw new Error(`Operator '${operator}' requires numeric, string, or timestamp operands, but got '${normalizedLeftType}' and '${normalizedRightType}'`);
            }
        } else if (operator === 'in') {
        } else {
            throw new Error(`Unknown operator '${operator}'`);
        }

        return 'bool';
    };

    visitExprList = (ctx: any): string[] => {
        const types = [];
        for (let i = 0; i < ctx.getChildCount(); i += 2) { // assuming commas are every second child
            const type = this.visit(ctx.getChild(i));
            types.push(type);
        }
        return types;
    };
}

const getType = (value: any): string => {
    if (value === null) {
        return 'null';
    }

    if (Array.isArray(value)) {
        const elementTypes = [...new Set(value.map(getType))];
        if (elementTypes.length === 1) {
            return `list<${elementTypes[0]}>`;
        } else {
            return 'list<any>';
        }
    }

    if (typeof value === 'number') {
        return Number.isInteger(value) ? 'int' : 'float';
    }

    if (typeof value === 'boolean') {
        return 'bool';
    }

    if (typeof value === 'string') {
        return 'string';
    }

    if (value instanceof Date) {
        return 'timestamp';
    }

    if (typeof value === 'object') {
        return 'map';
    }

    throw new Error(`Unsupported type: ${typeof value}`);
};


const normalizeType = (input: any): string => {
    if (typeof input === 'string') {
        const trimmed = input.trim().toLowerCase();
        if (trimmed === 'date' || trimmed === 'timestamp') {
            return 'timestamp';
        }
        return trimmed;
    } else if (Array.isArray(input)) {
        const flatArray = input.flat(Infinity)
            .filter(value => value !== undefined && value !== null && value !== '');
        const uniqueTypes = [...new Set(flatArray.map(t => normalizeType(t)))];
        if (uniqueTypes.length === 1) {
            return uniqueTypes[0];
        } else if (uniqueTypes.length === 0) {
            return 'unknown';
        } else {
            return 'unknown';
        }
    } else {
        throw new Error(`Unsupported input type: ${typeof input}`);
    }
};

export default TypeChecker;
