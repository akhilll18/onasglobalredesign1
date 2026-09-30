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

const services = [
  {
    n: '01',
    title: 'Blockchain Game Development',
    text: 'Blockchain game development gives creators to earn their products into decentralized environments where users can use the tokens or currencies they earn, collect, or trade while playing the game.',
  },
  {
    n: '02',
    title: 'Blockchain Integration',
    text: 'Whatever is the business type of digital product, a degree of blockchain helps to ensure full transparency of the network, as well as faster and cheaper financial transactions.',
  },
  {
    n: '03',
    title: 'Smart Contracts Development',
    text: 'Self-executing digital agreements are defined on their own to replace traditional contracts and escrow services in the near future. Smart contracts are superior in terms of transparency, security, and reliability.',
  },
  {
    n: '04',
    title: 'Apps Development',
    text: 'Decentralized applications are the next generation of digital products. These automated systems combine smart contracts and front-end user interfaces and can be designed for different purposes — gaming, finance, etc.',
  },
  {
    n: '05',
    title: 'Blockchain Dedicated Team',
    text: 'The best option for those who want to launch but don\'t have time to start up their own in-house team or for those who want to develop their own in-house department with the help of an expert in blockchain development.',
  },
  {
    n: '06',
    title: 'Blockchain Based Marketplaces',
    text: 'Decentralized peer-to-peer platform that enables online customers and sellers to interact directly, cutting out the middleman. It works to solve the pain point of payment issues or data management.',
  },
  {
    n: '07',
    title: 'Enterprise Blockchain Development',
    text: 'Our blockchain development company can custom build blockchain solutions to help enterprises automate operations, ensure confidentiality of operations, and make data exchange process faster as well as.',
  },
  {
    n: '08',
    title: 'Blockchain Security',
    text: 'With the help of professional blockchain security experts from our team, you can get the needed know-how in case of security threat, cryptography protocols — including access management, identity, authentication, and data privacy — within your organization or product.',
  },
];

const benefits = [
  {
    title: 'Save Data from Breaches',
    text: 'Blockchain makes data breaches very difficult and even impossible for cybercriminals to break into your system. Financial data, healthcare records, personal information, etc. can become effectively protected thanks to encryption and decentralization features.',
  },
  {
    title: 'Improve Your Transaction Speed',
    text: 'Blockchain is paving the way for cheaper and faster transactions. While traditional means of handling the financial operations take hours and even days to complete, blockchain can reduce this time to mere seconds.',
  },
  {
    title: 'We Will Help You Reduce Human Intervention',
    text: 'Smart contracts can greatly reduce the need for human supervision for making the financial transaction or data transfer process possible. They can also automatically trigger certain actions in a system once some pre-specified conditions are met.',
  },
  {
    title: 'Improve Traceability',
    text: 'Blockchain-empowered software can trace the provenance of any product or asset, which makes it a lot easier for the system to spot fake transactions, counterfeit financial operations, or even a slow-moving stock in the warehouse.',
  },
];

const Blockchain = () => {
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
              Blockchain Development Services &amp; Consulting <Box component="span" sx={{ color: lime }}>by ONAS Solutions</Box>
            </Typography>

            <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 640, marginBottom: '1.4rem' }}>
              ONAS Solutions is a full-stack blockchain software development company that produces custom blockchain products for different niches and audiences.
            </Body>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', marginBottom: '1.8rem' }}>
              {['Full project support', 'Certified developers', 'FREE quotes'].map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                  <Check sx={{ color: lime, fontSize: 14 }} />
                  <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.68rem', color: 'rgba(255,255,255,.85)' }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>

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
              Get Started <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </motion.div>
        </Box>
      </Box>

      {/* ── SERVICES ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <Eyebrow>Services</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', maxWidth: 900 }}>
            Blockchain Software Development Services
          </SectionHeading>
        </Box>

        <Box sx={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: '1.6rem' }}>
          {services.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
            >
              <Box sx={{ background: '#fff', border: `1px solid ${line}`, borderRadius: '2px', padding: '1.4rem 1.2rem', height: '100%' }}>
                <Typography
                  sx={{
                    font: "400 clamp(1.4rem, 2.4vw, 1.9rem)/1 Georgia, 'Times New Roman', serif",
                    color: '#bcd0c5',
                    letterSpacing: 0,
                    marginBottom: '.6rem',
                  }}
                >
                  {b.n}
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    margin: '0 0 .5rem',
                    font: "400 clamp(.85rem, 1.3vw, .98rem)/1.25 Georgia, 'Times New Roman', serif",
                    color: ink,
                    textTransform: 'uppercase',
                    letterSpacing: '.02em',
                  }}
                >
                  {b.title}
                </Typography>
                <Body sx={{ fontSize: '.66rem', lineHeight: 1.75 }}>{b.text}</Body>
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
            Benefits of Blockchain Development with ONAS
          </SectionHeading>
        </Box>

        <Box sx={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: '1.8rem 2.5rem' }}>
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
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
                      font: "400 clamp(.85rem, 1.3vw, .98rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      textTransform: 'uppercase',
                      letterSpacing: '.02em',
                    }}
                  >
                    {b.title}
                  </Typography>
                  <Body sx={{ fontSize: '.68rem', lineHeight: 1.75 }}>{b.text}</Body>
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
            Train Your Team on Blockchain Development
          </SectionHeading>
          <Body sx={{ marginBottom: '1.6rem' }}>
            Let&apos;s design a blockchain training program that fits your engineers&apos; existing experience, your tech stack, and your delivery goals.
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

export default Blockchain;