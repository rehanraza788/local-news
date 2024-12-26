import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Card, CardContent, Divider, CardMedia } from "@mui/material";
export const Election = () => {
  return (
    <>
      {/* tittle */}
      <Box sx={{ margin: "10px 0 0 80px" }}>
        <Typography variant="h6" color="initial" sx={{ fontWeight: "bold" }}>
          राजनीति न्यूज़
        </Typography>
        <Divider sx={{ borderBottomWidth: 5, width: "8%", marginTop: "5px" }} />
      </Box>

      {/* card */}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ width: "550px", marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="body2" color="red">
              POLITIC
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            title="img"
            image="	https://www.jagranimages.com/images/newimg/26122024/26_12_2024-supriya_sule_23856254.webp"
            width="400px"
          />
          <CardContent>
            <Typography variant="h5" fontWeight={"bold"} color="initial">
              'मैं चार बार लोकसभा चुनाव जीती, कैसे कह सकती हूं EVM में गड़बड़ी
              है', सुप्रिया सुले ने 'अपनों' को दिखाया आईना
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
