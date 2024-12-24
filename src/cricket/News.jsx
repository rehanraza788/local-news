import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography
} from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ShareIcon from "@mui/icons-material/Share";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import React from "react";

export const News = () => {
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Card sx={{ maxWidth: "500px" }}>
            <CardContent>
              <Typography variant="body1" color="initial">
                BCCI News
              </Typography>
            </CardContent>

            <CardMedia
              sx={{ height: 340, borderRadius: "10px" }}
              title="image"
              image="https://www.jagranimages.com/images/newimg/23122024/23_12_2024-ind_vs_aus_media__23854020.webp"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                IND vs AUS: 'उल्टा चोर कोतवाल को डांटे', अपनी मीडिया की गलती
                छुपा भारतीय क्रिकेटरों को नसीहत दे रहे हैं ऑस्ट्रेलियाई दिग्गज
              </Typography>
              <Typography variant="body2" color="red">
                cricket
              </Typography>
            </CardContent>
            <Divider />
            <CardActions>
              <Button size="small" variant="contained">
                <ThumbUpOutlinedIcon />
              </Button>
              <Button size="small" variant="contained">
                <ThumbDownOffAltIcon />
              </Button>
              <Button size="small" variant="contained">
                <ShareIcon />
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </>
  );
};
