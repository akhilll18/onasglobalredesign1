import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, Check } from '@mui/icons-material';

import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  cardSx,
  ink, line, soft, lime,
} from '../../../../../theme/theme';

const features = [
  {
    title: 'Versatility',
    text: 'This library can be used on the server and mobile platforms using React Native.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
  },
  {
    title: 'Declarativeness',
    text: 'With the help of React you can describe how the components of the interface look in different states. A declarative approach shortens the code and makes it understandable.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
  },
  {
    title: 'Component-Based',
    text: 'Each component returns a part of the user interface with its own state. By combining the components, you can create a complex web application interface.',
    image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=250&fit=crop',
  },
  {
    title: 'Using JSX',
    text: 'This is a JavaScript syntax extension that is convenient to use to describe an interface. JSX allows you to write JavaScript code using ready-made components that almost completely repeat HTML. This simplifies software development and saves costs.',
    image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=400&h=250&fit=crop',
  },
  {
    title: 'Using the Virtual DOM',
    text: 'This is an object that stores information about the state of an interface. When the state changes, React calculates the difference between the old and the new state. The library then renders the new state. Using the virtual DOM allows the library to efficiently update the real DOM.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop',
  },
];

const advantages = [
  { n: '01', title: 'Extreme Application Flexibility', text: 'Extreme application flexibility.' },
  { n: '02', title: 'Ensures That Parental Data is Immutable', text: 'Ensures that parental data is immutable.' },
  { n: '03', title: 'Using the Virtual DOM', text: 'Using the virtual DOM.' },
  { n: '04', title: 'Provides Easy Migration Between Versions', text: 'Provides easy migration between versions.' },
  { n: '05', title: 'The Application Can Withstand Heavy Loads', text: 'The application can withstand heavy loads.' },
  { n: '06', title: 'Hybrid Mobile Apps in React Look Almost the Same as Native Ones', text: 'Hybrid mobile apps in React look almost the same as native ones.' },
  { n: '07', title: 'React and SEO Go Well Together', text: 'It is easier for search bots to browse sites and user interaction with your resource is improved.' },
];

const ReactJs = () => {
  return (
    <PageShell>
      {/* ── HERO ── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 480, md: 560 },
          padding: { xs: '5rem 1rem 3rem', md: '7rem 2.5rem 4rem' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: ink,
          isolation: 'isolate',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(120deg, rgba(11,76,116,.98) 0%, rgba(11,76,116,.85) 55%, rgba(11,76,116,.72) 100%)' }} />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr .9fr' }, gap: { xs: '2rem', md: '3rem' }, alignItems: 'center', maxWidth: 1240, margin: '0 auto', width: '100%' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: lime }}>Corporate Training</Eyebrow>
            <Typography
              component="h1"
              sx={{
                margin: '.5rem 0 1.4rem',
                font: "400 clamp(1.5rem, 3.2vw, 2.4rem)/1.05 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 640,
                letterSpacing: 0,
              }}
            >
              React.js Development Services <Box component="span" sx={{ color: lime }}>by ONAS Solutions</Box>
            </Typography>

            <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 560, marginBottom: '1rem' }}>
              React is a JavaScript user interface (UI) library created by the Facebook developers. React is used to render UI components.
            </Body>

            <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 560 }}>
              Also, the library can fully manage the frontend. In this case, React is used with state management and routing libraries such as Redux and React Router.
            </Body>
          </motion.div>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
              alt="React.js"
              sx={{ width: { xs: 200, md: 280 }, height: 'auto', display: 'block' }}
            />
          </Box>
        </Box>
      </Box>

      {/* ── MAIN FEATURES (card grid with images) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Main Features</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 800 }}>
            Main Features of React for Software Development
          </SectionHeading>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1.2rem', md: '1.4rem' } }}>
          {features.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={{ ...cardSx, padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ width: '100%', height: 150, overflow: 'hidden', borderBottom: `1px solid ${line}` }}>
                  <Box component="img" src={b.image} alt={b.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Box>
                <Box sx={{ padding: { xs: '1.3rem 1.2rem', md: '1.5rem 1.4rem' }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .6rem',
                      font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      textTransform: 'uppercase',
                      letterSpacing: '.02em',
                    }}
                  >
                    {b.title}
                  </Typography>
                  <Body sx={{ fontSize: '.66rem', flexGrow: 1 }}>{b.text}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── ADVANTAGES (simple numbered list — no images) ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Advantages</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 800 }}>
            Advantages of Using React in Software Development
          </SectionHeading>
        </Box>

        <Box sx={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {advantages.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 7) * 0.05 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem' }}>
                <Typography
                  sx={{
                    flexShrink: 0,
                    font: "400 clamp(1.6rem, 3vw, 2.4rem)/1 Georgia, 'Times New Roman', serif",
                    color: '#bcd0c5',
                    letterSpacing: 0,
                    minWidth: 48,
                    lineHeight: 1,
                  }}
                >
                  {b.n}
                </Typography>
                <Box>
                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .5rem',
                      font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      textTransform: 'uppercase',
                      letterSpacing: '.02em',
                    }}
                  >
                    {b.title}
                  </Typography>
                  <Body sx={{ fontSize: '.7rem', lineHeight: 1.8 }}>{b.text}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── CTA ── */}
      <Section>
        <Box sx={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <Eyebrow>Get Started</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Train Your Team on React.js
          </SectionHeading>
          <Body sx={{ marginBottom: '1.6rem' }}>
            Let&apos;s design a React.js training program that fits your engineers&apos; existing experience, your tech stack, and your delivery goals.
          </Body>
          <Box
            component="a"
            href="/resources/contact-us"
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
            Request a Proposal <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Section>
    </PageShell>
  );
};

export default ReactJs;