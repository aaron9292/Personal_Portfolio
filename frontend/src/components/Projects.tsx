import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import { Box, Typography, Card, CardContent, Grid, Button, Chip } from '@mui/material';
import { GitHub } from '@mui/icons-material';

function Projects() {
  const navigate = useNavigate(); // React Router hook for navigation

  const projects = [
    {
      id: 'ai-emotion',
      name: 'AI Emotion Video Generator',
      description: 'An AI short-form video generator',
      technologies: ['Python', 'Hugging Face', 'OpenAI Whisper', 'FFmpeg'],
      github: 'https://github.com/aaron9292/Emotion-Video-App',
    },
    {
      id: 'game-agent',
      name: 'AI Game Agent',
      description: 'A deep learning game agent for Touhou',
      technologies: ['Python', 'PyTorch', 'Stable-Baseline3', 'OpenCV'],
      github: 'https://github.com/choutianxius/th14-rl',
    },
    {
      id: 'stock-forecast',
      name: 'Stock Forecasting Model',
      description: 'A stock movement prediction model',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'MatPlotLib'],
      github: 'https://github.com/aaron9292/Stock_Prediction',
    },
  ];

  return (
    <Box id="projects" sx={{ padding: 4, textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Projects
      </Typography>

      {/* Grid Layout for Project Cards */}
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                boxShadow: 3,
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer', // Makes the card clickable
                '&:hover': {
                  transform: 'scale(1.02)', // Adds a hover effect
                  transition: 'transform 0.2s',
                },
              }}
              onClick={() => navigate(`/project/${project.id}`)} // Navigate to details page
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {project.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray', mb: 2 }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 2, fontWeight: 'bold'}}>
                  {project.technologies.map((tech, i) => (
                    <Chip key={i} label={tech} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
