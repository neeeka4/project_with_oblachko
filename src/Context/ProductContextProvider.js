import React, { useReducer, createContext } from "react";
import axios from "axios";
import { API } from "../helpers/const";

export const productContext = createContext();

const INIT_STATE = {
  products: [],
  productDetails: {},
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "get_products":
      return { ...state, products: action.payload };
    case "get_product_detail":
      return { ...state, productDetails: action.payload };
    default:
      return state;
  }
}

const getProducts = async () => {
  try {
    let res = await axios.get(`${API}${window.location.search}`);
    dispatch({
      type: "get_products",
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

return <productContext.Provider value={{}}>{children}</productContext.Provider>;

export default ProductContextProvider;
