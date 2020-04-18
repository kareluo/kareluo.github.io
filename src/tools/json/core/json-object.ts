import React from 'react';
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
          return new JsonArray({ key, value, type, deepth: this.deepth + 1 });
        }
        if (type === JsonTypes.object) {
          return new JsonObject({ key, value, type, deepth: this.deepth + 1 });
        }
        console.log('create', key, value);
        return new JsonElement({ key, value, type, deepth: this.deepth + 1 });
      });
    }
  }

  public render(): React.DOMElement<any, any>[] {
    const children: any[] = this.renderKey();
    children.push('{', React.createElement('br'));
    if (!this.isEmpty) {
      this.children.forEach((child, index) => {
        if (index > 0) {
          children.push(',', React.createElement('br'));
        }
        children.push(...child.render());
      });
    }
    children.push(React.createElement('br'), ` `.repeat(this.deepth * 2), '}');
    return children;
  }
}
