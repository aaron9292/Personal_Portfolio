import React from 'react';
import AboutMe from "./components/AboutMe";
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import { Box, Typography } from '@mui/material';

function App() {
  return (
    <div style={{ margin: 0, padding: 0, boxSizing: 'border-box', overflowX: 'hidden' }}>
      {/* Header */}
      <Header />

      {/* Background Section */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        {/* Page Title */}
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
          }}
        >
          Aaron Xu
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: 'white',
            mt: 2,
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.8)',
          }}
        >
          Grad Student - Software Engineer - AI/ML Developer
        </Typography>
      </Box>
      
      <Box>
        <AboutMe />
      </Box>
      {/* Main Content - Ensures Sections Load Properly */}
      <Box
        sx={{
          position: 'relative', // Ensures it's above the background
          zIndex: 2, // Keeps it above everything
          backgroundColor: 'white', // Prevents transparency issues
          paddingY: 6,
        }}
      >
        <Box id="education" sx={{ paddingY: 6 }}>
          <Education />
        </Box>

        <Box id="skills" sx={{ paddingY: 6 }}>
          <Skills />
        </Box>

        <Box id="work-experience" sx={{ paddingY: 6 }}>
          <WorkExperience />
        </Box>

        <Box id="projects" sx={{ paddingY: 6 }}>
          <Projects />
        </Box>
      </Box>
    </div>
  );
}

export default App;
