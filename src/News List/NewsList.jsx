import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FacebookIcon from "@mui/icons-material/Facebook";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Alert, Box, Divider, Snackbar } from "@mui/material";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import NewsListData from "../News api/newsListData.json";
export const NewsList = () => {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(null);

  const handleClick = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleLikeClicked = () => {
    setClick((prevCount) => (prevCount === null ? 1 : prevCount + 1));
  };

  return (
    <>
      <Box sx={{ marginLeft: "11%", marginTop: "20px", marginBottom: "10px" }}>
        <Typography variant="h4" color="error" sx={{ fontWeight: "bold" }}>
          News Lists
        </Typography>
        <Divider
          sx={{
            width: "14%",
            borderBottomWidth: "6px",
            borderColor: "#827f78"
          }}
        />
      </Box>
      {NewsListData.map((currNews, index) => {
        return (
          <Card
            key={index}
            sx={{
              width: "100%",
              maxWidth: 545,
              margin: "auto",
              "@media (max-width: 600px)": {
                maxWidth: "100%"
              },
              marginBottom: "20px"
            }}
          >
            <Typography variant="h6" color="info" padding={"5px"}>
              News Lists
            </Typography>
            <CardMedia
              component="img"
              height="254"
              image={currNews.image}
              alt="News image"
            />
            <CardContent>
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "14px", sm: "16px" },
                  textAlign: "justify"
                }}
              >
                {currNews.news}
              </Typography>
            </CardContent>
            <Divider />
            <CardContent
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="body1" color="text.secondary">
                {currNews.city}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {currNews.date}
              </Typography>
            </CardContent>
            <Divider />

            {/* icons */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                padding: "8px",
                flexWrap: "wrap"
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <IconButton
                  aria-label="like"
                  onClick={() => {
                    handleClick();
                    handleLikeClicked();
                  }}
                >
                  <ThumbUpIcon sx={{ color: "#ffeb3b" }} />
                </IconButton>
                <Typography variant="body2" color="initial">
                  {click}
                </Typography>
              </Box>

              {/* liked alert button */}
              {/* <Snackbar
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  variant="filled"
                  icon={<AiFillLike />} // Custom icon
                >
                  liked {click}
                </Alert>
              </Snackbar> */}

              <IconButton aria-label="facebook">
                <FacebookIcon sx={{ color: "#0866ff" }} />
              </IconButton>
              <IconButton aria-label="bookmark">
                <BookmarkBorderIcon sx={{ color: "green" }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon sx={{ color: "orange" }} />
              </IconButton>
              <IconButton aria-label="more">
                <MoreVertIcon sx={{ color: "black" }} />
              </IconButton>
            </Box>
          </Card>
        );
      })}
    </>
  );
};
