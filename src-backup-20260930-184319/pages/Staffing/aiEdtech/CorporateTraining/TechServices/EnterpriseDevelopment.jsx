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

const howItWorks = [
  { title: 'Use Customized Systems', text: 'Enjoy customized enterprise software solutions tailored to your specific needs and plans.', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop' },
  { title: 'Improving Business Processes', text: 'Improve employee productivity by providing useful business operations management tools.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop' },
  { title: 'Upgrade Systems', text: 'Replace outdated software that is holding you back with systems that are suitable for this purpose.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop' },
  { title: 'Enable Process Automation', text: 'Automate repetitive tasks and free up employees to spend time where they can focus on more important things.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop' },
];

const benefits = [
  'Real-time information and data',
  'Improvement of customer service',
  'Reduction of operation costs',
  'Full customization',
  'Enhanced reporting and planning',
  'Enterprise mobility services',
  'Highly efficient and best-in-class solutions',
  'Transparent project management',
];

const services = [
  { title: 'Digital Transformation Services', text: 'Benefit from our experience in using digital technologies to create new or modify existing business processes by changing organizational culture and customer experiences.', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop' },
  { title: 'Software Integration', text: 'Launch your business strategic advantages and improve your software infrastructure with well-designed microservices, robust APIs, and data integration.', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop' },
  { title: 'Legacy Application Modernization', text: "If your existing system is expensive to manage, complex to customize, and can no longer meet your business's changing requirements, we can help upgrade it.", image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop' },
  { title: 'Custom Enterprise Software', text: 'Support your business infrastructure with scalable enterprise software that extends critical aspects of your organization.', image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop' },
];

const cycle = [
  { title: 'Project Analysis and Planning', text: 'Project Modeling, Prototyping, Project Budgeting.' },
  { title: 'Requirements Analysis and Specification', text: 'Requirements Gathering, Use Cases and User Stories, Requirement Models.' },
  { title: 'Software Development', text: 'Source Code and Complete Code, Code Documentation, Unit Testing.' },
  { title: 'Software Delivery', text: 'Release Management, Change Management, User Guides & Training.' },
  { title: 'Maintenance and Support', text: 'On-demand Support, Model Maintenance, Corrective, Additive, and Perfection Maintenance.' },
];

const expertise = [
  'Call Center Automation',
  'ERP Development',
  'Billing & Accounting',
  'Business Management',
  'ECM and Document Management',
  'Performance Optimization',
  'Marketing Automation',
  'Enterprise Networking',
  'Information Security',
  'CRM Development',
  'Productivity Apps',
];

const EnterpriseDevelopment = () => {
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

        <Box sx={{ maxWidth: 900, margin: '0 auto', textAlign: 'left', width: '100%' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: lime }}>Corporate Training</Eyebrow>
            <Typography
              component="h1"
              sx={{
                margin: '.5rem 0 1.4rem',
                font: "400 clamp(1.5rem, 3.2vw, 2.4rem)/1.05 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 780,
                letterSpacing: 0,
              }}
            >
              Enterprise Software Development <Box component="span" sx={{ color: lime }}>for Innovation and Digital Transformation</Box>
            </Typography>

            <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 640, marginBottom: '1.8rem' }}>
              We help teams design, build, and modernize enterprise software that scales with their business — from legacy upgrades to custom platforms.
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
              Get in Touch <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* ── HOW IT WORKS (cards with images, 4 in a row) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Enterprise Innovation</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            Enterprise Innovation in the Digital Era
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '1rem auto 0', fontSize: '.72rem', lineHeight: 1.75 }}>
            Stay ahead of the pack with digital solutions that transform your core business environment. Rethink your business to align with customer goals and needs while managing the risks associated with digital transformation.
          </Body>
          <Typography sx={{ marginTop: '1.2rem', fontFamily: "'Poppins', sans-serif", fontSize: '.68rem', color: ink, fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase' }}>
            How Does Enterprise Application Development Optimize Business Processes and Improve Customer Service?
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' } }}>
          {howItWorks.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={{ ...cardSx, padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ width: '100%', height: 110, overflow: 'hidden', borderBottom: `1px solid ${line}` }}>
                  <Box component="img" src={b.image} alt={b.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Box>
                <Box sx={{ padding: '1rem .9rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .5rem',
                      font: "400 clamp(.78rem, 1.1vw, .9rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      textTransform: 'uppercase',
                      letterSpacing: '.02em',
                    }}
                  >
                    {b.title}
                  </Typography>
                  <Body sx={{ fontSize: '.6rem', lineHeight: 1.65, flexGrow: 1 }}>{b.text}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── BENEFITS ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Benefits</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            Find Out What Benefits Your Business Can Get
          </SectionHeading>
        </Box>

        <Box sx={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.04 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '.7rem', padding: '.6rem .8rem', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px' }}>
                <Check sx={{ color: '#5e987f', fontSize: 16, marginTop: '2px', flexShrink: 0 }} />
                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.68rem', color: ink, lineHeight: 1.6 }}>
                  {b}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── SERVICES (cards with images, 4 in a row) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Services</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            Enterprise Software Development Services
          </SectionHeading>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: { xs: '1rem', md: '1.2rem' } }}>
          {services.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={{ ...cardSx, padding: 0, overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ width: '100%', height: 120, overflow: 'hidden', borderBottom: `1px solid ${line}` }}>
                  <Box component="img" src={b.image} alt={b.title} sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </Box>
                <Box sx={{ padding: '1rem .9rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .5rem',
                      font: "400 clamp(.78rem, 1.1vw, .9rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      textTransform: 'uppercase',
                      letterSpacing: '.02em',
                    }}
                  >
                    {b.title}
                  </Typography>
                  <Body sx={{ fontSize: '.6rem', lineHeight: 1.65, flexGrow: 1 }}>{b.text}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── FULL CYCLE ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Process</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            We Cover the Full Cycle of Enterprise Software Development
          </SectionHeading>
        </Box>

        <Box sx={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: '1.5rem' }}>
          {cycle.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}
            >
              <Box sx={{ background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: '1.4rem 1.2rem', height: '100%' }}>
                <Typography
                  component="h3"
                  sx={{
                    margin: '0 0 .6rem',
                    font: "400 clamp(.85rem, 1.3vw, .98rem)/1.25 Georgia, 'Times New Roman', serif",
                    color: ink,
                    textTransform: 'uppercase',
                    letterSpacing: '.02em',
                  }}
                >
                  {b.title}
                </Typography>
                <Body sx={{ fontSize: '.66rem', lineHeight: 1.7 }}>{b.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── EXPERTISE ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Expertise</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>
            Our Development Expertise
          </SectionHeading>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem', justifyContent: 'center', maxWidth: 1000, margin: '0 auto' }}>
          {expertise.map((o, i) => (
            <Box key={i} sx={{ padding: '.6rem 1rem', background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', fontFamily: "'Poppins', sans-serif", fontSize: '.66rem', color: ink, transition: 'all .2s ease', '&:hover': { borderColor: '#aac7b2', background: soft } }}>
              {o}
            </Box>
          ))}
        </Box>
      </Section>

      {/* ── CTA ── */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', maxWidth: 800, margin: '0 auto' }}>
          <Eyebrow>Get Started</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Train Your Team on Enterprise Software Development
          </SectionHeading>
          <Body sx={{ marginBottom: '1.6rem' }}>
            Let&apos;s design an enterprise training program that fits your engineers&apos; existing experience, your tech stack, and your delivery goals.
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

export default EnterpriseDevelopment;