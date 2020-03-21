import Shape from './shape';
import Cell from './cell';

const shapes = [
  [
    { x: 0, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
  ],
  [
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 1, y: 1 },
    { x: 2, y: 1 },
  ],
];

export const shape = (size: number = Cell.SIZE) => {
  const s = shapes[1];
  const cells: Cell[] = [];
  s.forEach(x => {
    cells.push(
      new Cell({
        x: x.x,
        y: x.y,
        size,
      }),
    );
  });
  return new Shape({
    x: 3,
    y: 4,
    size: size,
    cells,
  });
};
