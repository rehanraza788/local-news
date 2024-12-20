import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Redirect to the home page or any desired route
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        bgcolor: "#f5f5f5",
        padding: { xs: 2, sm: 4 }
      }}
    >
      {/* Emoji with Header */}
      <Typography
        variant="h1"
        color="primary"
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "4rem", sm: "6rem", md: "8rem" }
        }}
      >
        404
        <span role="img" aria-label="confused face" style={{ marginLeft: 10 }}>
          😕
        </span>
      </Typography>

      {/* Subheading */}
      <Typography
        variant="h5"
        sx={{
          marginY: { xs: 1, sm: 2 },
          color: "#555",
          fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }
        }}
      >
        Oops! The page you're looking for doesn't exist.
      </Typography>

      {/* Decorative Emoji */}
      <Typography
        variant="body1"
        sx={{
          color: "#888",
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" },
          marginBottom: { xs: 3, sm: 4 }
        }}
      >
        Something went wrong. Let's get you back on track! 🚀✨
      </Typography>

      {/* CTA Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoBack}
        sx={{
          padding: { xs: "8px 16px", sm: "10px 20px" },
          fontSize: { xs: "0.9rem", sm: "1rem" },
          textTransform: "none"
        }}
      >
        Go Back to Home 🏠
      </Button>

      {/* Footer Emoji for Style */}
      <Typography
        variant="body2"
        sx={{
          position: "absolute",
          bottom: "10px",
          color: "#aaa",
          fontSize: { xs: "0.7rem", sm: "0.8rem", md: "1rem" }
        }}
      ></Typography>
    </Box>
  );
};
