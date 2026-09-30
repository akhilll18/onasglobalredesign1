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
  ink, muted, line, soft, lime,
} from '../../../../../theme/theme';

const benefits = [
  { title: 'Component Architecture', text: 'After dropping out of MVW (Model-View-Whatever) architecture, Angular later adopted a strictly component architecture that facilitates reuse. Components can be used over and over again in an application. It also improves code reliability and makes maintenance easier.' },
  { title: 'Server Performance', text: 'Angular supports caching out of the box and many features to keep your server performing well.' },
  { title: 'MVC', text: 'Model View Controller in Angular sets up key functionality like scopes and data binding. It also provides isolation of the user interface and application logic from each other.' },
  { title: 'Two-Way Data Binding', text: "One of the key features of Angular is two-way data binding, which forms the relationship between the model layer and the presentation layer. In such a way that both reflect a change in the other. However, other competing platforms have adopted one-way data binding for simplicity." },
  { title: 'Ideal for the Creation of Enterprise-Scale Web Applications', text: 'Angular offers a rich collection of third-party integrations to further enhance its web application.' },
  { title: 'Third-Party Integrations', text: 'Angular offers a rich collection of third-party integrations to further enhance its web application.' },
];

const Angular = () => {
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
              Angular Development Services <Box component="span" sx={{ color: lime }}>by ONAS Solutions</Box>
            </Typography>

            <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 560, marginBottom: '1rem' }}>
              Angular is an open source TypeScript framework from Google, used to build client-side single page web applications. Angular took inspiration from React and made radical changes, the largest of which was the move from MVW (Model-View-Whatever) architecture to a component-based architecture like React.
            </Body>

            <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 560 }}>
              Angular is one of the most secure JavaScript client frameworks for building enterprise-scale applications today.
            </Body>
          </motion.div>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png"
              alt="Angular"
              sx={{ width: { xs: 200, md: 300 }, height: 'auto', display: 'block' }}
            />
          </Box>
        </Box>
      </Box>

      {/* ── BENEFITS ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Benefits</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 800 }}>
            Benefits of Angular in Software Development
          </SectionHeading>
        </Box>

        <Box sx={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 28,
                    height: 28,
                    display: 'grid',
                    placeItems: 'center',
                    background: '#ffffff',
                    border: `1px solid ${line}`,
                    borderRadius: '2px',
                    marginTop: '.15rem',
                  }}
                >
                  <Check sx={{ fontSize: 16, color: '#0B4C74' }} />
                </Box>
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
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <Eyebrow>Get Started</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Train Your Team on Angular
          </SectionHeading>
          <Body sx={{ marginBottom: '1.6rem' }}>
            Let&apos;s design an Angular training program that fits your engineers&apos; existing experience, your tech stack, and your delivery goals.
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

export default Angular;