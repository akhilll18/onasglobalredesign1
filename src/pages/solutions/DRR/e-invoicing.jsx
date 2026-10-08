import React, { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';

import PublicIcon from '@mui/icons-material/Public';
import CloudIcon from '@mui/icons-material/Cloud';
import ReceiptIcon from '@mui/icons-material/Receipt';
import VerifiedIcon from '@mui/icons-material/Verified';

import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  cardSx,
  containerSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

import E1 from '../../../assets/images/solutions/e-invoicing/e-invoicing1.jpg';
import E2 from '../../../assets/images/solutions/e-invoicing/e-invoicing2.jpg';
import E3 from '../../../assets/images/solutions/e-invoicing/e-invoicing3.jpg';
import E4 from '../../../assets/images/solutions/e-invoicing/e-invoicing4.jpg';
import E5 from '../../../assets/images/solutions/e-invoicing/e-invoicing5.jpg';
import E6 from '../../../assets/images/solutions/e-invoicing/e-invoicing6.jpg';
import E7 from '../../../assets/images/solutions/e-invoicing/e-invoicing7.jpg';

const benefits = [
  {
    title: 'Cost Savings',
    description: 'Our platform helps businesses reduce costs by eliminating paper-based processes, minimizing manual intervention, and lowering operational expenses.',
    image: E1,
  },
  {
    title: 'Time Efficiency',
    description: 'Accelerate your invoicing cycle from creation to delivery with automated workflows that eliminate delays and streamline the entire process.',
    image: E2,
  },
  {
    title: 'Enhanced Accuracy',
    description: 'Eliminate manual data entry errors, reduce processing delays, and ensure data integrity across your entire invoicing ecosystem.',
    image: E3,
  },
  {
    title: 'Regulatory Compliance',
    description: 'Stay ahead of evolving regulations with built-in compliance features that support global standards including PEPPOL, XML, UBL, and PDF formats.',
    image: E4,
  },
];

const globalStandards = [
  { region: 'European Union', description: 'Mandated for all B2B intra-Community transactions, based on the EN16931 standard.', icon: <PublicIcon sx={{ fontSize: 22, color: '#0B4C74' }} /> },
  { region: 'Latin America', description: 'Known for some of the most stringent e-Invoicing regulations, including real-time invoice approval by tax authorities.', icon: <VerifiedIcon sx={{ fontSize: 22, color: '#0B4C74' }} /> },
  { region: 'Asia-Pacific', description: 'Varying levels of e-Invoicing adoption, with countries like Singapore leading the way.', icon: <CloudIcon sx={{ fontSize: 22, color: '#0B4C74' }} /> },
  { region: 'United States', description: 'E-Invoicing is accepted but not yet mandated at the federal level, though some states have specific requirements.', icon: <ReceiptIcon sx={{ fontSize: 22, color: '#0B4C74' }} /> },
];

const EInvoicing = () => {
  const slides = [E5, E6, E7];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <PageShell>
      <Box
        sx={{
          position: 'relative',
          marginTop: { xs: '72px', sm: '76px', md: '92px', lg: '100px' },
          minHeight: { xs: 420, md: 500 },
          padding: { xs: '5rem 1rem 3rem', md: '7rem 2.5rem 4rem' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: '#0B4C74',
          isolation: 'isolate',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, zIndex: -2, overflow: 'hidden' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 1.1, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${slides[currentSlide]})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />
          </AnimatePresence>
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              background: 'linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,.45) 100%)',
            }}
          />
        </Box>

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)' }}>
              e-Invoicing
            </Eyebrow>
            <Typography
              component="h1"
              sx={{
                margin: '.4rem auto 1rem',
                font: "400 clamp(1.5rem, 3.2vw, 2.4rem)/1.05 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 900,
                textShadow: '0 2px 12px rgba(0,0,0,.95), 0 1px 3px rgba(0,0,0,1)',
              }}
            >
              e-Invoicing: Transforming Global Financial Operations
            </Typography>
            <Body
              sx={{
                color: '#ffffff !important',
                maxWidth: 780,
                marginLeft: 'auto',
                marginRight: 'auto',
                textShadow: '0 1px 8px rgba(0,0,0,.95)',
              }}
            >
              As businesses worldwide embrace digital transformation, financial operations are evolving rapidly. Our advanced e-Invoicing platform enables organizations to automate their billing processes, ensuring faster transactions, improved accuracy, and seamless compliance with international regulations.
            </Body>
          </motion.div>
        </Container>
      </Box>

      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '.95fr 1.05fr' },
            gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' },
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
              height: { xs: 220, sm: 260, md: 320 },
            }}
          >
            <Box
              component="img"
              src={E1}
              alt="e-Invoicing"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          <Box>
            <Eyebrow>Overview</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              What is e-Invoicing?
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              e-Invoicing is the digital exchange of invoice documents between suppliers and buyers. This modern approach replaces traditional paper-based invoicing, delivering greater efficiency, cost savings, and environmental sustainability. As more countries mandate electronic invoicing for tax compliance, our platform ensures your business stays ahead of regulatory requirements with comprehensive digital invoicing solutions.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
              The shift from paper to digital invoicing represents a fundamental transformation in financial operations. Traditional methods involve printing, mailing, and manual data entry into accounting systems—processes that are both time-intensive and error-prone. Our e-Invoicing platform automates the complete invoice lifecycle, from creation to reconciliation, eliminating inefficiencies and enabling seamless financial workflows.
            </Body>
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Global Standards</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Global Adoption and Standards
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            e-Invoicing requirements vary significantly across the globe. Our platform helps multinational enterprises navigate these diverse regulatory landscapes with localized expertise and comprehensive compliance capabilities.
          </Body>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
            alignItems: 'stretch',
          }}
        >
          {globalStandards.map((standard, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={cardSx}>
                <Box
                  sx={{
                    padding: { xs: '1.4rem 1.1rem', md: '1.6rem 1.3rem' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    flexGrow: 1,
                    gap: '.9rem',
                  }}
                >
                  <Box
                    sx={{
                      display: 'grid',
                      placeItems: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: soft,
                      border: `1px solid ${line}`,
                      flexShrink: 0,
                    }}
                  >
                    {standard.icon}
                  </Box>
                  <Typography
                    component="h3"
                    sx={{
                      margin: 0,
                      font: "400 .95rem Georgia, 'Times New Roman', serif",
                      color: ink,
                      lineHeight: 1.3,
                    }}
                  >
                    {standard.region}
                  </Typography>
                  <Body sx={{ fontSize: '.64rem', lineHeight: 1.7, margin: 0 }}>
                    {standard.description}
                  </Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' },
            gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' },
            alignItems: 'center',
          }}
        >
          <Box>
            <Eyebrow>How It Works</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              How does e-Invoicing work?
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              The distinction between traditional and electronic invoicing lies in the underlying processes. Conventional invoicing relies on physical documents that must be printed, mailed, and manually entered into accounting systems by the recipient—a workflow that is both slow and susceptible to errors.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
              Our e-Invoicing solution eliminates these manual steps by leveraging structured data formats that enable end-to-end automation. From invoice generation to archiving, the entire process is digitized, allowing systems to interpret and process invoices without human intervention. This ensures faster processing, fewer errors, and seamless integration with existing financial systems.
            </Body>
          </Box>

          <Box
            sx={{
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
              height: { xs: 220, sm: 260, md: 320 },
            }}
          >
            <Box
              component="img"
              src={E2}
              alt="How e-Invoice works"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Key Benefits</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Key Benefits of e-Invoicing
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            Our e-Invoicing platform delivers measurable advantages including significant cost reductions, faster processing times, improved data accuracy, and comprehensive regulatory compliance across multiple jurisdictions.
          </Body>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: '1.2rem', md: '1.4rem' },
            alignItems: 'stretch',
          }}
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={cardSx}>
                <Box
                  sx={{
                    width: '100%',
                    height: 140,
                    overflow: 'hidden',
                    background: soft,
                    borderBottom: `1px solid ${line}`,
                  }}
                >
                  <Box
                    component="img"
                    src={benefit.image}
                    alt={benefit.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </Box>
                <Box
                  sx={{
                    padding: { xs: '1.4rem 1.1rem 1.2rem', md: '1.5rem 1.3rem 1.3rem' },
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      margin: '0 0 .55rem',
                      font: "400 clamp(.95rem, 1.5vw, 1.1rem)/1.2 Georgia, 'Times New Roman', serif",
                      color: ink,
                      minHeight: '2.4rem',
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Body sx={{ flexGrow: 1 }}>{benefit.description}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: '1.5rem', md: '1.8rem' },
            alignItems: 'stretch',
          }}
        >
          <Box
            sx={{
              background: '#fff',
              border: `1px solid ${line}`,
              borderRadius: '2px',
              padding: { xs: '1.6rem 1.2rem', md: '2rem 1.6rem' },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Eyebrow>Compliance</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem', font: "400 clamp(1.2rem, 2vw, 1.6rem)/1.15 Georgia, 'Times New Roman', serif" }}>
              Legal Requirements of e-Invoicing
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
              e-Invoicing requirements vary across countries and regions. Our platform ensures full compliance with diverse international standards including{' '}
              <Box component="strong" sx={{ color: ink, fontWeight: 600 }}>
                PEPPOL, XML, UBL, PDF
              </Box>
              , and other regulatory frameworks. We continuously monitor and adapt to changing regulations, ensuring your business remains compliant across all jurisdictions.
            </Body>
          </Box>

          <Box
            sx={{
              background: soft,
              border: `1px solid ${line}`,
              borderRadius: '2px',
              padding: { xs: '1.6rem 1.2rem', md: '2rem 1.6rem' },
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Eyebrow>Network</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem', font: "400 clamp(1.2rem, 2vw, 1.6rem)/1.15 Georgia, 'Times New Roman', serif" }}>
              What is PEPPOL e-Invoicing?
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              Pan-European Public Procurement Online (PEPPOL) is a standardized network for exchanging electronic documents across Europe. Our platform provides seamless PEPPOL integration, enabling enterprises to exchange invoices with public sector buyers and suppliers across multiple European countries.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
              The PEPPOL framework operates on a &ldquo;four-corner model&rdquo; connecting senders, their service providers, buyers, and their service providers. We offer comprehensive support for PEPPOL integration, ensuring smooth document exchange and regulatory compliance.
            </Body>
          </Box>
        </Box>
      </Section>

      <Box sx={{ background: ink, paddingTop: { xs: '3rem', md: '4rem' }, paddingBottom: { xs: '3rem', md: '4rem' } }}>
        <Container maxWidth={false} disableGutters sx={containerSx}>
          <Box sx={{ maxWidth: 800, mx: 'auto', textAlign: 'center' }}>
            <Typography sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)', fontSize: '.55rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
              Get Started
            </Typography>
            <Typography
              component="h2"
              sx={{
                margin: '.7rem auto 1rem',
                font: "400 clamp(1.5rem, 3vw, 2.2rem)/1.1 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 720,
                textShadow: '0 2px 12px rgba(0,0,0,.95)',
              }}
            >
              Schedule a Consultation
            </Typography>
            <Body sx={{ color: '#ffffff !important', maxWidth: 600, margin: '0 auto 1.6rem', fontSize: '.72rem', lineHeight: 1.75, textShadow: '0 1px 8px rgba(0,0,0,.95)' }}>
              Connect with our specialists to explore how e-Invoicing can transform your financial operations. Get personalized guidance on implementation, compliance, and optimization strategies.
            </Body>
            <Box
              component={RouterLink}
              to="/resources/contact-us/"
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
              Request a Demo <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </Box>
        </Container>
      </Box>
    </PageShell>
  );
};

export default EInvoicing;