import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Card, CardContent, Divider, CardMedia } from "@mui/material";

export const Entertainment = () => {
  return (
    <>
      {/* tittle */}
      <Box sx={{ margin: "10px 0 0 80px" }}>
        <Typography variant="h6" color="initial" sx={{ fontWeight: "bold" }}>
          मनोरंजन न्यूज़
        </Typography>
        <Divider sx={{ borderBottomWidth: 5, width: "8%", marginTop: "5px" }} />
      </Box>

      {/* card */}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ width: "550px", marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="body2" color="red">
              ENTERTAINMENT
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            title="img"
            image="https://www.jagranimages.com/images/newimg/26122024/26_12_2024-karan_and_vivian_fight_1_23856169.webp"
            width="400px"
          />
          <CardContent>
            <Typography variant="h5" fontWeight={"bold"} color="initial">
              Bigg Boss 18: शो डाउन शुरू हो गया! Karanveer Mehra और विवियन
              डीसेना का हुआ झगड़ा, दोनों की दुश्मन ने लगाई आग
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
