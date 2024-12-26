import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export const Schedule = () => {
  return (
    <Box sx={{ padding: { xs: "10px", sm: "20px", md: "30px" } }}>
      {/* Heading Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
          flexWrap: "wrap",
          gap: "10px" // Ensure spacing between elements for small screens
        }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ fontSize: { xs: "18px", sm: "20px", md: "24px" } }}
        >
          क्रिकेट शेड्यूल
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: "20px",
            width: { xs: "120px", sm: "150px", md: "180px" },
            fontSize: { xs: "12px", sm: "14px", md: "16px" }
          }}
        >
          आगामी मैच
        </Button>
      </Box>

      {/* Card Section */}
      <Box>
        <Card
          sx={{
            marginTop: "20px",
            marginX: { xs: "10px", sm: "50px", md: "300px" }
          }}
        >
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              चौथा टेस्ट
            </Typography>
            <Box sx={{ marginTop: "20px" }}>
              {/* Team India */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexWrap: "wrap"
                }}
              >
                <img
                  src="/public/flags/india.jpg"
                  alt="India Flag"
                  width={50}
                  style={{ borderRadius: "5px" }}
                />
                <Typography variant="h6" fontWeight="bold">
                  भारत
                </Typography>
              </Box>

              {/* Spacer */}
              <Box sx={{ height: "10px" }} />

              {/* Team Australia */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  flexWrap: "wrap"
                }}
              >
                <img
                  src="/public/flags/australia.png"
                  alt="Australia Flag"
                  width={50}
                  style={{ borderRadius: "5px" }}
                />
                <Typography variant="h6" fontWeight="bold">
                  ऑस्ट्रेलिया
                </Typography>
              </Box>

              {/* Spacer */}
              <Box sx={{ height: "20px" }} />

              {/* Match Details */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "10px"
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  मेलबर्न क्रिकेट ग्राउंड (एमसीजी), मेलबर्न
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  26-Dec-2024 5:00 AM
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
