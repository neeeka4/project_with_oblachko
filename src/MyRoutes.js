import React from "react";
import Auth from "./Components/Auth/Auth";
import { Routes, Route } from "react-router-dom";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path={"/auth"} element={<Auth />} />
    </Routes>
  );
};

export default MyRoutes;
