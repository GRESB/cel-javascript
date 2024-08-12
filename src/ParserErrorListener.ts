class ParserErrorListener implements ErrorListener<any> {
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

export { ParserErrorListener };
