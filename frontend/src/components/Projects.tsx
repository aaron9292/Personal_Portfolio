import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Button, Chip } from '@mui/material';
import { GitHub } from '@mui/icons-material';

function Projects() {
  const projects = [
    {
      name: 'E-commerce Platform',
      description:
        'Built a full-stack e-commerce platform with React, Node.js, and PostgreSQL. Implemented features like user authentication, product catalog, and shopping cart functionality.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Redux'],
      github: 'https://github.com/username/e-commerce',
    },
    {
      name: 'Machine Learning Image Classifier',
      description:
        'Developed a machine learning model using TensorFlow to classify images. Created a web interface for users to upload and classify images in real-time.',
      technologies: ['Python', 'TensorFlow', 'Flask', 'React', 'Docker'],
      github: 'https://github.com/username/ml-image-classifier',
    },
    {
      name: 'Real-time Chat Application',
      description:
        'Created a real-time chat application using WebSocket technology. Features include private messaging, group chats, and file sharing.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'TypeScript'],
      github: 'https://github.com/username/real-time-chat',
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
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  {project.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray', mb: 2 }}>
                  {project.description}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1,
                    justifyContent: 'center', // Ensures Chips are centered
                    mb: 2,
                    fontWeight: 'bold'
                  }}
                >
                  {project.technologies.map((tech, i) => (
                    <Chip key={i} label={tech} color="primary" />
                  ))}
                </Box>
              </CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
                <Button
                    variant="contained" // Use a filled background for better visibility
                    size="small"
                    href={project.github}
                    target="_blank"
                    startIcon={<GitHub />}
                    sx={{ textTransform: 'none', backgroundColor: 'black', color: 'white', '&:hover': { backgroundColor: 'gray' } }}
                >
                  GitHub
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;
