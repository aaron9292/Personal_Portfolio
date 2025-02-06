import { Box, Typography, Card, CardContent, Divider, Avatar } from '@mui/material';

function WorkExperience() {
  const experiences = [
    {
      jobTitle: 'AI Researcher',
      company: 'University of Texas at Dallas',
      year: 'May 2024 - October 2024',
      logo: '/logos/utd-logo.png',
      description: [
        'Compiled 4000+ images using Python scripts and OpenCV for AI model training.',
        'Analyzed generated output of trained model leading to improvements of 30%',
        'Collaborated with a team of over 8 other students.',
      ],
    },
    {
      jobTitle: 'Software Engineer Intern',
      company: 'L3Harris',
      year: 'May 2023 - November 2023',
      logo: '/logos/l3-logo.png',
      description: [
        'Developed automated testing scripts using Bash to validate subsystem interactions.',
        'Integrated code scanning tools into GitLab CI/CI pipeline improving code quality and coverage metrics.',
        'Designed and implemented a serialization framework for Java and C++ subsystem data exchanges.',
      ],
    },
    {
      jobTitle: 'Communications and Information Technology Intern',
      company: 'Cisco-Eagle',
      year: 'Jun 2022 - August 2022',
      logo: '/logos/cisco-eagle-logo.jpg',
      description: [
        'Supervised activities on SharePoint and affiliated websites improving system usability.',
        'Migrated company files to SharePoint utilizing Microsoft migration tools.',
        'Automated key business workflows using PowerAutomate reducing manual processes by 80%.',
      ],
    },
  ];

  return (
    <Box id="work-experience" sx={{ padding: 4, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
        Work Experience
      </Typography>

      {experiences.map((experience, index) => (
        <Card
          key={index}
          sx={{ maxWidth: 800, margin: '16px auto', textAlign: 'left', boxShadow: 3 }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
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
