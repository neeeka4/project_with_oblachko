import React, { useReducer } from "react";

export const productContext = createContext();

// const INIT_STATE = {
//   products: [],
//   productDetails: {},
// };

const ProductContextProvider = ({ children }) => {
  //   const [state, dispatch] = useReducer(reducer, INIT_STATE);

  addProduct = async (prod) => {
    try {
      let res = await axios.post(API, prod);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <productContext.Provider value={{ addProduct }}></productContext.Provider>
  );
};

export default ProductContextProvider;
