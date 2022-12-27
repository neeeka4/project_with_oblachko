import HomeBar from "./Components/HomeBar/HomeBar";
import Navbar from "./Components/Navbar/Navbar";
import MyRoutes from "./MyRoutes";
import AuthContextProvider from "./Context/AuthContextProvider";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        <div className="elips"></div>
        <MyRoutes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
