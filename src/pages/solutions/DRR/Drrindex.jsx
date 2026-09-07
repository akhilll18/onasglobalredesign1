import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Paper,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import GavelIcon from '@mui/icons-material/Gavel';

import SolutionsCTA from '../../../components/SolutionsCTA';
import SolutionsServices from '../../../components/SolutionsServices';

const Drrindex = () => {
  const benefits = [
    {
      title: 'Consistent Digital Reporting',
      description:
        'Bring reporting activities together through structured digital formats that make recurring tax submissions easier to manage.',
      icon: <CheckCircleIcon sx={{ fontSize: 36, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop',
    },
    {
      title: 'Faster Data Validation',
      description:
        'Structured digital information makes it easier to validate submitted records and identify inconsistencies before reporting.',
      icon: <SecurityIcon sx={{ fontSize: 36, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop',
    },
    {
      title: 'Clearer Reporting Insights',
      description:
        'Organized reporting data gives finance teams better visibility for analysis, planning, and informed decision-making.',
      icon: <TrendingUpIcon sx={{ fontSize: 36, color: '#2E8BC0' }} />,
     image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    }
  ];

  const challenges = [
    {
      title: 'System Integration',
      description:
        'Existing finance and tax systems may require additional integration to support changing digital reporting formats.',
      icon: (
        <IntegrationInstructionsIcon
          sx={{ fontSize: 36, color: '#FF6B35' }}
        />
      ),
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop',
    },
    {
      title: 'Information Security',
      description:
        'Digital transmission of sensitive financial information requires strong access controls, secure connections, and appropriate safeguards.',
      icon: <DataUsageIcon sx={{ fontSize: 36, color: '#FF6B35' }} />,
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop',
    },
    {
      title: 'Changing Reporting Requirements',
      description:
        'Monitoring updates across different jurisdictions can become time-consuming as digital reporting requirements continue to change.',
      icon: <AutorenewIcon sx={{ fontSize: 36, color: '#FF6B35' }} />,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm4XevPrZ4knaSAwVKHOTDw2VZF4-5Y9zIGIN0pvuV-g&s=10',
    },
    {
      title: 'Regulatory Changes',
      description:
        'Regular monitoring helps organizations respond promptly when tax authorities introduce new reporting rules or submission requirements.',
      icon: <GavelIcon sx={{ fontSize: 36, color: '#FF6B35' }} />,
      image:
        'https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=200&fit=crop',
    },
  ];

  const services = [
    {
      title: 'DRR',
      description:
        'Our Digital Reporting Requirements solution helps organizations manage tax data and reporting obligations across multiple jurisdictions.',
      path: '/solutions/drr/drr',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop',
    },
    {
      title: 'e-Reporting',
      description:
        'Our e-Reporting solution simplifies the preparation and submission of electronic reports while supporting accurate and efficient tax compliance across jurisdictions.',
      path: '/solutions/reporting/saf-t',
      image:
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=200&fit=crop',
    },
    {
      title: 'SAF-T',
      description:
        'Our SAF-T solution helps organizations prepare structured audit files containing the transactional information required for digital tax reporting.',
      path: '/solutions/reporting/saf-t',
      image:
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=200&fit=crop',
    },
    {
      title: 'e-Invoicing',
      description:
        'Our e-Invoicing solution simplifies digital invoicing while supporting different technical standards and reporting models, including periodic and real-time requirements.',
      path: '/solutions/drr/e-invoicing',
      image:
        'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop',
    },
    {
      title: 'ViDA',
      description:
        'Our ViDA (VAT in the Digital Age) solution helps organizations prepare for evolving VAT reporting models through structured digital reporting and improved compliance visibility.',
      path: '/solutions/drr/vida',
      image:
        'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=200&fit=crop',
    },
  ];

  const drrComponents = [
    { label: 'Post-Audit Invoicing — Manual Controls', level: 0 },
    { label: 'CTE — Continuous Transaction Controls', level: 1 },
    { label: 'RTIR — Real-Time Invoice Reporting', level: 1 },
    { label: 'e-Invoicing — Including Other Document Types', level: 1 },
    { label: 'Without Government Validation', level: 2 },
    { label: 'With Government Validation', level: 2 },
    { label: 'Exchange Through Government Platforms', level: 2 },
    { label: 'Exchange Through Other Channels', level: 2 },
  ];

  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          backgroundImage:
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKMyluJ10goJyou-Fxy-G_MJc7mOoF6uQKXyi5-q3&s)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          mt: { xs: 8, sm: 9, md: 10 },
          py: { xs: 4, sm: 5, md: 6 },
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.70) 50%, rgba(0,0,0,0.48) 100%)',
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                variant="h2"
                component="h1"
                fontWeight={700}
                sx={{
                  fontSize: {
                    xs: '23px',
                    sm: '29px',
                    md: '37px',
                    lg: '43px',
                  },
                  mb: 1.5,
                  lineHeight: 1.18,
                }}
              >
                Digital Reporting <br />Requirements (DRR)
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: '12px',
                    sm: '13px',
                    md: '14px',
                  },
                  lineHeight: 1.65,
                  color: 'rgba(255,255,255,0.9)',
                  maxWidth: '650px',
                }}
              >
                Tax reporting is becoming increasingly digital as authorities introduce new ways for businesses to
                submit transaction and tax information. Our DRR capabilities help organizations understand these
                requirements, organize reporting data, and manage digital submissions more efficiently.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =========================================================
          SECOND SECTION - LEFT CONTENT | RIGHT IMAGE
      ========================================================= */}
      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 3, sm: 4, md: 5 }}
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{
                color: '#0B4C74',
                mb: 1.5,
                fontSize: {
                  xs: '17px',
                  sm: '19px',
                  md: '23px',
                },
              }}
            >
              What are Digital Reporting Requirements (DRR)?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: '11px',
                  sm: '12px',
                  md: '13px',
                },
                lineHeight: 1.7,
                color: '#555',
              }}
            >
              Digital Reporting Requirements (DRR) are rules introduced by tax authorities that require businesses to
              provide tax and transaction information in structured digital formats. These requirements can include
              e-invoicing, electronic reporting, and other forms of digital data submission. Because reporting models
              can differ between jurisdictions, organizations need flexible processes that can accommodate local
              requirements and changing submission standards.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* =========================================================
          THIRD SECTION - LEFT IMAGE | RIGHT CONTENT
      ========================================================= */}
      <Container
        maxWidth="lg"
        sx={{
          mb: { xs: 3, sm: 4, md: 5 },
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            borderRadius: 3,
          }}
        >
          <Grid
            container
            spacing={{ xs: 3, sm: 4, md: 5 }}
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop"
                alt="DRR Components"
                sx={{
                  width: '100%',
                  height: {
                    xs: 180,
                    sm: 210,
                    md: 260,
                  },
                  borderRadius: 3,
                  objectFit: 'cover',
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                fontWeight={600}
                sx={{
                  color: '#0B4C74',
                  mb: 2,
                  fontSize: {
                    xs: '16px',
                    sm: '18px',
                    md: '21px',
                  },
                }}
              >
                DRR Components
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.75,
                  pl: { xs: 2, md: 4 },
                  borderLeft: '3px solid #2E8BC0',
                }}
              >
                {drrComponents.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1.5,
                      pl: item.level * 3,
                      py: 0.4,
                    }}
                  >
                    <Box
                      sx={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        bgcolor:
                          item.level === 0 ? '#0B4C74' : '#2E8BC0',
                        flexShrink: 0,
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize:
                          item.level === 0
                            ? { xs: '12px', md: '13px' }
                            : { xs: '10px', md: '12px' },
                        fontWeight:
                          item.level === 0 ? 600 : 400,
                        color:
                          item.level === 0 ? '#0B4C74' : '#444',
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>

      {/* =========================================================
          FOURTH SECTION - BENEFITS (3 CARDS)
      ========================================================= */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            color: '#0B4C74',
            mb: 1.5,
            textAlign: 'center',
            fontSize: {
              xs: '18px',
              sm: '20px',
              md: '24px',
            },
          }}
        >
          Why Digital Reporting Matters
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: {
              xs: '11px',
              sm: '12px',
              md: '13px',
            },
            lineHeight: 1.7,
            color: '#555',
            mb: 3,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            px: { xs: 2, sm: 0 },
          }}
        >
          As tax reporting continues to move toward digital models, organizations operating across multiple
          jurisdictions need processes that can adapt to different reporting obligations. A well-structured DRR
          approach can improve reporting consistency, reduce manual effort, and provide stronger visibility into
          tax-related data and compliance activities.
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {benefits.map((benefit, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                style={{
                  width: '100%',
                  maxWidth: '350px',
                  height: '100%',
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    minHeight: {
                      xs: 270,
                      sm: 290,
                      md: 310,
                    },
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow:
                      '0 4px 20px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      boxShadow:
                        '0 12px 40px rgba(46, 139, 192, 0.15)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={benefit.image}
                    alt={benefit.title}
                    sx={{
                      height: {
                        xs: 120,
                        sm: 135,
                      },
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />

                  <CardContent
                    sx={{
                      textAlign: 'center',
                      p: {
                        xs: 1.5,
                        sm: 2,
                      },
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: {
                          xs: 54,
                          sm: 62,
                        },
                        height: {
                          xs: 54,
                          sm: 62,
                        },
                        borderRadius: '50%',
                        bgcolor: '#e6f0ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 1.25,
                        mt: {
                          xs: -3,
                          sm: -4,
                        },
                        border: '3px solid white',
                        boxShadow:
                          '0 4px 12px rgba(0,0,0,0.08)',
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
                        mb: 0.75,
                        fontSize: {
                          xs: '13px',
                          sm: '14px',
                          md: '15px',
                        },
                      }}
                    >
                      {benefit.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        lineHeight: 1.5,
                        fontSize: {
                          xs: '10px',
                          sm: '11px',
                          md: '12px',
                        },
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
          FIFTH SECTION - CHALLENGES (4 CARDS)
      ========================================================= */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            color: '#0B4C74',
            mb: 2.5,
            textAlign: 'center',
            fontSize: {
              xs: '18px',
              sm: '20px',
              md: '24px',
            },
          }}
        >
          Common DRR Challenges
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {challenges.map((challenge, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                style={{
                  width: '100%',
                  maxWidth: '300px',
                  height: '100%',
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    minHeight: {
                      xs: 230,
                      sm: 250,
                    },
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow:
                      '0 4px 20px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      boxShadow:
                        '0 12px 40px rgba(255, 107, 53, 0.12)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={challenge.image}
                    alt={challenge.title}
                    sx={{
                      height: {
                        xs: 110,
                        sm: 125,
                      },
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />

                  <CardContent
                    sx={{
                      textAlign: 'center',
                      p: {
                        xs: 1.5,
                        sm: 2,
                      },
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      sx={{
                        width: {
                          xs: 48,
                          sm: 56,
                        },
                        height: {
                          xs: 48,
                          sm: 56,
                        },
                        borderRadius: '50%',
                        bgcolor: '#fff3e0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 1.25,
                        mt: {
                          xs: -3,
                          sm: -4,
                        },
                        border: '3px solid white',
                        boxShadow:
                          '0 4px 12px rgba(0,0,0,0.08)',
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
                        mb: 0.75,
                        fontSize: {
                          xs: '13px',
                          sm: '14px',
                          md: '15px',
                        },
                      }}
                    >
                      {challenge.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        lineHeight: 1.5,
                        fontSize: {
                          xs: '10px',
                          sm: '11px',
                          md: '12px',
                        },
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
          CTA SECTION
      ========================================================= */}
      <SolutionsCTA />

      {/* =========================================================
          SERVICES SECTION
      ========================================================= */}
      <SolutionsServices services={services} />

    </Box>
  );
};

export default Drrindex;