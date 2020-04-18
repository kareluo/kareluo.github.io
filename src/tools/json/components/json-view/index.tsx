import React, { useState, useEffect, Fragment } from 'react';
import './index.scss';
import JsonNode from '../json-node';
import JsonElements from '../../core/json-elements';
import JsonElement from '../../core/json-element';
import JsonObject from '../../core/json-object';

type Props = {
  json?: string;
};

export default function JsonView(props: Props) {
  // const json = new JsonObject({
  //   value: { aaa: '', bb: 'asda', cc: ['asda', { asd: 'asda' }] },
  //   tier: 0,
  // });
  const json = new JsonObject({
    value: {
      aaa: '',
      bb: 'asda',
      cc: [
        'asdsa',
        {
          asd: 'asda',
          aa: ['asd', 'asda', { asd: 'asdasd' }],
        },
      ],
      x: null,
      asd: 123,
      aa: true,
    },
    deepth: 0,
  });
  return (
    <div className="json-view">
      <Fragment>
        <span>{json.render()}</span>
      </Fragment>
    </div>
  );
}
