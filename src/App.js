import "./App.css";
import MyRoutes from "./MyRoutes";
import Navbar from "./Components/Navbar/Navbar";
import ProductContextProvider from "./Context/ProductContextProvider";

function App() {
  return (
    <div>
      <ProductContextProvider>
        <Navbar />
        <MyRoutes />
      </ProductContextProvider>
    </div>
  );
}

export default App;
