import JsonElement, { JsonElementProps } from './json-element';
import { JsonType } from './json';

export interface JsonElementsProps<T extends JsonType = JsonType>
  extends JsonElementProps<T> {}

export default class JsonElements<
  T extends JsonType = JsonType
> extends JsonElement<T> {
  public children: Array<JsonElement<JsonType>> = [];

  get size(): number {
    return this.children.length;
  }

  get isEmpty(): boolean {
    return this.size === 0;
  }
}
