import React, { useContext, useEffect } from "react";

import { productContext } from "../../../Context/ProductContextProvider";

const ProdList = () => {
  const { products, getProducts } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  return <div></div>;
};

export default ProdList;
