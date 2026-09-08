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

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

import SolutionsCTA from '../../../components/SolutionsCTA';
import SolutionsServices from '../../../components/SolutionsServices';

const EBanking = () => {
  const benefits = [
    {
      title: 'Connected Banking Operations',
      description:
        'Connect banking activities with ERP finance processes to create a more coordinated and efficient financial workflow.',
      icon: <AccountBalanceIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://media.istockphoto.com/id/1368593225/photo/businessman-touching-virtual-screen-with-icon-online-banking-online-payments-cyber-security.jpg?s=612x612&w=0&k=20&c=ZaQih8Yl5W6DfBnFsV6-XVWhSIVOBXLeJlmgY2w73SA=',
    },
    {
      title: 'Secure Financial Transactions',
      description:
        'Support secure financial operations with structured ERP workflows, controlled access, and centralized transaction information.',
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://media.istockphoto.com/id/1334591614/photo/man-using-digital-tablet-online-connect-to-internet-banking-currency-exchange-online-shopping.jpg?s=612x612&w=0&k=20&c=nejA5SuHcN2fAdO7Bkaf9pJrwzyLPBCyOLZgMaslGko=',
    },
    {
      title: 'Real-Time Financial Visibility',
      description:
        'Get clearer visibility into banking activity, account information, cash positions, and financial transactions across the ERP.',
      icon: <PublicIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://media.istockphoto.com/id/973139084/photo/man-hands-using-online-banking-and-icon-on-tablet-screen-device-in-coffee-shop-technology-e.jpg?s=612x612&w=0&k=20&c=AR_HHzXl6p5-UpVIljom3fzSWYOcQXxkd-ewSfyaflU=',
    },
    {
      title: 'Automated Reconciliation',
      description:
        'Reduce manual reconciliation effort by connecting banking information with ERP financial records and transaction data.',
      icon: <SyncAltIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://media.istockphoto.com/id/2215378645/photo/female-user-accessing-digital-banking-services-via-smartphone-and-laptop-at-home.jpg?s=612x612&w=0&k=20&c=Wi2xHZRk-dH47JmA40Cg6lQB4b8nthrSbKl44_Afld0=',
    },
    {
      title: 'Improved Cash Management',
      description:
        'Use connected banking and ERP information to monitor cash flow and support better working-capital decisions.',
      icon: <BusinessIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=200&fit=crop',
    },
    {
      title: 'Actionable Financial Insights',
      description:
        'Combine banking and ERP information to identify financial trends and support faster, data-driven business decisions.',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    },
    {
      title: 'Simplified Financial Reporting',
      description:
        'Centralized banking information helps finance teams maintain structured records and produce more consistent financial reports.',
      icon: <ReceiptIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=200&fit=crop',
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
            'url(https://media.istockphoto.com/id/1368593225/photo/businessman-touching-virtual-screen-with-icon-online-banking-online-payments-cyber-security.jpg?s=612x612&w=0&k=20&c=ZaQih8Yl5W6DfBnFsV6-XVWhSIVOBXLeJlmgY2w73SA=)',
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
              Smarter E-Banking Integration for ERP Systems
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
              Connect banking operations with your ERP system to simplify
              financial processes, improve transaction visibility, streamline
              reconciliation, and give finance teams greater control.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* =====================================================
          HOW DOES E-BANKING WORK?
      ===================================================== */}

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
              How Does E-Banking Work with an ERP System?
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
              E-banking integration connects an organization&apos;s banking
              activities with its ERP financial processes. Banking information,
              transaction records, payment details, and account activity can
              be synchronized with the ERP so finance teams can work with
              consistent information without repeatedly entering data.
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
              Connected banking information can support accounts payable,
              accounts receivable, cash management, payment processing,
              reconciliation, and financial reporting. This creates a
              streamlined flow between banking operations and the
              organization&apos;s core ERP processes.
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
              src="https://media.istockphoto.com/id/1401461124/photo/hand-of-businessman-using-smart-phone-with-coin-icon.jpg?s=612x612&w=0&k=20&c=937FY4moyMx2nplMSkHMSWMT4YpcHi1u7hykfYckwv0="
              alt="ERP E-Banking Integration"
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

      {/* =====================================================
          BENEFITS SECTION
      ===================================================== */}

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
          Key Benefits of E-Banking Integration
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
          ERP-connected e-banking helps organizations create a more structured
          and efficient financial environment while improving visibility,
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

      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <SolutionsCTA />

      {/* =====================================================
          SERVICES SECTION
      ===================================================== */}

      <SolutionsServices />

    </Box>
  );
};

export default EBanking;