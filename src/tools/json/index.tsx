import React, { useState } from 'react';
import JsonView from './components/json-view';
import './index.scss';

export default function JsonToolPage() {
  const [json, setJson] = useState('');

  const onInput = (e: any) => {
    setJson(e.target.value);
  };

  return (
    <div className="page">
      <header className="page-header">
        <span>Felix</span>
      </header>
      <div className="page-json">
        <div className="page-json-source">
          <textarea
            className="page-json-source__text"
            placeholder="请输入 JSON 字符串"
            onChange={onInput}
          />
        </div>
        <div className="page-json-render">
          <JsonView json={json} />
        </div>
      </div>
      {/* <footer className="page-footer">aaa</footer> */}
    </div>
  );
}
