import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowForward } from '@mui/icons-material';

// Images
import img1 from '../../assets/images/processSteps/tailored.png';
import img2 from '../../assets/images/processSteps/expertise.png';
import img3 from '../../assets/images/processSteps/communication.png';
import img4 from '../../assets/images/processSteps/innovation.png';

// ── Arvee editorial palette ──
const ink = '#0B4C74';
const muted = '#647572';
const line = '#dfe8df';
const soft = '#ffffff';
const cream = '#ffffff';
const lime = '#baf58c';

const containerSx = {
  width: '100%',
  maxWidth: { xs: '100%', md: '1240px' },
  margin: '0 auto',
  padding: { xs: '0 1rem', md: '0 1.5rem' },
  boxSizing: 'border-box',
};

const cardSx = {
  display: 'flex',
  flexDirection: 'column',
  background: '#fff',
  border: `1px solid ${line}`,
  borderRadius: '2px',
  overflow: 'hidden',
  height: '100%',
  width: '100%',
  transition: 'all .25s ease',
  '&:hover': {
    borderColor: '#aac7b2',
    transform: 'translateY(-3px)',
  },
};

const steps = [
  {
    title: 'Customized IT & Digital Solutions',
    desc: 'We don’t believe in one-size-fits-all. Every business is unique, and we take the time to understand your challenges and design IT and digital strategies that align seamlessly with your goals.',
    img: img1,
  },
  {
    title: 'Comprehensive Expertise Across Technologies',
    desc: 'From ERP and CRM to cloud solutions, cybersecurity, and data analytics — our multidisciplinary team ensures smooth integration, flawless execution, and measurable results.',
    img: img2,
  },
  {
    title: 'Clear, Proactive Communication',
    desc: 'With ONAS, you’re never left in the dark. We provide regular updates, maintain full transparency, and keep you informed at every stage of the process.',
    img: img3,
  },
  {
    title: 'Driving Innovation & Growth',
    desc: 'We don’t just adapt to change — we lead it. By embracing innovation and next-gen solutions, we position your business to stay competitive, scale faster, and achieve sustainable growth.',
    img: img4,
  },
];

export default function ProcessSteps() {
  return (
    <Box
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
          paddingTop: { xs: '3.5rem', md: '5rem' },
          paddingBottom: { xs: '3.5rem', md: '5rem' },
        }}
      >
        {/* ── Heading ── */}
        <Box
          sx={{
            textAlign: 'center',
            marginBottom: { xs: '2.5rem', md: '3.5rem' },
          }}
        >
          <Typography
            component="h2"
            sx={{
              margin: '0 auto 1rem',
              font: "400 clamp(1.4rem, 2.4vw, 2rem)/1.1 Georgia, 'Times New Roman', serif",
              color: ink,
              maxWidth: 800,
            }}
          >
            Why Choose ONAS Global Services
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
            Our expert <strong style={{ color: ink }}>IT</strong>,{' '}
            <strong style={{ color: ink }}>staffing</strong>, and{' '}
            <strong style={{ color: ink }}>EdTech solutions</strong> make it easy to accelerate
            growth and innovation for your business.
          </Typography>
        </Box>

        {/* ── 4 Cards in a Row ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: { xs: '1.2rem', md: '1.5rem' },
            alignItems: 'stretch',
          }}
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={cardSx}>
                {/* Full-width image on top */}
                <Box
                  sx={{
                    width: '100%',
                    height: { xs: 160, sm: 170, md: 180 },
                    overflow: 'hidden',
                    background: soft,
                    borderBottom: `1px solid ${line}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component="img"
                    src={step.img}
                    alt={step.title}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </Box>

                {/* Content */}
                <Box
                  sx={{
                    padding: { xs: '1.3rem 1.1rem', md: '1.5rem 1.3rem' },
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .6rem',
                      font: "400 clamp(.85rem, 1.3vw, .98rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      minHeight: '2.6rem',
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: `${muted} !important`,
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '.66rem',
                      lineHeight: 1.75,
                      flexGrow: 1,
                    }}
                  >
                    {step.desc}
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>

        {/* ── CTA Button ── */}
        <Box sx={{ textAlign: 'center', marginTop: { xs: '2.5rem', md: '3.5rem' } }}>
          <Box
            component={RouterLink}
            to="/#explore-us"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '.5rem',
              padding: '.7rem 1.1rem',
              borderRadius: '2px',
              background: '#0B4C74',
              color: '#ffffff',
              fontWeight: 600,
              fontSize: '.62rem',
              fontFamily: "'Poppins', sans-serif",
              textDecoration: 'none',
              transition: 'background .2s ease',
              '&:hover': { background: '#d3ffb0', color: '#000000' },
            }}
          >
            Explore Services <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}