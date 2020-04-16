import React, { useEffect, useState } from 'react';
import './index.scss';
import JsonElement from '../../core/json-element';

interface Node<T = any> {
  key?: string;
  value: T;
  last: boolean;
}

type Type = 'boolean' | 'number' | 'string' | 'array' | 'object';

type Props = {
  node: Node;
};

export default function JsonNode(props: Props) {
  const { node } = props;
  const [type, setType] = useState<Type>();
  const [nodes, setNodes] = useState<Node[]>([]);
  useEffect(() => {
    if (node) {
      if (Array.isArray(node.value)) {
        setType('array');
        const lastIndex = node.value.length - 1;
        setNodes(
          node.value.map((v, index) => ({
            value: v,
            last: index >= lastIndex,
          })),
        );
      } else if (typeof node.value === 'object') {
        setType('object');
        const keys = Object.keys(node.value);
        const lastIndex = keys.length - 1;
        setNodes(
          Object.keys(node.value).map((key, index) => ({
            key,
            value: node.value[key],
            last: index >= lastIndex,
          })),
        );
      } else if (typeof node.value === 'string') {
        setType('string');
      } else if (typeof node.value === 'number') {
        setType('number');
      } else if (typeof node.value === 'boolean') {
        setType('boolean');
      }
    }
  }, [props.node]);
  return (
    <div className="json-node">
      {type === 'boolean' || type === 'number' ? (
        <span>
          {node.key ? node.key + ': ' : ''}
          {node.value}
          {!node.last && ','}
        </span>
      ) : type === 'string' ? (
        <span>
          {node.key ? node.key + ': "' : '"'}
          {node.value}
          {!node.last ? '",' : '"'}
        </span>
      ) : type === 'array' ? (
        <div>
          <span>{node.key ? node.key + ': [' : '['}</span>
          <div className="json-node-subs">
            {nodes.map((n, index) => (
              <JsonNode key={node.key || index} node={n} />
            ))}
          </div>
          <span>
            {']'}
            {!node.last && ','}
          </span>
        </div>
      ) : (
        <div>
          <span>{node.key ? node.key + ': {' : '{'}</span>
          <div className="json-node-subs">
            {nodes.map((n, index) => (
              <JsonNode key={node.key || index} node={n} />
            ))}
          </div>
          <span>
            {'}'}
            {!node.last && ','}
          </span>
        </div>
      )}
    </div>
  );
}
