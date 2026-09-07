import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Paper,
  Chip,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import PublicIcon from '@mui/icons-material/Public';
import DescriptionIcon from '@mui/icons-material/Description';
import GavelIcon from '@mui/icons-material/Gavel';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';

import SolutionsCTA from '../../../components/SolutionsCTA';
import SolutionsServices from '../../../components/SolutionsServices';

const SAFT = () => {
  const benefits = [
    {
      title: 'Standardized Data Format',
      description: 'ONAS Global SAF-T solution ensures that all your transactional data aligns with the precise requirements of the SAF-T format, keeping businesses ready for audits.',
      icon: <DescriptionIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLfbbbsxljriHQ8GZ5V3rvnCqtozTvamxlLUWsYqXTqg&s=10',
    },
    {
      title: 'Automated Data Extraction',
      description: 'ONAS Global offers automated extraction and transmission of required data in relevant format according to requirements set by tax authorities.',
      icon: <StorageIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    },
    {
      title: 'Real-time Validation',
      description: 'ONAS Global offers real-time data validation to flag inconsistencies or errors immediately, maintaining the highest data integrity levels.',
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=200&fit=crop',
    },
    {
      title: 'Flexible Integration',
      description: 'ONAS Global is designed to integrate seamlessly with multiple platforms, ensuring smooth data flow and reducing manual adjustments.',
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=400&h=200&fit=crop',
    },
  ];

  const countries = [
    'Austria', 'Czechia', 'France (FEC)', 'Hungary', 'Lithuania', 
    'Luxembourg', 'Norway', 'Poland', 'Portugal', 'Romania', 
    'Türkiye (e-Book Keeping)', 'Ukraine'
  ];

  const countryDetails = [
    {
      country: 'Austria',
      year: '2009',
      status: 'On-demand',
      format: 'XML',
      details: 'The Austrian Ministry of Finance introduced SAF-T in 2009. Taxpayers are not obliged to submit SAF-T reports regularly but shall be prepared with electronic SAF-T documents on request. The XML should contain general ledger, inventories, accounts receivables, accounts payables and assets.'
    },
    {
      country: 'Czechia',
      year: '2016',
      status: 'Monthly',
      format: 'XML',
      details: 'Czechia introduced SAF-T in 2016 for all registered taxpayers. The SAF-T report contains VAT Control Statement with VAT returns. Monthly submissions are due on the 25th day after the reporting period. Penalties range from CZK 1.000 to CZK 50.000 for non-compliance.'
    },
    {
      country: 'France (FEC)',
      year: '2014',
      status: 'On-demand',
      format: '.txt',
      details: 'France has FEC (Fichier d\'Ecritures Comptables), similar to SAF-T. While not mandatory yet, taxpayers shall present the report on request within 15 days of the audit notice. The format includes 18-22 fields per accounting entry.'
    },
    {
      country: 'Hungary',
      year: '2021',
      status: 'On-demand',
      format: 'XML',
      details: 'Hungary introduced SAF-T in 2021 with on-demand submission. The report includes Master Data, Transactional Data, and Reporting Data. The tax authority (NAV) is planning to make it mandatory in the future.'
    },
    {
      country: 'Lithuania',
      year: '2016',
      status: 'Monthly',
      format: 'XML',
      details: 'Lithuania\'s i.MAS system was introduced in 2016. It became mandatory for all taxpayers from 2020. Three main structures include i.SAF (monthly invoices), i.VAZ (transport documents), and i.SAF-T (accounting transactions).'
    },
    {
      country: 'Luxembourg',
      year: '2011',
      status: 'On-demand',
      format: 'XML/XBRL/DBF',
      details: 'Luxembourg\'s FAIA system applies to resident taxpayers. Three schemas available: FAIA_Full Schema (full accounting), FAIA_Reduced (separate accounting/invoicing), and FAIA_Reduced B (accounting only). Penalties up to €5,000 per breach.'
    },
    {
      country: 'Norway',
      year: '2017',
      status: 'On-demand',
      format: 'XML',
      details: 'Norway introduced SAF-T in 2017 on a voluntary basis. From January 2020, it\'s required for taxpayers with turnover over NOK 5 million on request. The report includes Header, Master Files, and General Ledger Entries.'
    },
    {
      country: 'Poland',
      year: '2016',
      status: 'Monthly',
      format: 'XML',
      details: 'Poland\'s JPK system has 7 different file types. JPK_V7M/K (VAT Returns) must be submitted monthly by the 25th day. Other JPK files are on-request. Digital signature via USB token is required.'
    },
    {
      country: 'Portugal',
      year: '2008',
      status: 'Monthly',
      format: 'XML',
      details: 'Portugal introduced SAF-T in 2008 with two submission types: Monthly VAT return and yearly summary reporting. Due date is the 20th of the month after the reporting period. Three main ledgers: Accounting, VAT Reporting, and Transport Documents.'
    },
    {
      country: 'Romania',
      year: '2022',
      status: 'Monthly/Quarterly',
      format: 'XML',
      details: 'Romania\'s SAF-T is being phased in: Large taxpayers (2022), Medium taxpayers (2023), Small taxpayers (2025). D406 Declaration includes tax and accounting information. Validation via DUK Integrator is required before submission.'
    },
    {
      country: 'Türkiye (e-Book Keeping)',
      year: '2011',
      status: 'Monthly',
      format: 'XML',
      details: 'Turkey introduced e-bookkeeping in 2011. The report includes general journals, general ledgers and ledger summary reports. Real persons need qualified electronic certificate or financial stamp, legal entities need financial stamp.'
    },
    {
      country: 'Ukraine',
      year: '2021',
      status: 'Voluntary',
      format: 'XML',
      details: 'Ukraine introduced SAF-T UA in 2021. Voluntary submission started January 2023. Large taxpayers expected to be mandatory from January 2025, all taxpayers from January 2027. Submission within 2 days of notice.'
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>

      {/* =========================================================
          HERO SECTION - AP AUTOMATION STYLE
      ========================================================= */}
      <Box
        sx={{
          position: 'relative',
          height: {
            xs: 300,
            sm: 350,
            md: 420,
          },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundImage:
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDqBNJSuM2AJuhtDNJmCWV2VSSDOKhWFy7TTwvK1aqdQ&s=10)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.52) 50%, rgba(0,0,0,0.25) 100%)',
          }}
        />

        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: '#fff',
                fontWeight: 700,
                fontSize: {
                  xs: '1.8rem',
                  sm: '2.5rem',
                  md: '2.2rem',
                },
                lineHeight: 1.15,
                maxWidth: 750,
                mb: 1.5,
                mt: { xs: 12, sm: 12, md: 12 },
              }}
            >
              Unlocking SAF-T: <br />Standard Audit File for Tax
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: {
                  xs: '0.85rem',
                  sm: '0.95rem',
                  md: '0.9rem',
                },
                lineHeight: 1.6,
                maxWidth: 700,
              }}
            >
              Simplify tax audits and ensure compliance with standardized accounting data reporting. Our SAF-T solutions help businesses meet regulatory requirements across multiple jurisdictions with automated data extraction, real-time validation, and seamless integration.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* =========================================================
          WHAT IS SAF-T
      ========================================================= */}
      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: '1fr 1fr',
            },
            gap: {
              xs: 3,
              sm: 4,
              md: 5,
            },
            alignItems: 'center',
          }}
        >
          <Box sx={{ width: '100%', minWidth: 0 }}>
            <Box
              component="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4sR9gydwZz3-ZFZhZy6tyRaypoLRVhzQWnl6piZHygQ&s=10"
              alt="SAF-T"
              sx={{
                display: 'block',
                width: '100%',
                height: { xs: 180, sm: 200, md: 240 },
                borderRadius: 3,
                objectFit: 'cover',
              }}
            />
          </Box>

          <Box sx={{ width: '100%', minWidth: 0 }}>
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{
                color: '#0B4C74',
                mb: 1.5,
                fontSize: { xs: '18px', sm: '20px', md: '24px' },
              }}
            >
              What is SAF-T?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                lineHeight: 1.7,
                color: '#555',
                mb: 1.5,
              }}
            >
              SAF-T, or Standard Audit File-Tax, is a globally recognized standard devoted to the electronic exchange of
              accurate accounting information. The origin of SAF-T comes from guidance by the Organization for Economic
              Co-operation and Development (OECD), emphasizing the importance of seamless and reliable accounting data
              transfer. It was introduced in 2005 by OECD in order to simplify the audit processes in a digitalized way
              for the authorities.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                lineHeight: 1.7,
                color: '#555',
              }}
            >
              SAF-T especially addresses the standardized format for exchanging accounting data, ensuring both transparency
              and accuracy in the information conveyed. ONAS Global Services helps businesses implement SAF-T solutions
              that meet the required XML file format and adapt to additional "local" requirements depending on the country
              and its legal requirements.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* =========================================================
          BENEFITS OF SAF-T (4 CARDS)
      ========================================================= */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            color: '#0B4C74',
            mb: 1.5,
            textAlign: 'center',
            fontSize: { xs: '18px', sm: '20px', md: '24px' },
          }}
        >
          The Benefits of SAF-T
        </Typography>

        <Grid container spacing={1.5} justifyContent="center">
          {benefits.map((benefit, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                style={{ width: '100%', maxWidth: '280px', height: '100%' }}
              >
                <Card
                  sx={{
                    height: '100%',
                    minHeight: { xs: 240, sm: 260, md: 280 },
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      boxShadow: '0 12px 40px rgba(46, 139, 192, 0.15)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={benefit.image}
                    alt={benefit.title}
                    sx={{
                      height: { xs: 120, sm: 130 },
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                  <CardContent
                    sx={{
                      textAlign: 'center',
                      p: { xs: 1.5, sm: 2 },
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: 50, sm: 60 },
                        height: { xs: 50, sm: 60 },
                        borderRadius: '50%',
                        bgcolor: '#e6f0ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 1.5,
                        mt: { xs: -3, sm: -4 },
                        border: '3px solid white',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                        flexShrink: 0,
                      }}
                    >
                      {benefit.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      sx={{
                        color: '#0B4C74',
                        mb: 0.5,
                        fontSize: { xs: '13px', sm: '14px', md: '15px' },
                      }}
                    >
                      {benefit.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        lineHeight: 1.5,
                        fontSize: { xs: '11px', sm: '12px', md: '12px' },
                      }}
                    >
                      {benefit.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* =========================================================
          COUNTRIES USING SAF-T
      ========================================================= */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            color: '#0B4C74',
            mb: 1.5,
            textAlign: 'center',
            fontSize: { xs: '18px', sm: '20px', md: '24px' },
          }}
        >
          Countries Using SAF-T
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '12px', sm: '13px', md: '14px' },
            lineHeight: 1.7,
            color: '#555',
            mb: 2.5,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            px: { xs: 2, sm: 0 },
          }}
        >
          SAF-T is generally used across Europe. ONAS Global Services provides comprehensive SAF-T solutions for these countries:
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
          {countries.map((country, index) => (
            <Chip
              key={index}
              label={country}
              sx={{
                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                py: 2,
                px: 1.5,
                bgcolor: 'white',
                border: '1px solid #d6e8f7',
                '&:hover': {
                  bgcolor: '#e6f0ff',
                  borderColor: '#2E8BC0',
                },
              }}
            />
          ))}
        </Box>
      </Container>

      {/* =========================================================
          ADDITIONAL BENEFITS
      ========================================================= */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3, md: 3.5 },
            borderRadius: 3,
            border: '1px solid #d6e8f7',
            bgcolor: '#f0f7ff',
          }}
        >
          <Typography
            variant="h5"
            fontWeight={600}
            sx={{
              color: '#0B4C74',
              mb: 2,
              fontSize: { xs: '16px', sm: '18px', md: '20px' },
            }}
          >
            Additional Benefits of SAF-T
          </Typography>
          <Grid container spacing={1.5}>
            {[
              'Enables data transmission and audit processes to be more secure',
              'Generated reports are in a standardized format and digital, keeping data reachable',
              'Allows taxpayers to collect and process data based on required standards for simplification',
              'Helps make archiving easier for businesses',
              'Leads to saving more time during audits for both authorities and auditors',
              'Helps international businesses keep tax compliance up-to-date on one standard across different countries'
            ].map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: '#2E8BC0', fontSize: 18 }} />
                  <Typography variant="body2" sx={{ color: '#444', lineHeight: 1.6, fontSize: { xs: '12px', md: '13px' } }}>
                    {item}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      {/* =========================================================
          SAF-T REPORTING REQUIREMENTS
      ========================================================= */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            color: '#0B4C74',
            mb: 1.5,
            textAlign: 'center',
            fontSize: { xs: '18px', sm: '20px', md: '24px' },
          }}
        >
          SAF-T Reporting Requirements in Europe
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '12px', sm: '13px', md: '14px' },
            lineHeight: 1.7,
            color: '#555',
            mb: 2.5,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            px: { xs: 2, sm: 0 },
          }}
        >
          ONAS Global Services provides comprehensive SAF-T reporting solutions across Europe with country-specific compliance:
        </Typography>

        <Box>
          {countryDetails.map((country, index) => (
            <Accordion
              key={index}
              elevation={0}
              sx={{
                mb: 1.5,
                border: '1px solid #e8ecf1',
                borderRadius: '10px !important',
                overflow: 'hidden',
                '&:before': {
                  display: 'none',
                },
                '&.Mui-expanded': {
                  borderColor: '#2E8BC0',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#2E8BC0' }} />}
                sx={{
                  px: 2.5,
                  py: 0.5,
                  bgcolor: 'white',
                  '&:hover': {
                    bgcolor: '#f8f9fa',
                  },
                  '& .MuiAccordionSummary-content': {
                    my: 1.5,
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, width: '100%', flexWrap: 'wrap' }}>
                  <Typography variant="h6" fontWeight={600} sx={{ color: '#0B4C74', fontSize: '14px', minWidth: 100 }}>
                    {country.country}
                  </Typography>
                  <Chip
                    label={country.status}
                    size="small"
                    sx={{
                      bgcolor: country.status === 'Monthly' ? '#e6f7e6' : country.status === 'Voluntary' ? '#e3f2fd' : '#fff3e0',
                      color: country.status === 'Monthly' ? '#2e7d32' : country.status === 'Voluntary' ? '#0d47a1' : '#e65100',
                      fontWeight: 500,
                      fontSize: '10px',
                      height: 22,
                    }}
                  />
                  <Typography variant="body2" sx={{ color: '#666', fontSize: '12px' }}>
                    Since {country.year} • Format: {country.format}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 2.5, pb: 2.5, bgcolor: '#fafafa' }}>
                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.7, fontSize: { xs: '12px', md: '13px' } }}>
                  {country.details}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>

      {/* =========================================================
          CTA SECTION
      ========================================================= */}
      <SolutionsCTA />

      {/* =========================================================
          SERVICES SECTION
      ========================================================= */}
      <SolutionsServices />

    </Box>
  );
};

export default SAFT;