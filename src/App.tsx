import { useState } from "react";
import "./styles/App.css";
import ConsoleAreaUI from "./components/layout/ConsoleAreaUI";
import HapticScreen from "./components/layout/HapticScreen";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <HapticScreen />
      <ConsoleAreaUI />
    </div>
  );
}

export default App;
