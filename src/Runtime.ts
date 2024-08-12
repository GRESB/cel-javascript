import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { CELLexer } from './generated/CELLexer';
import { CELParser } from './generated/CELParser';
import { Evaluator } from './Evaluator';
import { Visitor } from './Visitor';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { ConsoleErrorListener } from 'antlr4ts/ConsoleErrorListener';
import { ErrorListener, RecognitionException, Recognizer } from 'antlr4ts';
import { ParserErrorListener } from './ParserErrorListener';
import { Context } from './Context';

class Runtime {
  private ast: ParseTree | null = null;

  constructor(celExpression: string) {
    const inputStream = new ANTLRInputStream(celExpression);
    const lexer = new CELLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CELParser(tokenStream);

    parser.removeErrorListeners();
    parser.addErrorListener(new ParserErrorListener());

    try {
      this.ast = parser.start();
    } catch (error) {
      console.error("Parsing failed:", error);
      this.ast = null;
    }
  }

  static canParse(celExpression: string): boolean {
    try {
      const runtime = new Runtime(celExpression);
      return runtime.ast !== null;
    } catch (error) {
      return false;
    }
  }

  static parseString(celExpression: string): { success: boolean; error?: string } {
    try {
      const runtime = new Runtime(celExpression);
      if (runtime.ast !== null) {
        return { success: true };
      } else {
        return { success: false, error: 'Parsing failed without an exception' };
      }
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }

  evaluate(context: String) {
    if (!this.ast) {
      throw new Error("AST is not available. Parsing might have failed.");
    }
    context = new Context(context);
    const evaluator = new Evaluator(context);
    return evaluator.visit(this.ast);
  }
}

export { Runtime };
