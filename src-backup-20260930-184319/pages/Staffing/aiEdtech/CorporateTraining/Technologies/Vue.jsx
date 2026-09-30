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
  ink, line, soft, lime,
} from '../../../../../theme/theme';

const benefits = [
  {
    title: 'Speed',
    text: "Vue's lightweight features make it lightning fast to download and install. Thus, it also has a positive impact on UX and SEO.",
  },
  {
    title: 'Performance and Rendering of the Virtual DOM',
    text: 'To improve the process, Vue.js uses a virtual DOM, a copy of the original website DOM that the framework uses to detect element updates without having to render the entire DOM, thereby improving application performance and making page loads much faster. When it comes to choosing the perfect framework for most developers, improving performance and overall speed is key.',
  },
  {
    title: 'Two-Way Data Binding',
    text: 'It mainly describes the relationship between model data updates and a view (UI) with bound components containing data that you can update from time to time. Two-way data binding makes it easier to update related components and track data updates in general. Linked data gets reactive updates in Vue like DOM objects. This feature makes the platform ideal for applications with real-time updates. On the development side, this reactive nature can make updating data easier and faster.',
  },
  {
    title: 'Readability and Components',
    text: 'Vue uses the MVVM (Model-View-ViewModel) architecture to separate your application into components, which is an encapsulated element of the interface itself. These components can be written in JavaScript, CSS, and HTML, without the need to split them into separate files. Application code splitting is a common approach used in CBA or component-based architecture.',
  },
  {
    title: 'Flexibility, Integration, and Ecosystem',
    text: 'The ability to integrate new technologies with existing applications is an essential feature for any software. Vue is no exception to this rule, and this level of flexibility is one of its biggest selling points. You can write templates using JS, HTML, or a JavaScript syntax extension called JSX. Besides great integration and flexibility, Vue also boasts a great ecosystem with a powerful set of handy tools that can make development simple, fast, and convenient.',
  },
];

const Vue = () => {
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
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(120deg, rgba(8,49,46,.98) 0%, rgba(8,49,46,.85) 55%, rgba(8,49,46,.72) 100%)' }} />

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
              Vue.js Consulting <Box component="span" sx={{ color: lime }}>by ONAS Solutions</Box>
            </Typography>

            <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 560, marginBottom: '1rem' }}>
              Vue.js is a progressive JavaScript-based framework used for single-page apps and web interfaces, but can also be used for mobile and desktop development in conjunction with the Electron framework.
            </Body>

            <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 560 }}>
              Thanks to the HTML extension and JavaScript base, Vue quickly became a popular tool for user interface development.
            </Body>
          </motion.div>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png"
              alt="Vue.js"
              sx={{ width: { xs: 200, md: 280 }, height: 'auto', display: 'block' }}
            />
          </Box>
        </Box>
      </Box>

      {/* ── BENEFITS ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Benefits</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 800 }}>
            Benefits of Vue.js
          </SectionHeading>
        </Box>

        <Box sx={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 28,
                    height: 28,
                    display: 'grid',
                    placeItems: 'center',
                    background: '#e6f7e6',
                    border: `1px solid ${line}`,
                    borderRadius: '2px',
                    marginTop: '.15rem',
                  }}
                >
                  <Check sx={{ fontSize: 16, color: '#257a68' }} />
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
            Train Your Team on Vue.js
          </SectionHeading>
          <Body sx={{ marginBottom: '1.6rem' }}>
            Let&apos;s design a Vue.js training program that fits your engineers&apos; existing experience, your tech stack, and your delivery goals.
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
            Request a Proposal <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Section>
    </PageShell>
  );
};

export default Vue;