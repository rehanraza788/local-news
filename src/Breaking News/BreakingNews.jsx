import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import breakingNewsData from "../News api/breakingNewsData.json";
import { Box, Divider } from "@mui/material";

export const BreakingNews = () => {
  return (
    <>
      <Box sx={{ marginLeft: "11%", marginTop: "20px  " }}>
        <Typography variant="h4" color="error" sx={{ fontWeight: "bold" }}>
          Breaking News
        </Typography>
        <Divider
          sx={{
            width: "19%",
            borderBottomWidth: "6px",
            borderColor: "#827f78"
          }}
        />
      </Box>
      <Box
        style={{
          display: "flex",
          flexWrap: "wrap", // Makes the cards wrap to the next row on smaller screens
          justifyContent: "center", // Centers the cards
          gap: "16px", // Space between cards
          padding: "16px" // Adds padding around the container
        }}
      >
        {breakingNewsData.map((curNews, index) => (
          <Card
            key={index} // Ensure each card has a unique key
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: 500, md: 600 },
              boxShadow: 3,
              borderRadius: "8px", // Rounded corners
              overflow: "hidden", // Ensures media fits nicely
              transition: "transform 0.2s, box-shadow 0.2s", // Smooth hover animation
              "&:hover": {
                transform: "scale(1.03)", // Slightly enlarge the card on hover
                boxShadow: 6 // Increase shadow depth on hover
              }
            }}
          >
            <CardActionArea
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Stacks content on small screens, side-by-side on larger screens
                alignItems: "center", // Centers content vertically
                height: "100%"
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  height: { xs: "200px", sm: "130px" },
                  width: "100%",
                  maxWidth: { sm: "200px" },
                  objectFit: "cover"
                }}
                image={curNews.image} // Replace with your image URL
                alt="news image"
              />
              <CardContent
                sx={{
                  padding: { xs: "8px", sm: "16px" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: { xs: "16px", sm: "18px" },
                    fontWeight: "bold",
                    marginBottom: "8px",
                    textAlign: { xs: "center", sm: "left" },
                    color: "text.primary"
                  }}
                >
                  {/* Display a title */}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "14px", sm: "16px" },
                    textAlign: { xs: "center", sm: "left" }
                  }}
                >
                  {curNews.news}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
};
