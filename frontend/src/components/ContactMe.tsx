import { Box, Typography, Link, IconButton, Button } from "@mui/material";
import { Email, Phone, LinkedIn, GitHub, Download } from "@mui/icons-material";

function ContactMe() {
  return (
    <Box
      id="contact"
      sx={{
        backgroundImage: "url('/logos/contact-background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", 
        alignItems: "center",
        textAlign: "center",
        margin: 0, 
        padding: 0, 
        color: "white", 
        position: "relative",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "white" }}>
        Contact Me
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, color: "white" }}>
        Feel free to reach out to me through any of the following channels:
      </Typography>

      {/* Contact Information */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          mb: 3,
        }}
      >
        {/* Email */}
        <Link
          href="mailto:aaron.c.xu92@gmail.com"
          underline="none"
          sx={{ display: "flex", alignItems: "center", gap: 1, color: "white" }}
        >
          <Email /> aaron.c.xu92@gmail.com
        </Link>

        {/* Phone */}
        <Link
          href="tel:+12148867930"
          underline="none"
          sx={{ display: "flex", alignItems: "center", gap: 1, color: "white" }}
        >
          <Phone /> +1 214 886 7390
        </Link>
      </Box>

      {/* Social Media Links */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 3 }}>
        {/* LinkedIn */}
        <IconButton
          href="https://www.linkedin.com/in/aaron-xu/"
          target="_blank"
          sx={{
            backgroundColor: "white",
            border: "1px solid black",
            "&:hover": { backgroundColor: "black", color: "white" },
          }}
        >
          <LinkedIn />
        </IconButton>

        {/* GitHub */}
        <IconButton
          href="https://github.com/aaron9292"
          target="_blank"
          sx={{
            backgroundColor: "white",
            border: "1px solid black",
            "&:hover": { backgroundColor: "black", color: "white" },
          }}
        >
          <GitHub />
        </IconButton>
      </Box>

      {/* Download Resume Button */}
      <Button
        variant="outlined"
        startIcon={<Download />}
        href="/resume.pdf"
        target="_blank"
        download
        sx={{
          backgroundColor: "white",
          color: "black",
          border: "2px solid black",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        Download Resume
      </Button>
    </Box>
  );
}

export default ContactMe;
