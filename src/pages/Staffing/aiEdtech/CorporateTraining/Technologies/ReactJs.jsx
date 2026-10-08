import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';

import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  cardSx,
  ink, line, soft, lime,
} from '@/theme/theme';


import ReactHero from '@/assets/images/staffing/AI & EdTech Services/technologies/react/react1.jpg';
import Feature1 from '@/assets/images/staffing/AI & EdTech Services/technologies/react/react2.jpg';
import Feature2 from '@/assets/images/staffing/AI & EdTech Services/technologies/react/react3.jpg';
import Feature3 from '@/assets/images/staffing/AI & EdTech Services/technologies/react/react4.jpg';
import Feature4 from '@/assets/images/staffing/AI & EdTech Services/technologies/react/react5.jpg';
import Feature5 from '@/assets/images/staffing/AI & EdTech Services/technologies/react/react6.jpg';

const features = [
  {
    title: 'Versatility',
    text: 'This library can be used on the server and mobile platforms using React Native.',
    image: Feature1,
  },
  {
    title: 'Declarativeness',
    text: 'With the help of React you can describe how the components of the interface look in different states. A declarative approach shortens the code and makes it understandable.',
    image: Feature2,
  },
  {
    title: 'Component-Based',
    text: 'Each component returns a part of the user interface with its own state. By combining the components, you can create a complex web application interface.',
    image: Feature3,
  },
  {
    title: 'Using JSX',
    text: 'This is a JavaScript syntax extension that is convenient to use to describe an interface. JSX allows you to write JavaScript code using ready-made components that almost completely repeat HTML. This simplifies software development and saves costs.',
    image: Feature4,
  },
  {
    title: 'Using the Virtual DOM',
    text: 'This is an object that stores information about the state of an interface. When the state changes, React calculates the difference between the old and the new state. The library then renders the new state. Using the virtual DOM allows the library to efficiently update the real DOM.',
    image: Feature5,
  },
];

const advantages = [
  {
    n: '01',
    title: 'Extreme Application Flexibility',
    text: 'React adapts to web, mobile, and server-side rendering targets without rewriting the core UI logic.',
  },
  {
    n: '02',
    title: 'Immutable Parental Data',
    text: 'One-way data flow keeps parent state predictable, so components behave consistently as the app grows.',
  },
  {
    n: '03',
    title: 'Virtual DOM Efficiency',
    text: 'React diffs the virtual DOM and updates only what changed, keeping interfaces fast under frequent state updates.',
  },
  {
    n: '04',
    title: 'Easy Migration Between Versions',
    text: 'Incremental upgrade paths and codemods let teams adopt new React versions without a full rewrite.',
  },
  {
    n: '05',
    title: 'Withstands Heavy Loads',
    text: 'Component-level rendering, memoization, and concurrent features help applications stay responsive at scale.',
  },
  {
    n: '06',
    title: 'Near-Native Mobile with React Native',
    text: 'React Native renders real native components, so hybrid apps feel close to fully native experiences.',
  },
  {
    n: '07',
    title: 'React and SEO Work Well Together',
    text: 'Server-side rendering and static generation make React sites easier for search bots to index.',
  },
];

const ReactJs = () => {
  return (
    <PageShell>
      {/* ── HERO (single centered column, no logo) ── */}
      <Box
        sx={{
          position: 'relative',
          marginTop: { xs: '72px', sm: '76px', md: '92px', lg: '10px' },
          minHeight: { xs: 480, md: 560 },
          padding: { xs: '7rem 1rem 3rem', md: '9rem 2.5rem 4rem' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundImage: `url(${ReactHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: ink,
          isolation: 'isolate',
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            background:
              'linear-gradient(120deg, rgba(11,76,116,.92) 0%, rgba(11,76,116,.75) 55%, rgba(0,0,0,.55) 100%)',
          }}
        />

        <Box
          sx={{
            maxWidth: 820,
            margin: '0 auto',
            textAlign: 'center',
            width: '100%',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Eyebrow sx={{ color: lime, textShadow: '0 2px 8px rgba(0,0,0,.6)' }}>
              Corporate Training
            </Eyebrow>

            <Typography
              component="h1"
              sx={{
                margin: '.5rem auto 1.2rem',
                font: "400 clamp(1.1rem, 2.2vw, 1.7rem)/1.15 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 620,
                letterSpacing: 0,
                textShadow: '0 2px 12px rgba(0,0,0,.75), 0 1px 3px rgba(0,0,0,.9)',
              }}
            >
              React.js Development Services{' '}
              <Box component="span" sx={{ color: lime }}>
                by ONAS Solutions
              </Box>
            </Typography>

            <Body
              sx={{
                color: '#ffffff !important',
                maxWidth: 560,
                margin: '0 auto .8rem',
                textShadow: '0 1px 8px rgba(0,0,0,.7)',
              }}
            >
              React is a JavaScript user interface (UI) library created by the Facebook developers. React is used to
              render UI components.
            </Body>

            <Body
              sx={{
                color: '#ffffff !important',
                maxWidth: 560,
                margin: '0 auto',
                textShadow: '0 1px 8px rgba(0,0,0,.7)',
              }}
            >
              Also, the library can fully manage the frontend. In this case, React is used with state management and
              routing libraries such as Redux and React Router.
            </Body>

            {/* ✅ Hero CTA */}
            <Box
              component="a"
              href="/resources/contact-us"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '.5rem',
                marginTop: '1.4rem',
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
              Discuss React.js Training <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* ── MAIN FEATURES ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Main Features</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 800 }}>
            Main Features of React for Software Development
          </SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1.2rem', md: '1.4rem' },
          }}
        >
          {features.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box
                sx={{
                  ...cardSx,
                  padding: 0,
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ width: '100%', height: 150, overflow: 'hidden', borderBottom: `1px solid ${line}` }}>
                  <Box
                    component="img"
                    src={b.image}
                    alt={b.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </Box>
                <Box
                  sx={{
                    padding: { xs: '1.3rem 1.2rem', md: '1.5rem 1.4rem' },
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
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

      {/* ── ADVANTAGES ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Advantages</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 800 }}>
            Advantages of Using React in Software Development
          </SectionHeading>
        </Box>

        <Box
          sx={{
            maxWidth: 900,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}
        >
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
            Let&apos;s design a React.js training program that fits your engineers&apos; existing experience, your
            tech stack, and your delivery goals.
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