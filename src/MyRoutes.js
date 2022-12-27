import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeBar from "./Components/HomeBar/HomeBar";
import Add from "./Components/Admin/Add/Add";
import Auth from "./Components/Auth/Auth";

// const PUBLIC_ROUTES = [{ link: "/", element: <Home />, id: 1 }];

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeBar />} />
      <Route path="/add" element={<Add />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default MyRoutes;
