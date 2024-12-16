import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

export const BreakingNews = ({ currBreak, index }) => {
  // console.log(currBreak);

  return (
    <>
      <Card
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: 500, md: 600 },
          margin: "10px", // Margin to space out the cards
          boxShadow: 3 // Adding some shadow to the cards for better visibility
        }}
        key={index}
      >
        <CardActionArea
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" }, // Stacked on small screens, side by side on larger screens
            height: "100%"
          }}
        >
          <CardMedia
            component="img"
            sx={{
              height: { xs: "200px", sm: "130px" }, // Responsive height
              width: "100%",
              maxWidth: { sm: "200px" }, // On small screens, full width. On larger screens, set max-width for image.
              objectFit: "cover" // Ensure image covers the area
            }}
            image={currBreak.image} // Replace with your image URL
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
              variant="body2"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "14px", sm: "16px" },
                textAlign: { xs: "center", sm: "left" } // Center text on small screens, left-align on larger screens
              }}
            >
              {currBreak.news}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};
