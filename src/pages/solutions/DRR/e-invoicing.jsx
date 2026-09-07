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
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import PublicIcon from '@mui/icons-material/Public';
import CloudIcon from '@mui/icons-material/Cloud';
import ReceiptIcon from '@mui/icons-material/Receipt';
import VerifiedIcon from '@mui/icons-material/Verified';

const EInvoicing = () => {
  const benefits = [
    {
      title: 'Cost Savings',
      description:
        'Our platform helps businesses reduce costs by eliminating paper-based processes, minimizing manual intervention, and lowering operational expenses.',
      image:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=200&fit=crop',
    },
    {
      title: 'Time Efficiency',
      description:
        'Accelerate your invoicing cycle from creation to delivery with automated workflows that eliminate delays and streamline the entire process.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0wOJiUz5ntuirHvUrKPmQ97QNJIMGWgCf-wiAtlPs0A&s=10',
    },
    {
      title: 'Enhanced Accuracy',
      description:
        'Eliminate manual data entry errors, reduce processing delays, and ensure data integrity across your entire invoicing ecosystem.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ7UKgPMsQZljZlsqlAC43LYZM_m9cufiKVZ9aeKWzzw&s=10',
    },
    {
      title: 'Regulatory Compliance',
      description:
        'Stay ahead of evolving regulations with built-in compliance features that support global standards including PEPPOL, XML, UBL, and PDF formats.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1eQmGjBAwG1YEsGqKzUtB5KcQWM3-VhG17Q1OipU2DA&s=10',
    },
  ];

  const globalStandards = [
    {
      region: 'European Union',
      description:
        'Mandated for all B2B intra-Community transactions, based on the EN16931 standard.',
      icon: <PublicIcon sx={{ fontSize: 30, color: '#0B4C74' }} />,
    },
    {
      region: 'Latin America',
      description:
        'Known for some of the most stringent e-Invoicing regulations, including real-time invoice approval by tax authorities.',
      icon: <VerifiedIcon sx={{ fontSize: 30, color: '#0B4C74' }} />,
    },
    {
      region: 'Asia-Pacific',
      description:
        'Varying levels of e-Invoicing adoption, with countries like Singapore leading the way.',
      icon: <CloudIcon sx={{ fontSize: 30, color: '#0B4C74' }} />,
    },
    {
      region: 'United States',
      description:
        'E-Invoicing is accepted but not yet mandated at the federal level, though some states have specific requirements.',
      icon: <ReceiptIcon sx={{ fontSize: 30, color: '#0B4C74' }} />,
    },
  ];

  const services = [
    {
      title: 'DRR',
      description:
        'Comprehensive Digital Reporting Requirements solutions designed to streamline tax compliance and reporting across multiple jurisdictions.',
      path: '/solutions/drr/drr',
      image:
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop',
    },
    {
      title: 'e-Reporting',
      description:
        'Simplify electronic reporting and improve tax compliance with automated reporting workflows.',
      path: '/solutions/reporting',
      image:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=200&fit=crop',
    },
    {
      title: 'e-Invoicing',
      description:
        'Simplify invoicing with support for diverse standards, periodic reporting and real-time compliance.',
      path: '/solutions/drr/e-invoicing',
      image:
        'https://images.unsplash.com/photo-1735825764485-93a381fd5779?w=400&h=200&fit=crop',
    },
    {
      title: 'SAF-T',
      description:
        'Standard Audit File for Tax solutions for detailed transactional data reporting.',
      path: '/solutions/reporting/saf-t',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop',
    },
    {
      title: 'Invoice Reporting',
      description:
        'Support invoice reporting requirements across multiple countries and jurisdictions.',
      path: '/solutions/drr/invoice-reporting',
      image:
        'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=200&fit=crop',
    },
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
            'url(https://images.unsplash.com/photo-1735825764485-93a381fd5779?w=1600&h=600&fit=crop)',
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
              'linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 50%, rgba(0,0,0,0.48) 100%)',
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
          <Grid container alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography
                variant="h2"
                component="h1"
                fontWeight={700}
                sx={{
                  fontSize: {
                    xs: '24px',
                    sm: '30px',
                    md: '40px',
                    lg: '46px',
                  },
                  mb: 1.5,
                  lineHeight: 1.18,
                }}
              >
                e-Invoicing: Transforming <br />
                Global Financial Operations
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
                As businesses worldwide embrace digital transformation, financial operations are evolving rapidly. Our advanced e-Invoicing platform enables organizations to automate their billing processes, ensuring faster transactions, improved accuracy, and seamless compliance with international regulations.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =========================================================
          WHAT IS E-INVOICING
      ========================================================= */}
      <Box sx={{ bgcolor: '#ffffff', py: { xs: 4, sm: 5, md: 6 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 3, sm: 4, md: 6 },
              alignItems: 'center',
            }}
          >
            <Box sx={{ width: '100%', minWidth: 0 }}>
              <Box
                component="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUAqZid6AB7K446qOX4rvMXSKENL2e_RBXRyZZGtAbpg&s=10"
                alt="e-Invoicing"
                sx={{
                  display: 'block',
                  width: '100%',
                  height: { xs: 220, sm: 270, md: 360 },
                  borderRadius: { xs: 2, md: 3 },
                  objectFit: 'cover',
                  boxShadow: '0 15px 45px rgba(0,0,0,0.10)',
                }}
              />
            </Box>

            <Box sx={{ width: '100%', minWidth: 0 }}>
              <Typography
                variant="h4"
                fontWeight={600}
                sx={{
                  color: '#0B4C74',
                  mb: 2,
                  fontSize: {
                    xs: '18px',
                    sm: '21px',
                    md: '26px',
                  },
                  lineHeight: 1.3,
                }}
              >
                What is e-Invoicing?
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: '12px',
                    sm: '13px',
                    md: '14px',
                  },
                  lineHeight: 1.75,
                  color: '#555',
                }}
              >
                e-Invoicing is the digital exchange of invoice documents between suppliers and buyers. This modern approach replaces traditional paper-based invoicing, delivering greater efficiency, cost savings, and environmental sustainability. As more countries mandate electronic invoicing for tax compliance, our platform ensures your business stays ahead of regulatory requirements with comprehensive digital invoicing solutions.

                The shift from paper to digital invoicing represents a fundamental transformation in financial operations. Traditional methods involve printing, mailing, and manual data entry into accounting systems—processes that are both time-intensive and error-prone. Our e-Invoicing platform automates the complete invoice lifecycle, from creation to reconciliation, eliminating inefficiencies and enabling seamless financial workflows.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* =========================================================
          GLOBAL ADOPTION AND STANDARDS
      ========================================================= */}
      <Container
        maxWidth="lg"
        sx={{
          mb: 4,
          pt: { xs: 4, sm: 5, md: 6 },
        }}
      >
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
          Global Adoption and Standards
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
            mb: 3,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            px: { xs: 2, sm: 0 },
          }}
        >
          e-Invoicing requirements vary significantly across the globe. Our platform helps multinational enterprises navigate these diverse regulatory landscapes with localized expertise and comprehensive compliance capabilities.
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {globalStandards.map((standard, index) => (
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
                <Paper
                  elevation={0}
                  sx={{
                    p: 2.5,
                    width: '100%',
                    height: '100%',
                    minHeight: {
                      xs: 190,
                      sm: 210,
                      md: 225,
                    },
                    bgcolor: '#ffffff',
                    borderRadius: 3,
                    border:
                      '1px solid rgba(11, 76, 116, 0.08)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&:hover': {
                      boxShadow:
                        '0 18px 45px rgba(46, 139, 192, 0.16)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      mb: 1.5,
                      width: 54,
                      height: 54,
                      borderRadius: '50%',
                      bgcolor: '#e6f0ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {standard.icon}
                  </Box>

                  <Typography
                    variant="h6"
                    fontWeight={600}
                    sx={{
                      color: '#0B4C74',
                      mb: 0.75,
                      fontSize: {
                        xs: '13px',
                        md: '15px',
                      },
                      lineHeight: 1.4,
                    }}
                  >
                    {standard.region}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      lineHeight: 1.5,
                      fontSize: {
                        xs: '11px',
                        md: '12px',
                      },
                    }}
                  >
                    {standard.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* =========================================================
          HOW DOES E-INVOICE WORK?
      ========================================================= */}
      <Box sx={{ bgcolor: '#ffffff', py: { xs: 4, sm: 5, md: 6 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 3, sm: 4, md: 6 },
              alignItems: 'center',
            }}
          >
            <Box sx={{ width: '100%', minWidth: 0 }}>
              <Typography
                variant="h4"
                fontWeight={600}
                sx={{
                  color: '#0B4C74',
                  mb: 2,
                  fontSize: {
                    xs: '18px',
                    sm: '21px',
                    md: '26px',
                  },
                  lineHeight: 1.3,
                }}
              >
                How does e-Invoicing work?
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: '12px',
                    sm: '13px',
                    md: '14px',
                  },
                  lineHeight: 1.75,
                  color: '#555',
                  mb: 1.5,
                }}
              >
                The distinction between traditional and electronic invoicing lies in the underlying processes. Conventional invoicing relies on physical documents that must be printed, mailed, and manually entered into accounting systems by the recipient—a workflow that is both slow and susceptible to errors.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: '12px',
                    sm: '13px',
                    md: '14px',
                  },
                  lineHeight: 1.75,
                  color: '#555',
                }}
              >
                Our e-Invoicing solution eliminates these manual steps by leveraging structured data formats that enable end-to-end automation. From invoice generation to archiving, the entire process is digitized, allowing systems to interpret and process invoices without human intervention. This ensures faster processing, fewer errors, and seamless integration with existing financial systems.
              </Typography>
            </Box>

            <Box sx={{ width: '100%', minWidth: 0 }}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1735825764485-93a381fd5779?w=800&h=600&fit=crop"
                alt="How e-Invoice works"
                sx={{
                  display: 'block',
                  width: '100%',
                  height: {
                    xs: 220,
                    sm: 270,
                    md: 360,
                  },
                  borderRadius: {
                    xs: 2,
                    md: 3,
                  },
                  objectFit: 'cover',
                  boxShadow:
                    '0 15px 45px rgba(0,0,0,0.10)',
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* =========================================================
          BENEFITS OF E-INVOICING - 4 CARDS IN ONE ROW
      ========================================================= */}
      <Container
        maxWidth="lg"
        sx={{
          mb: 4,
          pt: { xs: 4, sm: 5, md: 6 },
        }}
      >
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
          Key Benefits of e-Invoicing
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
            mb: 3,
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            px: { xs: 2, sm: 0 },
          }}
        >
          Our e-Invoicing platform delivers measurable advantages including significant cost reductions, faster processing times, improved data accuracy, and comprehensive regulatory compliance across multiple jurisdictions.
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
            gap: 2,
            width: '100%',
          }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
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
                height: '100%',
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: {
                    xs: 250,
                    sm: 270,
                    md: 275,
                  },
                  borderRadius: 3,
                  overflow: 'hidden',
                  backgroundColor: '#ffffff',
                  border:
                    '1px solid rgba(11, 76, 116, 0.08)',
                  boxShadow:
                    '0 6px 25px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',

                  '&:hover': {
                    boxShadow:
                      '0 18px 45px rgba(46, 139, 192, 0.16)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={benefit.image}
                  alt={benefit.title}
                  sx={{
                    width: '100%',
                    height: {
                      xs: 140,
                      sm: 150,
                      md: 160,
                    },
                    objectFit: 'cover',
                    flexShrink: 0,
                    display: 'block',
                  }}
                />

                <CardContent
                  sx={{
                    textAlign: 'center',
                    p: 0,
                    pt: 1.5,
                    pb: 2,
                    px: 1.5,
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
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
                      lineHeight: 1.3,
                    }}
                  >
                    {benefit.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#666',
                      lineHeight: 1.4,
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
          ))}
        </Box>
      </Container>

      {/* =========================================================
          LEGAL REQUIREMENTS & PEPPOL
      ========================================================= */}
      <Box
        sx={{
          bgcolor: '#ffffff',
          py: { xs: 4, sm: 5, md: 6 },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={{ xs: 3, sm: 4, md: 5 }}
          >
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: {
                    xs: 2.5,
                    sm: 3,
                    md: 3.5,
                  },
                  bgcolor: 'white',
                  borderRadius: 3,
                  border:
                    '1px solid rgba(11, 76, 116, 0.08)',
                  height: '100%',
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
                      md: '23px',
                    },
                  }}
                >
                  Legal Requirements of e-Invoicing
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: '12px',
                      sm: '13px',
                      md: '14px',
                    },
                    lineHeight: 1.75,
                    color: '#555',
                  }}
                >
                  e-Invoicing requirements vary across countries and regions. Our platform ensures full compliance with diverse international standards including <strong>PEPPOL, XML, UBL, PDF</strong>, and other regulatory frameworks. We continuously monitor and adapt to changing regulations, ensuring your business remains compliant across all jurisdictions.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: {
                    xs: 2.5,
                    sm: 3,
                    md: 3.5,
                  },
                  bgcolor: '#f0f7ff',
                  borderRadius: 3,
                  border: '1px solid #d6e8f7',
                  height: '100%',
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
                      md: '23px',
                    },
                  }}
                >
                  What is PEPPOL e-Invoicing?
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: '12px',
                      sm: '13px',
                      md: '14px',
                    },
                    lineHeight: 1.75,
                    color: '#555',
                    mb: 1.5,
                  }}
                >
                  Pan-European Public Procurement Online (PEPPOL) is a standardized network for exchanging electronic documents across Europe. Our platform provides seamless PEPPOL integration, enabling enterprises to exchange invoices with public sector buyers and suppliers across multiple European countries.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: '12px',
                      sm: '13px',
                      md: '14px',
                    },
                    lineHeight: 1.75,
                    color: '#555',
                  }}
                >
                  The PEPPOL framework operates on a "four-corner model" connecting senders, their service providers, buyers, and their service providers. We offer comprehensive support for PEPPOL integration, ensuring smooth document exchange and regulatory compliance.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =========================================================
          CTA SECTION - FULL WIDTH
      ========================================================= */}
      <Box
        sx={{
          width: '100%',
          bgcolor: '#0B4C74',
          py: { xs: 3, md: 5 },
          mb: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{
                color: 'white',
                mb: 1,
                fontSize: {
                  xs: '20px',
                  md: '26px',
                },
              }}
            >
              Schedule a Consultation
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                mb: 2.5,
                fontSize: {
                  xs: '12px',
                  sm: '13px',
                  md: '14px',
                },
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Connect with our specialists to explore how e-Invoicing can transform your financial operations. Get personalized guidance on implementation, compliance, and optimization strategies.
            </Typography>

            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/resources/contact-us/"
              sx={{
                bgcolor: 'white',
                color: '#0B4C74',
                fontWeight: 600,
                px: 4,
                py: 1.25,
                borderRadius: 2,
                '&:hover': {
                  bgcolor: '#f0f0f0',
                  transform: 'scale(1.02)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Request a Demo
            </Button>
          </Box>
        </Container>
      </Box>

      {/* =========================================================
          SERVICES SECTION - WITH IMAGES
      ========================================================= */}
      <Box
        sx={{
          width: '100%',
          bgcolor: '#f8f9fa',
          py: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              justifyContent: 'space-between',
              alignItems: {
                xs: 'flex-start',
                sm: 'center',
              },
              mb: {
                xs: 2,
                sm: 3,
                md: 4,
              },
              gap: {
                xs: 1,
                sm: 0,
              },
            }}
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight={700}
                sx={{
                  color: '#0B4C74',
                  fontSize: {
                    xs: '20px',
                    sm: '24px',
                    md: '30px',
                  },
                }}
              >
                Explore Our Solutions
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: '#666',
                  mt: 0.5,
                  fontSize: {
                    xs: '11px',
                    sm: '12px',
                    md: '13px',
                  },
                }}
              >
                A comprehensive suite for e-Documents, VAT Reports and Reconciliation
              </Typography>
            </Box>

            <Button
              component={RouterLink}
              to="/solutions"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: '#2E8BC0',
                fontWeight: 600,
                textTransform: 'none',
                fontSize: {
                  xs: '12px',
                  sm: '13px',
                  md: '14px',
                },
                p: 0,
                '&:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              View All Solutions →
            </Button>
          </Box>

          <Grid
            container
            spacing={{
              xs: 1.5,
              sm: 2,
              md: 2,
            }}
            justifyContent="center"
          >
            {services.map((service, index) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={12 / 5}
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
                    scale: 1.05,
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Card
                    sx={{
                      width: '100%',
                      maxWidth: {
                        xs: '100%',
                        sm: '100%',
                        md: '200px',
                      },
                      height: {
                        xs: 250,
                        sm: 260,
                        md: 280,
                      },
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow:
                        '0 4px 20px rgba(0,0,0,0.06)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      '&:hover': {
                        boxShadow:
                          '0 12px 40px rgba(0,0,0,0.12)',
                        transform: 'translateY(-6px)',
                      },
                    }}
                    component={RouterLink}
                    to={service.path}
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={service.image}
                      alt={service.title}
                      sx={{
                        height: {
                          xs: 130,
                          sm: 140,
                          md: 150,
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
                          md: 2,
                        },
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight={700}
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
                        {service.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: '#666',
                          lineHeight: 1.3,
                          fontSize: {
                            xs: '10px',
                            sm: '11px',
                            md: '12px',
                          },
                          display: '-webkit-box',
                          WebkitLineClamp: {
                            xs: 2,
                            sm: 2,
                            md: 2,
                          },
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

    </Box>
  );
};

export default EInvoicing;