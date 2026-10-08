import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { ExpandMore, Check } from '@mui/icons-material';

import DescriptionIcon from '@mui/icons-material/Description';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

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

import S1 from '../../../assets/images/solutions/saf-t/saf-t1.jpg';
import S2 from '../../../assets/images/solutions/saf-t/saf-t2.jpg';
import S3 from '../../../assets/images/solutions/saf-t/saf-t3.jpg';
import S4 from '../../../assets/images/solutions/saf-t/saf-t4.jpg';
import S5 from '../../../assets/images/solutions/saf-t/saf-t5.jpg';
import S6 from '../../../assets/images/solutions/saf-t/saf-t6.jpg';
import S7 from '../../../assets/images/solutions/saf-t/saf-t7.jpg';

const infoCardSx = {
  background: '#fff',
  border: `1px solid ${line}`,
  borderRadius: '2px',
  padding: { xs: '1.6rem 1.2rem', md: '2rem 1.6rem' },
  marginBottom: { xs: '1.2rem', md: '1.5rem' },
};

const SAFT = () => {
  const benefits = [
    { title: 'Standardized Data Format', description: 'ONAS Global SAF-T solution ensures that all your transactional data aligns with the precise requirements of the SAF-T format, keeping businesses ready for audits.', icon: <DescriptionIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: S1 },
    { title: 'Automated Data Extraction', description: 'ONAS Global offers automated extraction and transmission of required data in relevant format according to requirements set by tax authorities.', icon: <StorageIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: S2 },
    { title: 'Real-time Validation', description: 'ONAS Global offers real-time data validation to flag inconsistencies or errors immediately, maintaining the highest data integrity levels.', icon: <SpeedIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: S3 },
    { title: 'Flexible Integration', description: 'ONAS Global is designed to integrate seamlessly with multiple platforms, ensuring smooth data flow and reducing manual adjustments.', icon: <IntegrationInstructionsIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: S4 },
  ];

  const countries = [
    'Austria', 'Czechia', 'France (FEC)', 'Hungary', 'Lithuania', 'Luxembourg',
    'Norway', 'Poland', 'Portugal', 'Romania', 'Türkiye (e-Book Keeping)', 'Ukraine',
  ];

  const countryDetails = [
    { country: 'Austria', year: '2009', status: 'On-demand', format: 'XML', details: 'The Austrian Ministry of Finance introduced SAF-T in 2009. Taxpayers are not obliged to submit SAF-T reports regularly but shall be prepared with electronic SAF-T documents on request. The XML should contain general ledger, inventories, accounts receivables, accounts payables and assets.' },
    { country: 'Czechia', year: '2016', status: 'Monthly', format: 'XML', details: 'Czechia introduced SAF-T in 2016 for all registered taxpayers. The SAF-T report contains VAT Control Statement with VAT returns. Monthly submissions are due on the 25th day after the reporting period. Penalties range from CZK 1.000 to CZK 50.000 for non-compliance.' },
    { country: 'France (FEC)', year: '2014', status: 'On-demand', format: '.txt', details: "France has FEC (Fichier d'Ecritures Comptables), similar to SAF-T. While not mandatory yet, taxpayers shall present the report on request within 15 days of the audit notice. The format includes 18-22 fields per accounting entry." },
    { country: 'Hungary', year: '2021', status: 'On-demand', format: 'XML', details: 'Hungary introduced SAF-T in 2021 with on-demand submission. The report includes Master Data, Transactional Data, and Reporting Data. The tax authority (NAV) is planning to make it mandatory in the future.' },
    { country: 'Lithuania', year: '2016', status: 'Monthly', format: 'XML', details: "Lithuania's i.MAS system was introduced in 2016. It became mandatory for all taxpayers from 2020. Three main structures include i.SAF (monthly invoices), i.VAZ (transport documents), and i.SAF-T (accounting transactions)." },
    { country: 'Luxembourg', year: '2011', status: 'On-demand', format: 'XML/XBRL/DBF', details: "Luxembourg's FAIA system applies to resident taxpayers. Three schemas available: FAIA_Full Schema (full accounting), FAIA_Reduced (separate accounting/invoicing), and FAIA_Reduced B (accounting only). Penalties up to €5,000 per breach." },
    { country: 'Norway', year: '2017', status: 'On-demand', format: 'XML', details: "Norway introduced SAF-T in 2017 on a voluntary basis. From January 2020, it's required for taxpayers with turnover over NOK 5 million on request. The report includes Header, Master Files, and General Ledger Entries." },
    { country: 'Poland', year: '2016', status: 'Monthly', format: 'XML', details: "Poland's JPK system has 7 different file types. JPK_V7M/K (VAT Returns) must be submitted monthly by the 25th day. Other JPK files are on-request. Digital signature via USB token is required." },
    { country: 'Portugal', year: '2008', status: 'Monthly', format: 'XML', details: 'Portugal introduced SAF-T in 2008 with two submission types: Monthly VAT return and yearly summary reporting. Due date is the 20th of the month after the reporting period. Three main ledgers: Accounting, VAT Reporting, and Transport Documents.' },
    { country: 'Romania', year: '2022', status: 'Monthly/Quarterly', format: 'XML', details: "Romania's SAF-T is being phased in: Large taxpayers (2022), Medium taxpayers (2023), Small taxpayers (2025). D406 Declaration includes tax and accounting information. Validation via DUK Integrator is required before submission." },
    { country: 'Türkiye (e-Book Keeping)', year: '2011', status: 'Monthly', format: 'XML', details: 'Turkey introduced e-bookkeeping in 2011. The report includes general journals, general ledgers and ledger summary reports. Real persons need qualified electronic certificate or financial stamp, legal entities need financial stamp.' },
    { country: 'Ukraine', year: '2021', status: 'Voluntary', format: 'XML', details: 'Ukraine introduced SAF-T UA in 2021. Voluntary submission started January 2023. Large taxpayers expected to be mandatory from January 2025, all taxpayers from January 2027. Submission within 2 days of notice.' },
  ];

  const additionalBenefits = [
    'Enables data transmission and audit processes to be more secure',
    'Generated reports are in a standardized format and digital, keeping data reachable',
    'Allows taxpayers to collect and process data based on required standards for simplification',
    'Helps make archiving easier for businesses',
    'Leads to saving more time during audits for both authorities and auditors',
    'Helps international businesses keep tax compliance up-to-date on one standard across different countries',
  ];

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
          backgroundImage: `url(${S5})`,
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
              SAF-T
            </Eyebrow>
            <Typography
              component="h1"
              sx={{
                margin: '.4rem auto .9rem',
                font: "400 clamp(1.15rem, 2.2vw, 1.75rem)/1.15 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 900,
                textShadow: '0 2px 12px rgba(0,0,0,.95), 0 1px 3px rgba(0,0,0,1)',
              }}
            >
              Unlocking SAF-T: Standard Audit File for Tax
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
              Simplify tax audits and ensure compliance with standardized accounting data reporting. Our SAF-T solutions help businesses meet regulatory requirements across multiple jurisdictions with automated data extraction, real-time validation, and seamless integration.
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
              src={S6}
              alt="SAF-T"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          <Box>
            <Eyebrow>Overview</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              What is SAF-T?
            </SectionHeading>
            <Body sx={{ marginBottom: '1rem' }}>
              SAF-T, or Standard Audit File-Tax, is a globally recognized standard devoted to the electronic exchange of accurate accounting information. The origin of SAF-T comes from guidance by the Organization for Economic Co-operation and Development (OECD), emphasizing the importance of seamless and reliable accounting data transfer. It was introduced in 2005 by OECD in order to simplify the audit processes in a digitalized way for the authorities.
            </Body>
            <Body>
              SAF-T especially addresses the standardized format for exchanging accounting data, ensuring both transparency and accuracy in the information conveyed. ONAS Global Services helps businesses implement SAF-T solutions that meet the required XML file format and adapt to additional &ldquo;local&rdquo; requirements depending on the country and its legal requirements.
            </Body>
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Benefits</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>
            The Benefits of SAF-T
          </SectionHeading>
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
              <Box sx={{ ...cardSx, padding: 0, overflow: 'hidden' }}>
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
                      font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      minHeight: '2.4rem',
                    }}
                  >
                    {benefit.title}
                  </Typography>

                  <Body sx={{ flexGrow: 1, fontSize: '.64rem' }}>{benefit.description}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Global Coverage</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            Countries Using SAF-T
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            SAF-T is generally used across Europe. ONAS Global Services provides comprehensive SAF-T solutions for these countries:
          </Body>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem', justifyContent: 'center' }}>
          {countries.map((country, i) => (
            <Box
              key={i}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '.5rem .9rem',
                background: '#fff',
                border: `1px solid ${line}`,
                borderRadius: '2px',
                color: ink,
                fontFamily: "'Poppins', sans-serif",
                fontSize: '.66rem',
                transition: 'all .2s ease',
                '&:hover': { borderColor: '#aac7b2', background: soft },
              }}
            >
              {country}
            </Box>
          ))}
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ ...infoCardSx, background: 'transparent', border: 'none', marginBottom: 0, padding: 0 }}>
          <Eyebrow>More Benefits</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1.4rem' }}>
            Additional Benefits of SAF-T
          </SectionHeading>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: { xs: '.7rem', md: '.8rem' },
            }}
          >
            {additionalBenefits.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem' }}>
                <Check sx={{ color: '#5e987f', fontSize: 15, marginTop: '2px', flexShrink: 0 }} />
                <Body sx={{ fontSize: '.66rem', lineHeight: 1.7 }}>{item}</Body>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Requirements</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            SAF-T Reporting Requirements in Europe
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            ONAS Global Services provides comprehensive SAF-T reporting solutions across Europe with country-specific compliance:
          </Body>
        </Box>

        <Box>
          {countryDetails.map((country, index) => (
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
                '&.Mui-expanded': { margin: '0 0 .6rem 0', borderColor: '#aac7b2' },
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
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '.8rem', width: '100%', flexWrap: 'wrap' }}>
                  <Typography sx={{ color: `${ink} !important`, fontFamily: "Georgia, 'Times New Roman', serif", fontSize: '.82rem', fontWeight: 400, minWidth: 120 }}>
                    {country.country}
                  </Typography>
                  <Box
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '.25rem .6rem',
                      background: country.status === 'Monthly' ? '#ffffff' : country.status === 'Voluntary' ? '#e3f2fd' : soft,
                      color: country.status === 'Monthly' ? '#2e7d32' : country.status === 'Voluntary' ? '#0d47a1' : '#0B4C74',
                      border: `1px solid ${line}`,
                      borderRadius: '2px',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '.55rem',
                      fontWeight: 600,
                      letterSpacing: '.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {country.status}
                  </Box>
                  <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.6rem' }}>
                    Since {country.year} • Format: {country.format}
                  </Typography>
                </Box>
              </AccordionSummary>

              <AccordionDetails sx={{ padding: { xs: '.2rem 1rem 1.2rem', md: '.2rem 1.4rem 1.4rem' }, background: soft }}>
                <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.68rem', lineHeight: 1.8 }}>
                  {country.details}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Section>

      <SolutionsCTA />
    </PageShell>
  );
};

export default SAFT;