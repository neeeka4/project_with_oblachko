import HomeBar from "./Components/HomeBar/HomeBar";
import AuthContextProvider from "./Context/AuthContextProvider";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <HomeBar />
      </AuthContextProvider>
    </div>
  );
}

export default App;
