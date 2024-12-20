import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import bestStories from "../News api/bestStories.json";

export const Stories = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "20px"
      }}
    >
      <Typography
        variant="h3"
        color="primary"
        align="center"
        sx={{
          fontWeight: "bold",
          marginBottom: "30px",
          fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" }
        }}
      >
        Best Stories
      </Typography>

      {/* Responsive Stories Grid */}
      <Grid container spacing={1}>
        {bestStories.map((curStory, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px"
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "300px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                position: "relative",
                textAlign: "center",
                transition: "transform 0.3s ease", // Smooth transition for hover effect
                "&:hover": {
                  transform: "scale(1.05)" // Slightly enlarges the card on hover
                }
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "450px",
                  overflow: "hidden",
                  position: "relative",
                  "&:hover img": {
                    transform: "scale(1.1)" // Zoom in effect on hover
                  }
                }}
              >
                <img
                  src={curStory.image}
                  alt="Story"
                  style={{
                    width: "100%",
                    height: "450px",
                    objectFit: "cover",
                    transition: "transform 0.3s ease" // Smooth zoom effect
                  }}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  left: "10px",
                  right: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px"
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", fontSize: "1rem" }}
                >
                  {curStory.story}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontSize: "0.9rem", marginTop: "5px" }}
                >
                  {curStory.date}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
