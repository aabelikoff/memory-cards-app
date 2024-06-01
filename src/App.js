import React, { useState } from "react";
import MemoryCardsApp from "./components/MemoryCardsApp/MemoryCardsApp";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
import allImages from "./db/minionCards";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <MemoryCardsApp />
      </ThemeProvider>
    </div>
  );
}

export default App;
