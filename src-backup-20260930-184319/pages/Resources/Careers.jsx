import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

// ── Arvee editorial palette ──
const ink = '#123f3b';
const muted = '#647572';
const cream = '#fbfcf7';
const lime = '#baf58c';

const eyebrowSx = {
  color: '#257a68',
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

const Career = () => {
  return (
    <Box
      sx={{
        background: cream,
        color: ink,
        width: '100%',
        overflowX: 'hidden',
        '& h1, & h2, & h3': { fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, letterSpacing: 0 },
      }}
    >
      <Container maxWidth={false} disableGutters sx={containerSx}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              padding: { xs: '4rem 0 3rem', md: '6rem 0 4rem' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Eyebrow>Career</Eyebrow>
            <Typography
              component="h1"
              sx={{
                margin: '.7rem auto 1rem',
                font: "400 clamp(1.8rem, 3.6vw, 3rem)/1.05 Georgia, 'Times New Roman', serif",
                color: ink,
                maxWidth: 800,
              }}
            >
              Career
            </Typography>
            <Typography
              sx={{
                color: `${muted} !important`,
                fontFamily: "'Poppins', sans-serif",
                fontSize: '.78rem',
                lineHeight: 1.75,
                maxWidth: 640,
                margin: '0 auto .9rem',
              }}
            >
              We appreciate your interest in joining our team
            </Typography>
            <Typography
              sx={{
                color: `${muted} !important`,
                fontFamily: "'Poppins', sans-serif",
                fontSize: '.72rem',
                lineHeight: 1.75,
                maxWidth: 700,
                margin: '0 auto 1.8rem',
              }}
            >
              Currently, there are no available openings, but we welcome you to stay connected and
              keep an eye on our careers page for future opportunities.
            </Typography>

            <Box
              component={RouterLink}
              to="/resources/careers/"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.5rem',
                padding: '.7rem 1.1rem',
                borderRadius: '2px',
                background: lime,
                color: ink,
                fontWeight: 600,
                fontSize: '.62rem',
                fontFamily: "'Poppins', sans-serif",
                textDecoration: 'none',
                transition: 'background .2s ease',
                '&:hover': { background: '#d3ffb0' },
              }}
            >
              Visit Careers Page <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Career;