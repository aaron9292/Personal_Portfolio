import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

function Header() {
  return (
    <AppBar
      position="fixed"
      elevation={1} // Adds a slight shadow to the navbar
      sx={{
        backgroundColor: "#DEBFAA", // Beige background color
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "white" }} // Black text for the logo
        >
          Aaron Xu
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button href="#education" sx={{ color: "white", fontWeight: "bold" }}>
            Education
          </Button>
          <Button href="#skills" sx={{ color: "white", fontWeight: "bold" }}>
            Skills
          </Button>
          <Button
            href="#work-experience"
            sx={{ color: "white", fontWeight: "bold" }}
          >
            Experience
          </Button>
          <Button href="#projects" sx={{ color: "white", fontWeight: "bold" }}>
            Projects
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
