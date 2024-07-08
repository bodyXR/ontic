import { Route, Routes } from "react-router-dom";
import React from "react";
import GetStarted1 from "./componenets/GetStarted1";
import GetStarted2 from "./componenets/GetStarted2";
import Register from "./componenets/Register";
import Home from "./componenets/Home";
import SingleCourse from "./componenets/SingleCourse";
import SingleOngoingCourse from "./componenets/SingleOngoingCourse";
import Courses from "./componenets/Courses";
import Login from "./componenets/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/get-started-1" element={<GetStarted1 />} />
      <Route index element={<GetStarted1 />} />
      <Route path="/get-started-2" element={<GetStarted2 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/single-course" element={<SingleCourse />} />
      <Route path="/single-ongoing-course" element={<SingleOngoingCourse />} />
    </Routes>
  );
};

export default App;
