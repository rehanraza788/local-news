import { Box, Button, Typography } from "@mui/material";
import React from "react";

export const Paper = () => {
  const ePaper = [
    {
      image: "/public/e-newPaper/लखनऊ-20-Dec-2024-page-1_page-0001.jpg",
      pdf: "/public/e-newPaper/लखनऊ-20-Dec-2024.pdf",
      city: "लखनऊ",
      date: "20 DEC 2024"
    },
    {
      image: "/public/e-newPaper/लखनऊ-19-Dec-2024-page-1_page-0001.jpg",
      pdf: "/public/e-newPaper/लखनऊ-19-Dec-2024.pdf",
      city: "लखनऊ",
      date: "19 DEC 2024"
    },
    {
      image: "/public/e-newPaper/लखनऊ-18-Dec-2024-page-1_page-0001.jpg",
      pdf: "/public/e-newPaper/लखनऊ---18-Dec-2024.pdf",
      city: "लखनऊ",
      date: "18 DEC 2024"
    },
    {
      image: "/public/e-newPaper/लखनऊ-17-Dec-2024-page-1_page-0001.jpg",
      pdf: "/public/e-newPaper/लखनऊ-17-Dec-2024.pdf",
      city: "लखनऊ",
      date: "17 DEC 2024"
    },
    {
      image: "/public/e-newPaper/लखनऊ-16-December-2024-page-1_page-0001.jpg",
      pdf: "/public/e-newPaper/लखनऊ-16-December-2024.pdf",
      city: "लखनऊ",
      date: "16 DEC 2024"
    },
    {
      image: "/public/e-newPaper/लखनऊ-15-December-2024-page-1_page-0001.jpg",
      pdf: "/public/e-newPaper/लखनऊ-15-December-2024.pdf",
      city: "लखनऊ",
      date: "15 DEC 2024"
    }
  ];

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
      {ePaper.map((ePaper, index) => {
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
