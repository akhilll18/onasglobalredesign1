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
    title: 'Connected Banking Operations',
    description: 'Connect banking activities with ERP finance processes to create a more coordinated and efficient financial workflow.',
    icon: <AccountBalanceIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://media.istockphoto.com/id/1368593225/photo/businessman-touching-virtual-screen-with-icon-online-banking-online-payments-cyber-security.jpg?s=612x612&w=0&k=20&c=ZaQih8Yl5W6DfBnFsV6-XVWhSIVOBXLeJlmgY2w73SA=',
  },
  {
    title: 'Secure Financial Transactions',
    description: 'Support secure financial operations with structured ERP workflows, controlled access, and centralized transaction information.',
    icon: <SecurityIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://media.istockphoto.com/id/1334591614/photo/man-using-digital-tablet-online-connect-to-internet-banking-currency-exchange-online-shopping.jpg?s=612x612&w=0&k=20&c=nejA5SuHcN2fAdO7Bkaf9pJrwzyLPBCyOLZgMaslGko=',
  },
  {
    title: 'Real-Time Financial Visibility',
    description: 'Get clearer visibility into banking activity, account information, cash positions, and financial transactions across the ERP.',
    icon: <PublicIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://media.istockphoto.com/id/973139084/photo/man-hands-using-online-banking-and-icon-on-tablet-screen-device-in-coffee-shop-technology-e.jpg?s=612x612&w=0&k=20&c=AR_HHzXl6p5-UpVIljom3fzSWYOcQXxkd-ewSfyaflU=',
  },
  {
    title: 'Automated Reconciliation',
    description: 'Reduce manual reconciliation effort by connecting banking information with ERP financial records and transaction data.',
    icon: <SyncAltIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://media.istockphoto.com/id/2215378645/photo/female-user-accessing-digital-banking-services-via-smartphone-and-laptop-at-home.jpg?s=612x612&w=0&k=20&c=Wi2xHZRk-dH47JmA40Cg6lQB4b8nthrSbKl44_Afld0=',
  },
  {
    title: 'Improved Cash Management',
    description: 'Use connected banking and ERP information to monitor cash flow and support better working-capital decisions.',
    icon: <BusinessIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=200&fit=crop',
  },
  {
    title: 'Actionable Financial Insights',
    description: 'Combine banking and ERP information to identify financial trends and support faster, data-driven business decisions.',
    icon: <TrendingUpIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
  },
  {
    title: 'Simplified Financial Reporting',
    description: 'Centralized banking information helps finance teams maintain structured records and produce more consistent financial reports.',
    icon: <ReceiptIcon sx={{ fontSize: 22, color: '#257a68' }} />,
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=200&fit=crop',
  },
];

const EBanking = () => {
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
            'url(https://media.istockphoto.com/id/1368593225/photo/businessman-touching-virtual-screen-with-icon-online-banking-online-payments-cyber-security.jpg?s=612x612&w=0&k=20&c=ZaQih8Yl5W6DfBnFsV6-XVWhSIVOBXLeJlmgY2w73SA=)',
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
              'linear-gradient(90deg, rgba(8,49,46,.94) 0%, rgba(8,49,46,.72) 55%, rgba(8,49,46,.85) 100%)',
          }}
        />

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: lime }}>E-Banking</Eyebrow>
            <Typography
              component="h1"
              sx={{
                margin: '.4rem auto 1rem',
                font: "400 clamp(1.5rem, 3.2vw, 2.4rem)/1.05 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 900,
              }}
            >
              Smarter E-Banking Integration for ERP Systems
            </Typography>
            <Body sx={{ color: 'rgba(255,255,255,.82) !important', maxWidth: 780, marginLeft: 'auto', marginRight: 'auto' }}>
              Connect banking operations with your ERP system to simplify financial processes, improve transaction visibility, streamline reconciliation, and give finance teams greater control.
            </Body>
          </motion.div>
        </Container>
      </Box>

      {/* How It Works */}
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
              src="https://media.istockphoto.com/id/1401461124/photo/hand-of-businessman-using-smart-phone-with-coin-icon.jpg?s=612x612&w=0&k=20&c=937FY4moyMx2nplMSkHMSWMT4YpcHi1u7hykfYckwv0="
              alt="ERP E-Banking Integration"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      {/* Benefits */}
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
      <SolutionsServices />
    </PageShell>
  );
};

export default EBanking;