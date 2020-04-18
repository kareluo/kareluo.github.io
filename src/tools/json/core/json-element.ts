import React from 'react';
import { JsonType, JsonTypes, jsonType } from './json';

export interface JsonElementProps<T extends JsonType = JsonType> {
  key?: string;
  value: T;
  type?: JsonTypes;
  deepth: number;
}

export default class JsonElement<T extends JsonType = JsonType> {
  public key?: string;

  public value?: T;

  public deepth: number;

  public type: JsonTypes;

  public children: Array<JsonElement<JsonType>> = [];

  constructor(props: JsonElementProps<T>) {
    this.key = props.key;
    this.value = props.value;
    this.type = props.type || jsonType(this.value);
    this.deepth = props.deepth;
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

  protected renderKey() {
    const children: any[] = [' '.repeat(this.deepth * 2)];
    if (this.key) {
      children.push(
        React.createElement(
          'span',
          { style: { color: '#92278f' } },
          '"',
          this.key,
          '"',
        ),
        ': ',
      );
    }
    return children;
  }

  public render(): React.DOMElement<any, any>[] {
    const children: any[] = this.renderKey();
    switch (this.type) {
      case JsonTypes.string:
        children.push(
          React.createElement(
            'span',
            {
              style: { color: '#3ab54a' },
            },
            '"',
            this.value,
            '"',
          ),
        );
        break;
      case JsonTypes.number:
        children.push(
          React.createElement(
            'span',
            {
              style: { color: '#25aae2' },
            },
            this.value,
          ),
        );
        break;
      case JsonTypes.boolean:
        children.push(
          React.createElement(
            'span',
            {
              style: { color: '#f98280' },
            },
            `${this.value}`,
          ),
        );
        break;
      case JsonTypes.null:
        children.push(
          React.createElement(
            'span',
            {
              style: { color: '#f1592a' },
            },
            `${this.value}`,
          ),
        );
        break;
    }
    return children;
  }
}
