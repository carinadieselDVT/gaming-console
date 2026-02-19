import { Box, Typography } from "@mui/material";
import React from "react";

interface HapticScreenProps {
  message?: string;
}

function HapticScreen({ message }: HapticScreenProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        width: "100vw",
        border: "1px solid rgba(0,0,0,0.12)",
      }}
    >
      <Typography variant="h5" color="text.secondary">
        {message || "HapticScreen"}
      </Typography>
    </Box>
  );
}

export default HapticScreen;
