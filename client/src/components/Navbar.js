import React from "react";
import { AppBar, Toolbar, Button, Typography, Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = true; // Replace with actual authentication logic
  const isAdmin = true; // Replace with role-based logic

  const handleLogout = () => {
    console.log("User logged out");
    // Add your logout logic here
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo or Title */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "inherit",
            fontWeight: "bold",
          }}
        >
          MyApp
        </Typography>

        {/* Navigation Links */}
        <Stack direction="row" spacing={2}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ textTransform: "none" }}
          >
            Home
          </Button>
          {!isLoggedIn && (
            <>
              <Button
                color="inherit"
                component={Link}
                to="/login"
                sx={{ textTransform: "none" }}
              >
                Login
              </Button>
              <Button
                color="inherit"
                component={Link}
                to="/signup"
                sx={{ textTransform: "none" }}
              >
                Sign Up
              </Button>
            </>
          )}
          {isLoggedIn && (
            <>
              {isAdmin && (
                <Button
                  color="inherit"
                  component={Link}
                  to="/admin"
                  sx={{ textTransform: "none" }}
                >
                  Admin
                </Button>
              )}
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{ textTransform: "none" }}
              >
                Logout
              </Button>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
