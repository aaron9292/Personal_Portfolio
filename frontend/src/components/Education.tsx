import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Chip } from '@mui/material';

function Education() {
  const educationData = [
    {
      degree: 'Master of Computer Science',
      school: 'Texas A&M University',
      year: '2024-2026',
      courses: ['Analysis of Algorithms', 'Deep Learning', 'Reinforcement Learning', 'Randomized Algorithms'],
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Texas at Dallas',
      year: '2020-2024',
      courses: ['Data Structures', 'Advanced Algorithms', 'Artificial Intelligence', 'Machine Learning'],
    },
  ];

  return (
    <Box id="education" sx={{ padding: 4, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Education
      </Typography>
      
      {/* Grid Layout for Cards */}
      <Grid 
        container 
        spacing={2} 
        justifyContent="center" 
        alignItems="stretch" // Ensures consistent height
      >
        {educationData.map((edu, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ height: '100%', margin: 'auto', boxShadow: 3, padding: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {edu.degree}
                </Typography>
                <Typography variant="body2" sx={{ color: 'gray', mb: 2 }}>
                  {edu.school} • {edu.year}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', fontWeight: 'bold'}}>
                  {edu.courses.map((course, i) => (
                    <Chip key={i} label={course} variant="outlined" />
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

export default Education;
