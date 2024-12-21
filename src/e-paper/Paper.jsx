import { Box, Button, Typography } from "@mui/material";
import paper from "../News api/paper.json";
import React from "react";

export const Paper = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "80px"
      }}
    >
      {paper.map((ePaper, index) => {
        return (
          <>
            <Box sx={{ textAlign: "center" }} key={index}>
              <Box>
                <Typography
                  variant="h5"
                  color="initial"
                  sx={{ fontWeight: "bold" }}
                >
                  {ePaper.city}
                </Typography>
                <img src={ePaper.image} alt="" width={250} />
                <Typography
                  variant="h6"
                  color="initial"
                  sx={{
                    fontWeight: "bold",
                    border: "2px solid black",
                    color: "white",
                    backgroundColor: "black"
                  }}
                >
                  {ePaper.date}
                </Typography>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  href={ePaper.pdf}
                  sx={{ marginY: "10px" }}
                >
                  download e-paper
                </Button>
              </Box>
            </Box>
          </>
        );
      })}
    </Box>
  );
};
