import { Grid, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import StorageIcon from "@mui/icons-material/Storage";
import React from "react";
import { lincone } from "../styles/Common";
import { grey } from "@mui/material/colors";
import LC from "../components/LC";
const SearchBar = styled("div")({
  width: "50em",
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
  width: "50em",
});

const MenuItem = styled("div")({
  width: "80px",
  height: "80px",
  borderRadius: 50,
  backgroundColor: "white",
  boxShadow: "3px 3px 10px #c3c3c3, -6px -6px 16px #fdfdfd",
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
          </SearchBar>
          <MenuBar style={{ display: "flex", justifyContent: "space-around" }}>
            <MenuItem style={lincone.flex.center}>
              <StorageIcon sx={{ fontSize: "30px" }} />
            </MenuItem>
            <MenuItem style={lincone.flex.center}>
              <StorageIcon sx={{ fontSize: "30px" }} />
            </MenuItem>
            <MenuItem style={lincone.flex.center}>
              <StorageIcon sx={{ fontSize: "30px" }} />
            </MenuItem>
            <MenuItem style={lincone.flex.center}>
              <StorageIcon sx={{ fontSize: "30px" }} />
            </MenuItem>
            <MenuItem style={lincone.flex.center}>
              <StorageIcon sx={{ fontSize: "30px" }} />
            </MenuItem>
            <MenuItem style={lincone.flex.center}>
              <StorageIcon sx={{ fontSize: "30px" }} />
            </MenuItem>
          </MenuBar>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Search;
