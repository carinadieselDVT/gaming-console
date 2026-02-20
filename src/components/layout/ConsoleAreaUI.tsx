import { Box, Button } from "@mui/material";

//list of actions that we'll use for the tetris game, we can use these for the actions to our game logic
const ACTIONS = {
  MOVE_LEFT: "MOVE_LEFT",
  MOVE_RIGHT: "MOVE_RIGHT",
  ROTATE: "ROTATE",
  SOFT_DROP: "SOFT_DROP",
  START: "START",
  PAUSE: "PAUSE",
} as const;

//these actions can be only one of the values from the ACTIONS
type ActionType = typeof ACTIONS[keyof typeof ACTIONS];


interface ConsoleAreaUIProps {
  onAction: (action: ActionType) => void;
  gameState: "playing" | "paused" | "gameover" | "idle";
}

function ConsoleAreaUI({}: ConsoleAreaUIProps) {
  return <div>{/*  Add controls*/} Console Area</div>;
}

export default ConsoleAreaUI;
