export type CelValue = string | number | boolean | CelObject | CelList | null | Buffer;

export interface CelObject {
  [key: string]: CelValue;
}

export type CelList = CelValue[];
