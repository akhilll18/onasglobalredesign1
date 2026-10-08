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
} from '@/theme/theme';

import BD1 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Back-End Development/backenddev1.jpg';
import BD2 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Back-End Development/backenddev2.jpg';
import BD3 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Back-End Development/backenddev3.jpg';
import BD4 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Back-End Development/backenddev4.jpg';
import BD5 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Back-End Development/backenddev5.jpg';
import BD6 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Back-End Development/backenddev6.jpg';
import BD7 from '@/assets/images/staffing/AI & EdTech Services/tech-services/Back-End Development/backenddev7.jpg';

const services = [
  { title: 'Back-End API Management', text: 'We work with APIs in scalable and secure environments, both in the cloud and on-premises.', image: BD1 },
  { title: 'Data Storage Back-End Application', text: 'We are developing an ideal server application that can store data and scale when hosted on cloud computing services.', image: BD2 },
  { title: 'Back-End Development Services for Enterprises', text: 'We create sophisticated electronic design automation workflows, middle tiers, SCAP web services using frameworks to provide enterprise business solutions.', image: BD3 },
  { title: 'Custom Server Solutions', text: 'We provide custom back-end development services for businesses of any scale. Get robust server solutions to help your business at any level. Innovative web application that stores and manages data from multiple sources.', image: BD4 },
  { title: 'Back-End CRM Development', text: 'Get a complete CRM platform that fully meets your requirements with our development services.', image: BD5 },
  { title: 'Back-End Application Services', text: 'Using back-end programming services, we can easily add a robust cloud database, tracking analytics, and push notifications to your mobile apps.', image: BD6 },
  { title: 'Migration to Cloud', text: 'Have an outdated system or want to reduce system maintenance costs? We help migrate server systems to public, private, and hybrid clouds according to your business needs.', image: BD7 },
];

const whyChoose = [
  { title: 'Flexible Approach', text: 'Our agile design ensures on-time delivery to our customers, higher product quality, and lower overall risks.' },
  { title: 'Fast Availability', text: 'We promise the fast availability of suitable candidates for your web or mobile application project.' },
  { title: 'Excellent Results', text: 'Our back-end developers have solid experience and a good reputation. See for yourself on our case studies page.' },
  { title: 'Scalability and Reliability', text: 'We always make sure that your development team is ideally suited to your project\'s needs and requirements.' },
  { title: 'Clear Communication', text: 'Work with back-end programmers who speak, read, and write English fluently.' },
];

const BackendDevelopment = () => {
  return (
    <PageShell>
      <Box
        sx={{
          position: 'relative',
          marginTop: { xs: '72px', sm: '76px', md: '92px', lg: '100px' },
          minHeight: { xs: 480, md: 560 },
          padding: { xs: '7rem 1rem 3rem', md: '9rem 2.5rem 4rem' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundImage: `url(${BD3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          isolation: 'isolate',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -1, background: 'linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,.55) 100%)' }} />

        <Box sx={{ maxWidth: 900, margin: '0 auto', textAlign: 'left', width: '100%', position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)' }}>Corporate Training</Eyebrow>
            <Typography
              component="h1"
              sx={{
                margin: '.5rem 0 1.4rem',
                font: "400 clamp(1.5rem, 3.2vw, 2.4rem)/1.05 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 720,
                letterSpacing: 0,
                textShadow: '0 2px 12px rgba(0,0,0,.95), 0 1px 3px rgba(0,0,0,1)',
              }}
            >
              Back-End Development Services to Scale <Box component="span" sx={{ color: lime }}>Alongside Your Growing Business Needs</Box>
            </Typography>

            <Body sx={{ color: '#ffffff !important', maxWidth: 640, marginBottom: '1.8rem', textShadow: '0 1px 8px rgba(0,0,0,.95)' }}>
              APIs, data storage, CRM integrations, and cloud migration — we help teams master the server side of modern applications.
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
              Get in Touch <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </motion.div>
        </Box>
      </Box>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Services</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            Back-End Development Services We Deliver
          </SectionHeading>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: { xs: '1.2rem', md: '1.4rem' } }}>
          {services.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 3) * 0.05 }} style={{ display: 'flex', width: '100%' }}>
              <Box sx={{ ...cardSx, padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ width: '100%', height: 140, overflow: 'hidden', borderBottom: `1px solid ${line}` }}>
                  <Box component="img" src={b.image} alt={b.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Box>
                <Box sx={{ padding: { xs: '1.2rem 1.1rem', md: '1.4rem 1.3rem' }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography component="h3" sx={{ margin: '0 0 .6rem', font: "400 clamp(.85rem, 1.3vw, .98rem)/1.25 Georgia, 'Times New Roman', serif", color: ink, textTransform: 'uppercase', letterSpacing: '.02em' }}>
                    {b.title}
                  </Typography>
                  <Body sx={{ fontSize: '.64rem', lineHeight: 1.7, flexGrow: 1 }}>{b.text}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Why Choose Us</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            Why Choose ONAS for Back-End Development
          </SectionHeading>
        </Box>

        <Box sx={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: '1.8rem 2.5rem' }}>
          {whyChoose.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <Box sx={{ flexShrink: 0, width: 28, height: 28, display: 'grid', placeItems: 'center', background: '#ffffff', border: `1px solid ${line}`, borderRadius: '2px', marginTop: '.15rem' }}>
                  <Check sx={{ fontSize: 16, color: '#0B4C74' }} />
                </Box>
                <Box>
                  <Typography component="h3" sx={{ margin: '0 0 .5rem', font: "400 clamp(.85rem, 1.3vw, .98rem)/1.25 Georgia, 'Times New Roman', serif", color: ink, textTransform: 'uppercase', letterSpacing: '.02em' }}>
                    {b.title}
                  </Typography>
                  <Body sx={{ fontSize: '.68rem', lineHeight: 1.75 }}>{b.text}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <Eyebrow>Get Started</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Train Your Team on Back-End Development
          </SectionHeading>
          <Body sx={{ marginBottom: '1.6rem' }}>
            Let&apos;s design a back-end training program that fits your engineers&apos; existing experience, your tech stack, and your delivery goals.
          </Body>
          <Box component="a" href="/resources/contact-us" sx={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.7rem 1.1rem', borderRadius: '2px', background: '#0B4C74', color: '#ffffff', fontWeight: 600, fontSize: '.62rem', fontFamily: "'Poppins', sans-serif", textDecoration: 'none', transition: 'background .2s ease', '&:hover': { background: '#d3ffb0', color: '#000000' } }}>
            Request a Proposal <ArrowForward sx={{ fontSize: 14 }} />
          </Box>
        </Box>
      </Section>
    </PageShell>
  );
};

export default BackendDevelopment;