import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { CELLexer } from './generated/CELLexer';
import { CELParser } from './generated/CELParser';
import { CELInterpreter } from './CELInterpreter';
import { ParseTree } from 'antlr4ts/tree/ParseTree';

export class Environment {

  compile(source: string): ParseTree {
    const input = CharStreams.fromString(source);
    const lexer = new CELLexer(input);
    const tokens = new CommonTokenStream(lexer);
    const parser = new CELParser(tokens);
    return parser.start();
  }

  program(ast: ParseTree): Program {
    return new Program(ast);
  }
}

export class Program {
  private ast: ParseTree;

  constructor(ast: ParseTree) {
    this.ast = ast;
  }

  evaluate(activation: Record<string, any>): any {
    const interpreter = new CELInterpreter(activation);
    return interpreter.visit(this.ast);
  }
}

export function jsonToCel(jsonObj: any): any {
  return jsonObj;
}
