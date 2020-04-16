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

  constructor(props: JsonElementProps<T>) {
    this.key = props.key;
    this.value = props.value;
    this.type = props.type || jsonType(this.value);
  }
}
