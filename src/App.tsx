import React from "react";
import { Routes, Route } from "react-router-dom";

import Intro from "./views/Intro";
import Login from "./views/Login";
import SignUp from "./views/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
