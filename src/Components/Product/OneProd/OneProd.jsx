import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../../Context/ProductContextProvider";

export default function OneProd({ item }) {
  const { deleteProduct } = useContext(productContext);
  const navigate = useNavigate();
  return (
    <div>
      <div className="card">
        <img src={item.img} alt="" />
        <div className="container">
          <h4>
            <p>LALL</p>
            <b>s;d</b>
          </h4>
          <p>dlf</p>
          <h4>dlf,</h4>
        </div>
      </div>
    </div>
  );
}
