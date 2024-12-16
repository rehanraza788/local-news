import { Visibility, VisibilityOff, Email, Phone } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClick = () => {
    alert("login successfully");
  };

  return (
    <Box
      sx={{
        width: { xs: "90%", md: "65%" },
        height: "10%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        margin: "auto",
        p: 3,
        mt: 4,
        borderRadius: 2
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "45%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: { xs: 3, md: 0 }
        }}
      >
        <img
          src="/public/images/new-1.jpg"
          alt="image"
          style={{
            width: "100%",
            height: "550px",
            objectFit: "cover"
          }}
        />
      </Box>

      {/* Form Section */}
      <Box
        sx={{
          width: { xs: "100%", md: "45%", backgroundColor: "#e0f2f1" },
          height: "550px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          boxShadow: { xs: 0, md: 1 }
        }}
      >
        <Typography
          variant="h6"
          color="primary"
          sx={{ mb: 2, fontWeight: 600 }}
        >
          {hasAccount ? "Login" : "Sign Up"}
        </Typography>

        {/* Conditionally render the fields based on `hasAccount` */}
        {!hasAccount && (
          <Box
            sx={{
              width: "100%",
              mb: 2,
              display: "flex",
              gap: 1
            }}
          >
            <TextField
              required
              label="First Name"
              fullWidth
              variant="outlined"
            />
            <TextField
              required
              label="Last Name"
              fullWidth
              variant="outlined"
            />
          </Box>
        )}

        <FormControl variant="outlined" fullWidth sx={{ mb: 2 }} required>
          <InputLabel>Email</InputLabel>
          <OutlinedInput
            required
            endAdornment={
              <InputAdornment position="end">
                <Email color="action" />
              </InputAdornment>
            }
            label="Email"
          />
        </FormControl>

        {/* Mobile Number Field with Phone Icon on the Right */}
        {!hasAccount && (
          <FormControl variant="outlined" fullWidth sx={{ mb: 2 }}>
            <InputLabel>Mobile Number</InputLabel>
            <OutlinedInput
              endAdornment={
                <InputAdornment position="end">
                  <Phone color="action" />
                </InputAdornment>
              }
              label="Mobile Number"
            />
          </FormControl>
        )}

        <FormControl variant="outlined" fullWidth sx={{ mb: 2 }} required>
          <InputLabel required>Password</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          fullWidth
        >
          {hasAccount ? "Login" : "Sign Up"}
        </Button>
        <Typography
          variant="body2"
          sx={{ mt: 2, cursor: "pointer", color: "text.error" }}
          onClick={() => setHasAccount((prev) => !prev)}
        >
          {hasAccount
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </Typography>
      </Box>
    </Box>
  );
};
