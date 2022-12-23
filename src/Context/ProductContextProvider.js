import React, { useReducer, createContext } from "react";
import axios from "axios";
import { API } from "../helpers/const";

export const productContext = createContext();

// const INIT_STATE = {
//   products: [],
//   productDetails: {},
// };

const ProductContextProvider = ({ children }) => {
  //   const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const addProduct = async (prod) => {
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
