import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import DashboardIcon from '@mui/icons-material/Dashboard';
import UpdateIcon from '@mui/icons-material/Update';
import ErrorIcon from '@mui/icons-material/Error';
import ScaleIcon from '@mui/icons-material/Scale';
import SecurityIcon from '@mui/icons-material/Security';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
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

const challenges = [
  { title: 'Integration with Current Systems', description: 'Seamlessly connect ERP systems and financial management tools to streamline invoicing workflows and enhance data accuracy across platforms.', icon: <IntegrationInstructionsIcon sx={{ fontSize: 22, color: '#257a68' }} />, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROE211NUZrw0U_is3GQfF3G6nVFYLr0Z8x9rFr9GS5Bw&s=10' },
  { title: 'Data Security and Privacy', description: 'Ensure compliance with global data protection regulations including GDPR, safeguarding sensitive financial information with enterprise-grade security.', icon: <SecurityIcon sx={{ fontSize: 22, color: '#257a68' }} />, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bez1tqgu9bU0WfZ9Zagj7SwEd1EwXLxw4hW1R-c_bw&s=10' },
  { title: 'Regulatory Updates', description: 'Stay ahead of changing regulations with automated updates that keep your reporting processes aligned with dynamic jurisdictional requirements.', icon: <GavelIcon sx={{ fontSize: 22, color: '#257a68' }} />, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSua21yDjw8uuCPIzJoKCH2Af4-1pLi7C6zK2z2y0C3qA&s=10' },
];

const features = [
  { title: 'Unified Reporting Interface', description: 'A centralized dashboard that consolidates invoice reporting across multiple jurisdictions, enabling companies to monitor and manage global invoicing activities effortlessly.', icon: <DashboardIcon sx={{ fontSize: 22, color: '#257a68' }} />, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop' },
  { title: 'Automated Compliance Updates', description: 'Stay current with evolving regulations through automatic system updates that ensure your company always adheres to the latest compliance standards.', icon: <UpdateIcon sx={{ fontSize: 22, color: '#257a68' }} />, image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=200&fit=crop' },
  { title: 'Real-time Error Detection', description: 'Leverage advanced analytics to instantly identify discrepancies or errors in invoice reports, minimizing penalty risks and ensuring accurate submissions.', icon: <ErrorIcon sx={{ fontSize: 22, color: '#257a68' }} />, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbmEzurYuctbs9dxOhQ5vh_JmZPwIuP348aiQX1xnPQ&s=10' },
  { title: 'Scalable for Growth', description: "Designed to adapt to your business needs, whether you're a growing enterprise or a large multinational, with seamless integration of new countries and regions.", icon: <ScaleIcon sx={{ fontSize: 22, color: '#257a68' }} />, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeODJBz2WwPloqCOxeMO_mVeyuBkAm6pT57EMyROGkug&s=10' },
];

const countries = [
  { name: 'Greece', flag: '🇬🇷' },
  { name: 'Hungary', flag: '🇭🇺' },
  { name: 'Spain', flag: '🇪🇸' },
  { name: 'Turkey', flag: '🇹🇷' },
  { name: 'France', flag: '🇫🇷' },
];

const InvoiceReporting = () => {
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=400&fit=crop)',
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
            background: 'linear-gradient(90deg, rgba(8,49,46,.94) 0%, rgba(8,49,46,.72) 55%, rgba(8,49,46,.85) 100%)',
          }}
        />

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: lime }}>Invoice Reporting</Eyebrow>
            <Typography
              component="h1"
              sx={{
                margin: '.4rem auto 1rem',
                font: "400 clamp(1.5rem, 3.2vw, 2.4rem)/1.05 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 900,
              }}
            >
              Invoice Reporting
            </Typography>
            <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto' }}>
              Simplify global invoice compliance with intelligent reporting solutions. Our platform helps businesses navigate diverse regulatory requirements, ensuring accurate, timely submissions across multiple jurisdictions.
            </Body>
          </motion.div>
        </Container>
      </Box>

      {/* What is Invoice Reporting? */}
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
              What is Invoice Reporting?
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              Invoice reporting is the systematic process of collecting, analyzing, and presenting invoice-related information. It provides businesses with valuable insights into billing activities, helping stakeholders understand receivables, payables, and overall cash flow.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
              By leveraging advanced analytics and automation, organizations can gain real-time visibility into invoicing operations, identify emerging trends, and make data-driven decisions to optimize financial performance.
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-m2w9bKu6Np-BVkZ0irKcVdlruZDylScQAFAk5nvpCg&s=10"
              alt="Invoice Reporting"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      {/* What is Real-Time Invoice Reporting? */}
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeODJBz2WwPloqCOxeMO_mVeyuBkAm6pT57EMyROGkug&s=10"
              alt="Real-Time Invoice Reporting"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          <Box>
            <Eyebrow>Real-Time</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              What is Real-Time Invoice Reporting?
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              Real-Time Invoice Reporting (RTIR) is a revolutionary financial practice gaining worldwide adoption. Our platform enables businesses to submit invoice data to tax authorities almost instantaneously, at the point of transaction or shortly thereafter.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
              This digital transformation provides governments with real-time access to commercial transaction data, enabling businesses to achieve greater transparency, reduce tax evasion, enhance compliance, and optimize tax collection processes.
            </Body>
          </Box>
        </Box>
      </Section>

      {/* Challenges */}
      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Challenges</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Mandatory Invoice Reporting: Challenges for Multinationals
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            Mandatory invoice reporting requirements in countries like Spain and Hungary have transformed the invoicing landscape. Our platform helps enterprises navigate these complex requirements with comprehensive compliance solutions.
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
          {challenges.map((challenge, i) => (
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

      {/* Features */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Our Solution</Eyebrow>
          <SectionHeading>Transforming Invoice Reporting with Advanced Technology</SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
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
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
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
                      font: "400 clamp(.95rem, 1.5vw, 1.1rem)/1.2 Georgia, 'Times New Roman', serif",
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

      {/* Countries */}
      <Section bg={soft}>
        <Box
          sx={{
            background: '#fff',
            border: `1px solid ${line}`,
            borderRadius: '2px',
            padding: { xs: '1.6rem 1.2rem', md: '2rem 1.8rem' },
          }}
        >
          <Eyebrow>Coverage</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1.2rem', font: "400 clamp(1.2rem, 2vw, 1.6rem)/1.15 Georgia, 'Times New Roman', serif" }}>
            Global Invoice Reporting Coverage
          </SectionHeading>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem' }}>
            {countries.map((country, i) => (
              <Box
                key={i}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '.4rem',
                  padding: '.5rem .9rem',
                  background: soft,
                  border: `1px solid ${line}`,
                  borderRadius: '2px',
                  color: ink,
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '.66rem',
                  transition: 'all .2s ease',
                  '&:hover': { borderColor: '#aac7b2' },
                }}
              >
                <Box component="span" sx={{ marginRight: '.2rem' }}>{country.flag}</Box>
                {country.name}
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      {/* Requirements */}
      <Section>
        <Box
          sx={{
            background: '#fff',
            border: `1px solid ${line}`,
            borderRadius: '2px',
            padding: { xs: '1.6rem 1.2rem', md: '2rem 1.8rem' },
          }}
        >
          <Eyebrow>Requirements</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem', font: "400 clamp(1.4rem, 2.6vw, 2rem)/1.1 Georgia, 'Times New Roman', serif" }}>
            What are the Requirements for Real Time Invoice Reporting?
          </SectionHeading>
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, maxWidth: 900, margin: 0 }}>
            Real-Time Invoice Reporting requirements vary by jurisdiction but typically include robust IT infrastructure capable of generating and transmitting detailed invoices promptly. Our platform helps businesses implement systems that handle large data volumes, process payments efficiently, and generate reports meeting government specifications. Additionally, our solutions support multiple currencies and languages, ensuring international compliance.
          </Body>
        </Box>
      </Section>

      <SolutionsCTA />
      <SolutionsServices />
    </PageShell>
  );
};

export default InvoiceReporting;