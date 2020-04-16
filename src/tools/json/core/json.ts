export type JsonType =
  | boolean
  | string
  | number
  | object
  | Array<JsonType>
  | null;

export enum JsonTypes {
  null = 'null',
  boolean = 'boolean',
  number = 'number',
  string = 'string',
  array = 'array',
  object = 'object',
}

export const jsonType = (value: JsonType): JsonTypes => {
  const type = typeof value;
  if (type === JsonTypes.string) {
    return JsonTypes.string;
  }
  if (type === JsonTypes.number) {
    return JsonTypes.number;
  }
  if (type === JsonTypes.boolean) {
    return JsonTypes.boolean;
  }
  if (type === JsonTypes.object) {
    if (value === null) {
      return JsonTypes.null;
    }
    return JsonTypes.object;
  }
  if (Array.isArray(value)) {
    return JsonTypes.array;
  }
  throw new Error(`未知类型错误：${value}`);
};
