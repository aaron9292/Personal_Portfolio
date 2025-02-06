import React from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import { Box, Typography } from '@mui/material';

function App() {
  return (
    <div>
      <Header />
      <Box
        sx={{
          height: 'calc(100vh - 64px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 2,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Aaron Xu
        </Typography>
        <Typography variant="h6" sx={{ color: 'gray' }}>
          Computer Science Student & Software Engineer
        </Typography>
      </Box>
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
    </div>
  );
}

export default App;
