// src/pages/solutions/drr/EWaybill.jsx

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CardMedia,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PublicIcon from '@mui/icons-material/Public';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptIcon from '@mui/icons-material/Receipt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import SolutionsCTA from '../../../components/SolutionsCTA';
import SolutionsServices from '../../../components/SolutionsServices';

const EWaybill = () => {
  const countries = [
    {
      name: 'India',
      description:
        "India's e-Waybill system is one of the first pioneers among countries as a comprehensive and widely used system for intra and inter-state movement of goods.",
      flag: '🇮🇳',
    },
    {
      name: 'Brazil',
      description:
        'Brazil uses an electronic tracking system for goods in transit called "Conhecimento de Transporte Eletrônico" (CT-e).',
      flag: '🇧🇷',
    },
    {
      name: 'South Africa',
      description:
        'The e-Road Freight Manifest system in South Africa performs a similar function, enabling the tracking of goods while complying with local tax regulations.',
      flag: '🇿🇦',
    },
    {
      name: 'European Union',
      description:
        'Various EU countries are adopting electronic freight information systems for cross-border transport.',
      flag: '🇪🇺',
    },
    {
      name: 'Turkey',
      description:
        'e-Waybill systems help modernize and streamline the tracking and compliance process for goods in transit.',
      flag: '🇹🇷',
    },
  ];

  const features = [
    {
      title: 'Centralized Management',
      description:
        'Manage, modify and monitor e-Waybills from a single integrated platform without switching between multiple systems.',
      icon: <DashboardIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1773126378915-793b5c48fb38?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=800',
    },
    {
      title: 'Compliance Assurance',
      description:
        'Stay aligned with changing e-Waybill requirements and regional tax regulations through automated compliance processes.',
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1774929107410-9cb5fb83fea6?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=800',
    },
    {
      title: 'Automated Validations',
      description:
        'Automated validation checks help ensure that e-Waybills are accurate, complete and ready for submission.',
      icon: <CheckCircleIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1778015862504-b877b548266e?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=800',
    },
    {
      title: 'Real-Time Tracking',
      description:
        'Monitor e-Waybill status in real time and receive timely notifications when actions or updates are required.',
      icon: <NotificationsIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://mastergst.com/static/images/ewaybill/ewaybillsoftware/eway-generate-hor.png',
    },
    {
      title: 'Global Compliance',
      description:
        'Support e-Waybill requirements across multiple jurisdictions with a solution designed for global tax compliance.',
      icon: <PublicIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1779517226273-bcf843b759b9?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=800',
    },
    {
      title: 'Efficient Logistics',
      description:
        'Connect logistics and tax processes to improve operational efficiency and maintain visibility throughout goods movement.',
      icon: <LocalShippingIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1714627798569-b3e36d409c4b?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=800',
    },
  ];

  const faqs = [
    {
      question: 'Why is the e-Waybill required?',
      answer:
        "Electronic waybills provide enhanced transparency, support regulatory compliance, and enable authorities to track goods movement efficiently. Our platform helps businesses manage these requirements seamlessly.",
    },
    {
      question: 'Who can generate the e-Waybill?',
      answer:
        'Registered businesses, suppliers, transporters, and eligible recipients can generate e-Waybills based on applicable regulations. Our platform supports all stakeholders involved in the process.',
    },
    {
      question: 'When is an e-Waybill generated?',
      answer:
        'Generation occurs when goods are moved under transactions meeting regulatory criteria, including sales, transfers, exports, and returns.',
    },
    {
      question: 'Is e-Waybill mandatory for e-Invoice?',
      answer:
        'e-Waybill and e-Invoice requirements vary by jurisdiction. In many cases, they can be integrated to create a unified tax and logistics information flow.',
    },
    {
      question: 'What happens if there is a mistake in the e-Waybill?',
      answer:
        'Depending on the jurisdiction, an incorrect e-Waybill may need to be cancelled and reissued. Our platform helps identify errors and reduce manual correction efforts.',
    },
    {
      question: 'Is there a validity period for an e-Waybill?',
      answer:
        'Yes, validity depends on factors like distance traveled and local regulations. Automated monitoring helps businesses track expiry and movement status.',
    },
    {
      question: 'Is an e-Waybill required for every shipment?',
      answer:
        'Not necessarily. Requirements depend on transaction type, value, goods classification, and local regulations. Our platform helps determine when an e-Waybill is applicable.',
    },
  ];

  const solutions = [
    {
      title: 'DRR',
      description:
        'Comprehensive Digital Reporting Requirements solutions designed to streamline tax compliance and reporting across multiple jurisdictions.',
      path: '/solutions/drr/drr',
      image:
        'https://images.unsplash.com/photo-1735825764485-93a381fd5779?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'e-Reporting',
      description:
        'Simplify electronic reporting and improve tax compliance with automated reporting workflows.',
      path: '/solutions/reporting',
      image:
        'https://images.unsplash.com/photo-1774929105002-64492268fb47?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=800',
    },
    {
      title: 'e-Invoicing',
      description:
        'Simplify invoicing with support for diverse standards, periodic reporting and real-time compliance.',
      path: '/solutions/drr/e-invoicing',
      image:
        'https://images.unsplash.com/photo-1694885156873-6a0823e14848?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=800',
    },
    {
      title: 'SAF-T',
      description:
        'Standard Audit File for Tax solutions for detailed transactional data reporting.',
      path: '/solutions/reporting/saf-t',
      image:
        'https://images.unsplash.com/photo-1659974764744-fc7a8333e8d3?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=800',
    },
    {
      title: 'Invoice Reporting',
      description:
        'Support invoice reporting requirements across multiple countries and jurisdictions.',
      path: '/solutions/drr/invoice-reporting',
      image:
        'https://images.unsplash.com/photo-1627309366653-2dedc084cdf1?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=800',
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
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToeDC99abAxRh4QuHSfzmQdu5_jip6wo2R7t5JDiinnA&s=10")',
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
              e-Waybill
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
              Streamline logistics and tax compliance with digital tracking. Our integrated e-Waybill solution helps businesses generate, validate, monitor, and manage electronic waybills seamlessly across jurisdictions.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* =========================================================
          WHAT IS E-WAYBILL
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
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{
                color: '#0B4C74',
                mb: 1.5,
                fontSize: { xs: '18px', sm: '20px', md: '24px' },
              }}
            >
              What is an e-Waybill?
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
              An Electronic Waybill (e-Waybill) is a digital document that captures and tracks information about goods in transit. It plays a vital role in modern logistics, transportation management, and tax compliance.
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
              Requirements vary across countries and jurisdictions. Our platform helps organizations navigate these diverse regulations through automated generation, validation, tracking, and compliance workflows.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                lineHeight: 1.7,
                color: '#555',
              }}
            >
              By integrating tax compliance with logistics processes, businesses gain better visibility while reducing manual effort and minimizing errors.
            </Typography>
          </Box>

          <Box sx={{ width: '100%', minWidth: 0 }}>
            <Box
              component="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07ctuBk11okHFJYvWslqaomd-NZHQSOvaOHUadbThcw&s=10"
              alt="Logistics and transportation"
              sx={{
                display: 'block',
                width: '100%',
                height: { xs: 180, sm: 200, md: 240 },
                borderRadius: 3,
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* =========================================================
          COUNTRIES
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
          Countries Where e-Waybill is Applicable
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '12px', sm: '13px', md: '14px' },
            lineHeight: 1.7,
            color: '#555',
            mb: 3,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            px: { xs: 2, sm: 0 },
          }}
        >
          Our e-Waybill Compliance Cloud supports businesses operating across multiple jurisdictions with electronic goods movement and tax compliance requirements.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: { xs: 2, sm: 2.5, md: 1 },
          }}
        >
          {countries.map((country, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: { xs: 2, sm: 2.2, md: 2.5 },
                bgcolor: '#fff',
                border: '1px solid #e8ecf1',
                minHeight: { xs: 'auto', md: 135 },
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 10px 24px rgba(11,76,116,0.10)',
                  borderColor: '#d5e2eb',
                },
              }}
            >
              <Typography
                sx={{
                  color: '#0B4C74',
                  fontSize: {
                    xs: '16px',
                    sm: '17px',
                    md: '18px',
                  },
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {country.flag} {country.name}
              </Typography>

              <Typography
                sx={{
                  color: '#666',
                  fontSize: {
                    xs: '13px',
                    sm: '13px',
                    md: '13.5px',
                  },
                  lineHeight: 1.6,
                }}
              >
                {country.description}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Container>

 {/* =========================================================
    HOW IT WORKS
========================================================= */}
<Container maxWidth="lg" sx={{ mb: 4 }}>
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
    {/* LEFT - CONTENT */}
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
        How Does e-Waybill Management Work?
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
        Our platform streamlines the entire e-Waybill lifecycle by connecting document creation, validation, compliance checks, and tracking into a single, integrated workflow.
      </Typography>

      <Box sx={{ display: 'flex', gap: 2, mb: 1.5 }}>
        <ReceiptIcon sx={{ color: '#2E8BC0', mt: 0.5 }} />
        <Typography sx={{ color: '#555', lineHeight: 1.7, fontSize: { xs: '12px', md: '13px' } }}>
          Generate e-Waybills using business and transaction information.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mb: 1.5 }}>
        <CheckCircleIcon sx={{ color: '#2E8BC0', mt: 0.5 }} />
        <Typography sx={{ color: '#555', lineHeight: 1.7, fontSize: { xs: '12px', md: '13px' } }}>
          Automatically validate required information before submission.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mb: 1.5 }}>
        <LocalShippingIcon sx={{ color: '#2E8BC0', mt: 0.5 }} />
        <Typography sx={{ color: '#555', lineHeight: 1.7, fontSize: { xs: '12px', md: '13px' } }}>
          Track goods movement and e-Waybill status in real time.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <SecurityIcon sx={{ color: '#2E8BC0', mt: 0.5 }} />
        <Typography sx={{ color: '#555', lineHeight: 1.7, fontSize: { xs: '12px', md: '13px' } }}>
          Maintain compliance with applicable regional requirements.
        </Typography>
      </Box>
    </Box>

    {/* RIGHT - IMAGE */}
    <Box sx={{ width: '100%', minWidth: 0 }}>
      <Box
        component="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOD3n9uWewuunp6aVF5fJjVLUhrfaOvnhOaVbqyDSEw&s=10"
        alt="Digital logistics management"
        sx={{
          display: 'block',
          width: '100%',
          height: { xs: 180, sm: 200, md: 240 },
          borderRadius: 3,
          objectFit: 'cover',
        }}
      />
    </Box>
  </Box>
</Container>

      {/* =========================================================
          MANAGING E-WAYBILL - 6 CARDS
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
          Managing e-Waybill with Our Platform
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '12px', sm: '13px', md: '14px' },
            lineHeight: 1.7,
            color: '#555',
            mb: 3,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            px: { xs: 2, sm: 0 },
          }}
        >
          A centralized platform designed to simplify e-Waybill management, compliance, and logistics visibility.
        </Typography>

        <Grid container spacing={1.5} justifyContent="center">
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                style={{ width: '100%', maxWidth: '300px', height: '100%' }}
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
                    image={feature.image}
                    alt={feature.title}
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
                      {feature.icon}
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
                      {feature.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        lineHeight: 1.5,
                        fontSize: { xs: '11px', sm: '12px', md: '12px' },
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* =========================================================
          SUMMARY
      ========================================================= */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3, md: 3.5 },
            borderRadius: 3,
            bgcolor: '#0B4C74',
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{
              color: 'white',
              mb: 1.5,
              fontSize: { xs: '18px', sm: '20px', md: '24px' },
            }}
          >
            Simplify e-Waybill Compliance
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            Understanding and adapting to diverse e-Waybill practices is essential for businesses involved in domestic and international trade. Our platform provides a centralized compliance solution that helps organizations manage e-Waybills efficiently while improving visibility, accuracy, and supply-chain operations.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            color: '#0B4C74',
            mb: 2,
            textAlign: 'center',
            fontSize: { xs: '18px', sm: '20px', md: '24px' },
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Box sx={{ maxWidth: 950, mx: 'auto' }}>
          {faqs.map((faq, index) => (
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
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#2E8BC0' }} />}
                sx={{
                  px: 2.5,
                  py: 0.5,
                  '& .MuiAccordionSummary-content': {
                    my: 1.5,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: '#0B4C74',
                    fontWeight: 600,
                    fontSize: '14px',
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ px: 2.5, pb: 2.5 }}>
                <Typography
                  sx={{
                    color: '#666',
                    fontSize: '13px',
                    lineHeight: 1.7,
                  }}
                >
                  {faq.answer}
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
      <SolutionsServices services={solutions} />

    </Box>
  );
};

export default EWaybill;