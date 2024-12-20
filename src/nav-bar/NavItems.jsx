import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CityList from "./CityList";
import {
  Box,
  Typography,
  Drawer,
  Button,
  Divider,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  List,
  ListItemText
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useNavigate } from "react-router-dom";

export const NavItems = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [filterCity, setFilterCity] = useState("");
  const [filteredCityList, setFilteredCityList] = useState(CityList);

  // Function to handle drawer toggle
  const toggleDrawer = (open) => (event) => {
    // Close drawer if ESC key or mouse click happens outside
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  // Search box
  const handleClickSearch = () => {
    setOpenSearch(true);
  };
  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  // Filtered search city
  const handleChangeCityList = (e) => {
    const filCity = e.target.value.toLowerCase();
    setFilterCity(filCity);

    // Perform the filter on the original CityList
    const newFilteredCityList = CityList.filter((curCity) =>
      curCity.toLowerCase().includes(filCity)
    );
    setFilteredCityList(newFilteredCityList);
  };

  // handle Stories

  const navigation = useNavigate();

  const handleStories = () => {
    navigation("/stories");
  };

  // handle videos

  const handleVideo = () => {
    navigation("/video");
  };

  // handle e-paper

  const handlePaper = () => {
    navigation("/paper");
  };

  // Icon data for navigation items
  const navIcons = [
    {
      icon: <LocationOnIcon fontSize="large" onClick={toggleDrawer(true)} />,
      label: "Location"
    },
    {
      icon: <NewspaperIcon fontSize="large" onClick={handlePaper} />,
      label: "E-paper"
    },
    {
      icon: <AutoStoriesIcon fontSize="large" onClick={handleStories} />,
      label: "Stories"
    },
    {
      icon: <YouTubeIcon fontSize="large" onClick={handleVideo} />,
      label: "YouTube"
    },
    {
      icon: <SearchIcon fontSize="large" onClick={handleClickSearch} />,
      label: "Search"
    }
  ];

  const mainHeadings = [
    "Home",
    "Fresh",
    "Election",
    "Breaking",
    "World",
    "Entertainment",
    "Cricket",
    "Life Style",
    "More ▶️"
  ];

  return (
    <>
      <Box sx={{ padding: "8px 0" }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "90%" },
            margin: "0 auto",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            border: "2px solid #ddd",
            overflow: "hidden",
            backgroundColor: "#ffffff"
          }}
        >
          {/* Left Section (Headings) */}
          <Box
            sx={{
              width: { xs: "100%", sm: "65%" },
              display: "flex",
              flexWrap: "wrap",
              justifyContent: { xs: "center", sm: "space-between" },
              alignItems: "center",
              padding: "15px",
              borderRight: { xs: "none", sm: "2px solid #ddd" },
              backgroundColor: "#f5f5f5"
            }}
          >
            {mainHeadings.map((heading, index) => (
              <Typography
                key={index}
                variant="body2"
                sx={{
                  margin: "4px",
                  padding: "6px 12px",
                  cursor: "pointer",
                  fontSize: { xs: "12px", sm: "14px" },
                  fontWeight: 500,
                  textAlign: "center",
                  borderRadius: "4px",
                  transition: "background-color 0.3s, transform 0.3s",
                  "&:hover": {
                    backgroundColor: "#d32f2f",
                    color: "#ffffff",
                    transform: "scale(1.1)"
                  },
                  textDecoration: "none"
                }}
              >
                <NavLink
                  to={
                    heading === "Fresh"
                      ? "/fresh"
                      : heading === "Election"
                      ? "/election"
                      : heading === "Breaking"
                      ? "/"
                      : heading === "World"
                      ? "/world"
                      : heading === "Entertainment"
                      ? "/entertainment"
                      : heading === "Cricket"
                      ? "/cricket"
                      : heading === "Life Style"
                      ? "/lifestyle"
                      : heading === "More ▶️"
                      ? "/more"
                      : "/"
                  }
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {heading}
                </NavLink>
              </Typography>
            ))}
          </Box>

          {/* Right Section (Icons) */}
          <Box
            sx={{
              width: { xs: "100%", sm: "35%" },
              height: "70px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "#b3e5fc"
            }}
          >
            {navIcons.map(({ icon, label }, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px",
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.1)"
                  }
                }}
              >
                {icon}
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "10px", sm: "12px" }
                  }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* Drawer Component */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 280, padding: 2, marginLeft: "5px" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>
            Location list
            <Divider />
          </Typography>
          {CityList.map((currCity) => {
            return (
              <Typography sx={{ fontSize: "22px", cursor: "pointer" }}>
                <Button>{currCity}</Button>
              </Typography>
            );
          })}
        </Box>
      </Drawer>
      {/* Dialog */}

      <Dialog open={openSearch} onClose={handleCloseSearch}>
        <DialogTitle
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <TextField
            sx={{ width: "380px", fontWeight: "bold" }}
            id="standard-basic"
            label="search"
            variant="standard"
            onChange={handleChangeCityList}
            value={filterCity}
          />
          <Button onClick={handleCloseSearch}>
            <CloseIcon />
          </Button>
        </DialogTitle>
        <DialogContent>
          <Typography
            variant="h6"
            color="black"
            sx={{ fontWeight: "bold", fontFamily: "-moz-initial" }}
          >
            City Lists
          </Typography>
          <List>
            {filteredCityList.length > 0 ? (
              filteredCityList.map((city, index) => {
                return (
                  <ListItemText key={index}>
                    <Button> {city} </Button>
                  </ListItemText>
                );
              })
            ) : (
              <p> No city Found </p>
            )}
          </List>
        </DialogContent>
      </Dialog>
    </>
  );
};
