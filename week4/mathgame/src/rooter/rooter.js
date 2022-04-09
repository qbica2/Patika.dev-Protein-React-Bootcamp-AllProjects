import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Results from "../pages/Results";
import Questions from "../pages/Questions";

function Rooter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/results" element={<Results />} />
      <Route path="/questions/:id" element={<Questions />} />
    </Routes>
  );
}

export default Rooter;