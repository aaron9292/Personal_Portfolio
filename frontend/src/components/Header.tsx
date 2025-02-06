import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

function smoothScrollTo(id: string) {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 64, // Adjust for navbar height
      behavior: 'smooth',
    });
  }
}

function Header() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: 2 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', px: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>
            Portfolio
          </Typography>
          <Button onClick={() => smoothScrollTo('education')} sx={{ color: 'black' }}>
            Education
          </Button>
          <Button onClick={() => smoothScrollTo('skills')} sx={{ color: 'black' }}>
            Skills
          </Button>
          <Button onClick={() => smoothScrollTo('work-experience')} sx={{ color: 'black' }}>
            Experience
          </Button>
          <Button onClick={() => smoothScrollTo('projects')} sx={{ color: 'black' }}>
            Projects
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
