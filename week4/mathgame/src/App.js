import React from "react";
import "./App.css";
import Rooter from "./rooter/rooter";
import { QuestionsProvider } from "./contexts/questions";

function App() {
  return (  
    <QuestionsProvider>
      <Rooter />
    </QuestionsProvider>
  );
}

export default App;
