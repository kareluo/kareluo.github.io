import React, { useState, useEffect } from 'react';
import './index.scss';
import JsonNode from '../json-node';
import JsonElements from '../../core/json-elements';
import JsonElement from '../../core/json-element';
import JsonObject from '../../core/json-object';

type Props = {
  json?: string;
};

export default function JsonView(props: Props) {
  const [value, setValue] = useState<JsonElement>(
    new JsonObject({
      value: { aaa: '', bb: 'asda', cc: ['asda', { asd: 'asda' }] },
    }),
  );
  console.log(value);
  // useEffect(() => {
  //   if (props.json) {
  //     const v = JSON.parse(props.json);
  //     setValue(new JsonElements({ value: v }));
  //   } else {
  //     setValue(new JsonElements({ value: null }));
  //   }
  // }, [props]);

  console.log('element', value);
  return <div>{value && <JsonNode element={value} />}</div>;
}
