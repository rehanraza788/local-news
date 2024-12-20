import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link
} from "@mui/material";
import { Facebook, Twitter, YouTube, Instagram } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#2b2b2b",
        color: "#ffffff",
        paddingY: 4,
        marginTop: "auto"
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1: About */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              About Us
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              We bring the latest and verified news to keep you updated on
              current affairs around the world. Stay connected for accurate and
              timely news.
            </Typography>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              Quick Links
            </Typography>
            <Box>
              <Typography
                variant="body1"
                href=""
                color="inherit"
                underline="hover"
                display="block"
                sx={{ marginBottom: 1, fontFamily: "fantasy" }}
              >
                Home
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                underline="hover"
                display="block"
                sx={{ marginBottom: 1 }}
              >
                World
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                underline="hover"
                display="block"
                sx={{ marginBottom: 1 }}
              >
                Politics
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                underline="hover"
                display="block"
                sx={{ marginBottom: 1 }}
              >
                Technology
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                underline="hover"
                display="block"
                sx={{ marginBottom: 1 }}
              >
                Contact Us
              </Typography>
            </Box>
          </Grid>

          {/* Column 3: Contact */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: support@newschannel.com
            </Typography>
            <Typography variant="body2">Phone: +123 456 789</Typography>
            <Typography variant="body2">
              Address: 123 News St, City, Country
            </Typography>
          </Grid>

          {/* Column 4: Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 2 }}
            >
              Follow Us
            </Typography>
            <Box>
              <IconButton sx={{ color: "#ffffff" }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "#ffffff" }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: "#ffffff" }}>
                <YouTube />
              </IconButton>
              <IconButton sx={{ color: "#ffffff" }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} News Channel. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
