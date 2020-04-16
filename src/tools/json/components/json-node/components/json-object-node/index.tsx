import React, { useEffect, useState } from 'react';
import './index.scss';
import JsonElement from '../../../../core/json-element';

type Props = {
  element: JsonElement;
};

export default function JsonObjectNode(props: Props) {
  const { element } = props;
  return (
    <div>
      {element.key}

      {element.value}
    </div>
  );
}
