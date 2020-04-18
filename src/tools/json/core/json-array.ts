import React from 'react';
import JsonElement, { JsonElementProps } from './json-element';
import { JsonType, jsonType, JsonTypes } from './json';
import JsonElements, { JsonElementsProps } from './json-elements';
import JsonObject from './json-object';

export interface JsonArrayProps extends JsonElementProps<Array<JsonType>> {}

export default class JsonArray extends JsonElement<Array<JsonType>> {
  constructor(props: JsonArrayProps) {
    super(props);
    if (this.value) {
      this.children = this.value.map((v) => {
        const type = jsonType(v);
        if (type === JsonTypes.array) {
          return new JsonArray({
            value: v as any,
            type,
            deepth: this.deepth + 1,
          });
        }
        if (type === JsonTypes.object) {
          return new JsonObject({
            value: v as any,
            type,
            deepth: this.deepth + 1,
          });
        }
        return new JsonElement({ value: v, type, deepth: this.deepth + 1 });
      });
    }
  }

  public render(): React.DOMElement<any, any>[] {
    const children: any[] = this.renderKey();
    children.push('[', React.createElement('br'));
    if (!this.isEmpty) {
      this.children.forEach((child, index) => {
        if (index > 0) {
          children.push(',', React.createElement('br'));
        }
        children.push(...child.render());
      });
    }
    children.push(React.createElement('br'), ` `.repeat(this.deepth * 2), ']');
    return children;
  }
}
