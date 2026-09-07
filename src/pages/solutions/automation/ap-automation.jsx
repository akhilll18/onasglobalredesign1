import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import { motion } from 'framer-motion';

import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SpeedIcon from '@mui/icons-material/Speed';

import SolutionsCTA from '../../../components/SolutionsCTA';
import SolutionsServices from '../../../components/SolutionsServices';

const APAutomation = () => {
  const benefits = [
    {
      title: 'Lower Processing Costs',
      description:
        'Streamlined invoice handling reduces repetitive work, paperwork, and processing time, helping businesses operate more efficiently.',
      icon: <AttachMoneyIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=200&fit=crop',
    },
    {
      title: 'Fewer Processing Errors',
      description:
        'Automated validation and data checks help reduce manual mistakes, duplicate payments, and avoidable payment issues.',
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop',
    },
    {
      title: 'Greater Process Visibility',
      description:
        'Get clearer visibility into invoices, approvals, outstanding payments, and payable activities throughout the organization.',
      icon: <PublicIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop',
    },
    {
      title: 'Better Cash Management',
      description:
        'Access timely payable information to plan outgoing payments and manage working capital with greater confidence.',
      icon: <AccountBalanceIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=200&fit=crop',
    },
    {
      title: 'Stronger Supplier Collaboration',
      description:
        'Accurate and timely invoice processing creates a smoother payment experience and supports stronger supplier relationships.',
      icon: <BusinessIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop',
    },
    {
      title: 'Actionable Financial Data',
      description:
        'Centralized payable information and reporting help finance teams identify trends and make more informed business decisions.',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    },
    {
      title: 'Simplified Compliance',
      description:
        'Structured invoice records and approval workflows make it easier to maintain financial controls and support reporting requirements.',
      icon: <ReceiptIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop',
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

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
            'url(https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1600&h=900&fit=crop)',
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
                  xs: '1rem',
                  sm: '2.3rem',
                  md: '3rem',
                },
                lineHeight: 1.15,
                maxWidth: 750,
                mb: 1.5,
                mt: { xs: 12, sm: 12, md: 12 },
              }}
            >
              Smarter Accounts Payable Automation
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: {
                  xs: '0.85rem',
                  sm: '0.95rem',
                  md: '1.05rem',
                },
                lineHeight: 1.6,
                maxWidth: 700,
              }}
            >
              Simplify invoice processing with intelligent automation,
              accelerate approvals, reduce repetitive work, and give your
              finance team greater control over accounts payable.
            </Typography>
          </motion.div>
        </Container>
      </Box>


      {/* HOW DOES AP AUTOMATION WORK? - Workflow/process image */}

      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 2, sm: 3, md: 4 },
        }}
      >
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
          <Box
            sx={{
              width: '100%',
              minWidth: 0,
            }}
          >
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{
                color: '#0B4C74',
                mb: 1.5,
                fontSize: {
                  xs: '18px',
                  sm: '20px',
                  md: '24px',
                },
              }}
            >
              How Does AP Automation Work?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: '12px',
                  sm: '13px',
                  md: '14px',
                },
                lineHeight: 1.7,
                color: '#555',
                mb: 1.5,
              }}
            >
              The process starts by collecting invoice information from
              digital invoices, scanned documents, or connected business
              systems. Relevant invoice details are extracted and organized
              so that finance teams can review information without repeatedly
              entering data manually. The system can then validate invoice
              details and compare them with related purchase orders and
              receiving records.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: '12px',
                  sm: '13px',
                  md: '14px',
                },
                lineHeight: 1.7,
                color: '#555',
              }}
            >
              When an invoice requires attention, exceptions can be identified
              and sent to the appropriate team member for review. Configured
              approval workflows help move invoices through the required
              authorization stages, while approved transactions can proceed
              toward payment through connected financial and banking systems.
            </Typography>
          </Box>

          <Box
            sx={{
              width: '100%',
              minWidth: 0,
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
              alt="AP Automation Process"
              sx={{
                display: 'block',
                width: '100%',
                height: {
                  xs: 180,
                  sm: 200,
                  md: 300,
                },
                borderRadius: 3,
                objectFit: 'cover',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              }}
            />
          </Box>
        </Box>
      </Container>


      {/* BENEFITS SECTION */}

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
          Key Benefits of AP Automation
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
          Modern AP automation helps organizations create a more structured
          and efficient invoice-to-payment process while improving visibility,
          reducing repetitive work, and strengthening financial controls.
        </Typography>

        <Grid container spacing={1.5} justifyContent="center">
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
                    width: '300px',
                    minHeight: {
                      xs: 240,
                      sm: 260,
                      md: 280,
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
                        sm: 140,
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
                          xs: 50,
                          sm: 60,
                        },
                        height: {
                          xs: 50,
                          sm: 60,
                        },
                        borderRadius: '50%',
                        bgcolor: '#e6f0ff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 1.5,
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
                        mb: 0.5,
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
                          xs: '11px',
                          sm: '12px',
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


      {/* CTA SECTION */}

      <SolutionsCTA />


      {/* SERVICES SECTION */}

      <SolutionsServices />

    </Box>
  );
};

export default APAutomation;