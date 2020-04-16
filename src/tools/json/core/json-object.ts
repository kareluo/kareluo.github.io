import JsonElement, { JsonElementProps } from './json-element';
import { jsonType, JsonTypes, JsonType } from './json';
import JsonElements, { JsonElementsProps } from './json-elements';
import JsonArray from './json-array';

export interface JsonObjectProps<T extends object>
  extends JsonElementProps<T> {}

export default class JsonObject<T extends object> extends JsonElement<T> {
  public children: Array<JsonElement<JsonType>> = [];

  constructor(props: JsonObjectProps<T>) {
    super(props);
    if (this.value) {
      const entries = Object.entries(this.value);
      this.children = entries.map(([key, value]) => {
        const type = jsonType(value);
        if (type === JsonTypes.array) {
          return new JsonArray({ key, value, type });
        }
        if (type === JsonTypes.object) {
          return new JsonObject({ key, value, type });
        }
        return new JsonElement({ key, value, type });
      });
    }
  }
}
