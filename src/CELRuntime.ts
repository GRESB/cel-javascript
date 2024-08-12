import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { CELLexer } from './generated/CELLexer';
import { CELParser } from './generated/CELParser';
import { CELInterpreter } from './CELInterpreter';
import { CELVisitor } from './CELVisitor';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { ConsoleErrorListener } from 'antlr4ts/ConsoleErrorListener';
import { ErrorListener, RecognitionException, Recognizer } from 'antlr4ts';
import { CELContext } from './CELContext';

class CELRuntime {
  private ast: ParseTree | null = null;

  constructor(celExpression: string) {
    const inputStream = new ANTLRInputStream(celExpression);
    const lexer = new CELLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CELParser(tokenStream);

    parser.removeErrorListeners();
    parser.addErrorListener(new CELParserErrorListener());

    try {
      this.ast = parser.start();
    } catch (error) {
      console.error("Parsing failed:", error);
      this.ast = null;
    }
  }

  static canParse(celExpression: string): boolean {
    try {
      const runtime = new CELRuntime(celExpression);
      return runtime.ast !== null;
    } catch (error) {
      return false;
    }
  }

  static parseString(celExpression: string): { success: boolean; error?: string } {
    try {
      const runtime = new CELRuntime(celExpression);
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
    context = new CELContext(context);
    const interpreter = new CELInterpreter(context);
    return interpreter.visit(this.ast);
  }
}

// Custom error listener to capture errors during parsing
class CELParserErrorListener implements ErrorListener<any> {
  syntaxError<T extends any>(
    recognizer: Recognizer<T, any>,
    offendingSymbol: T,
    line: number,
    charPositionInLine: number,
    msg: string,
    e: RecognitionException | undefined
  ): void {
    throw new Error(`line ${line}:${charPositionInLine} ${msg}`);
  }
}

export { CELRuntime };
