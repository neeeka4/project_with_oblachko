import "./App.css";
import { Route, Routes } from "react-router-dom";
import MyRoutes from "./MyRoutes";
import HomeBar from "./Components/HomeBar/HomeBar";

function App() {
  return (
    <div className="App">
      {/* <MyRoutes /> */}
      <HomeBar home={HomeBar} />
    </div>
  );
}

export default App;
