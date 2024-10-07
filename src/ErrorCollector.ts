export class ErrorCollector {
  public errors: Array<{
    line: number;
    column: number;
    message: string;
    offendingSymbol: any;
  }> = [];

  syntaxError(
    recognizer: any,
    offendingSymbol: any,
    line: number,
    column: number,
    msg: string,
    e: any
  ): void {
    this.errors.push({
      line,
      column,
      message: msg,
      offendingSymbol,
    });
  }
}
