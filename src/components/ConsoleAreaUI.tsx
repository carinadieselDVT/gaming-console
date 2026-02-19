import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";

interface ConsoleAreaUIProps {
  onAction: (msg: string) => void;
}

function ConsoleAreaUI({ onAction }: ConsoleAreaUIProps) {
  return (
    <Box sx={{ borderColor: "blue" }}>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button onClick={() => onAction("A pressed")}>A</Button>
        <Button onClick={() => onAction("B pressed")}>B</Button>
        <Button onClick={() => onAction("X pressed")}>X</Button>
        <Button onClick={() => onAction("Y pressed")}>Y</Button>
      </ButtonGroup>

      <Button variant="outlined" sx={{ mt: 1 }} onClick={() => onAction("Joystick pressed")}>
        Joystick
      </Button>
    </Box>
  );
}

export default ConsoleAreaUI;
