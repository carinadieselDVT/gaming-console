import { useState } from "react";
import "./styles/App.css";
import { ConsoleAreaUI, HapticScreen } from "./components";
import { Box } from "@mui/material";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <HapticScreen />
      <ConsoleAreaUI />
    </div>
  );
}

export default App;
