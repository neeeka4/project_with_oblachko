import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Pagination,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import OneProd from "../OneProd/OneProd";
import SearchIcon from "@mui/icons-material/Search";
import { productContext } from "../../../Context/ProductContextProvider";

const ProdList = () => {
  const { products, getProducts, fetchByParams } = useContext(productContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  const [page, setPage] = useState(1);
  // const count = Math.ceil(products.length / 3);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
    console.log(searchParams.toString());
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

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
          {/* !---------------- FIlTER-------------------- */}
          <Grid item md={3}>
            <Paper elevation={5} sx={{ p: 2 }}>
              <TextField
                id="input-with-icon-textfield"
                label="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="all"
                  name="radio-buttons-group"
                  onChange={(e) => fetchByParams("type", e.target.value)}
                >
                  <FormControlLabel
                    value="all"
                    control={<Radio />}
                    label="all"
                  />
                  <FormControlLabel
                    value="telephone"
                    control={<Radio />}
                    label="telephone"
                  />
                  <FormControlLabel
                    value="laptop"
                    control={<Radio />}
                    label="laptop"
                  />
                  <FormControlLabel
                    value="watch"
                    control={<Radio />}
                    label="watch"
                  />
                </RadioGroup>
              </FormControl>
            </Paper>
          </Grid>
          ;{/* ------------- FILTER END ----------*/}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProdList;
