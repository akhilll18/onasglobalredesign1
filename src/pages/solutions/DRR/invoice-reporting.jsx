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
} from '@mui/material';
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

const InvoiceReporting = () => {
  const challenges = [
    {
      title: 'Integration with Current Systems',
      description: 'Seamlessly connect ERP systems and financial management tools to streamline invoicing workflows and enhance data accuracy across platforms.',
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 40, color: '#FF6B35' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROE211NUZrw0U_is3GQfF3G6nVFYLr0Z8x9rFr9GS5Bw&s=10',
    },
    {
      title: 'Data Security and Privacy',
      description: 'Ensure compliance with global data protection regulations including GDPR, safeguarding sensitive financial information with enterprise-grade security.',
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#FF6B35' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-bez1tqgu9bU0WfZ9Zagj7SwEd1EwXLxw4hW1R-c_bw&s=10',
    },
    {
      title: 'Regulatory Updates',
      description: 'Stay ahead of changing regulations with automated updates that keep your reporting processes aligned with dynamic jurisdictional requirements.',
      icon: <GavelIcon sx={{ fontSize: 40, color: '#FF6B35' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSua21yDjw8uuCPIzJoKCH2Af4-1pLi7C6zK2z2y0C3qA&s=10',
    },
  ];

  const features = [
    {
      title: 'Unified Reporting Interface',
      description: 'A centralized dashboard that consolidates invoice reporting across multiple jurisdictions, enabling companies to monitor and manage global invoicing activities effortlessly.',
      icon: <DashboardIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    },
    {
      title: 'Automated Compliance Updates',
      description: 'Stay current with evolving regulations through automatic system updates that ensure your company always adheres to the latest compliance standards.',
      icon: <UpdateIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=200&fit=crop',
    },
    {
      title: 'Real-time Error Detection',
      description: 'Leverage advanced analytics to instantly identify discrepancies or errors in invoice reports, minimizing penalty risks and ensuring accurate submissions.',
      icon: <ErrorIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbmEzurYuctbs9dxOhQ5vh_JmZPwIuP348aiQX1xnPQ&s=10',
    },
    {
      title: 'Scalable for Growth',
      description: 'Designed to adapt to your business needs, whether you\'re a growing enterprise or a large multinational, with seamless integration of new countries and regions.',
      icon: <ScaleIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeODJBz2WwPloqCOxeMO_mVeyuBkAm6pT57EMyROGkug&s=10',
    },
  ];

  const countries = [
    { name: 'Greece', flag: '🇬🇷' },
    { name: 'Hungary', flag: '🇭🇺' },
    { name: 'Spain', flag: '🇪🇸' },
    { name: 'Turkey', flag: '🇹🇷' },
    { name: 'France', flag: '🇫🇷' },
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
            'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=400&fit=crop)',
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
              Invoice Reporting
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
              Simplify global invoice compliance with intelligent reporting solutions. Our platform helps businesses navigate diverse regulatory requirements, ensuring accurate, timely submissions across multiple jurisdictions.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* =========================================================
          WHAT IS INVOICE REPORTING
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
              What is Invoice Reporting?
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
              Invoice reporting is the systematic process of collecting, analyzing, and presenting invoice-related information. It provides businesses with valuable insights into billing activities, helping stakeholders understand receivables, payables, and overall cash flow.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                lineHeight: 1.7,
                color: '#555',
              }}
            >
              By leveraging advanced analytics and automation, organizations can gain real-time visibility into invoicing operations, identify emerging trends, and make data-driven decisions to optimize financial performance.
            </Typography>
          </Box>

          <Box sx={{ width: '100%', minWidth: 0 }}>
            <Box
              component="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-m2w9bKu6Np-BVkZ0irKcVdlruZDylScQAFAk5nvpCg&s=10"
              alt="Invoice Reporting"
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
          WHAT IS REAL-TIME INVOICE REPORTING
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
          <Box sx={{ width: '100%', minWidth: 0 }}>
            <Box
              component="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeODJBz2WwPloqCOxeMO_mVeyuBkAm6pT57EMyROGkug&s=10"
              alt="Real-Time Invoice Reporting"
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
              What is Real-Time Invoice Reporting?
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
              Real-Time Invoice Reporting (RTIR) is a revolutionary financial practice gaining worldwide adoption. Our platform enables businesses to submit invoice data to tax authorities almost instantaneously, at the point of transaction or shortly thereafter.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                lineHeight: 1.7,
                color: '#555',
              }}
            >
              This digital transformation provides governments with real-time access to commercial transaction data, enabling businesses to achieve greater transparency, reduce tax evasion, enhance compliance, and optimize tax collection processes.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* =========================================================
          MANDATORY INVOICE REPORTING - CHALLENGES
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
          Mandatory Invoice Reporting: Challenges for Multinationals
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
          Mandatory invoice reporting requirements in countries like Spain and Hungary have transformed the invoicing landscape. Our platform helps enterprises navigate these complex requirements with comprehensive compliance solutions.
        </Typography>

        <Grid container spacing={1.5} justifyContent="center">
          {challenges.map((challenge, index) => (
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
                      boxShadow: '0 12px 40px rgba(255, 107, 53, 0.12)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={challenge.image}
                    alt={challenge.title}
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
                        bgcolor: '#fff3e0',
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
                      {challenge.icon}
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
                      {challenge.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        lineHeight: 1.5,
                        fontSize: { xs: '11px', sm: '12px', md: '12px' },
                      }}
                    >
                      {challenge.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* =========================================================
          HOW ONAS GLOBAL REVOLUTIONIZE INVOICE REPORTING
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
          Transforming Invoice Reporting with Advanced Technology
        </Typography>

        <Grid container spacing={1.5} justifyContent="center">
          {features.map((feature, index) => (
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
          COUNTRIES
      ========================================================= */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3, md: 3.5 },
            bgcolor: '#f0f7ff',
            borderRadius: 3,
            border: '1px solid #d6e8f7',
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
            Global Invoice Reporting Coverage:
          </Typography>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
            {countries.map((country, index) => (
              <Chip
                key={index}
                label={`${country.flag} ${country.name}`}
                sx={{
                  fontSize: { xs: '12px', sm: '13px', md: '14px' },
                  py: 1.5,
                  px: 1,
                  bgcolor: 'white',
                  border: '1px solid #d6e8f7',
                  '&:hover': {
                    bgcolor: '#e6f0ff',
                  },
                }}
              />
            ))}
          </Box>
        </Paper>
      </Container>

      {/* =========================================================
          REQUIREMENTS FOR REAL TIME INVOICE REPORTING
      ========================================================= */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3, md: 3.5 },
            borderRadius: 3,
            border: '1px solid #e8ecf1',
            bgcolor: 'white',
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{
              color: '#0B4C74',
              mb: 1.5,
              fontSize: { xs: '18px', sm: '20px', md: '24px' },
            }}
          >
            What are the Requirements for Real Time Invoice Reporting?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            Real-Time Invoice Reporting requirements vary by jurisdiction but typically include robust IT infrastructure capable of generating and transmitting detailed invoices promptly. Our platform helps businesses implement systems that handle large data volumes, process payments efficiently, and generate reports meeting government specifications. Additionally, our solutions support multiple currencies and languages, ensuring international compliance.
          </Typography>
        </Paper>
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

export default InvoiceReporting;