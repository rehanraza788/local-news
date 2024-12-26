import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export const Ranking = () => {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <img src="/public/icc logo.png" width={40} alt="logo" />
          <Typography variant="body1" color="initial" fontWeight={"bold"}>
            ICC रैंकिंग
          </Typography>
        </Box>
        <Box>
          <NavLink to="odi">
            <Button
              sx={{
                borderRadius: "30px",
                width: "80px",
                backgroundColor: "green",
                color: "white"
              }}
            >
              ODI
            </Button>
          </NavLink>
          &nbsp;
          <NavLink to="test">
            <Button
              sx={{
                borderRadius: "30px",
                width: "80px",
                backgroundColor: "green",
                color: "white"
              }}
            >
              Test
            </Button>
          </NavLink>
          &nbsp;
          <NavLink to="t20">
            <Button
              sx={{
                borderRadius: "30px",
                width: "80px",
                backgroundColor: "green",
                color: "white"
              }}
            >
              t20
            </Button>
          </NavLink>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};
