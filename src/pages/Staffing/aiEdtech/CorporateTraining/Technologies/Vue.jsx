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
} from '@/theme/theme';

// ✅ Local hero image — Vue folder
import VueHero from '@/assets/images/staffing/AI & EdTech Services/technologies/vue/vuejs.png';

const benefits = [
  { title: 'Speed', text: "Vue's lightweight features make it lightning fast to download and install. Thus, it also has a positive impact on UX and SEO." },
  { title: 'Performance and Rendering of the Virtual DOM', text: 'To improve the process, Vue.js uses a virtual DOM, a copy of the original website DOM that the framework uses to detect element updates without having to render the entire DOM, thereby improving application performance and making page loads much faster. When it comes to choosing the perfect framework for most developers, improving performance and overall speed is key.' },
  { title: 'Two-Way Data Binding', text: 'It mainly describes the relationship between model data updates and a view (UI) with bound components containing data that you can update from time to time. Two-way data binding makes it easier to update related components and track data updates in general. Linked data gets reactive updates in Vue like DOM objects. This feature makes the platform ideal for applications with real-time updates. On the development side, this reactive nature can make updating data easier and faster.' },
  { title: 'Readability and Components', text: 'Vue uses the MVVM (Model-View-ViewModel) architecture to separate your application into components, which is an encapsulated element of the interface itself. These components can be written in JavaScript, CSS, and HTML, without the need to split them into separate files. Application code splitting is a common approach used in CBA or component-based architecture.' },
  { title: 'Flexibility, Integration, and Ecosystem', text: 'The ability to integrate new technologies with existing applications is an essential feature for any software. Vue is no exception to this rule, and this level of flexibility is one of its biggest selling points. You can write templates using JS, HTML, or a JavaScript syntax extension called JSX. Besides great integration and flexibility, Vue also boasts a great ecosystem with a powerful set of handy tools that can make development simple, fast, and convenient.' },
];

const Vue = () => {
  return (
    <PageShell>
      {/* ── HERO (single centered column, background image) ── */}
      <Box
        sx={{
          position: 'relative',
          marginTop: { xs: '72px', sm: '76px', md: '92px', lg: '100px' },
          minHeight: { xs: 480, md: 560 },
          padding: { xs: '7rem 1rem 3rem', md: '9rem 2.5rem 4rem' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundImage: `url(${VueHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: ink,
          isolation: 'isolate',
        }}
      >
        {/* Brand-tinted overlay for text contrast */}
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
              Vue.js Consulting{' '}
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
              Vue.js is a progressive JavaScript-based framework used for single-page apps and web interfaces, but can
              also be used for mobile and desktop development in conjunction with the Electron framework.
            </Body>

            <Body
              sx={{
                color: '#ffffff !important',
                maxWidth: 560,
                margin: '0 auto',
                textShadow: '0 1px 8px rgba(0,0,0,.7)',
              }}
            >
              Thanks to the HTML extension and JavaScript base, Vue quickly became a popular tool for user interface
              development.
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
              Discuss Vue.js Training <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </motion.div>
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

        <Box
          sx={{
            maxWidth: 900,
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.8rem',
          }}
        >
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
            Train Your Team on Vue.js
          </SectionHeading>
          <Body sx={{ marginBottom: '1.6rem' }}>
            Let&apos;s design a Vue.js training program that fits your engineers&apos; existing experience, your tech
            stack, and your delivery goals.
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

export default Vue;