import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import mobileImage from "../../../assets/images/howWeHelp/mobile/mobile-ai.png";

export default function MobileApp() {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 8, lg: 12, xl: 16 },
        pt: { xs: 20, md: 20, lg: 28, xl: 32 },
        pb: { xs: 8, md: 8, lg: 12, xl: 16 },
        maxWidth: 1800,
        mx: "auto",
        overflowX: "hidden",
      }}
    >
      {/* Heading */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, mb: 2, color: "#0B4C74" }}
        >
          AI in Mobile Applications
        </Typography>

        <Typography
          variant="h5"
          sx={{ fontWeight: 500, color: "#6c6464ff" }}
        >
          Intelligent & Next-Generation Mobile App Development
        </Typography>

        <Typography sx={{ mt: 2, maxWidth: 800, mx: "auto", color: "#555" }}>
          AI is transforming how mobile applications are built, tested,
          and optimized — enabling smarter, faster, and more engaging user experiences.
        </Typography>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 8 },
        }}
      >
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%" }}
        >
          <Box sx={{ maxWidth: { xs: "100%", md: "650px" }, mx: "auto" }}>
            <Typography variant="h4" sx={{ mb: 3, color: "#0B4C74" }}>
              Smart Development & AI Features
            </Typography>

            <Typography sx={{ mb: 2 }}>
              <strong>Code Generation & Auto-Completion:</strong> AI tools assist developers by generating and suggesting optimized code.
            </Typography>

            <Typography sx={{ mb: 2 }}>
              <strong>Automated Testing:</strong> AI simulates user behavior across devices to detect bugs before release.
            </Typography>

            <Typography sx={{ mb: 2 }}>
              <strong>Personalization Engines:</strong> AI analyzes user behavior to deliver tailored content recommendations.
            </Typography>

            <Typography sx={{ mb: 2 }}>
              <strong>Voice & Chat Interfaces:</strong> NLP-powered assistants and chatbots enhance user interaction.
            </Typography>

            <Typography>
              <strong>Analytics & Crash Prediction:</strong> AI predicts churn and identifies root causes of app crashes in real-time.
            </Typography>
          </Box>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%" }}
        >
          <Box
            component="img"
            src={mobileImage}
            alt="AI Mobile App"
            sx={{
              width: "100%",
              maxWidth: 500,
              borderRadius: 3,
              boxShadow: 4,
              mx: "auto",
            }}
          />
        </motion.div>
      </Box>
    </Box>
  );
}