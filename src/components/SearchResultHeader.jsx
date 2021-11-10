import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { blueGrey, grey } from "@mui/material/colors";
import React from "react";

const SearchResultHeader = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1000px",
        height: "250px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${grey[300]}`,
        boxShadow: `0 3px 3px -1px ${grey[200]}`,
        borderRadius: 2,
      }}
    ></Box>
  );
};

export default SearchResultHeader;
