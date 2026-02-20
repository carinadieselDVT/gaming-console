export type Cell = 0 | 1; // 0 = empty, 1 = filled
export type Board = Cell[][];

export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;

type Props = {
  board: Board;
};

export const BoardView = ({ board }: Props) => {
  const rows = BOARD_HEIGHT;
  const cols = BOARD_WIDTH;

  return (
    <div
      className="board"
      role="grid"
      aria-rowcount={rows}
      aria-colcount={cols}
    >
      {board.flatMap(
        (
          row,
          r, // Flatmap + map flattens entire array into a single dimensional array
        ) =>
          row.map(
            (
              _cell,
              c, //value parameter (_cell) is required but not used
            ) => (
              <div
                key={`${r}-${c}`}
                role="gridcell"
                aria-rowindex={r + 1}
                aria-colindex={c + 1}
              >
                <div className="cellWrapper">
                  <div className="cell" />
                </div>
              </div>
            ),
          ),
      )}
    </div>
  );
};
