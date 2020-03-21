import Cell from './cell';

export interface ShapeProps {
  x: number;
  y: number;
  size: number;
  cells: Cell[];
}

export default class Shape {
  private x: number;
  private y: number;
  private offset: number = 0;
  private size: number;
  private cells: Cell[];

  private freeze: boolean = false;

  constructor(props: ShapeProps) {
    this.x = props.x;
    this.y = props.y;
    this.size = props.size;
    this.cells = props.cells;

    // TODO
  }

  public smooth(dy: number) {
    const { freeze } = this;
    this.offset += dy;
    if (this.offset >= this.size) {
      if (freeze) {
        return true;
      }
      this.offset -= this.size;
      this.y++;
    }
  }

  public drop() {
    this.y++;
  }

  public change() {}

  public draw(context: CanvasRenderingContext2D) {
    const { x, y, size, offset, cells } = this;
    context.save();
    context.translate(x * size, y * size + offset);
    cells.forEach(cell => {
      cell.draw(context);
    });
    context.restore();
  }
}
