import React from 'react';
import { Box, Typography, Card, CardContent, Divider, Avatar } from '@mui/material';

function WorkExperience() {
  const experiences = [
    {
      jobTitle: 'AI Researcher',
      company: 'University of Texas at Dallas',
      year: 'May 2024 - October 2024',
      logo: '/logos/utd-logo.png',
      description: [
        'Developed a scalable microservice architecture using Kubernetes and Docker.',
        'Improved search query performance by 20% with optimized algorithms.',
        'Collaborated with a team of 8 engineers using Agile methodologies.',
      ],
    },
    {
      jobTitle: 'Software Engineer Intern',
      company: 'L3Harris',
      year: 'May 2023 - November 2023',
      logo: '/logos/l3-logo.png',
      description: [
        'Built REST APIs to support e-commerce functionalities with Node.js.',
        'Integrated cloud services to automate data pipelines on AWS.',
        'Reduced server costs by 15% by refactoring legacy code.',
      ],
    },
    {
      jobTitle: 'Communications and Information Technology Intern',
      company: 'Cisco-Eagle',
      year: 'Jun 2022 - August 2022',
      logo: '/logos/cisco-eagle-logo.jpg',
      description: [
        'Designed and developed an interactive dashboard using React and Express.',
        'Implemented user authentication and authorization flows.',
        'Led a team of 3 to deliver features on time for product launch.',
      ],
    },
  ];

  return (
    <Box id="work-experience" sx={{ padding: 4, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Work Experience
      </Typography>

      {/* Display experiences top to bottom */}
      {experiences.map((experience, index) => (
        <Card
          key={index}
          sx={{ maxWidth: 800, margin: '16px auto', textAlign: 'left', boxShadow: 3 }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
              {/* Add Logo */}
              <Avatar
                src={experience.logo}
                alt={experience.company}
                sx={{
                  width: 50,
                  height: 50,
                  ...(experience.company === 'L3Harris' && { width: 40, height: 40 }),
                  objectFit: 'contain',
                }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {experience.jobTitle}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'gray' }}>
                  {experience.company} • {experience.year}
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box component="ul" sx={{ pl: 2 }}>
              {experience.description.map((item, i) => (
                <Typography component="li" key={i} sx={{ mb: 0.5 }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default WorkExperience;
