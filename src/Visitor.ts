// Placeholder for generated visitor interface
export interface Visitor<Result> {
  visit(node: any): Result;
  visitChildren(ctx: any): Result;
  visitTerminal(node: any): Result;
  visitErrorNode(node: any): Result;
}
