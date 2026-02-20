import { useState } from "react";
import ConsoleAreaUI, { ACTIONS } from "./components/layout/ConsoleAreaUI";
import type { ActionType } from "./components/layout/ConsoleAreaUI";
import HapticScreen from "./components/layout/HapticScreen";
import "./styles/App.css";

function App() {
  //tracks what state the game is in
  const [gameState, setGameState] = useState<
    "idle" | "playing" | "paused" | "gameover"
  >("idle");
  const [text, setText] = useState("");

  //runs every time a button is pressed in ConsoleAreaUI
  //receives the action name and decides what to do
  function handleAction(action: ActionType) {
    switch (action) {
      case ACTIONS.START:
        setGameState("playing");
        break;
      case ACTIONS.PAUSE:
        if (gameState === "playing") {
          setGameState("paused");
        } else {
          setGameState("playing");
        }
        break;
      case ACTIONS.MOVE_LEFT:
        // console.log("Move left!");
        setText("Move left!");
        break;
      case ACTIONS.MOVE_RIGHT:
        // console.log("Move right!");
        setText("Move right!");
        break;
      case ACTIONS.ROTATE:
        // console.log("Rotate!");
        setText("Rotate!");
        break;
      case ACTIONS.SOFT_DROP:
        // console.log("Soft drop!");
        setText("Soft drop!");
        break;
    }
  }

  return (
    <div
      style={{ display: "flex", gap: 32, padding: 32, alignItems: "center" }}
    >
      <h3>{text}</h3>
      {/* Left side — game board (your teammate's area) */}
      <HapticScreen gameState={gameState} />

      {/* Right side — your controller buttons */}
      <ConsoleAreaUI onAction={handleAction} gameState={gameState} />
    </div>
  );
}

export default App;
