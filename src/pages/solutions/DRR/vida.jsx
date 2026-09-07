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

import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import GavelIcon from '@mui/icons-material/Gavel';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PublicIcon from '@mui/icons-material/Public';
import BusinessIcon from '@mui/icons-material/Business';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import SolutionsCTA from '../../../components/SolutionsCTA';
import SolutionsServices from '../../../components/SolutionsServices';

const VIDA = () => {
  const proposals = [
    {
      title: 'Improved Efficiency',
      description: 'ONAS Global Services helps streamline the collection and distribution of VAT between EU countries using advanced technology for smooth and transparent operations.',
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=200&fit=crop',
    },
    {
      title: 'Fighting Fraud',
      description: 'ONAS Global Services solutions help reduce tax evasion, protecting the interest of governments and businesses through robust compliance systems.',
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=200&fit=crop',
    },
    {
      title: 'Uniformity and Clarity',
      description: 'ONAS Global Services enables harmonization of VAT practices for all EU countries to operate more easily across borders with standardized processes.',
      icon: <GavelIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop',
    },
  ];

  const areas = [
    {
      title: 'e-Invoicing',
      description: 'ONAS Global Services provides standardized e-invoicing solutions across the EU for efficient and error-free invoicing processes.',
      icon: <ReceiptIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
    },
    {
      title: 'Real-Time Reporting',
      description: 'ONAS Global Services enables real-time or near-real-time transmission of invoice data to tax authorities for quicker VAT reporting.',
      icon: <SpeedIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    },
    {
      title: 'Digital Platforms',
      description: 'ONAS Global Services helps digital platform operators comply with VAT obligations through comprehensive compliance solutions.',
      icon: <PublicIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop',
    },
    {
      title: 'Cross-Border Transactions',
      description: 'ONAS Global Services simplifies VAT management for cross-border transactions with cohesive EU-wide solutions.',
      icon: <BusinessIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS30faJEfYBDfszEcQHgkk-0v_UX0eWsTrCONOjcerCYw&s=10',
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
            'url(https://images.unsplash.com/photo-1432889821006-cceb7e4ad9e4?w=1200&h=400&fit=crop)',
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
              Understanding ViDA: The EU <br />Perspective on VAT Changes
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
              In an effort to streamline and modernize the taxation process, the European Union is introducing the ViDA
              proposal as a cornerstone of its revamped VAT strategy. ONAS Global Services helps businesses navigate this
              paradigm shift, addressing the challenges posed by the digital economy and cross-border transactions.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* =========================================================
          NAVIGATING ViDA
      ========================================================= */}
      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
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
            variant="h4"
            fontWeight={600}
            sx={{
              color: '#0B4C74',
              mb: 1.5,
              fontSize: { xs: '18px', sm: '20px', md: '24px' },
            }}
          >
            Navigating ViDA: A Crucial Imperative for Businesses in the EU
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            Adapting to the ViDA framework early on will be essential for businesses to capitalize on potential benefits
            and minimize challenges. ONAS Global Services provides expert guidance and technology solutions to ensure
            smooth transitions and optimized tax positions. As always, continuous engagement with tax professionals
            familiar with EU regulations will ensure your business stays compliant.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          ViDA PROPOSALS (3 CARDS)
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
          ViDA it's a proposal for:
        </Typography>

        <Grid container spacing={1.5} justifyContent="center">
          {proposals.map((proposal, index) => (
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
                    image={proposal.image}
                    alt={proposal.title}
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
                      {proposal.icon}
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
                      {proposal.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        lineHeight: 1.5,
                        fontSize: { xs: '11px', sm: '12px', md: '12px' },
                      }}
                    >
                      {proposal.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* =========================================================
          PREPARING FOR ViDA
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
            Preparing for ViDA
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            This modernization has a strong impact on Tax Compliance in the EU. This change may seem cumbersome at first
            glance, but can become an opportunity if the preparation is well structured. ONAS Global Services helps your
            business embrace change, leverage the immensity of technology and lead your organization securely into the
            future of VAT in the Digital Age.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          WHAT IS VAT IN THE DIGITAL AGE
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
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
              alt="VAT in Digital Age"
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
              What is VAT in the Digital Age?
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
              "VAT in the Digital Age" – Understanding Taxes in Today's World
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
              Value Added Tax (VAT), an essential component of the global tax system, has evolved significantly in the
              digital age. ONAS Global Services helps businesses navigate the complex VAT landscape with comprehensive
              solutions and expert guidance.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                lineHeight: 1.7,
                color: '#555',
              }}
            >
              With the rise of e-commerce, online marketplaces, and digital services, VAT regulations have had to adapt to
              keep pace with the ever-changing landscape of the digital economy.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* =========================================================
          WHY IS ViDA NECESSARY
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
            Why is the VAT in the Digital Age EU Initiative Necessary?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            The digital transformation has radically altered business models and consumer behavior. The traditional VAT
            system, however, hasn't kept pace with these rapid changes. ViDA aims to bridge this gap by updating the VAT
            framework to better fit the digital era. ONAS Global Services helps businesses navigate these changes to ensure
            tax fairness, enhance compliance, and streamline processes in a rapidly evolving digital marketplace.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          AREAS COVERED BY ViDA (4 CARDS)
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
          What are the Areas Covered by ViDA?
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
          ViDA encompasses a range of areas, including e-invoicing, real-time reporting, and digital platforms. ONAS Global
          Services provides comprehensive solutions for all these areas.
        </Typography>

        <Grid container spacing={1.5} justifyContent="center">
          {areas.map((area, index) => (
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
                    image={area.image}
                    alt={area.title}
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
                      {area.icon}
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
                      {area.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        lineHeight: 1.5,
                        fontSize: { xs: '11px', sm: '12px', md: '12px' },
                      }}
                    >
                      {area.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* =========================================================
          WHO DOES ViDA APPLY TO
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
            variant="h4"
            fontWeight={600}
            sx={{
              color: '#0B4C74',
              mb: 1.5,
              fontSize: { xs: '18px', sm: '20px', md: '24px' },
            }}
          >
            Who Does the ViDA Initiative Apply To?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            The initiative applies broadly to businesses, particularly those engaged in cross-border trade within the EU,
            digital platform operators, and other stakeholders in the digital economy. ONAS Global Services helps all
            affected businesses navigate the uniform VAT system across member states with comprehensive compliance
            solutions.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          CONCLUSION
      ========================================================= */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, sm: 4, md: 4.5 },
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
            Conclusion
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.9)',
            }}
          >
            VAT in the Digital Age is a pivotal move towards a more efficient, transparent, and fraud-resistant VAT system
            in the EU. While it may require adjustments and investments initially, the long-term benefits for businesses
            and the overall economy are substantial. ONAS Global Services helps businesses understand and prepare for these
            changes, ensuring a smooth transition to the new digital VAT landscape.
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

export default VIDA;