import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Chip } from "@mui/material";
import { ArrowBack, GitHub } from "@mui/icons-material";

// Sample project data (Replace with database/API call if needed)
const projects = [
  {
    id: "ai-emotion",
    name: "AI Emotion Video Generator",
    description:
      `This project is a web-based AI application that converts speech audio into a dynamic video representation by
      detecting emotions in speech and assigning corresponding emoticons to transcribed text
      The goal is to create engaging and expressive videos, particularly for use in content creation,
      such as YouTube Shorts, where animated elements reflect the speaker's emotions in real-time.
      
      The pipeline is simple on the surface. Receiving an audio file as a input, it will use OpenAI Whisper and Hugging Face
      to transcribe the audio into a transcript, and assign the corresponding emojis/emoticons to the lines of the transcript.
      Using this outputted transcript, we will then FFmpeg to dynamically generate a video to display the transcribed text
      and corresponding emoticons based on the detected emotions.
      
      I am still currently developing this project, so keep an eye out for more details.`,
    technologies: ["Python", "Hugging Face", "OpenAI Whisper", "FFmpeg"],
    features: [
      "Speech-to-Text: Utilizes OpenAI Whisper to accurately transcribe spoken words from the audio file",
      "Emotion Recognition: Uses Hugging Face models for emotion classification based on speech patterns",
      "Dynamic Emotion Mapping: Tracks emotion changes through the audio assignging respective emotions",
      "Video Generation: Converts transcribed text into a visual video output dynamically displaying the text"
    ],
    github: "https://github.com/aaron9292/Emotion-Video-App",
  },
  {
    id: "game-agent",
    name: "AI Game Agent",
    description:
      `This project implements an AI reinforcemetn learning (RL) agent to play Touhou 14: Double Dealing Character,
      a bullet-hell game known for its intense, fast-paced gameplay and intricate enemy attack patterns. Using deep
      reinforcement learning, the agent learns to dodge bullets and progress farther into levels adapting to the
      enemy's attack patterns. By leveraging machine learning and computer vision, the AI analyzes the game screen,
      processes movement data, and makes real-time decisions, mimicking how a skilled player would react.
      
      The AI agent is trained using three different model architectures: Deep Q-Networks (DQN), Duel-DQN (DDQN),
      and Deterministic Policy Gradient (DDPG), which are implemented through Stable Baselines 3 with PyTorch.
      A custom environment wrapper was created to extract the game state information and using OpenCV to process
      the frames to be given as input for the agent. Training involved large amounts of reward-based learning, 
      where certain parts we increased such as the reward based off time completion.`,
    technologies: ["Python", "PyTorch", "Stable-Baseline3", "OpenCV"],
    features: [
      "Deep Reinforcement Learning: Utilize Stable Baselines3 with PyTorch to train the AI agent",
      "Game Environment Interface: A custom interface to extract game frames and state information",
      "Computer Vision Processing: Uses OpenCV for real-time image processing and bullet detection",
      "Training & Optimization: Implements DQN and DDPG algorithms to improve agent's ability to react",
    ],
    github: "https://github.com/choutianxius/th14-rl",
  },
  {
    id: "stock-forecast",
    name: "Stock Forecasting Model",
    description:
      `This project is an AI-powered sotck price prediction model designed to analyze historical market trends 
      and forecast future price movements. It utilizes machine learning to process stock data from sources like 
      Yahoo Finance and identify patterns in price fluctuations. By leveraging time-series analysis, the model 
      aims to provide more accurate and data-driven predictions, helping the user to gain insights into potential 
      stock trends.
      
      The model is built using Long Short-Term Memory (LSTM) networks, a specialized type of recurrent (RNN) networks 
      optimized for time-series forecasting. The stock data is preprocessing using Pands and NumPy, ensuring clean 
      and structured input for training. The model is trained using TensorFlow/Keras, and the trained LSTM network 
      is stored as an .h5 file for easy deployment. Visualizations are created with Matplotlib to help track training performance.
      
      I am in the middle of creating a new model for alt-coins and meme coins with the integration of sentiment analysis.`,
    technologies: ["Python", "TensorFlow", "Keras", "Pandas", "MatPlotLib"],
    features: [
      "Time-Series Stock Price Prediction: Uses LSTM networks to predict future stock prices",
      "Historical Data Processing: Cleans, normalizes, and structures data using Pandas and NumPy",
      "Deep Learning-Powered Forecasting: Builty with TensorFlow/Keras to utilize LSTM model for data analysis",
      "Visual Stock Trend Analysis: Plots actual vs predicted stock prices to visualize model performance"
    ],
    github: "https://github.com/aaron9292/Stock_Prediction",
  },
];

function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <Box 
        sx={{
          backgroundColor: "white",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center", 
          padding: 4,
        }}>
        <Typography variant="h4">Project Not Found</Typography>
      </Box>
    );
  }

  return (
    <Box 
      sx={{ 
        backgroundColor: "white", 
        minHeight: "100vh",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}>
      {/* Go Back Button */}
      <Button
        variant="outlined"
        startIcon={<ArrowBack />}
        onClick={() => navigate(-1)}
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          backgroundColor: "white",
          color: "black",
          border: "1px solid black",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
          mb: 2,
        }}
      >
        Go Back
      </Button>

      {/* Project Details */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        {project.name}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "gray",
          mb: 3,
          whiteSpace: "pre-line", // Enables line breaks in the description
        }}
      >
        {project.description}
      </Typography>

      {/* Features Section */}
      {project.features && (
        <Box
          sx={{
            margin: "0 auto", // Center the box horizontally
            maxWidth: "600px", // Set a maximum width for the features list
            mb: 4, // Add margin-bottom for spacing
          }}
        >
          {/* Centered Features Header */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textAlign: "center", // Center the header text
              mb: 2, // Add spacing below the header
            }}
          >
            Features
          </Typography>

          {/* Left-aligned Features List */}
          <ul
            style={{
              margin: "0",
              padding: "0 1.5rem", // Proper padding for the bullets
              listStyleType: "disc", // Use disc bullets
              textAlign: "left", // Ensure left-alignment of list items
            }}
          >
            {project.features.map((feature, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "0.5rem", // Add spacing between list items
                }}
              >
                <Typography variant="body1" sx={{ display: "inline" }}>
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      )}

      {/* Tech Stack */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          justifyContent: "center",
          mb: 3,
        }}
      >
        {project.technologies.map((tech, i) => (
          <Chip
            key={i}
            label={tech}
            sx={{
              backgroundColor: "light-gray",
              fontWeight: "bold",
              color: "black",
            }}
          />
        ))}
      </Box>

      {/* GitHub Button */}
      <Button
        variant="outlined"
        size="large"
        href={project.github}
        target="_blank"
        startIcon={<GitHub />}
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
        View on GitHub
      </Button>
    </Box>
  );
}

export default ProjectDetails;
