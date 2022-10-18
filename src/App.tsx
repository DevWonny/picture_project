import React from "react";
import { Routes, Route } from "react-router-dom";

import Intro from "./views/Intro";
import Login from "./views/Login";
import SignUp from "./views/SignUp";

// 임시
import Loading from "./components/Loading";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/loading" element={<Loading />} />
    </Routes>
  );
}

export default App;
