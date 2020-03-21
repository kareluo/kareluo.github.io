import React from 'react';
import Tetris from '../../core/tetris';
import './index.scss';
import Cell from '../../core/cell';

type Props = {
  size?: number;
  width?: number;
  height?: number;
};

type State = {};
export default class TetrisArena extends React.Component<Props, State> {
  private tetris?: Tetris;
  private canvas: React.RefObject<HTMLCanvasElement>;

  private static WIDTH = 10;
  private static HEIGHT = 20;

  constructor(props: Props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    const { current } = this.canvas;
    if (current) {
      const context = current.getContext('2d');
      if (context) {
        const { size, width, height }: Props = this.props;
        this.tetris = new Tetris({
          size: size,
          width: width,
          height: height,
          context,
        });
        this.tetris.start();
      }
    }
  }

  render() {
    const {
      size = Cell.SIZE,
      width = TetrisArena.WIDTH,
      height = TetrisArena.HEIGHT,
    }: Props = this.props;
    return (
      <div>
        <canvas
          ref={this.canvas}
          className="arena"
          width={width * size}
          height={height * size}
          style={{ width: width * size, height: height * size }}
        />
        <button onClick={() => this.tetris?.start()}>开始</button>
        <button onClick={() => this.tetris?.pause()}>暂停</button>
        <button onClick={() => this.tetris?.pause()}>变形</button>
      </div>
    );
  }
}
