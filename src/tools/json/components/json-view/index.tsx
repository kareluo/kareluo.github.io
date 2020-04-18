import React, { Fragment } from 'react';
import JsonObject from '../../core/json-object';
import './index.scss';

type Props = {
  json?: string;
};

export default function JsonView(props: Props) {
  // const json = new JsonObject({
  //   value: { aaa: '', bb: 'asda', cc: ['asda', { asd: 'asda' }] },
  //   tier: 0,
  // });
  const json = new JsonObject({
    key: 'aaax',
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
        <span>{json.render().render()}</span>
      </Fragment>
    </div>
  );
}
