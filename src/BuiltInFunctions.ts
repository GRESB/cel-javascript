// BuiltInFunctions.ts

export const builtInFunctions = {
  // Arithmetic Functions
  min: (...args: number[]) => Math.min(...args),
  max: (...args: number[]) => Math.max(...args),
  abs: (value: number) => Math.abs(value),
  ceil: (value: number) => Math.ceil(value),
  floor: (value: number) => Math.floor(value),
  round: (value: number) => Math.round(value),

  // String Functions
  contains: (str: string, substr: string) => str.includes(substr),
  endsWith: (str: string, substr: string) => str.endsWith(substr),
  indexOf: (str: string, substr: string) => str.indexOf(substr),
  length: (str: string) => str.length,
  lower: (str: string) => str.toLowerCase(),
  replace: (str: string, substr: string, newSubstr: string) => str.replace(substr, newSubstr),
  split: (str: string, separator: string) => str.split(separator),
  startsWith: (str: string, substr: string) => str.startsWith(substr),
  upper: (str: string) => str.toUpperCase(),

  // List Functions
  size: (value: any) => {
    if (typeof value === 'string' || Array.isArray(value)) {
      return value.length;
    } else if (value && typeof value === 'object') {
      return Object.keys(value).length;
    } else {
      throw new Error('size() function requires a string, array, or object');
    }
  },

  // Type Conversion Functions
  int: (value: any) => parseInt(value, 10),
  uint: (value: any) => Math.max(0, parseInt(value, 10)),
  double: (value: any) => parseFloat(value),
  string: (value: any) => String(value),
  bool: (value: any) => Boolean(value),

  // Null Handling Functions
  exists: (value: any) => value !== null && value !== undefined,
  existsOne: (list: any[]) => list.filter(item => item !== null && item !== undefined).length === 1,

  // Date/Time Functions
  matches: (value: string, regex: string) => {
    const re = new RegExp(regex);
    return re.test(value);
  },
  timestamp: (value: string) => {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
      throw new Error(`Invalid timestamp: ${value}`);
    }
    return date;
  },
  type: (value: any) => {
    if (value === null) return 'null';
    switch (typeof value) {
      case 'boolean':
        return 'bool';
      case 'number':
        return Number.isInteger(value) ? 'int' : 'float';
      case 'string':
        return 'string';
      case 'object':
        if (Array.isArray(value)) return 'list';
        else return 'object';
      default:
        return typeof value;
    }
  },
  duration: (seconds: number) => `${seconds}s`,
  time: (year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number) => {
    return new Date(Date.UTC(year, month - 1, day, hour, minute, second, millisecond)).toISOString();
  },
  date: (year: number, month: number, day: number) => {
    return new Date(Date.UTC(year, month - 1, day)).toISOString().split('T')[0];
  },
  getFullYear: (date: Date) => date.getUTCFullYear(),
  getMonth: (date: Date) => date.getUTCMonth(),
  getDate: (date: Date) => date.getUTCDate(),
  getHours: (date: Date) => date.getUTCHours(),
  getMinutes: (date: Date) => date.getUTCMinutes(),
  getSeconds: (date: Date) => date.getUTCSeconds(),
};
