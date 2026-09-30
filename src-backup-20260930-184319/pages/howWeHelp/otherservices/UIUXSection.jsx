import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import uiuxImage from "../../../assets/images/howWeHelp/UI-UX/ui-ux.png";

export default function UIUXSection() {
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
          UI & UX Design Innovation
        </Typography>

        <Typography
          variant="h5"
          sx={{ fontWeight: 500, color: "#6c6464ff" }}
        >
          Data-Driven Experience Engineering
        </Typography>

        <Typography sx={{ mt: 2, maxWidth: 850, mx: "auto", color: "#555" }}>
          UI/UX design is evolving from intuition-based creativity to a
          structured, data-informed process that helps teams build
          intuitive, efficient, and user-centered digital experiences.
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
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%" }}
        >
          <Box sx={{ maxWidth: { xs: "100%", md: "650px" }, mx: "auto" }}>

            <Typography sx={{ mb: 2 }}>
              <strong>Generative Design & Wireframing:</strong> Rapidly create
              layout variations, color systems, and wireframes to accelerate
              the design process.
            </Typography>

            <Typography sx={{ mb: 2 }}>
              <strong>Personalized User Experiences:</strong> Adaptive
              interfaces tailor content and layout based on user behavior
              and preferences.
            </Typography>

            <Typography sx={{ mb: 2 }}>
              <strong>Predictive User Behavior:</strong> Journey analysis
              helps anticipate user interactions and reduce friction.
            </Typography>

            <Typography sx={{ mb: 2 }}>
              <strong>Automated Usability Testing:</strong> Identify
              usability bottlenecks and improve interface clarity efficiently.
            </Typography>

            <Typography>
              <strong>Accessibility Enhancement:</strong> Ensure compliance
              with accessibility standards and create inclusive experiences.
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
            src={uiuxImage}
            alt="UI UX Design"
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