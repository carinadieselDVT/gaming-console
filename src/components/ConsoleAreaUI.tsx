import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";

function ConsoleAreaUI() {
  return (
    <Box>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button>A</Button>
        <Button>B</Button>
        <Button>X</Button>
        <Button>Y</Button>
      </ButtonGroup>

      <Button variant="outlined">Joystick</Button>
    </Box>
  );
}

export default ConsoleAreaUI;
