import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

// Image
import Image1 from '../../assets/images/whyOnas/investors/img1.png';

// Shared design
import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  ink, lime,
} from '../../theme/theme';

const Investors = () => {
  return (
    <PageShell>
      {/* ── Heading ── */}
      <Section>
        <Box sx={{ textAlign: 'center', mt: { xs: '3rem', md: '5rem' } }}>
          <SectionHeading sx={{ margin: '.7rem auto 1rem', maxWidth: 800 }}>
            Invest
          </SectionHeading>
          <Body sx={{ maxWidth: 640, margin: '0 auto' }}>
            In People We Trust and Invest
          </Body>
        </Box>
      </Section>

      {/* ── Content — text LEFT, image RIGHT ── */}
      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' },
            gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' },
            alignItems: 'center',
          }}
        >
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow>Investor Relations</Eyebrow>
            <Body sx={{ margin: '.7rem 0 1.4rem' }}>
              Here, you will find company performance details, board of directors, and important
              announcements from key investor relations events.
            </Body>

            <Box
              component={RouterLink}
              to="/why-onas/investors/"
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
              Learn More <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </motion.div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ width: '100%' }}
          >
            <Box
              component="img"
              src={Image1}
              alt="Investors"
              sx={{
                width: '100%',
                maxWidth: 500,
                borderRadius: 3,
                boxShadow: 3,
                mx: 'auto',
                display: 'block',
              }}
            />
          </motion.div>
        </Box>
      </Section>
    </PageShell>
  );
};

export default Investors;