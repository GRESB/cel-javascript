export default class Context {
    private variables: { [key: string]: any };
    private types: { [key: string]: any }; 

    constructor(variables: { [key: string]: any } = {}, types: { [key: string]: any } = {}) {
        this.variables = variables;
        this.types = types;
    }

    getVariable(name: string) {
        const parts = name.split('.');
        let current = this.variables;
        for (const part of parts) {
            if (current && typeof current === 'object' && part in current) {
                current = current[part];
            } else {
                return undefined;
            }
        }
        return current;
    }

    getType(name: string) {
        const parts = name.split('.');
        let current = this.types;
        for (const part of parts) {
            if (current && typeof current === 'object' && part in current) {
                current = current[part];
            } else {
                return undefined;
            }
        }
        return current;
    }

    setVariable(name: string, value: any) {
        this.variables[name] = value;
    }

    setType(name: string, type: any) { 
        this.types[name] = type;
    }
}
