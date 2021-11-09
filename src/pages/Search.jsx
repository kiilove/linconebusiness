import { Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import React from "react";
import { lincone } from "../styles/Common";
const SearchBar = styled("div")({
  width: "50em",
  height: "50px",
  backgroundColor: "white",
  borderRadius: 40,
  display: "flex",
  marginTop: 30,
  marginBottom: 30,
  WebkitBoxShadow: "1px 1px 5px 1px rgba(153,153,153,0.61)",
  boxShadow: "1px 1px 5px 1px rgba(153,153,153,0.61)",
});

const SearchBarIcon = styled("img")({
  width: "80px",
  height: "80px",
  borderRadius: "50px 0px 0px 50px",
});

const Search = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: lincone.pallette.background,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={lincone.flex.center}>
            <Typography
              variant="h3"
              color={lincone.pallette.primary}
              sx={{ fontWeight: 700 }}
            >
              Lincone{"  "}
            </Typography>
          </div>
          <SearchBar></SearchBar>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Search;
