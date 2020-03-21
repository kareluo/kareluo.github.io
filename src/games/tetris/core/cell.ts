export interface CellProps {
  x: number;
  y: number;
  size: number;
}

export default class Cell {
  public x: number;
  public y: number;
  public size: number;
  public freeze: boolean;

  public static SIZE: number = 30;

  constructor(props: CellProps) {
    this.x = props.x;
    this.y = props.y;
    this.size = props.size;
    this.freeze = false;
  }

  draw(context: CanvasRenderingContext2D) {
    const { x, y, size } = this;
    context.fillRect(x * size + 1, y * size + 1, size - 2, size - 2);
  }
}
