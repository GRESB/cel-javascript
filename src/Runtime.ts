import antlr4 from 'antlr4';
import CELLexer from './generated/CELLexer.js';
import CELParser from './generated/CELParser.js';
import Evaluator from './Evaluator';
import Context  from './Context'; 
import { ErrorCollector } from './ErrorCollector';
import TypeChecker from './TypeChecker';

export class Runtime {
    private ast: any = null;
    private celExpression: string;
    private errors: Array<{
        line: number;
        column: number;
        message: string;
        offendingSymbol: any;
    }> = [];

    constructor(celExpression: string) {
        // const chars = new antlr4.InputStream(celExpression);
        // const lexer = new CELLexer(chars);
        this.celExpression = celExpression;
        const chars = antlr4.CharStreams.fromString(celExpression);
        const lexer = new CELLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new CELParser(tokens);
        parser.buildParseTrees = true;

        parser.removeErrorListeners();
        const errorCollector = new ErrorCollector();
        parser.addErrorListener(errorCollector);

        try {
            this.ast = parser.start(); 
        } catch (error) {
            this.ast = null;
        }

        if (errorCollector.errors.length > 0) {
            this.errors = errorCollector.errors;
            this.ast = null;
        }
    }

    static canParse(celExpression: string): boolean {
        const runtime: Runtime = new Runtime(celExpression);
        return runtime.ast !== null;
    }

    static parseString(celExpression: string): { success: boolean; error?: string } {
        const runtime: Runtime = new Runtime(celExpression);
        if (runtime.ast !== null) {
            return { success: true };
        } else {
            return {
                success: false,
                error: runtime.errors[0]?.message || 'Parsing failed with errors',
            };
        }
    }
    
    static typeCheck(expression: string, context?: any, types?: any): { success: boolean; error?: string } {
        const runtime: Runtime = new Runtime(expression);
        if (runtime.ast !== null) {
            try {
                let contextObj: Context;
                if (context instanceof Context) {
                    contextObj = context;
                } else {
                    contextObj = new Context(context || {}, types || {});
                }
                const typeChecker: TypeChecker = new TypeChecker(contextObj);
                typeChecker.visit(runtime.ast);
                return { success: true };
            } catch (error) {
                return { success: false, error: (error as Error).message };
            }
        } else {
            return { success: false, error: 'Parsing failed with errors' };
        }
    }    

    evaluate(context: any, types?: any) {
        if (!this.ast) {
            throw new Error('AST is not available. Parsing might have failed.');
        }
        const contextObj: Context = new Context(context, types);
        const typeCheckResult = Runtime.typeCheck(this.celExpression, contextObj);
        if(typeCheckResult.success) {
            const evaluator: Evaluator = new Evaluator(contextObj);
            return evaluator.visit(this.ast);
        } else {
            throw new Error(typeCheckResult.error);
        }
    }
}