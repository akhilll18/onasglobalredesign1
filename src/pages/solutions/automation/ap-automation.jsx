import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
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

import A1 from '../../../assets/images/solutions/ap-automation/ap-automation1.jpg';
import A2 from '../../../assets/images/solutions/ap-automation/ap-automation2.jpg';
import A3 from '../../../assets/images/solutions/ap-automation/ap-automation3.jpg';
import A4 from '../../../assets/images/solutions/ap-automation/ap-automation4.jpg';
import A5 from '../../../assets/images/solutions/ap-automation/ap-automation5.jpg';
import A6 from '../../../assets/images/solutions/ap-automation/ap-automation6.jpg';
import A7 from '../../../assets/images/solutions/ap-automation/ap-automation7.jpg';
import A8 from '../../../assets/images/solutions/ap-automation/ap-automation8.jpg';
import A9 from '../../../assets/images/solutions/ap-automation/ap-automation9.jpg';

const benefits = [
  {
    title: 'Lower Processing Costs',
    description: 'Streamlined invoice handling reduces repetitive work, paperwork, and processing time, helping businesses operate more efficiently.',
    icon: <AttachMoneyIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: A1,
  },
  {
    title: 'Fewer Processing Errors',
    description: 'Automated validation and data checks help reduce manual mistakes, duplicate payments, and avoidable payment issues.',
    icon: <SecurityIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: A2,
  },
  {
    title: 'Greater Process Visibility',
    description: 'Get clearer visibility into invoices, approvals, outstanding payments, and payable activities throughout the organization.',
    icon: <PublicIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: A3,
  },
  {
    title: 'Better Cash Management',
    description: 'Access timely payable information to plan outgoing payments and manage working capital with greater confidence.',
    icon: <AccountBalanceIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: A4,
  },
  {
    title: 'Stronger Supplier Collaboration',
    description: 'Accurate and timely invoice processing creates a smoother payment experience and supports stronger supplier relationships.',
    icon: <BusinessIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: A5,
  },
  {
    title: 'Actionable Financial Data',
    description: 'Centralized payable information and reporting help finance teams identify trends and make more informed business decisions.',
    icon: <TrendingUpIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: A6,
  },
  {
    title: 'Simplified Compliance',
    description: 'Structured invoice records and approval workflows make it easier to maintain financial controls and support reporting requirements.',
    icon: <ReceiptIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: A7,
  },
];

const APAutomation = () => {
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
          backgroundImage: `url(${A8})`,
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
              AP Automation
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
              Smarter Accounts Payable Automation
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
              Simplify invoice processing with intelligent automation, accelerate approvals, reduce repetitive work, and give your finance team greater control over accounts payable.
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
              How Does AP Automation Work?
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              The process starts by collecting invoice information from digital invoices, scanned documents, or connected business systems. Relevant invoice details are extracted and organized so that finance teams can review information without repeatedly entering data manually. The system can then validate invoice details and compare them with related purchase orders and receiving records.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
              When an invoice requires attention, exceptions can be identified and sent to the appropriate team member for review. Configured approval workflows help move invoices through the required authorization stages, while approved transactions can proceed toward payment through connected financial and banking systems.
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
              src={A9}
              alt="AP Automation Process"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Key Benefits</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Key Benefits of AP Automation
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            Modern AP automation helps organizations create a more structured and efficient invoice-to-payment process while improving visibility, reducing repetitive work, and strengthening financial controls.
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

export default APAutomation;