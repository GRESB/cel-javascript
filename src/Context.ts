export default class Context {
    private variables: { [key: string]: any };
    private types: { [key: string]: string };

    constructor(variables: { [key: string]: any } = {}, types: { [key: string]: string } = {}) {
        this.variables = variables;
        this.types = types;
    }

    getVariable(name: string) {
        return this.variables[name];
    }

    getType(name: string) {
        return this.types[name];
    }

    setVariable(name: string, value: any) {
        this.variables[name] = value;
    }

    setType(name: string, type: string) {
        this.types[name] = type;
    }
}
