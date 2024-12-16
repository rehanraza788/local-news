import React from "react";
// import { Navbar } from "./nav-bar/NavBar";
import { Navbar } from "./nav-bar/Navbar";
import { NavItems } from "./nav-bar/NavItems";
import { SignUp } from "./Sign-Up/SignUp";
import { Routes, Route, useLocation } from "react-router-dom";
import { BreakingNews } from "./Breaking News/BreakingNews";
import { Box, Divider, Typography } from "@mui/material";
import { NewsList } from "./News List/NewsList";
import newsData from "./News api/newsData.json";
import breakingNewsData from "./News api/breakingNewsData.json";
import { Stories } from "./stories/Stories";

const App = () => {
  // Get the current route location
  const location = useLocation();

  const isSignUpPage = location.pathname === "/sign";
  const storiesLocation = location.pathname === "/stories";

  return (
    <>
      {/* stories component */}

      {storiesLocation && (
        <div>
          <Stories />
        </div>
      )}

      {/* Conditionally render Navbar and NavItems */}

      {!isSignUpPage && (
        <div>
          <Navbar />
          <NavItems />
          {/* <DrawerComponent /> */}
          <div>
            <Typography
              marginLeft={"10%"}
              marginTop={"2%"}
              variant="h4"
              color="info"
            >
              Breaking News
              <Divider sx={{ border: "3px solid red", width: "17%" }} />
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                margin: "auto",
                justifyContent: "center"
              }}
            >
              {breakingNewsData.map((currBreak, index) => {
                return <BreakingNews currBreak={currBreak} index={index} />;
              })}
            </Box>
          </div>
          {/* end */}
          {/* news List */}
          <div>
            <Typography
              variant="h4"
              color="primary"
              sx={{
                marginTop: "20px",
                marginLeft: "10%",
                marginBottom: "20px"
              }}
            >
              News Lists
              <Divider sx={{ border: "3px solid red", width: "12%" }} />
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "20px",
                justifyContent: "center"
              }}
            >
              {newsData.map((currNews, index) => {
                return <NewsList currNews={currNews} index={index} />;
              })}
            </Box>
          </div>
          {/* end */}
        </div>
      )}

      <Routes>
        <Route path="/sign" element={<SignUp />} />
        {/* <Route path="/stories" element={<Stories />} /> */}
      </Routes>
    </>
  );
};

export default App;
