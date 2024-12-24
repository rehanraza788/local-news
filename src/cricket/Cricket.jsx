import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Cricket = () => {
  return (
    <>
      <Box>
        {/* Cricket news heading */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-around",
            // gap: "740px",
            alignItems: "center",
            textAlign: "center",
            flexWrap: "wrap",
            padding: "10px 20px"
          }}
        >
          {/* Heading */}
          <Box>
            <Typography
              variant="h4"
              sx={{
                marginTop: "10px",
                fontWeight: "bold",
                textAlign: { xs: "center", sm: "left" }
              }}
            >
              क्रिकेट न्यूज़
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              display: "flex",
              gap: { xs: "10px", sm: "20px" },
              marginTop: { xs: "10px", sm: "0" },
              fontWeight: "bold",
              flexWrap: "wrap"
            }}
          >
            <Link
              to="news"
              style={{
                textDecoration: "none",
                fontSize: "16px"
              }}
            >
              न्यूज़
            </Link>
            <Link
              to="schedule"
              style={{
                textDecoration: "none",
                fontSize: "16px"
              }}
            >
              शेड्यूल
            </Link>
            <Link
              to="team"
              style={{
                textDecoration: "none",
                fontSize: "16px"
              }}
            >
              टीम
            </Link>
            <Link
              to="ranking"
              style={{
                textDecoration: "none",
                fontSize: "16px"
              }}
            >
              रैंकिंग
            </Link>
          </Box>
        </Box>

        {/* Dividers */}
        <Divider
          sx={{
            border: "5px solid black",
            width: "90%",
            margin: "5px auto"
          }}
        />
        <Divider
          sx={{
            border: "2px solid black",
            width: "90%",
            margin: "0 auto 5px"
          }}
        />
      </Box>

      {/* Outlet for Nested Routes */}
      <Box sx={{ padding: "10px" }}></Box>
      <Outlet />
    </>
  );
};
