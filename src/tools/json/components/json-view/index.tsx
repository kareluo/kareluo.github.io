import React, { Fragment, useState, useEffect } from 'react';
import JsonObject from '../../core/json-object';
import './index.scss';

type Props = {
  json?: string;
};

export default function JsonView(props: Props) {
  const [value, setValue] = useState<any>();

  useEffect(() => {
    if (props.json) {
      const v = JSON.parse(props.json);
      setValue(new JsonObject({ value: v, deepth: 0 }).render());
    }
  }, [props.json]);

  return (
    <div className="json-view">
      <Fragment>{value && value.render()}</Fragment>
    </div>
  );
}
