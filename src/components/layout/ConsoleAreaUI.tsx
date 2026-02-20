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
type ActionType = (typeof ACTIONS)[keyof typeof ACTIONS];

interface ConsoleAreaUIProps {
  onAction: (action: ActionType) => void;
  gameState: "playing" | "paused" | "gameover" | "idle";
}

function ConsoleAreaUI({ onAction, gameState }: ConsoleAreaUIProps) {
  const isPlaying = gameState === "playing";

  function handlePress(action: ActionType) {
    onAction(action);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        padding: 3,
        backgroundColor: "#0a0a18",
        borderRadius: 4,
        border: "1px solid #00f5ff22",
        maxHeight: "500px",
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        {/* Start + Pause */}
        {/* START button when game is idle or over */}
        <Button
          variant="contained"
          onClick={() => handlePress(ACTIONS.START)}
          disabled={isPlaying || gameState === "paused"}
          sx={{ backgroundColor: "#00ff88", color: "#000", fontWeight: 700 }}
        >
          ▶ Start
        </Button>

        {/* PAUSE button when game is running or paused */}
        <Button
          variant="contained"
          onClick={() => handlePress(ACTIONS.PAUSE)}
          disabled={gameState === "idle" || gameState === "gameover"}
          sx={{ backgroundColor: "#ffe600", color: "#000", fontWeight: 700 }}
        >
          ⏸ Pause
        </Button>
      </Box>

      <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
        {/* A BUTTON — moves piece left */}
        <Button
          variant="outlined"
          onClick={() => handlePress(ACTIONS.MOVE_LEFT)}
          disabled={!isPlaying}
          sx={{ color: "#00f5ff", borderColor: "#00f5ff", minWidth: 60 }}
        >
          A
        </Button>

        {/* JOYSTICK — rotate is handled by the Joystick component */}
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            backgroundColor: "#1a1a2e",
            border: "2px solid #00f5ff33",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#444",
            fontSize: 10,
            fontFamily: "monospace",
            letterSpacing: 1,
          }}
        >
          ROTATE
        </Box>

        {/* D BUTTON — moves piece right */}
        <Button
          variant="outlined"
          onClick={() => handlePress(ACTIONS.MOVE_RIGHT)}
          disabled={!isPlaying}
          sx={{ color: "#00f5ff", borderColor: "#00f5ff", minWidth: 60 }}
        >
          D
        </Button>
      </Box>

      {/* W = TBD (placeholder), S = soft drop */}
      <Box sx={{ display: "flex", gap: 4 }}>
        {/* W BUTTON — no action yet*/}
        <Button
          variant="outlined"
          onClick={() => handlePress(ACTIONS.ROTATE)} //temporary, we can change this to a different action later
          disabled={!isPlaying}
          sx={{ color: "#bf00ff", borderColor: "#bf00ff", minWidth: 60 }}
        >
          W
        </Button>

        {/* S BUTTON — drops piece faster */}
        <Button
          variant="outlined"
          onClick={() => handlePress(ACTIONS.SOFT_DROP)}
          disabled={!isPlaying}
          sx={{ color: "#ff8c00", borderColor: "#ff8c00", minWidth: 60 }}
        >
          S
        </Button>
      </Box>
    </Box>
  );
}

export default ConsoleAreaUI;
export { ACTIONS };
export type { ActionType };
