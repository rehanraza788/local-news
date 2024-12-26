import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Card, CardContent, Divider, CardMedia } from "@mui/material";

export const LifeStyle = () => {
  return (
    <>
      {/* tittle */}
      <Box sx={{ margin: "10px 0 0 80px" }}>
        <Typography variant="h6" color="initial" sx={{ fontWeight: "bold" }}>
          लाइफस्टाइल न्यूज़
        </Typography>
        <Divider sx={{ borderBottomWidth: 5, width: "8%", marginTop: "5px" }} />
      </Box>

      {/* card */}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ width: "550px", marginBottom: "20px" }}>
          <CardContent>
            <Typography variant="body2" color="red">
              LIFE STYLE
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            title="img"
            image="https://www.jagranimages.com/images/newimg/26122024/26_12_2024-jaggery_purity_test_23856199.webp"
            width="400px"
          />
          <CardContent>
            <Typography variant="h5" fontWeight={"bold"} color="initial">
              कहीं सर्दियों में आप भी तो नहीं खा रहे हैं मिलावटी गुड़, घर बैठे
              इन आसान तरीकों से करें टेस्ट
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
