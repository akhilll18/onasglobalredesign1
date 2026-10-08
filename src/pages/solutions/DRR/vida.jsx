import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import GavelIcon from '@mui/icons-material/Gavel';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PublicIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';

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

import V1 from '../../../assets/images/solutions/vida/vida1.jpg';
import V2 from '../../../assets/images/solutions/vida/vida2.jpg';
import V3 from '../../../assets/images/solutions/vida/vida3.jpg';
import V4 from '../../../assets/images/solutions/vida/vida4.jpg';
import V5 from '../../../assets/images/solutions/vida/vida5.jpg';
import V6 from '../../../assets/images/solutions/vida/vida6.jpg';
import V7 from '../../../assets/images/solutions/vida/vida7.jpg';
import V8 from '../../../assets/images/solutions/vida/vida8.jpg';
import V9 from '../../../assets/images/solutions/vida/vida9.jpg';

const proposals = [
  { title: 'Improved Efficiency', description: 'ONAS Global Services helps streamline the collection and distribution of VAT between EU countries using advanced technology for smooth and transparent operations.', icon: <SpeedIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: V1 },
  { title: 'Fighting Fraud', description: 'ONAS Global Services solutions help reduce tax evasion, protecting the interest of governments and businesses through robust compliance systems.', icon: <SecurityIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: V2 },
  { title: 'Uniformity and Clarity', description: 'ONAS Global Services enables harmonization of VAT practices for all EU countries to operate more easily across borders with standardized processes.', icon: <GavelIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: V3 },
];

const areas = [
  { title: 'e-Invoicing', description: 'ONAS Global Services provides standardized e-invoicing solutions across the EU for efficient and error-free invoicing processes.', icon: <ReceiptIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: V4 },
  { title: 'Real-Time Reporting', description: 'ONAS Global Services enables real-time or near-real-time transmission of invoice data to tax authorities for quicker VAT reporting.', icon: <SpeedIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: V5 },
  { title: 'Digital Platforms', description: 'ONAS Global Services helps digital platform operators comply with VAT obligations through comprehensive compliance solutions.', icon: <PublicIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: V6 },
  { title: 'Cross-Border Transactions', description: 'ONAS Global Services simplifies VAT management for cross-border transactions with cohesive EU-wide solutions.', icon: <BusinessIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: V7 },
];

const VIDA = () => {
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
          backgroundImage: `url(${V8})`,
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
            background: 'linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,.45) 100%)',
          }}
        />

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)' }}>
              ViDA
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
              Understanding ViDA: The EU Perspective on VAT Changes
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
              In an effort to streamline and modernize the taxation process, the European Union is introducing the ViDA proposal as a cornerstone of its revamped VAT strategy. ONAS Global Services helps businesses navigate this paradigm shift, addressing the challenges posed by the digital economy and cross-border transactions.
            </Body>
          </motion.div>
        </Container>
      </Box>

      <Section>
        <Box
          sx={{
            background: '#fff',
            border: `1px solid ${line}`,
            borderRadius: '2px',
            padding: { xs: '1.6rem 1.2rem', md: '2rem 1.8rem' },
          }}
        >
          <Eyebrow>Overview</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem', font: "400 clamp(1.4rem, 2.6vw, 2rem)/1.1 Georgia, 'Times New Roman', serif" }}>
            Navigating ViDA: A Crucial Imperative for Businesses in the EU
          </SectionHeading>
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, margin: 0 }}>
            Adapting to the ViDA framework early on will be essential for businesses to capitalize on potential benefits and minimize challenges. ONAS Global Services provides expert guidance and technology solutions to ensure smooth transitions and optimized tax positions. As always, continuous engagement with tax professionals familiar with EU regulations will ensure your business stays compliant.
          </Body>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Proposals</Eyebrow>
          <SectionHeading>ViDA it&apos;s a proposal for:</SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1.2rem', md: '1.4rem' },
            alignItems: 'stretch',
          }}
        >
          {proposals.map((proposal, i) => (
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
                    src={proposal.image}
                    alt={proposal.title}
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
                    {proposal.icon}
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
                    {proposal.title}
                  </Typography>
                  <Body sx={{ flexGrow: 1 }}>{proposal.description}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box
          sx={{
            background: '#fff',
            border: `1px solid ${line}`,
            borderRadius: '2px',
            padding: { xs: '1.6rem 1.2rem', md: '2rem 1.8rem' },
          }}
        >
          <Eyebrow>Preparation</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem', font: "400 clamp(1.4rem, 2.6vw, 2rem)/1.1 Georgia, 'Times New Roman', serif" }}>
            Preparing for ViDA
          </SectionHeading>
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, margin: 0 }}>
            This modernization has a strong impact on Tax Compliance in the EU. This change may seem cumbersome at first glance, but can become an opportunity if the preparation is well structured. ONAS Global Services helps your business embrace change, leverage the immensity of technology and lead your organization securely into the future of VAT in the Digital Age.
          </Body>
        </Box>
      </Section>

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
              src={V9}
              alt="VAT in Digital Age"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          <Box>
            <Eyebrow>VAT in the Digital Age</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              What is VAT in the Digital Age?
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              &ldquo;VAT in the Digital Age&rdquo; – Understanding Taxes in Today&apos;s World.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              Value Added Tax (VAT), an essential component of the global tax system, has evolved significantly in the digital age. ONAS Global Services helps businesses navigate the complex VAT landscape with comprehensive solutions and expert guidance.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
              With the rise of e-commerce, online marketplaces, and digital services, VAT regulations have had to adapt to keep pace with the ever-changing landscape of the digital economy.
            </Body>
          </Box>
        </Box>
      </Section>

      <Section>
        <Box
          sx={{
            background: '#fff',
            border: `1px solid ${line}`,
            borderRadius: '2px',
            padding: { xs: '1.6rem 1.2rem', md: '2rem 1.8rem' },
          }}
        >
          <Eyebrow>Why ViDA</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem', font: "400 clamp(1.4rem, 2.6vw, 2rem)/1.1 Georgia, 'Times New Roman', serif" }}>
            Why is the VAT in the Digital Age EU Initiative Necessary?
          </SectionHeading>
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, margin: 0 }}>
            The digital transformation has radically altered business models and consumer behavior. The traditional VAT system, however, hasn&apos;t kept pace with these rapid changes. ViDA aims to bridge this gap by updating the VAT framework to better fit the digital era. ONAS Global Services helps businesses navigate these changes to ensure tax fairness, enhance compliance, and streamline processes in a rapidly evolving digital marketplace.
          </Body>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Areas</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            What are the Areas Covered by ViDA?
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            ViDA encompasses a range of areas, including e-invoicing, real-time reporting, and digital platforms. ONAS Global Services provides comprehensive solutions for all these areas.
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
          {areas.map((area, i) => (
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
                    src={area.image}
                    alt={area.title}
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
                    {area.icon}
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
                    {area.title}
                  </Typography>
                  <Body sx={{ flexGrow: 1 }}>{area.description}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box
          sx={{
            background: '#fff',
            border: `1px solid ${line}`,
            borderRadius: '2px',
            padding: { xs: '1.6rem 1.2rem', md: '2rem 1.8rem' },
          }}
        >
          <Eyebrow>Applicability</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem', font: "400 clamp(1.4rem, 2.6vw, 2rem)/1.1 Georgia, 'Times New Roman', serif" }}>
            Who Does the ViDA Initiative Apply To?
          </SectionHeading>
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, margin: 0 }}>
            The initiative applies broadly to businesses, particularly those engaged in cross-border trade within the EU, digital platform operators, and other stakeholders in the digital economy. ONAS Global Services helps all affected businesses navigate the uniform VAT system across member states with comprehensive compliance solutions.
          </Body>
        </Box>
      </Section>

      <Section>
        <Box sx={{ background: ink, borderRadius: '2px', padding: { xs: '1.8rem 1.4rem', md: '2.4rem 2rem' } }}>
          <Typography sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)', fontSize: '.55rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 700, fontFamily: "'Poppins', sans-serif" }}>
            Conclusion
          </Typography>
          <Typography
            component="h2"
            sx={{
              margin: '.7rem 0 1rem',
              font: "400 clamp(1.3rem, 2.4vw, 1.9rem)/1.1 Georgia, 'Times New Roman', serif",
              color: '#fff',
              textShadow: '0 2px 12px rgba(0,0,0,.95)',
            }}
          >
            Conclusion
          </Typography>
          <Body sx={{ color: '#ffffff !important', fontSize: '.72rem', lineHeight: 1.8, maxWidth: 900, margin: 0, textShadow: '0 1px 8px rgba(0,0,0,.95)' }}>
            VAT in the Digital Age is a pivotal move towards a more efficient, transparent, and fraud-resistant VAT system in the EU. While it may require adjustments and investments initially, the long-term benefits for businesses and the overall economy are substantial. ONAS Global Services helps businesses understand and prepare for these changes, ensuring a smooth transition to the new digital VAT landscape.
          </Body>
        </Box>
      </Section>

      <SolutionsCTA />
    </PageShell>
  );
};

export default VIDA;