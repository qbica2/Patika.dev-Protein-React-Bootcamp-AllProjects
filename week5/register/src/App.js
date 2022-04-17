import React from "react";
import "./App.css";
import Register from "./pages/Register";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Register />
      </div>
    </ThemeProvider>
  );
}

export default App;
