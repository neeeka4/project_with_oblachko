import HomeBar from "./Components/HomeBar/HomeBar";
import Navbar from "./Components/Navbar/Navbar";
import MyRoutes from "./MyRoutes";
import AuthContextProvider from "./Context/AuthContextProvider";
import ProductContextProvider from "./Context/ProductContextProvider";
import CartContextProvider from "./Context/CartContextProvider";

function App() {
  return (
    <div className="App">
      {/* <CartContextProvider> */}
      <ProductContextProvider>
        <AuthContextProvider>
          <Navbar />
          <div className="elips"></div>
          <MyRoutes />
        </AuthContextProvider>
      </ProductContextProvider>
      {/* </CartContextProvider> */}
    </div>
  );
}

export default App;
