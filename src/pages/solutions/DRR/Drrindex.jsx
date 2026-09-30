import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import GavelIcon from '@mui/icons-material/Gavel';

import SolutionsCTA from '../../../components/SolutionsCTA';
import SolutionsServices from '../../../components/SolutionsServices';

// Shared design
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

const benefits = [
  {
    title: 'Consistent Digital Reporting',
    description: 'Bring reporting activities together through structured digital formats that make recurring tax submissions easier to manage.',
    icon: <CheckCircleIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop',
  },
  {
    title: 'Faster Data Validation',
    description: 'Structured digital information makes it easier to validate submitted records and identify inconsistencies before reporting.',
    icon: <SecurityIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop',
  },
  {
    title: 'Clearer Reporting Insights',
    description: 'Organized reporting data gives finance teams better visibility for analysis, planning, and informed decision-making.',
    icon: <TrendingUpIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
  },
];

const challenges = [
  {
    title: 'System Integration',
    description: 'Existing finance and tax systems may require additional integration to support changing digital reporting formats.',
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
  },
  {
    title: 'Information Security',
    description: 'Digital transmission of sensitive financial information requires strong access controls, secure connections, and appropriate safeguards.',
    icon: <DataUsageIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop',
  },
  {
    title: 'Changing Reporting Requirements',
    description: 'Monitoring updates across different jurisdictions can become time-consuming as digital reporting requirements continue to change.',
    icon: <AutorenewIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4XevPrZ4knaSAwVKHOTDw2VZF4-5Y9zIGIN0pvuV-g&s=10',
  },
  {
    title: 'Regulatory Changes',
    description: 'Regular monitoring helps organizations respond promptly when tax authorities introduce new reporting rules or submission requirements.',
    icon: <GavelIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=200&fit=crop',
  },
];

const services = [
  { title: 'DRR', description: 'Our Digital Reporting Requirements solution helps organizations manage tax data and reporting obligations across multiple jurisdictions.', path: '/solutions/drr/drr', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop' },
  { title: 'e-Reporting', description: 'Our e-Reporting solution simplifies the preparation and submission of electronic reports while supporting accurate and efficient tax compliance across jurisdictions.', path: '/solutions/reporting/saf-t', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=200&fit=crop' },
  { title: 'SAF-T', description: 'Our SAF-T solution helps organizations prepare structured audit files containing the transactional information required for digital tax reporting.', path: '/solutions/reporting/saf-t', image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=200&fit=crop' },
  { title: 'e-Invoicing', description: 'Our e-Invoicing solution simplifies digital invoicing while supporting different technical standards and reporting models, including periodic and real-time requirements.', path: '/solutions/drr/e-invoicing', image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop' },
  { title: 'ViDA', description: 'Our ViDA (VAT in the Digital Age) solution helps organizations prepare for evolving VAT reporting models through structured digital reporting and improved compliance visibility.', path: '/solutions/drr/vida', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=200&fit=crop' },
];

const drrComponents = [
  { label: 'Post-Audit Invoicing — Manual Controls', level: 0 },
  { label: 'CTE — Continuous Transaction Controls', level: 1 },
  { label: 'RTIR — Real-Time Invoice Reporting', level: 1 },
  { label: 'e-Invoicing — Including Other Document Types', level: 1 },
  { label: 'Without Government Validation', level: 2 },
  { label: 'With Government Validation', level: 2 },
  { label: 'Exchange Through Government Platforms', level: 2 },
  { label: 'Exchange Through Other Channels', level: 2 },
];

const Drrindex = () => {
  return (
    <PageShell>
      {/* Hero */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 420, md: 500 },
          padding: { xs: '5rem 1rem 3rem', md: '7rem 2.5rem 4rem' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundImage:
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKMyluJ10goJyou-Fxy-G_MJc7mOoF6uQKXyi5-q3&s)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          isolation: 'isolate',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            background:
              'linear-gradient(90deg, rgba(11,76,116,.94) 0%, rgba(11,76,116,.72) 55%, rgba(11,76,116,.85) 100%)',
          }}
        />

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: lime }}>Digital Reporting</Eyebrow>
            <Typography
              component="h1"
              sx={{
                margin: '.4rem auto 1rem',
                font: "400 clamp(1.5rem, 3.2vw, 2.4rem)/1.05 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 900,
              }}
            >
              Digital Reporting Requirements (DRR)
            </Typography>
            <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto' }}>
              Tax reporting is becoming increasingly digital as authorities introduce new ways for businesses to submit transaction and tax information. Our DRR capabilities help organizations understand these requirements, organize reporting data, and manage digital submissions more efficiently.
            </Body>
          </motion.div>
        </Container>
      </Box>

      {/* What are DRR? */}
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
              What are Digital Reporting Requirements (DRR)?
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
              Digital Reporting Requirements (DRR) are rules introduced by tax authorities that require businesses to provide tax and transaction information in structured digital formats. These requirements can include e-invoicing, electronic reporting, and other forms of digital data submission. Because reporting models can differ between jurisdictions, organizations need flexible processes that can accommodate local requirements and changing submission standards.
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
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop"
              alt="DRR overview"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      {/* DRR Components */}
      <Section bg={soft}>
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
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
              alt="DRR Components"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          <Box>
            <Eyebrow>Structure</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1.4rem' }}>
              DRR Components
            </SectionHeading>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.4rem',
                paddingLeft: '1rem',
                borderLeft: `2px solid #0B4C74`,
              }}
            >
              {drrComponents.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.7rem',
                    paddingLeft: `${item.level * 1.2}rem`,
                  }}
                >
                  <Box
                    sx={{
                      width: item.level === 0 ? 8 : 6,
                      height: item.level === 0 ? 8 : 6,
                      borderRadius: '50%',
                      background: item.level === 0 ? '#0B4C74' : '#0B4C74',
                      flexShrink: 0,
                    }}
                  />
                  <Typography
                    sx={{
                      color: item.level === 0 ? `${ink} !important` : `${muted} !important`,
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: item.level === 0 ? '.68rem' : '.62rem',
                      fontWeight: item.level === 0 ? 600 : 400,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Section>

      {/* Benefits */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Why It Matters</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Why Digital Reporting Matters
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            As tax reporting continues to move toward digital models, organizations operating across multiple jurisdictions need processes that can adapt to different reporting obligations. A well-structured DRR approach can improve reporting consistency, reduce manual effort, and provide stronger visibility into tax-related data and compliance activities.
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
          {benefits.map((benefit, i) => (
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
                    src={benefit.image}
                    alt={benefit.title}
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
                    {benefit.icon}
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
                    {benefit.title}
                  </Typography>

                  <Body sx={{ flexGrow: 1 }}>{benefit.description}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* Challenges */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Challenges</Eyebrow>
          <SectionHeading>Common DRR Challenges</SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: '1rem', md: '1.2rem' },
            alignItems: 'stretch',
          }}
        >
          {challenges.map((challenge, i) => (
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
                    position: 'relative',
                    width: '100%',
                    height: 130,
                    overflow: 'hidden',
                    background: soft,
                    borderBottom: `1px solid ${line}`,
                  }}
                >
                  <Box
                    component="img"
                    src={challenge.image}
                    alt={challenge.title}
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
                    {challenge.icon}
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
                    {challenge.title}
                  </Typography>

                  <Body sx={{ flexGrow: 1 }}>{challenge.description}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <SolutionsCTA />
      <SolutionsServices services={services} />
    </PageShell>
  );
};

export default Drrindex;