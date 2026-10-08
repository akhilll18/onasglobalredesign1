import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ExpandMore } from '@mui/icons-material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PublicIcon from '@mui/icons-material/Public';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptIcon from '@mui/icons-material/Receipt';

import SolutionsCTA from '../../../components/SolutionsCTA';

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

import B1 from '../../../assets/images/solutions/e-waybill/e-bill1.jpg';
import B2 from '../../../assets/images/solutions/e-waybill/e-bill2.jpg';
import B3 from '../../../assets/images/solutions/e-waybill/e-bill3.jpg';
import B4 from '../../../assets/images/solutions/e-waybill/e-bill4.jpg';
import B5 from '../../../assets/images/solutions/e-waybill/e-bill5.jpg';
import B6 from '../../../assets/images/solutions/e-waybill/e-bill6.jpg';
import B7 from '../../../assets/images/solutions/e-waybill/e-bill7.jpg';
import B8 from '../../../assets/images/solutions/e-waybill/e-bill8.jpg';
import B9 from '../../../assets/images/solutions/e-waybill/e-bill9.jpg';

const countries = [
  { name: 'India', description: "India's e-Waybill system is one of the first pioneers among countries as a comprehensive and widely used system for intra and inter-state movement of goods.", flag: '🇮🇳' },
  { name: 'Brazil', description: 'Brazil uses an electronic tracking system for goods in transit called "Conhecimento de Transporte Eletrônico" (CT-e).', flag: '🇧🇷' },
  { name: 'South Africa', description: 'The e-Road Freight Manifest system in South Africa performs a similar function, enabling the tracking of goods while complying with local tax regulations.', flag: '🇿🇦' },
  { name: 'European Union', description: 'Various EU countries are adopting electronic freight information systems for cross-border transport.', flag: '🇪🇺' },
  { name: 'Turkey', description: 'e-Waybill systems help modernize and streamline the tracking and compliance process for goods in transit.', flag: '🇹🇷' },
];

const features = [
  { title: 'Centralized Management', description: 'Manage, modify and monitor e-Waybills from a single integrated platform without switching between multiple systems.', icon: <DashboardIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: B1 },
  { title: 'Compliance Assurance', description: 'Stay aligned with changing e-Waybill requirements and regional tax regulations through automated compliance processes.', icon: <SecurityIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: B2 },
  { title: 'Automated Validations', description: 'Automated validation checks help ensure that e-Waybills are accurate, complete and ready for submission.', icon: <CheckCircleIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: B3 },
  { title: 'Real-Time Tracking', description: 'Monitor e-Waybill status in real time and receive timely notifications when actions or updates are required.', icon: <NotificationsIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: B4 },
  { title: 'Global Compliance', description: 'Support e-Waybill requirements across multiple jurisdictions with a solution designed for global tax compliance.', icon: <PublicIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: B5 },
  { title: 'Efficient Logistics', description: 'Connect logistics and tax processes to improve operational efficiency and maintain visibility throughout goods movement.', icon: <LocalShippingIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: B6 },
];

const faqs = [
  { question: 'Why is the e-Waybill required?', answer: 'Electronic waybills provide enhanced transparency, support regulatory compliance, and enable authorities to track goods movement efficiently. Our platform helps businesses manage these requirements seamlessly.' },
  { question: 'Who can generate the e-Waybill?', answer: 'Registered businesses, suppliers, transporters, and eligible recipients can generate e-Waybills based on applicable regulations. Our platform supports all stakeholders involved in the process.' },
  { question: 'When is an e-Waybill generated?', answer: 'Generation occurs when goods are moved under transactions meeting regulatory criteria, including sales, transfers, exports, and returns.' },
  { question: 'Is e-Waybill mandatory for e-Invoice?', answer: 'e-Waybill and e-Invoice requirements vary by jurisdiction. In many cases, they can be integrated to create a unified tax and logistics information flow.' },
  { question: 'What happens if there is a mistake in the e-Waybill?', answer: 'Depending on the jurisdiction, an incorrect e-Waybill may need to be cancelled and reissued. Our platform helps identify errors and reduce manual correction efforts.' },
  { question: 'Is there a validity period for an e-Waybill?', answer: 'Yes, validity depends on factors like distance traveled and local regulations. Automated monitoring helps businesses track expiry and movement status.' },
  { question: 'Is an e-Waybill required for every shipment?', answer: 'Not necessarily. Requirements depend on transaction type, value, goods classification, and local regulations. Our platform helps determine when an e-Waybill is applicable.' },
];

const howItWorks = [
  { Icon: ReceiptIcon, text: 'Generate e-Waybills using business and transaction information.' },
  { Icon: CheckCircleIcon, text: 'Automatically validate required information before submission.' },
  { Icon: LocalShippingIcon, text: 'Track goods movement and e-Waybill status in real time.' },
  { Icon: SecurityIcon, text: 'Maintain compliance with applicable regional requirements.' },
];

const EWaybill = () => {
  const slides = [B7, B8, B9];
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
          padding: { xs: '7rem 1rem 3rem', md: '9rem 2.5rem 4rem' },
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
              e-Waybill
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
              e-Waybill
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
              Streamline logistics and tax compliance with digital tracking. Our integrated e-Waybill solution helps businesses generate, validate, monitor, and manage electronic waybills seamlessly across jurisdictions.
            </Body>
          </motion.div>
        </Container>
      </Box>

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
            <Eyebrow>Overview</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              What is an e-Waybill?
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              An Electronic Waybill (e-Waybill) is a digital document that captures and tracks information about goods in transit. It plays a vital role in modern logistics, transportation management, and tax compliance.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              Requirements vary across countries and jurisdictions. Our platform helps organizations navigate these diverse regulations through automated generation, validation, tracking, and compliance workflows.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
              By integrating tax compliance with logistics processes, businesses gain better visibility while reducing manual effort and minimizing errors.
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
              src={B1}
              alt="Logistics and transportation"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Global Coverage</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Countries Where e-Waybill is Applicable
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            Our e-Waybill Compliance Cloud supports businesses operating across multiple jurisdictions with electronic goods movement and tax compliance requirements.
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
          {countries.map((country, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={cardSx}>
                <Typography
                  component="h3"
                  sx={{
                    margin: '0 0 .6rem',
                    font: "400 .92rem Georgia, 'Times New Roman', serif",
                    color: ink,
                    lineHeight: 1.3,
                  }}
                >
                  <Box component="span" sx={{ marginRight: '.4rem' }}>{country.flag}</Box>
                  {country.name}
                </Typography>
                <Body sx={{ fontSize: '.64rem', lineHeight: 1.7, margin: 0 }}>{country.description}</Body>
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
              How Does e-Waybill Management Work?
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '1rem' }}>
              Our platform streamlines the entire e-Waybill lifecycle by connecting document creation, validation, compliance checks, and tracking into a single, integrated workflow.
            </Body>

            {howItWorks.map(({ Icon, text }, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: '.7rem', marginBottom: '.7rem' }}>
                <Icon sx={{ fontSize: 18, color: '#0B4C74', marginTop: '2px', flexShrink: 0 }} />
                <Body sx={{ fontSize: '.68rem', lineHeight: 1.7, margin: 0 }}>{text}</Body>
              </Box>
            ))}
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
              src={B2}
              alt="Digital logistics management"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Features</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Managing e-Waybill with Our Platform
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            A centralized platform designed to simplify e-Waybill management, compliance, and logistics visibility.
          </Body>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1.2rem', md: '1.4rem' },
            alignItems: 'stretch',
          }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={cardSx}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 140,
                    overflow: 'hidden',
                    background: soft,
                    borderBottom: `1px solid ${line}`,
                  }}
                >
                  <Box
                    component="img"
                    src={feature.image}
                    alt={feature.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </Box>
                <Box
                  sx={{
                    padding: { xs: '1.6rem 1.2rem 1.3rem', md: '1.8rem 1.4rem 1.5rem' },
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '-22px',
                      left: '1.2rem',
                      display: 'grid',
                      placeItems: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: '#fff',
                      border: `1px solid ${line}`,
                      boxShadow: '0 4px 12px rgba(18,63,59,0.08)',
                      flexShrink: 0,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    component="h3"
                    sx={{
                      margin: '1rem 0 .6rem',
                      font: "400 clamp(1rem, 1.6vw, 1.15rem)/1.2 Georgia, 'Times New Roman', serif",
                      color: ink,
                      minHeight: '2.4rem',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Body sx={{ flexGrow: 1 }}>{feature.description}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ background: ink, borderRadius: '2px', padding: { xs: '1.8rem 1.4rem', md: '2.4rem 2rem' } }}>
          <Typography sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)', fontSize: '.55rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
            Summary
          </Typography>
          <Typography
            component="h2"
            sx={{
              margin: '.7rem 0 1rem',
              font: "400 clamp(1.3rem, 2.4vw, 1.9rem)/1.1 Georgia, 'Times New Roman', serif",
              color: '#fff',
              maxWidth: 720,
              textShadow: '0 2px 12px rgba(0,0,0,.95)',
            }}
          >
            Simplify e-Waybill Compliance
          </Typography>
          <Body sx={{ color: '#ffffff !important', fontSize: '.72rem', lineHeight: 1.8, maxWidth: 900, margin: 0, textShadow: '0 1px 8px rgba(0,0,0,.95)' }}>
            Understanding and adapting to diverse e-Waybill practices is essential for businesses involved in domestic and international trade. Our platform provides a centralized compliance solution that helps organizations manage e-Waybills efficiently while improving visibility, accuracy, and supply-chain operations.
          </Body>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>FAQ</Eyebrow>
          <SectionHeading>Frequently Asked Questions</SectionHeading>
        </Box>

        <Box sx={{ maxWidth: 950, margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              elevation={0}
              disableGutters
              sx={{
                marginBottom: '.6rem',
                background: '#fff',
                border: `1px solid ${line}`,
                borderRadius: '2px !important',
                overflow: 'hidden',
                '&:before': { display: 'none' },
                '&.Mui-expanded': { margin: `0 0 .6rem 0` },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: '#0B4C74', fontSize: 20 }} />}
                sx={{
                  padding: { xs: '.6rem 1rem', md: '.7rem 1.4rem' },
                  '& .MuiAccordionSummary-content': { margin: '.6rem 0' },
                  '&.Mui-expanded': { minHeight: 'auto' },
                }}
              >
                <Typography
                  sx={{
                    color: `${ink} !important`,
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: '.82rem',
                    lineHeight: 1.4,
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ padding: { xs: '.2rem 1rem 1.2rem', md: '.2rem 1.4rem 1.4rem' } }}>
                <Body sx={{ fontSize: '.68rem', lineHeight: 1.8, margin: 0 }}>{faq.answer}</Body>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Section>

      <SolutionsCTA />
    </PageShell>
  );
};

export default EWaybill;