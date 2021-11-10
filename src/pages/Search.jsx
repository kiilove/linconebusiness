import { Avatar, Grid, Tooltip, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import AppsIcon from "@mui/icons-material/Apps";

import React from "react";
import { lincone } from "../styles/Common";
import { green, grey } from "@mui/material/colors";
import LC from "../components/LC";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faPhotoVideo,
  faDatabase,
  faBell,
  faFileSignature,
  faSearch,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

const SearchBar = styled("div")({
  width: "90%",
  maxWidth: "700px",
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
  width: "60%",
  height: "50%",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  alignSelf: "center",
  flexWrap: "wrap",
});

const MenuItem = styled("div")({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: grey[400],
  marginBottom: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.5s ease",
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.1)",
  },
});

const SearchBarIcon = styled("img")({
  width: "80px",
  height: "80px",
  borderRadius: "50px 0px 0px 50px",
});

const SearchText = styled("input")({
  fontSize: "1rem",
  width: "82%",
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
    <Grid
      container
      sx={{ height: "100vh", backgroundColor: lincone.pallette.background }}
    >
      <Grid item xs={0.1} sm={0.1} md={1} lg={2}></Grid>
      <Grid item container xs={11.8} sm={11.8} md={10} lg={8}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100vh",
            }}
          >
            <Box
              style={{
                height: "45%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* 상단 메뉴서랍 시작 */}
              <div
                style={{
                  width: "100%",
                  height: "20%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              ></div>
              {/* 상단 메뉴서랍 끝 */}
              {/* 상단 여백 시작*/}
              <div
                style={{
                  height: "60%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ></div>
              {/* 상단 여백 끝*/}
              <div
                style={{
                  height: "20%",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <Typography
                  variant="h3"
                  color={lincone.pallette.primary}
                  sx={{ fontWeight: 700 }}
                >
                  Lincone{"  "}
                </Typography>
              </div>
            </Box>
            <Box
              style={{
                height: "10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchBar>
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    ml: 1,
                  }}
                  style={lincone.flex.center}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    color={grey[600]}
                    style={{ fontSize: "25px" }}
                  />
                </Box>
                <SearchText placeholder="메뉴명 혹은 모델명을 입력" />
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    mr: 0,
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  style={lincone.flex.center}
                >
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    color={green[200]}
                    style={{
                      fontSize: "25px",
                    }}
                  />
                </Box>
              </SearchBar>
            </Box>
            <Box
              style={{
                height: "10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MenuBar>
                <Tooltip title="제이앤코어 김진배">
                  <Avatar
                    sx={{
                      width: "50px",
                      height: "50px",
                      mb: "20px",
                      transition: "all 0.5s ease",
                      "&:hover": {
                        cursor: "pointer",
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </Tooltip>
                <Tooltip title="메뉴 펼쳐보기">
                  <MenuItem>
                    <AppsIcon sx={{ color: "white", fontSize: "30px" }} />
                  </MenuItem>
                </Tooltip>
                <Tooltip title="프로젝트">
                  <MenuItem>
                    <FontAwesomeIcon
                      icon={faFileSignature}
                      color="white"
                      style={{ fontSize: "25px" }}
                    />
                  </MenuItem>
                </Tooltip>
                <Tooltip title="피드 보기">
                  <MenuItem>
                    <FontAwesomeIcon
                      icon={faPhotoVideo}
                      color="white"
                      style={{ fontSize: "25px" }}
                    />
                  </MenuItem>
                </Tooltip>
              </MenuBar>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={0.1} sm={0.1} md={1} lg={2}></Grid>
    </Grid>
  );
};

export default Search;
