export interface TetrisProps {
  width: number;
  height: number;
  context: CanvasRenderingContext2D;
}

export default class Tetris {
  private width: number;
  private height: number;
  private context: CanvasRenderingContext2D;
  private i = 0;

  constructor(props: TetrisProps) {
    this.width = props.width;
    this.height = props.height;
    this.context = props.context;
  }

  public start() {
    this.render();
  }

  private render() {
    console.log(this.i++);
    // requestAnimationFrame(() => this.render());
  }

  public pause() {}
}
