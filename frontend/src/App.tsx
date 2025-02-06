import React from 'react';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import { Box, Typography } from '@mui/material';

function App() {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        overflowX: 'hidden',
        backgroundColor: 'white', // Ensures no transparent background anywhere
      }}
    >
      {/* Header */}
      <Header />

      {/* Landing Page Background */}
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
          backgroundImage: "url('/logos/dallas1.jpeg')", // Path for landing page background
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
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

      {/* About Me Section */}
      <Box>
        <AboutMe />
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          backgroundColor: 'white',
        }}
      >
        {/* Education Section */}
        <Box id="education" sx={{ paddingY: 6 }}>
          <Education />
        </Box>

        {/* Skills Section */}
        <Box id="skills" sx={{ paddingY: 6 }}>
          <Skills />
        </Box>

        {/* Work Experience Section */}
        <Box id="work-experience" sx={{ paddingY: 6 }}>
          <WorkExperience />
        </Box>

        {/* Projects Section */}
        <Box id="projects" sx={{ paddingY: 6 }}>
          <Projects />
        </Box>

        {/* Contact Me Section */}
        <Box
          id="contact"
          sx={{
            position: 'relative',
            backgroundImage: "url('/logos/contact-background.jpg')", // Path for contact page background
            backgroundSize: 'auto 50%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh', // Ensure full viewport height
            width: '100%',
            margin: 0,
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ContactMe />
        </Box>
      </Box>
    </div>
  );
}

export default App;
