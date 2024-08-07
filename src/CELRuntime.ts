import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { CELLexer } from './generated/CELLexer';
import { CELParser } from './generated/CELParser';
import { CELInterpreter } from './CELInterpreter';
import { CELVisitor } from './CELVisitor';
import { ParseTree } from 'antlr4ts/tree/ParseTree';

export class CELRuntime {
  private ast: ParseTree;

  constructor(celExpression: string) {
    const inputStream = new ANTLRInputStream(celExpression);
    const lexer = new CELLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new CELParser(tokenStream);

    // Assuming 'start' is the entry point of the grammar
    this.ast = parser.start();
  }

  evaluate(activation: any) {
    const interpreter = new CELInterpreter();
    return interpreter.visit(this.ast);
  }
}
