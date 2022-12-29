import React, { useReducer, createContext } from "react";
import axios from "axios";
import { API } from "../helpers/const";
import { useLocation, useNavigate } from "react-router-dom";

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

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const location = useLocation();
  const navigate = useNavigate();

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

  const saveEditProduct = async (newProduct, id) => {
    await axios.patch(`${API}/${id}`, newProduct);
    getProducts();
  };

  const addProduct = async (prod) => {
    try {
      let res = await axios.post(API, prod);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };
  return (
    <productContext.Provider
      value={{
        products: state.products,
        productDetails: state.productDetails,
        addProduct,
        getProducts,
        deleteProduct,
        saveEditProduct,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
