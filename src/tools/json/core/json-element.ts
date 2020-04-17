import React from 'react';
import { JsonType, JsonTypes, jsonType } from './json';
import Element from './element';

export interface JsonElementProps<T extends JsonType = JsonType> {
  key?: string;
  value: T;
  type?: JsonTypes;
  tier: number;
}

export default class JsonElement<T extends JsonType = JsonType> {
  public key?: string;

  public value?: T;

  public tier: number;

  public type: JsonTypes;

  public children: Array<JsonElement<JsonType>> = [];

  constructor(props: JsonElementProps<T>) {
    this.key = props.key;
    this.value = props.value;
    this.type = props.type || jsonType(this.value);
    this.tier = props.tier;
    console.log('props', props);
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

  public render(): React.DOMElement<any, any> {
    // switch (this.type) {
    //   case JsonTypes.string:
    //     return React.createElement('span', { style: {} }, this.value);
    //   case JsonTypes.number:
    //     return React.createElement('span', { style: {} }, this.value);
    //   case JsonTypes.boolean:
    //     return React.createElement('span', { style: {} }, this.value);
    // }

    const children: any[] = [' '.repeat(2)];
    if (this.key) {
      children.push(this.key, ': ');
    }
    children.push(this.value);
    return React.createElement('pre', {}, children);
  }
}
