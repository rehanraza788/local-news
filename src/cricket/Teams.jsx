import React from "react";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export const Teams = () => {
  const teams = [
    { img: "/public/flags/india.jpg", country: "भारत" },
    { img: "/public/flags/australia.png", country: "ऑस्ट्रेलिया" },
    { img: "/public/flags/bangladesh.png", country: "बांग्लादेश" },
    { img: "/public/flags/england.png", country: "इंगलैंड" },
    { img: "/public/flags/namibia.png", country: "नामिबिया" },
    { img: "/public/flags/pakistan.jpg", country: "पाकिस्तान" },
    { img: "/public/flags/scotland.png", country: "स्कॉटलैंड" },
    { img: "/public/flags/south africa.png", country: "दक्षिण अफ़्रीका" },
    { img: "/public/flags/srilnka.png", country: "श्रीलंका" },
    { img: "/public/flags/westindies.png", country: "वेस्टंडीज" },
    { img: "/public/flags/zimbabwe.png", country: "ज़िम्बाब्वे" }
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
        backgroundColor: "#f9f9f9"
      }}
    >
      {teams.map((team, index) => (
        <Card
          key={index}
          sx={{
            flex: {
              xs: "1 1 100%", // One card per row on mobile
              sm: "1 1 calc(50% - 20px)" // Two cards per row on larger screens
            },
            maxWidth: "500px",
            display: "flex",
            alignItems: "center",
            padding: "10px",
            gap: "10px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            backgroundColor: "#fff"
          }}
        >
          <Box
            component="img"
            src={team.img}
            alt="flag"
            sx={{
              width: "60px",
              height: "auto",
              borderRadius: "5px",
              border: "2px solid #ddd"
            }}
          />
          <Box sx={{ flex: 1 }}>
            <CardContent sx={{ padding: "0" }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ color: "#333", fontSize: { xs: "16px", sm: "18px" } }}
              >
                {team.country}
              </Typography>
            </CardContent>
          </Box>
          <Button
            sx={{
              color: "#1976d2",
              "&:hover": { color: "#115293" }
            }}
          >
            <ArrowCircleRightIcon fontSize="large" />
          </Button>
        </Card>
      ))}
    </Box>
  );
};
