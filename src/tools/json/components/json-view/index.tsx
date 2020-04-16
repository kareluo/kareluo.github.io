import React, { useState, useEffect } from 'react';
import './index.scss';
import JsonNode from '../json-node';
import JsonElements from '../../core/json-elements';

type Props = {
  json?: string;
};

export default function JsonView(props: Props) {
  const [value, setValue] = useState<JsonElements>();
  useEffect(() => {
    if (props.json) {
      const v = JSON.parse(props.json);
      setValue(new JsonElements({ value: v }));
    } else {
      setValue(new JsonElements({ value: null }));
    }
  }, [props]);
  return (
    <div>
      {value && (
        <JsonNode
          node={{
            value: { aa: 'xx', bb: ['a', 'x', { c: 'hello' }] },
            last: true,
          }}
        />
      )}
    </div>
  );
}
