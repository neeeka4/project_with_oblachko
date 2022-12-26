import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import HomeBar from "./Components/HomeBar/HomeBar";
import Add from "./Components/Admin/Add/Add";

// const PUBLIC_ROUTES = [{ link: "/", element: <Home />, id: 1 }];

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeBar />} />
      <Route path="/add" element={<Add />} />
    </Routes>
  );
};

export default MyRoutes;
