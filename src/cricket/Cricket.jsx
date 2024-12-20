import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export const Cricket = () => {
  return (
    <>
      <Box>
        <Typography
          variant="h4"
          color="initial"
          sx={{ marginTop: "10px", marginLeft: "70px", fontWeight: "bold" }}
        >
          क्रिकेट न्यूज़
        </Typography>
        <Divider
          sx={{
            border: "5px solid black",
            width: "90%",
            marginLeft: "70px",
            marginBottom: "5px"
          }}
        />
        <Divider
          sx={{ border: "2px solid black", width: "90%", marginLeft: "70px" }}
        />
      </Box>

      <Box></Box>
    </>
  );
};
