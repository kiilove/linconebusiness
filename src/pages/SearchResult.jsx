import React, { useState, useEffect } from "react";
import { Avatar, Divider, Grid, Tooltip, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { blueGrey, grey } from "@mui/material/colors";
import { lincone } from "../styles/Common";

import SearchResultHeader from "../components/SearchResultHeader";
import axios from "axios";

const SearchWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100vw",
  maxWidth: "1200px",
});

const SearchTop = styled("div")({
  height: "55%",
  display: "flex",
  alignItems: "center",
});
const SearchBottom = styled("div")({
  height: "45%",
  display: "flex",
  alignItems: "center",
});
const SearchMenu = styled("span")({
  height: "100%",
  width: "110px",
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  fontWeight: 400,
  color: blueGrey[600],
});

const SearchResult = () => {
  const [keyword, setKeyword] = useState("엘지");
  const [result, setResult] = useState([]);

  const API_URI = `api/craw/search/keyword?url=${keyword}`;
  useEffect(() => {
    const SearchResult = async () => {
      await axios({
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
        url: API_URI,
      })
        .then((res) => {
          setResult(res.data);
        })
        .catch((err) => {
          setResult(err);
        });
    };
    SearchResult();
  }, [keyword]);

  //console.log(result);

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: lincone.pallette.background,
        height: "100vh",
      }}
    >
      <Grid container>
        {/* 검색창 시작 */}
        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              height: "115px",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              boxShadow: `0 3px 3px -1px ${grey[200]}`,
            }}
          >
            <SearchTop sx={{ ml: 3, mr: 3, justifyContent: "space-between" }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: lincone.pallette.primary }}
              >
                L
              </Typography>
              <div>
                <Avatar />
              </div>
            </SearchTop>
            <Divider sx={{ background: lincone.pallette.primaryHard }} />
            <SearchBottom sx={{ ml: 3 }}>
              <SearchMenu>전체검색</SearchMenu>
              <SearchMenu>모델검색</SearchMenu>
              <SearchMenu>기존자료</SearchMenu>
            </SearchBottom>
          </Box>
        </Grid>
        {/* 검색창 끝 */}
        {/* 결과창 시작 */}
        <Grid item container xs={12} sx={{ mt: 3 }}>
          <Grid item xs={0.2} sm={0.3} md={0.3} lg={0.2}></Grid>
          <Grid item xs={11.6} sm={11.4} md={11.4} lg={10}>
            <SearchResultHeader result={result} />
          </Grid>
          <Grid item xs={0.2} sm={0.3} md={0.3} lg={1.8}></Grid>
        </Grid>
        {/* 결과창 끝 */}
      </Grid>
    </Box>
  );
};

export default SearchResult;
