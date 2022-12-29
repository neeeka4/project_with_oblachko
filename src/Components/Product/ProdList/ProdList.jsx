import { Box, Container, Grid, Pagination } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import OneProd from "../OneProd/OneProd";

import { productContext } from "../../../Context/ProductContextProvider";

const ProdList = () => {
  const { products, getProducts, fetchByParams } = useContext(productContext);

  const [page, setPage] = useState(1);
  // const count = Math.ceil(products.length / 3);

  useEffect(() => {
    getProducts();
  }, []);

  function currentData() {
    const begin = page - 1;
    const end = begin + 3;
    return products.slice(begin, end);
  }

  // console.log(products);
  return (
    <Container>
      <Box p={5}>
        <Grid container spacing={3}>
          <Grid
            item
            sx={{ justifyContent: "center", display: "flex", flexWrap: "wrap" }}
            md={9}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                minHeight: "40vh",
                mb: "3.5vh",
              }}
            >
              {products ? (
                currentData().map((item) => (
                  <OneProd item={item} key={item.id} />
                ))
              ) : (
                <h2>Loading...</h2>
              )}
            </Box>

            <Pagination
              // count={count}
              variant="outlined"
              shape="rounded"
              onChange={(e, p) => setPage(p)}
              page={page}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProdList;
