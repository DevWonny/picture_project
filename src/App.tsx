import React from "react";
import { Routes, Route } from "react-router-dom";

import Intro from "./views/Intro";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Main from "./views/Main";
import Detail from "./views/Detail";
import Upload from "./views/Upload";

// 임시
// 추후 제거 예정
import Loading from "./components/Loading";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/main" element={<Main />} />
      <Route path="/detail/:image" element={<Detail />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/loading" element={<Loading loadingText="test" />} />
    </Routes>
  );
}

export default App;
