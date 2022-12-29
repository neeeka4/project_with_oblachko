import React, { useContext, useState } from "react";
import "./Add.css";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../../Context/ProductContextProvider";

const Add = () => {
  const { addProduct } = useContext(productContext);
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    title: "",
    img: "",
    type: "",
    price: 0,
  });

  const sendInp = (e) => {
    if (e.target.type === "price") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = { ...product, [e.target.name]: e.target.value };
      setProduct(obj);
      console.log(product);
    }
  };
  return (
    <div>
      <div className="add">
        <input
          name="title"
          className="title"
          type="text"
          placeholder="Title"
          onChange={sendInp}
        />
        <input
          name="img"
          className="img"
          type="text"
          placeholder="Img"
          onChange={sendInp}
        />
        <input
          name="type"
          className="type"
          type="text"
          placeholder="Type"
          onChange={sendInp}
        />
        <input
          name="price"
          className="price"
          type="text"
          placeholder="Price"
          onChange={sendInp}
        />
        <button
          className="add_btn"
          onClick={() => {
            addProduct(product);
            navigate("/products");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Add;
