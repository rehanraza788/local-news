import { Button, Grid2, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigation = useNavigate();

  const handleHomeButton = () => {
    navigation("/");
  };

  return (
    <Grid2
      container
      md={12}
      sx={{
        marginTop: "30px",
        marginLeft: "auto", // centers the grid horizontally
        marginRight: "auto", // centers the grid horizontally
        marginBottom: "10px"
      }}
      direction={"row"}
      justifyContent="space-around" // adds space-around for grid items
      alignItems="center" // centers grid items vertically
      // makes the grid responsive (10 columns width)
    >
      <Grid2
        onClick={handleHomeButton}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          cursor: "pointer"
        }}
      >
        <img src="/public/vite.svg" alt="" width={50} />
        <Typography variant="h6" color="initial">
          Localन्यूज़
        </Typography>
      </Grid2>

      {/* login Button */}

      <Grid2>
        <Link to="/sign">
          <Button color="warning">
            <AccountCircleIcon sx={{ fontSize: "50px", cursor: "pointer" }} />
            &nbsp;
            <Typography variant="h5" color="success">
              login
            </Typography>
          </Button>
        </Link>
      </Grid2>
    </Grid2>
  );
};
