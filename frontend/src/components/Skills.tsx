import React from 'react';
import { Box, Typography, Grid, Chip } from '@mui/material';

function Skills() {
  // Define the type for skills data
  const skillsData: { [key: string]: string[] } = {
    'Programming Languages': ['Python', 'JavaScript', 'C++', 'Java'],
    Frameworks: ['React', 'Node.js', 'Express', 'Django'],
    Tools: ['Git', 'Docker', 'Kubernetes', 'Postman'],
  };

  return (
    <Box id="skills" sx={{ padding: 4, textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Skills
      </Typography>

      {/* Grid for Skill Categories */}
      <Grid container spacing={4} justifyContent="center">
        {Object.keys(skillsData).map((category) => (
          <Grid item xs={12} sm={6} md={4} key={category}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              {category}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', fontWeight: 'bold'}}>
              {skillsData[category].map((skill, i) => (
                <Chip key={i} label={skill}/>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Skills;
