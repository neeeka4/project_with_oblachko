import HomeBar from "./Components/HomeBar/HomeBar";
import AuthContextProvider from "./Context/AuthContextProvider";

function App() {
  return (
    <div>
      <HomeBar home={HomeBar} />
    </div>
  );
}

export default App;
