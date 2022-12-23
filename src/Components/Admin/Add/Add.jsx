import React, { useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { productContext } from "../../../Context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const { addProduct } = useContext(productContext);

  const [product, setProduct] = useState({
    title: "",
    type: "",
    price: 0,
    author: "",
    img: "",
  });

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
};

const navigate = useNavigate();
return (
  <div>
    <Box
      component="form"
      sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
      noValidate
      autocomplete="off"
    >
      <Typography>Add Product Panel</Typography>
      <TextField
        onChange={handleInp}
        name="title"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <TextField
        onChange={handleInp}
        name="img"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <TextField
        onChange={handleInp}
        name="type"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <TextField
        onChange={handleInp}
        name="price"
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
      />
      <Button
        onClick={() => {
          addProduct(product);
          navigate("/product");
        }}
      >
        Add Product
      </Button>
    </Box>
  </div>
);

export default Add;
