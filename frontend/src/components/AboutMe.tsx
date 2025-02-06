import { Box, Typography, Avatar, Container, Grid, IconButton } from "@mui/material";
import { Facebook, LinkedIn, GitHub } from "@mui/icons-material";
import profileImage from '../assets/headshot.jpg';

function AboutMe() {
  return (
    <Box
      id="about-me"
      sx={{
        padding: "4rem 0",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              src={profileImage}
              alt="Aaron Xu"
              sx={{
                width: 200,
                height: 200,
                border: "5px solid white",
                boxShadow: 3,
                marginBottom: 2,
              }}
            />
            
            {/* Social Media Icons */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 1 }}>
              <IconButton href="https://www.facebook.com/aaron.xu.773/" target="_blank">
                <Facebook />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/aaron-xu/" target="_blank">
                <LinkedIn />
              </IconButton>
              <IconButton href="https://github.com/aaron9292" target="_blank">
                <GitHub />
              </IconButton>
            </Box>
          </Grid>

          {/* About Me Text */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
              Aaron Xu
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#555", mb: 2 }}
            >
              TAMU '26, UTD '24, Student, Software Engineer, and AI/ML Developer
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8, textAlign: "justify" }}>
              I'm a graduate of UTD's Class of 2024, and my passion is computer science.
              My interests include software and game development, artificial intelligence, machine learning, and deep reinforcement learning.
              <br />
              <br />
              I'm currently a graduate student working towards my Master of Computer Science (MCS) degree from Texas A&M University.
            </Typography>

            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 4 }}>
              Education
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            <ul style={{ marginLeft: "2rem", listStylePosition: "outside" }}>
                <li>
                    Master of Computer Science (Texas A&M University)
                </li>
                <li>
                    Bachelor of Science in Computer Science (University of Texas at Dallas)
                </li>
            </ul>
            </Typography>

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default AboutMe;
