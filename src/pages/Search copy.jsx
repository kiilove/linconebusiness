import { Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import StorageIcon from "@mui/icons-material/Storage";
import React from "react";
import { lincone } from "../styles/Common";
import { grey } from "@mui/material/colors";
import LC from "../components/LC";
const SearchBar = styled("div")({
  width: "90%",
  height: "50px",
  backgroundColor: "white",
  borderRadius: 40,
  display: "flex",
  marginTop: 30,
  marginBottom: 30,
  display: "flex",
  WebkitBoxShadow: "1px 1px 5px 1px rgba(153,153,153,0.61)",
  boxShadow: "1px 1px 5px 1px rgba(153,153,153,0.61)",
});

const MenuBar = styled("div")({
  width: "70%",
});

const MenuItem = styled("div")({
  width: "10rem",
  height: "10rem",
  borderRadius: "50%",
  backgroundColor: "white",
  boxShadow: "3px 3px 10px #c3c3c3, -6px -6px 16px #fdfdfd",
});

const SearchBarIcon = styled("img")({
  width: "80px",
  height: "80px",
  borderRadius: "50px 0px 0px 50px",
});

const SearchText = styled("input")({
  fontSize: "1rem",
  width: "70%",
  border: "none",
  outline: "none",
  resize: "none",
  paddingLeft: "10px",
  color: grey[700],
  fontWeight: 600,
  backgroundColor: "white",
  "&::palceholder": { color: grey[700] },
  "&::focus": {
    border: "none",
    outline: "none",
    resize: "none",
  },
});

const Search = () => {
  return (
    <Grid container>
      <Grid
        item
        xs={0.1}
        sx={{ backgroundColor: lincone.pallette.background }}
      ></Grid>
      <Grid item xs={11.8}>
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
          <Grid container item xs={12} lg={6}>
            <SearchBar>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  ml: 1,
                }}
                style={lincone.flex.center}
              >
                <SearchIcon
                  sx={{ fontSize: "40px", fontWeight: 700, color: grey[500] }}
                />
              </Box>
              <SearchText placeholder="메뉴명 혹은 모델명을 입력" />
            </SearchBar>
          </Grid>
        </Box>
      </Grid>
      <Grid
        item
        xs={0.1}
        sx={{ backgroundColor: lincone.pallette.background }}
      ></Grid>
    </Grid>
  );
};

export default Search;
