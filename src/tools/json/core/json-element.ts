import { JsonType, JsonTypes, jsonType } from './json';

export interface JsonElementProps<T extends JsonType = JsonType> {
  key?: string;
  value: T;
  type?: JsonTypes;
}

export default class JsonElement<T extends JsonType = JsonType> {
  public key?: string;

  public value?: T;

  public type: JsonTypes;

  public children: Array<JsonElement<JsonType>> = [];

  constructor(props: JsonElementProps<T>) {
    this.key = props.key;
    this.value = props.value;
    this.type = props.type || jsonType(this.value);
  }

  get size(): number {
    return this.children.length;
  }

  get isEmpty(): boolean {
    return this.size === 0;
  }

  get isArray(): boolean {
    return this.type === JsonTypes.array;
  }

  get isObject(): boolean {
    return this.type === JsonTypes.object;
  }
}
