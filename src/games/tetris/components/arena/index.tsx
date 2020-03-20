import React from 'react';
import Tetris from '../../core/tetris';
import './index.scss';

type Props = {};
export default class TetrisArena extends React.Component<Props> {
  private tetris?: Tetris;
  private canvas: React.RefObject<HTMLCanvasElement>;

  constructor(props: Props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    const { current } = this.canvas;
    if (current) {
      const context = current.getContext('2d');
      if (context) {
        this.tetris = new Tetris({
          width: current.width,
          height: current.height,
          context,
        });
        this.tetris.start();
      }
    }
  }

  componentWillUnmount() {}

  render() {
    return <canvas ref={this.canvas} className="arena" />;
  }
}
