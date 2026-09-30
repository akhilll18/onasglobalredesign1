import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';

// Images
import VBT from '../../assets/images/featureGrid/visionbt.png';
import HCL from '../../assets/images/featureGrid/hcl.png';
import DF from '../../assets/images/featureGrid/df.png';
import EC from '../../assets/images/featureGrid/ec.png';
import ALL from '../../assets/images/featureGrid/all.png';
import CMH from '../../assets/images/featureGrid/cmh.png';

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

const cardSx = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  textAlign: 'left',
  background: '#fff',
  border: `1px solid ${line}`,
  borderRadius: '2px',
  padding: { xs: '1.4rem 1.2rem', md: '1.6rem 1.4rem' },
  height: '100%',
  width: '100%',
  transition: 'all .25s ease',
  '&:hover': {
    borderColor: '#aac7b2',
    transform: 'translateY(-3px)',
  },
};

const features = [
  {
    image: VBT,
    title: 'Vision Beyond Technology',
    description:
      'Leaders in an AI-driven world don’t just adopt tools — they <b>redefine strategy, business models, and value creation.</b> It takes vision to see where AI fits into long-term growth rather than chasing hype.',
    cta: { label: 'Learn more', href: '/who-we-help/industries' },
  },
  {
    image: HCL,
    title: 'Human-Centered Leadership',
    description:
      'AI handles scale, speed, and complexity, but <b>trust, ethics, and empathy</b> remain uniquely human. Leaders need to balance automation with responsibility, ensuring AI augments people rather than replacing them blindly.',
    cta: { label: 'Learn more', href: '/who-we-help/industries' },
  },
  {
    image: DF,
    title: 'Data & Decision Fluency',
    description:
      'You don’t need to code like an engineer, but you must <b>understand data, bias, risks, and possibilities.</b> Decision-making shifts from intuition alone to <b>evidence-guided leadership.</b>',
    cta: { label: 'Learn more', href: '/who-we-help/industries' },
  },
  {
    image: EC,
    title: 'Ethical Compass',
    description:
      'In an AI world, leadership is tested by <b>responsible use of power.</b> Bias, transparency, and accountability become boardroom issues. What it takes is the courage to say not just what AI can do, but what it should do.',
    cta: { label: 'Learn more', href: '/who-we-help/industries' },
  },
  {
    image: ALL,
    title: 'Adaptability & Lifelong Learning',
    description:
      'AI evolves fast. Leaders must <b>embrace change, continuously learn, and build adaptive organizations</b> where curiosity is rewarded.',
    cta: { label: 'Learn more', href: '/who-we-help/industries' },
  },
  {
    image: CMH,
    title: 'Collaboration Between Human + Machine',
    description:
      'True leadership means orchestrating <b>human talent and machine intelligence together —</b> unlocking creativity, efficiency, and innovation.',
    cta: { label: 'Learn more', href: '/who-we-help/industries' },
  },
];

export default function FeatureGrid() {
  return (
    <Box
      id="explore-us"
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
          paddingBottom: { xs: '3.5rem', md: '5rem' },
        }}
      >
        {/* ── Heading ── */}
        <Box
          sx={{
            textAlign: 'center',
            marginBottom: { xs: '3rem', md: '4.5rem' },
          }}
        >
          <Typography
            component="h2"
            sx={{
              margin: '.7rem auto 0',
              font: "400 clamp(1.4rem, 2.4vw, 2rem)/1.1 Georgia, 'Times New Roman', serif",
              color: ink,
              maxWidth: 800,
            }}
          >
            With ONAS, Build Human-Centered Leadership for an AI-Driven World.
          </Typography>
        </Box>

        {/* ── Feature Cards — 3 in row 1, 2 in row 2 ── */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '1.5rem', md: '1.8rem' } }}>
          {/* Row 1 — 3 cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: { xs: '1.5rem', md: '1.8rem' },
              alignItems: 'stretch',
            }}
          >
            {features.slice(0, 3).map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{ display: 'flex', width: '100%' }}
              >
                <Box sx={cardSx}>
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: 150, md: 170 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.2rem',
                    }}
                  >
                    <Box
                      component="img"
                      src={feature.image}
                      alt={feature.title}
                      sx={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  </Box>

                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .6rem',
                      font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      minHeight: '2.6rem',
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: `${muted} !important`,
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '.66rem',
                      lineHeight: 1.75,
                      marginBottom: '1.2rem',
                      flexGrow: 1,
                      '& b': { color: ink, fontWeight: 600 },
                    }}
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />

                  <Box
                    component={RouterLink}
                    to={feature.cta.href}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '.4rem',
                      padding: '.55rem .9rem',
                      borderRadius: '2px',
                      background: '#0B4C74',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: '.6rem',
                      fontFamily: "'Poppins', sans-serif",
                      textDecoration: 'none',
                      transition: 'background .2s ease',
                      '&:hover': { background: '#d3ffb0', color: '#000000' },
                    }}
                  >
                    {feature.cta.label} <ArrowForward sx={{ fontSize: 12 }} />
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>

          {/* Row 2 — 2 cards centered */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' },
              gap: { xs: '1.5rem', md: '1.8rem' },
              alignItems: 'stretch',
              maxWidth: { xs: '100%', md: 'calc((100% - 1.8rem) * 2 / 3 + 1.8rem)' },
              margin: '0 auto',
              width: '100%',
            }}
          >
            {features.slice(3, 5).map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                style={{ display: 'flex', width: '100%' }}
              >
                <Box sx={cardSx}>
                  <Box
                    sx={{
                      width: '100%',
                      height: { xs: 150, md: 170 },
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.2rem',
                    }}
                  >
                    <Box
                      component="img"
                      src={feature.image}
                      alt={feature.title}
                      sx={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  </Box>

                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .6rem',
                      font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      minHeight: '2.6rem',
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: `${muted} !important`,
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '.66rem',
                      lineHeight: 1.75,
                      marginBottom: '1.2rem',
                      flexGrow: 1,
                      '& b': { color: ink, fontWeight: 600 },
                    }}
                    dangerouslySetInnerHTML={{ __html: feature.description }}
                  />

                  <Box
                    component={RouterLink}
                    to={feature.cta.href}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '.4rem',
                      padding: '.55rem .9rem',
                      borderRadius: '2px',
                      background: '#0B4C74',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: '.6rem',
                      fontFamily: "'Poppins', sans-serif",
                      textDecoration: 'none',
                      transition: 'background .2s ease',
                      '&:hover': { background: '#d3ffb0', color: '#000000' },
                    }}
                  >
                    {feature.cta.label} <ArrowForward sx={{ fontSize: 12 }} />
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}