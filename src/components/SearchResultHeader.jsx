import { CardHeader, Divider, Paper, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";
import { blueGrey, grey } from "@mui/material/colors";
import React from "react";

const BodyStyle = styled("div")({
  backgroundColor: "white",
  color: blueGrey[700],
});
const FlexDiv = styled("div")({
  width: "100%",
  display: "flex",
  alignItems: "center",
  marginBottom: 15,
});

const FlexDivCol = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  marginBottom: 10,
});

const CardImg = styled("img")({
  width: "70%",
  height: "70%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CardTitle = (prop) => {
  return (
    <>
      <FlexDiv>
        <titleStyle>{prop.title}</titleStyle>
      </FlexDiv>
    </>
  );
};

const CardBodyTypeRow = (prop) => {
  const titleStyle = styled("span")({
    fontSize: 28,
    color: blueGrey[700],
    fontWeight: 600,
  });
  const subTitleStyle = styled("span")({
    fontSize: 14,
    color: grey[400],
    fontWeight: 400,
  });
  return (
    <>
      <FlexDiv style={{ marginTop: 10, marginBottom: 10 }}>
        <Box
          sx={{
            display: "flex",
            border: `1px solid ${grey[200]}`,
            borderRadius: 1,
            width: "150px",
            height: "150px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardImg src={prop.img} />
        </Box>
        <FlexDivCol>
          <titleStyle>{prop.title}</titleStyle>
          <subTitleStyle>{prop.subTitle}</subTitleStyle>
        </FlexDivCol>
      </FlexDiv>
    </>
  );
};

const SearchResultHeader = (prop) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1000px",
        height: "100%",
        minHeight: "250px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${grey[300]}`,
        boxShadow: `0 3px 3px -1px ${grey[200]}`,
        borderRadius: 2,
        p: 3,
      }}
    >
      <CardTitle title="제품 검색결과" />
      <Divider />

      {prop.result.map((item) => (
        <div>
          <CardBodyTypeRow
            title={item.name}
            img={item.thumb}
            subTitle={item.attrs}
          />
        </div>
      ))}
    </Box>
  );
};

export default SearchResultHeader;
