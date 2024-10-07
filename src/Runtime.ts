import antlr4 from 'antlr4';
import CELLexer from './generated/CELLexer.js';
import CELParser from './generated/CELParser.js';
import Evaluator from './Evaluator';
import Context  from './Context'; 
import { ErrorCollector } from './ErrorCollector';
import TypeChecker from './TypeChecker';

export class Runtime {
    private ast: any = null;
    private errors: Array<{
        line: number;
        column: number;
        message: string;
        offendingSymbol: any;
    }> = [];

    constructor(celExpression: string) {
        const chars = new antlr4.InputStream(celExpression);
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
        const runtime = new Runtime(celExpression);
        return runtime.ast !== null;
    }

    static parseString(celExpression: string): { success: boolean; error?: string } {
        const runtime = new Runtime(celExpression);
        if (runtime.ast !== null) {
            return { success: true };
        } else {
            return {
                success: false,
                error: runtime.errors[0]?.message || 'Parsing failed with errors',
            };
        }
    }
    
    static typeCheck(expression: string, typesContext: { [key: string]: string }): { success: boolean; error?: string } {
        const runtime = new Runtime(expression);
        if (runtime.ast !== null) {
            try {
                const context = new Context({}, typesContext);
                const typeChecker = new TypeChecker(context);
                typeChecker.visit(runtime.ast);
                return {success: true};
            } catch (error) {
                return {success: false, error: error.message};
            }
        } else {
            return {success: false, error: 'Parsing failed with errors'};
        }
    }

    evaluate(context: any) {
        if (!this.ast) {
            throw new Error('AST is not available. Parsing might have failed.');
        }
        const contextObj = new Context(context);
        const evaluator = new Evaluator(contextObj);
        return evaluator.visit(this.ast);
    }
    
}
