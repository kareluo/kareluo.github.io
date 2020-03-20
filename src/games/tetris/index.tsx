import React from 'react';
import TetrisArena from './components/arena';
import './index.scss';

export default function Tetris() {
  return (
    <div className="tetris">
      <TetrisArena />
    </div>
  );
}
