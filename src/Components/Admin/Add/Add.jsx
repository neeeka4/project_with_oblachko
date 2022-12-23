import React, { useContext } from "react";
import { useState } from "react";
import { productContext } from "../../../Context/ProductContextProvider";

const Add = () => {
  const { addProduct } = useContext(productContext);

  const [product, setProduct] = useState({
    title: "",
    type: "",
    price: 0,
    author: "",
    img: "",
  });
  return <div></div>;
};

export default Add;
