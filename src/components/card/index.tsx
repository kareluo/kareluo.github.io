import React from 'react';
import './index.scss';

type Props = {
  title?: string;
  target?: string;
  description?: string;
};

export default function Card(props: Props) {
  return (
    <a className="card" href={props.target}>
      <div>
        <div className="card-header">
          {props.title && (
            <span className="card-header__title">{props.title}</span>
          )}
        </div>
        <div className="card-content">
          <span className="card-content__description">{props.description}</span>
        </div>
        <div className="card-footer"></div>
      </div>
    </a>
  );
}
