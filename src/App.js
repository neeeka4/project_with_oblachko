import "./App.css";
import MyRoutes from "./MyRoutes";
import HomeBar from "./Components/HomeBar/HomeBar";
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
