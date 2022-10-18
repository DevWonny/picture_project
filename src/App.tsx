import React from "react";
import { Routes, Route } from "react-router-dom";

import Intro from "./views/Intro";
import Login from "./views/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
