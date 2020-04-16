import React, { useEffect, useState } from 'react';
import './index.scss';
import JsonElement from '../../core/json-element';
import { JsonTypes } from '../../core/json';

type Props = {
  element: JsonElement;
};

export default function JsonNode(props: Props) {
  const { element } = props;
  return (
    <div>
      {element.key ? element.key : ''}
      {!element.isEmpty ? (
        <div>
          {element.children.map((child, index) => {
            return <JsonNode key={index} element={child} />;
          })}
        </div>
      ) : (
        <div>+{element.value}</div>
      )}
    </div>
  );
}
