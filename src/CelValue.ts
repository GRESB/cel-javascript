export type CelValue = string | number | boolean | CelObject | CelList | null ;

export interface CelObject {
  [key: string]: CelValue;
}

export type CelList = CelValue[];
