import "./App.css";
import { Route, Routes } from "react-router-dom";
import MyRoutes from "./MyRoutes";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MyRoutes />
    </div>
  );
}

export default App;
