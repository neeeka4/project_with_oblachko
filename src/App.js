import "./App.css";
import MyRoutes from "./MyRoutes";
import HomeBar from "./Components/HomeBar/HomeBar";

function App() {
  return (
    <div className="App">
      <HomeBar home={HomeBar} />
      <MyRoutes route={MyRoutes} />
    </div>
  );
}

export default App;
