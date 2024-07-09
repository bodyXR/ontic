import { Route, Routes } from "react-router-dom";
import React from "react";
import GetStarted1 from "./pages/GetStarted1";
import GetStarted2 from "./pages/GetStarted2";
import Register from "./pages/Register";
import Home from "./pages/Home";
import SingleCourse from "./pages/SingleCourse";
import SingleOngoingCourse from "./pages/SingleOngoingCourse";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import AuthLayout from "./componenets/AuthLayout";
import Videos from "./pages/Videos";

const App = () => {
  return (
    <Routes>
      <Route path="/get-started-1" element={<GetStarted1 />} />
      <Route index element={<GetStarted1 />} />
      <Route path="/get-started-2" element={<GetStarted2 />} />
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Route>
      <Route path="/home" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/single-course" element={<SingleCourse />} />
      <Route path="/single-ongoing-course" element={<SingleOngoingCourse />} />
    </Routes>
  );
};

export default App;
