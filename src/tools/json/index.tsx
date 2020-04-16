import React, { useState } from 'react';
import JsonView from './components/json-view';
import './index.scss';

export default function JsonToolPage() {
  const [json, setJson] = useState('');

  const onInput = (e: any) => {
    console.log(e.target.value);
    setJson(e.target.value);
  };

  return (
    <div className="json">
      <div className="json-source">
        <textarea
          className="json-source__text"
          placeholder="请输入 JSON 字符串"
          onChange={onInput}
        />
      </div>
      <div className="json-render">
        <JsonView json={json} />
      </div>
    </div>
  );
}
