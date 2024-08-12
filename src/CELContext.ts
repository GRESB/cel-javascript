import {CelValue} from "./CelValue";

export class CELContext {
  variables: { [key: string]: any };

  constructor(variables: { [key: string]: any }) {
    this.variables = variables;
  }

  getVariable(name: string | undefined): CelValue {
    // @ts-ignore
    return this.variables[name];
  }
}