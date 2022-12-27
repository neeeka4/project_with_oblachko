import HomeBar from "./Components/HomeBar/HomeBar";
import Navbar from "./Components/Navbar/Navbar";
import MyRoutes from "./MyRoutes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="elips"></div>
      {/* <div className="elips6"></div> */}
      <MyRoutes />
    </div>
  );
}

export default App;
