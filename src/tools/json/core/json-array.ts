import JsonElement, { JsonElementProps } from './json-element';
import { JsonType, jsonType, JsonTypes } from './json';
import JsonElements, { JsonElementsProps } from './json-elements';
import JsonObject from './json-object';

export interface JsonArrayProps extends JsonElementsProps<Array<JsonType>> {}

export default class JsonArray extends JsonElements<Array<JsonType>> {
  constructor(props: JsonArrayProps) {
    super(props);
    if (this.value) {
      this.children = this.value.map((v) => {
        const type = jsonType(v);
        if (type === JsonTypes.array) {
          return new JsonArray({ value: v as any, type });
        }
        if (type === JsonTypes.object) {
          return new JsonObject({ value: v as any, type });
        }
        return new JsonElement({ value: v, type });
      });
    }
  }
}
