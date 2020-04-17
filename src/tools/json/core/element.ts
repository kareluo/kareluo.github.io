import React from 'react';

export interface ElementAttributes {
  [key: string]: string;
}

export default class Element<K extends keyof HTMLElementTagNameMap = any> {
  public tag: string;
  public attrs: ElementAttributes = {};
  public children: Element[] = [];

  constructor(tag: K, attrs?: ElementAttributes, children?: Element[]) {
    this.tag = tag;
    if (attrs) {
      this.attrs = attrs;
    }
    if (children) {
      this.children = children;
    }
  }

  public render(): React.DOMElement<any, any> {
    if (this.children && this.children.length) {
      const elements = this.children.map((child) => child.render());
      return React.createElement(this.tag, {}, elements);
    }
    return React.createElement(this.tag, {}, 'aaax');
  }
}
