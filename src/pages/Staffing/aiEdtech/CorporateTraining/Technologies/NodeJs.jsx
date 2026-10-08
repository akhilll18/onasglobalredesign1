import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, Check, ExpandMore } from '@mui/icons-material';

import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  cardSx,
  ink, muted, line, soft, lime,
} from '@/theme/theme';

// ✅ Local images (same folder as Flutter, but nodejs subfolder)
import NodeHero from '@/assets/images/staffing/AI & EdTech Services/technologies/nodejs/nodejs1.jpg';
import NodeImg1 from '@/assets/images/staffing/AI & EdTech Services/technologies/nodejs/nodejs2.jpg';
import NodeImg2 from '@/assets/images/staffing/AI & EdTech Services/technologies/nodejs/nodejs3.jpg';
import NodeImg3 from '@/assets/images/staffing/AI & EdTech Services/technologies/nodejs/nodejs4.jpg';
import NodeImg4 from '@/assets/images/staffing/AI & EdTech Services/technologies/nodejs/nodejs5.jpg';
import NodeImg5 from '@/assets/images/staffing/AI & EdTech Services/technologies/nodejs/nodejs6.jpg';

const benefits = [
  {
    title: 'Robust JavaScript Technology',
    text: 'By using Node.js as the backend framework, you automatically get all the benefits of full-featured JavaScript development, including:',
    bullets: [
      'Optimal application speed.',
      'The ability to share and reuse.',
      'A larger number of free tools.',
      'Cross-platform.',
    ],
    after:
      'All this allows us to make the development process as flexible and less time-consuming as possible. As a result, you get high-quality and reliable software in the shortest possible time. JavaScript developers can start programming the backend with minimal effort by packaging existing code into modules and creating new levels of abstraction.',
    image: NodeImg1,
  },
  {
    title: 'Fast Request Processing and Efficient Event-Driven Model',
    text: 'Node.js is fast thanks to its V8 engine. Another important advantage is the synchronous processing of requests. In the context of the server-side, synchronous processing assumes that the code is executed sequentially. The third aspect is the event model. When using the same language on both the client and the backend, synchronization is much faster as it is possible. Which is precisely why we have built real-time applications. Due to its asynchronous, single-threaded nature, Node.js is ideal for online games, chat rooms, video conferencing, or any other project that requires constant data updates.',
    image: NodeImg2,
  },
  {
    title: 'Ideal Choice for Microservices Architecture',
    text: 'As a simple and lightweight programming environment, Node.js has become an ideal solution for the so-called microservice architecture. You can split a single development process into a collection of small services, each of which contains its own simple technological base, often the HTTP REST protocol. Since each microservice communicates directly with the database, this architecture can improve the performance and speed of the application.',
    image: NodeImg3,
  },
  {
    title: 'Rich Ecosystem',
    text: 'NPM - the default Node.js package manager - also serves as the primary platform for open-source JavaScript tools that have played an important role in the development of this programming language. With about a million ready-to-use packages, this runtime ecosystem can solve 99.99% of the problems. Node.js is ecosystem is quite rich. With such a huge variety of free tools available in a few clicks, there is a huge potential for using Node.js. At the same time, open-source software is gaining popularity as it allows new solutions to be created, reducing overall development costs and time-to-market.',
    image: NodeImg4,
  },
  {
    title: 'Full JSON Support',
    text: 'Node.js uses JSON for communication, without conversion between binary models via JavaScript. This is especially useful when you need to create RESTful API to support NoSQL database. The seamless connection to one of the major data transfer standards is another advantage of the JavaScript ecosystem.',
    image: NodeImg5,
  },
];

const NodeJs = () => {
  return (
    <PageShell>
      {/* ===== HERO (matches Flutter pattern) ===== */}
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
          backgroundImage: `url(${NodeHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: ink,
          isolation: 'isolate',
        }}
      >
        {/* Gradient overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            background: 'linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,.65) 100%)',
          }}
        />

        <Box
          sx={{
            maxWidth: 900,
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
            <Eyebrow sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)' }}>
              Corporate Training
            </Eyebrow>

            <Typography
              component="h1"
              sx={{
                margin: '.5rem auto 1rem',
                font: "400 clamp(1.1rem, 2.2vw, 1.7rem)/1.15 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 620,
                letterSpacing: 0,
                textShadow: '0 2px 12px rgba(0,0,0,.95), 0 1px 3px rgba(0,0,0,1)',
              }}
            >
              Node.js Development Services{' '}
              <Box component="span" sx={{ color: lime }}>
                by ONAS Solutions
              </Box>
            </Typography>

            <Body
              sx={{
                color: '#ffffff !important',
                maxWidth: 560,
                margin: '0 auto .8rem',
                textShadow: '0 1px 8px rgba(0,0,0,.95)',
              }}
            >
              Node.js is an open source cross-platform JavaScript runtime developed in JavaScript in V8 Chrome
              directly into machine code. It is a lightweight framework used to develop server-side web applications.
            </Body>

            <Body
              sx={{
                color: '#ffffff !important',
                maxWidth: 560,
                margin: '0 auto 1.8rem',
                textShadow: '0 1px 8px rgba(0,0,0,.95)',
              }}
            >
              It is mainly used for building large-scale applications, mainly for streaming websites, single page
              and other web applications. Node.js uses an event-driven, non-blocking I/O model, which makes it
              suitable for real-time data-intensive applications.
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
              Discuss Node.js Training <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* ===== BENEFITS ===== */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Benefits</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 800 }}>
            Benefits of Node.js
          </SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '2.5rem', md: '4rem' },
            maxWidth: 1100,
            margin: '0 auto',
          }}
        >
          {benefits.map((b, i) => {
            const isReversed = i % 2 === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
              >
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    gap: { xs: '1.5rem', md: 'clamp(2rem, 5vw, 3.5rem)' },
                    alignItems: 'center',
                    direction: { xs: 'ltr', md: isReversed ? 'rtl' : 'ltr' },
                  }}
                >
                  <Box sx={{ direction: 'ltr' }}>
                    <Typography
                      component="h3"
                      sx={{
                        margin: '0 0 .8rem',
                        font: "400 clamp(.95rem, 1.5vw, 1.2rem)/1.25 Georgia, 'Times New Roman', serif",
                        color: ink,
                        textTransform: 'uppercase',
                        letterSpacing: '.02em',
                      }}
                    >
                      {b.title}
                    </Typography>

                    <Body
                      sx={{
                        fontSize: '.68rem',
                        lineHeight: 1.8,
                        marginBottom: b.bullets?.length ? '.8rem' : 0,
                      }}
                    >
                      {b.text}
                    </Body>

                    {b.bullets && b.bullets.length > 0 && (
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '.45rem',
                          marginBottom: b.after ? '.8rem' : 0,
                        }}
                      >
                        {b.bullets.map((bp, bi) => (
                          <Box key={bi} sx={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem' }}>
                            <Check sx={{ fontSize: 14, color: '#0B4C74', marginTop: '3px', flexShrink: 0 }} />
                            <Body sx={{ fontSize: '.66rem', lineHeight: 1.7 }}>{bp}</Body>
                          </Box>
                        ))}
                      </Box>
                    )}

                    {b.after && (
                      <Body sx={{ fontSize: '.68rem', lineHeight: 1.8 }}>{b.after}</Body>
                    )}
                  </Box>

                  <Box
                    sx={{
                      direction: 'ltr',
                      border: `1px solid ${line}`,
                      borderRadius: '2px',
                      overflow: 'hidden',
                      background: '#fff',
                      height: { xs: 220, md: 300 },
                    }}
                  >
                    <Box
                      component="img"
                      src={b.image}
                      alt={b.title}
                      sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Section>

      {/* ===== CTA ===== */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <Eyebrow>Get Started</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Train Your Team on Node.js
          </SectionHeading>
          <Body sx={{ marginBottom: '1.6rem' }}>
            Let&apos;s design a Node.js training program that fits your engineers&apos; existing experience, your
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

export default NodeJs;