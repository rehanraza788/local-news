import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

export const National = () => {
  return (
    <Box>
      <Typography
        sx={{ fontWeight: "bold", marginLeft: "80px" }}
        variant="h5"
        color="initial"
      >
        राष्ट्रीय न्यूज़
      </Typography>

      <Card sx={{ margin: "10px 0 20px 10%", width: "75%", height: "10%" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Box>
            <img
              src="https://www.jagranimages.com/images/newimg/24122024/24_12_2024-weather_update_23854975.webp"
              alt="img"
              width={350}
              height={200}
            />
          </Box>
          <Box>
            <CardContent>
              <Typography
                variant="body1"
                color="initial"
                sx={{ marginTop: "10px", fontWeight: "bold" }}
              >
                दिल्ली, पंजाब और उत्तराखंड के अलावा इन राज्यों में गिरेगा पारा,
                शीतलहर का अलर्ट; पढ़ें IMD लेटेस्ट अपडेट
              </Typography>
              <Typography variant="body2" color="red">
                news
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
