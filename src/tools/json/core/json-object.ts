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
          return new JsonArray({ key, value, type, tier: this.tier + 1 });
        }
        if (type === JsonTypes.object) {
          return new JsonObject({ key, value, type, tier: this.tier + 1 });
        }
        console.log('create', key, value);
        return new JsonElement({ key, value, type, tier: this.tier + 1 });
      });
    }
  }

  public render(): React.DOMElement<any, any> {
    const children: any[] = [];
    console.log('render', this.key);
    if (this.key) {
      children.push(
        ' '.repeat(2),
        this.key,
        ': ',
        '{',
        React.createElement('br'),
      );
    } else {
      children.push(' '.repeat(2), '{', React.createElement('br'));
    }
    if (!this.isEmpty) {
      this.children.forEach((child, index) => {
        if (index > 0) {
          children.push(',', React.createElement('br'));
        }
        children.push(' '.repeat(2), child.render());
      });
    }
    children.push(React.createElement('br'), ' '.repeat(2), '}');
    console.log(children);
    return React.createElement('pre', {}, children);
  }
}
