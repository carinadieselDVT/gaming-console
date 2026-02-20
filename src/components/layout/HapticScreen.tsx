import { useMemo } from "react";
import { BOARD_HEIGHT, BOARD_WIDTH, type Board, type Cell } from "../Board";
import { BoardView } from "../Board";

function HapticScreen() {
  function createEmptyBoard(height = BOARD_HEIGHT, width = BOARD_WIDTH): Board {
    return Array.from({ length: height }, () =>
      Array.from({ length: width }, () => 0 as Cell),
    );
  }
  const board = useMemo(() => createEmptyBoard(), []);
  return (
    // TODO Place styles in css file
    <div
      style={{
        display: "grid",
        placeItems: "center",
        padding: 16,
        background: "#0000",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <BoardView board={board} />
    </div>
  );
}

export default HapticScreen;
