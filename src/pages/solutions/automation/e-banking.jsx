import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

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

import B1 from '../../../assets/images/solutions/e-banking/e-banking1.jpg';
import B2 from '../../../assets/images/solutions/e-banking/e-banking2.jpg';
import B3 from '../../../assets/images/solutions/e-banking/e-banking3.jpg';
import B4 from '../../../assets/images/solutions/e-banking/e-banking4.jpg';
import B5 from '../../../assets/images/solutions/e-banking/e-banking5.jpg';
import B6 from '../../../assets/images/solutions/e-banking/e-banking6.jpg';
import B7 from '../../../assets/images/solutions/e-banking/e-banking7.jpg';
import B8 from '../../../assets/images/solutions/e-banking/e-banking8.jpg';
import B9 from '../../../assets/images/solutions/e-banking/e-banking9.jpg';
import B10 from '../../../assets/images/solutions/e-banking/e-banking10.jpg';

const benefits = [
  {
    title: 'Connected Banking Operations',
    description: 'Connect banking activities with ERP finance processes to create a more coordinated and efficient financial workflow.',
    icon: <AccountBalanceIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: B1,
  },
  {
    title: 'Secure Financial Transactions',
    description: 'Support secure financial operations with structured ERP workflows, controlled access, and centralized transaction information.',
    icon: <SecurityIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: B2,
  },
  {
    title: 'Real-Time Financial Visibility',
    description: 'Get clearer visibility into banking activity, account information, cash positions, and financial transactions across the ERP.',
    icon: <PublicIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: B3,
  },
  {
    title: 'Automated Reconciliation',
    description: 'Reduce manual reconciliation effort by connecting banking information with ERP financial records and transaction data.',
    icon: <SyncAltIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: B4,
  },
  {
    title: 'Improved Cash Management',
    description: 'Use connected banking and ERP information to monitor cash flow and support better working-capital decisions.',
    icon: <BusinessIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: B5,
  },
  {
    title: 'Actionable Financial Insights',
    description: 'Combine banking and ERP information to identify financial trends and support faster, data-driven business decisions.',
    icon: <TrendingUpIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: B6,
  },
  {
    title: 'Simplified Financial Reporting',
    description: 'Centralized banking information helps finance teams maintain structured records and produce more consistent financial reports.',
    icon: <ReceiptIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: B7,
  },
];

const EBanking = () => {
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
          backgroundImage: `url(${B8})`,
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
              E-Banking
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
              Smarter E-Banking Integration for ERP Systems
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
              Connect banking operations with your ERP system to simplify financial processes, improve transaction visibility, streamline reconciliation, and give finance teams greater control.
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
            <Eyebrow>How It Works</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              How Does E-Banking Work with an ERP System?
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              E-banking integration connects an organization&apos;s banking activities with its ERP financial processes. Banking information, transaction records, payment details, and account activity can be synchronized with the ERP so finance teams can work with consistent information without repeatedly entering data.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
              Connected banking information can support accounts payable, accounts receivable, cash management, payment processing, reconciliation, and financial reporting. This creates a streamlined flow between banking operations and the organization&apos;s core ERP processes.
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
              src={B9}
              alt="ERP E-Banking Integration"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Key Benefits</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Key Benefits of E-Banking Integration
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            ERP-connected e-banking helps organizations create a more structured and efficient financial environment while improving visibility, reducing repetitive work, and strengthening financial controls.
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

      <SolutionsCTA />
    </PageShell>
  );
};

export default EBanking;