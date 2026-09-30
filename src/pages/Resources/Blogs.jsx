import React from 'react';
import { Box, Typography, Container } from '@mui/material';

// ── Arvee editorial palette ──
const ink = '#0B4C74';
const muted = '#647572';
const cream = '#ffffff';

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

export default function Blogs() {
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
        <Box sx={{ textAlign: 'center', padding: { xs: '4rem 0 3rem', md: '6rem 0 4rem' } }}>
          <Eyebrow>Blogs</Eyebrow>
          <Typography
            component="h1"
            sx={{
              margin: '.7rem auto 1rem',
              font: "400 clamp(1.8rem, 3.6vw, 3rem)/1.05 Georgia, 'Times New Roman', serif",
              color: ink,
              maxWidth: 800,
            }}
          >
            Blogs
          </Typography>
          <Typography
            sx={{
              color: `${muted} !important`,
              fontFamily: "'Poppins', sans-serif",
              fontSize: '.72rem',
              lineHeight: 1.75,
              maxWidth: 700,
              margin: '0 auto',
            }}
          >
            Something Big is on the Way!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}