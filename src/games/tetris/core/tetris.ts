import Cell from './cell';
import Shape from './shape';
import { shape } from './shapes';

export interface TetrisProps {
  size?: number;
  width?: number;
  height?: number;
  context: CanvasRenderingContext2D;
}

export default class Tetris {
  private size: number;
  private width: number;
  private height: number;
  private context: CanvasRenderingContext2D;
  private animation: number = 0;
  private status: 'none' | 'gaming' | 'game-pause' | 'game-over' = 'none';

  private cells: Cell[][] = [];

  private cell: Cell;

  private shape?: Shape;

  private shapes: Shape[] = [];

  private heights: number[] = [];

  private time: number = 0;

  public static WIDTH: number = 10;
  public static HEIGHT: number = 20;

  constructor(props: TetrisProps) {
    const {
      context,
      size = Cell.SIZE,
      width = Tetris.WIDTH,
      height = Tetris.HEIGHT,
    } = props;
    this.size = size;
    this.width = width;
    this.height = height;
    this.context = context;
    for (let i = 0; i < height; i++) {
      const cells = [];
      for (let j = 0; j < width; j++) {
        cells.push(new Cell({ x: j, y: i, size }));
      }
      this.cells.push(cells);
    }
    this.shape = shape(size);
    this.cell = new Cell({ x: 5, y: 4, size });
  }

  public start() {
    if (this.status === 'none' || this.status === 'game-pause') {
      this.status = 'gaming';
      requestAnimationFrame(this.loop);
    }
  }

  public pause() {
    if (this.status === 'gaming' && this.animation) {
      cancelAnimationFrame(this.animation);
      this.status = 'game-pause';
    }
  }

  public drop() {
    this.shape = this.shapes.shift();

    // TODO
  }

  public s() {}

  private loop = (timestamp: number) => {
    this.time = (this.time + 1) & 3;
    console.log(this.time);
    if (!this.time) {
      this.cell.y++;
    }
    if (this.cell.y > this.height) {
      this.cell.y = 0;
    }

    this.render(timestamp);
    this.animation = requestAnimationFrame(this.loop);
  };

  private render(timestamp: number) {
    const { context } = this;
    context.clearRect(0, 0, 100000, 10000);
    context.lineWidth = 1;
    this.cell.draw(context);
    this.shape?.draw(context);
    this.cells.forEach(cells => {
      cells.forEach(cell => {
        context.rect(
          cell.x * cell.size,
          cell.y * cell.size,
          cell.size,
          cell.size,
        );
      });
    });
    context.stroke();
  }
}
