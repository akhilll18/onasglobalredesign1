import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import FactCheckIcon from '@mui/icons-material/FactCheck';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

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

import R1 from '../../../assets/images/solutions/reconciliation/reconciliation1.jpg';
import R2 from '../../../assets/images/solutions/reconciliation/reconciliation2.jpg';
import R3 from '../../../assets/images/solutions/reconciliation/reconciliation3.jpg';
import R4 from '../../../assets/images/solutions/reconciliation/reconciliation4.jpg';
import R5 from '../../../assets/images/solutions/reconciliation/reconciliation5.jpg';
import R6 from '../../../assets/images/solutions/reconciliation/reconciliation6.jpg';
import R7 from '../../../assets/images/solutions/reconciliation/reconciliation7.jpg';
import R8 from '../../../assets/images/solutions/reconciliation/reconciliation8.jpg';
import R9 from '../../../assets/images/solutions/reconciliation/reconciliation9.jpg';

const benefits = [
  {
    title: 'Accurate Financial Matching',
    description: 'Match invoices, payments, journal entries, and financial records within the ERP system to identify differences and maintain accurate accounts.',
    icon: <FactCheckIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: R1,
  },
  {
    title: 'Automated Reconciliation',
    description: 'Automate repetitive reconciliation activities by comparing ERP records and identifying transactions that require attention.',
    icon: <AutoModeIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: R2,
  },
  {
    title: 'Invoice & Payment Verification',
    description: 'Verify invoice, payment, and ledger information inside the ERP environment to reduce duplicate, missing, or incorrectly recorded transactions.',
    icon: <ReceiptLongIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: R3,
  },
  {
    title: 'Transaction Exception Tracking',
    description: 'Identify unmatched and inconsistent transactions so finance teams can investigate exceptions and resolve discrepancies efficiently.',
    icon: <FindInPageIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: R4,
  },
  {
    title: 'ERP Financial Insights',
    description: 'Use reconciled ERP data to understand financial activity, monitor account balances, and support reliable business reporting.',
    icon: <AnalyticsIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: R5,
  },
  {
    title: 'Centralized Account Control',
    description: 'Maintain a consistent view of account activity across general ledger, accounts payable, accounts receivable, and other ERP modules.',
    icon: <AccountBalanceIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: R6,
  },
  {
    title: 'Audit-Ready Records',
    description: 'Maintain structured reconciliation records and transaction history within the ERP system to support internal controls and audit activities.',
    icon: <VerifiedUserIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
    image: R7,
  },
];

const processSteps = [
  { number: '01', title: 'Collect ERP Records', text: 'Relevant financial and operational records are gathered from the ERP modules involved in the reconciliation process.' },
  { number: '02', title: 'Compare Transactions', text: 'The system compares related records such as invoices, payments, journal entries, and account balances.' },
  { number: '03', title: 'Identify Exceptions', text: 'Unmatched, duplicate, incomplete, or inconsistent records are identified for further investigation.' },
  { number: '04', title: 'Resolve Differences', text: 'Finance teams review exceptions and update the relevant ERP records when corrections are required.' },
];

const Reconciliation = () => {
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
          backgroundImage: `url(${R8})`,
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
              Reconciliation
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
              Intelligent Reconciliation for Modern ERP Systems
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
              Simplify financial reconciliation within your ERP system by matching records, identifying discrepancies, improving data accuracy, and creating a reliable foundation for financial reporting and business operations.
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
              What Is ERP Reconciliation?
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              ERP reconciliation is the process of comparing financial and operational records within an enterprise resource planning system to confirm that transactions, balances, and account information are consistent and accurate.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8, marginBottom: '.9rem' }}>
              Reconciliation can involve comparing general ledger entries, invoices, payments, purchase records, sales transactions, receivables, payables, and other financial information managed through the ERP platform.
            </Body>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
              By identifying mismatches and unresolved transactions, ERP reconciliation helps finance teams maintain cleaner records and improve the reliability of financial information.
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
              src={R9}
              alt="ERP financial reconciliation"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem', maxWidth: 850, mx: 'auto' }}>
          <Eyebrow>Process</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            How ERP Reconciliation Works
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            An ERP reconciliation process compares related records and identifies whether the information agrees. Matching records can be cleared while differences can be flagged for review.
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
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={cardSx}>
                <Typography
                  sx={{
                    margin: '0 0 .8rem',
                    font: "400 1.8rem/1 Georgia, 'Times New Roman', serif",
                    color: '#0B4C74',
                  }}
                >
                  {step.number}
                </Typography>

                <Typography
                  component="h3"
                  sx={{
                    margin: '0 0 .5rem',
                    font: "400 .95rem Georgia, 'Times New Roman', serif",
                    color: ink,
                    lineHeight: 1.25,
                  }}
                >
                  {step.title}
                </Typography>

                <Body sx={{ flexGrow: 1 }}>{step.text}</Body>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Key Benefits</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Key Benefits of ERP Reconciliation
          </SectionHeading>
          <Body sx={{ maxWidth: 720, margin: '0 auto', fontSize: '.72rem', lineHeight: 1.75 }}>
            A structured reconciliation process helps organizations improve financial data quality, reduce manual verification, identify discrepancies earlier, and maintain more reliable ERP records.
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

export default Reconciliation;