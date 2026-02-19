import { useState } from "react";
import "./App.css";
import ConsoleAreaUI from "./components/ConsoleAreaUI";
import HapticScreen from "./components/HapticScreen";
import { Box } from "@mui/material";

function App() {
  const [message, setMessage] = useState<string>("");

  return (
    <>
      <Box>
        <HapticScreen message={message} />
        <ConsoleAreaUI onAction={setMessage} />
      </Box>
    </>
  );
}

export default App;
