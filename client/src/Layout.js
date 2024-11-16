import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Box, Container } from "@mui/material";

const Layout = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Container component="main" sx={{ flex: 1, marginTop: 4 }}>
        <Outlet />
      </Container>

      {/* Footer (Optional) */}
      <Box
        component="footer"
        sx={{
          textAlign: "center",
          padding: 2,
          backgroundColor: "primary.main",
          color: "white",
        }}
      >
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </Box>
    </Box>
  );
};

export default Layout;
