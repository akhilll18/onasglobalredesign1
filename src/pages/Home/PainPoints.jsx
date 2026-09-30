import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Check } from '@mui/icons-material';
import HireRecruitersImg from '../../assets/images/clients/Hire_Recruiters.jpg';

// ── Arvee editorial palette ──
const ink = '#0B4C74';
const muted = '#647572';
const line = '#dfe8df';
const soft = '#ffffff';
const cream = '#ffffff';
const lime = '#baf58c';

const eyebrowSx = {
  color: '#0B4C74',
  fontSize: '.55rem',
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  fontWeight: 700,
  fontFamily: "'Poppins', sans-serif",
};

const containerSx = {
  width: '100%',
  maxWidth: { xs: '100%', md: '1240px' },
  margin: '0 auto',
  padding: { xs: '0 1rem', md: '0 1.5rem' },
  boxSizing: 'border-box',
};

function Eyebrow({ children }) {
  return <Typography sx={eyebrowSx}>{children}</Typography>;
}

const painPoints = [
  'A strategic perspective on enterprise transformation',
  'Artificial intelligence (AI)',
  'The future of intelligent business',
  'Building resilient, adaptive operating models',
  'Data-driven decision making at every level',
];

export default function PainPoints() {
  return (
    <Box
      id="pain-points"
      sx={{
        background: cream,
        color: ink,
        width: '100%',
        overflowX: 'hidden',
        '& h1, & h2, & h3': {
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 400,
          letterSpacing: 0,
        },
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          ...containerSx,
          paddingTop: { xs: '3.5rem', md: '1rem' },
          paddingBottom: { xs: '3.5rem', md: '5rem' },
        }}
      >
        {/* ── TOP — Full-width heading ── */}
        <Box
          sx={{
            textAlign: 'center',
            marginBottom: { xs: '2.5rem', md: '3.5rem' },
          }}
        >
          <Typography
            component="h2"
            sx={{
              margin: '.5rem auto 0',
              font: "400 clamp(1.4rem, 2.4vw, 2rem)/1.1 Georgia, 'Times New Roman', serif",
              color: ink,
              maxWidth: 900,
            }}
          >
            Tailored IT Solutions for Your Business.
          </Typography>
        </Box>

        {/* ── BOTTOM — Two-column: image left, list right ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1.15fr' },
            gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' },
            alignItems: 'center',
          }}
        >
          {/* ── LEFT — Image only ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              component="img"
              src={HireRecruitersImg}
              alt="Hire Recruiters"
              sx={{
                width: '100%',
                maxWidth: 520,
                height: 'auto',
                display: 'block',
                margin: '0 auto',
                borderRadius: '2px',
                border: `1px solid ${line}`,
                objectFit: 'cover',
              }}
            />
          </motion.div>

          {/* ── RIGHT — Heading + list ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Eyebrow>Leadership</Eyebrow>
            <Typography
              component="h3"
              sx={{
                margin: '.7rem 0 1rem',
                font: "400 clamp(1.1rem, 1.8vw, 1.5rem)/1.2 Georgia, 'Times New Roman', serif",
                color: ink,
              }}
            >
              What Does It Take to Lead in an AI World?
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.9rem' }}>
              {painPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '.7rem',
                      padding: '1rem 1.1rem',
                      background: '#fff',
                      border: `1px solid ${line}`,
                      borderRadius: '2px',
                      transition: 'all .2s ease',
                      '&:hover': {
                        borderColor: '#aac7b2',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'grid',
                        placeItems: 'center',
                        width: 22,
                        height: 22,
                        borderRadius: '50%',
                        background: soft,
                        border: `1px solid ${line}`,
                        flexShrink: 0,
                        marginTop: '.15rem',
                      }}
                    >
                      <Check sx={{ fontSize: 14, color: '#0B4C74' }} />
                    </Box>
                    <Typography
                      sx={{
                        color: `${ink} !important`,
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '.72rem',
                        lineHeight: 1.6,
                        fontWeight: 500,
                      }}
                    >
                      {point}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}