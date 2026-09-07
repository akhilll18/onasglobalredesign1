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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { motion } from 'framer-motion';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import PublicIcon from '@mui/icons-material/Public';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GavelIcon from '@mui/icons-material/Gavel';
import DescriptionIcon from '@mui/icons-material/Description';
import BusinessIcon from '@mui/icons-material/Business';

import SolutionsCTA from '../../../components/SolutionsCTA';
import SolutionsServices from '../../../components/SolutionsServices';

const Intrastat = () => {
  const features = [
    {
      title: 'Guided Filings',
      description: 'Get step-by-step assistance from ONAS Global to ensure your reports are accurate and compliant.',
      icon: <DescriptionIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://community.sap.com/legacyfs/online/storage/blog_attachments/2019/04/Figure-25.png',
    },
    {
      title: 'Automated Data Aggregation',
      description: 'ONAS Global tools swiftly collate the required data, decreasing manual errors and saving time.',
      icon: <StorageIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoclXsnNlkuohOH3dlE-VyHNalcq7B4ZF6JdZ_Up7TA&s=10',
    },
    {
      title: 'Up-to-date Information',
      description: 'Stay informed about any changes in EU regulations or reporting standards with ONAS Global.',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDPbDiqylZ5ECY1oN-TaK-qseArwhldR96O6b5P6p-g&s=10',
    },
    {
      title: 'Holistic Analysis',
      description: 'Dive deep into your trade data to acquire actionable insights and drive business strategies with ONAS Global.',
      icon: <PublicIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUdP02W9wIX0rcKhNG9GxUabVaBdIKKH8tvPmKdkqng&s',
    },
  ];

  const declarationData = [
    { declaration: 'Goods Description', description: 'The goods\' description, including the name, quantity, and value.' },
    { declaration: 'Quantity & Value', description: 'The quantity and value of the goods being traded.' },
    { declaration: 'Delivery Terms', description: 'The delivery terms, including the delivery date and the method of delivery.' },
    { declaration: 'Delivery Date', description: 'The date by which the goods must be delivered.' },
    { declaration: 'Country Data', description: 'The country data, including the country code and the country\'s GDP.' },
    { declaration: 'GDP', description: 'The Gross Domestic Product of the country.' },
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
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9hX8L5FvtPoAGTnZ9vwZblpTVJHEybn8quXutmwP9AA&s=10)',
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
              Intrastat Reports
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
              Simplify EU trade reporting with comprehensive Intrastat solutions. Our platform helps businesses navigate the complexities of intra-EU goods movement reporting, ensuring accurate submissions and seamless compliance with statistical requirements across all member states.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* =========================================================
          INTRASTAT REPORTING TIMELINES
      ========================================================= */}
      <Container maxWidth="lg" sx={{ py: { xs: 2, sm: 3, md: 4 } }}>
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
            Intrastat Reporting Timelines
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
            The agreement to report depends on certain thresholds defined for each EU nation. ONAS Global helps businesses
            understand these thresholds that can vary between dispatch and arrivals, even within a single country, and are
            individually higher than VAT registration thresholds.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            Across the European Union, Intrastat reporting especially follows a monthly measure. These filings usually
            correspond with VAT return submissions and are directed to the respective statistical office of the concerned
            country. ONAS Global ensures timely and accurate submissions.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          WHAT IS INTRASTAT REPORTING
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDaedQD3BsaZPPa4mENqqCt5xCpulsSe8C6-EFToHwuA&s=10"
              alt="Intrastat Reporting"
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
              What is Intrastat Reporting?
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
              Intrastat Reporting is a vital statistical tool used within the European Union (EU) to collect data on the
              movement of goods between EU member states. ONAS Global helps businesses navigate this reporting mechanism
              that plays a crucial role in understanding trade patterns, supporting economic policies, and ensuring the
              smooth functioning of the internal market.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                lineHeight: 1.7,
                color: '#555',
              }}
            >
              Across the European Union, Intrastat reporting especially follows a monthly measure. These filings usually
              correspond with VAT return submissions and are directed to the respective statistical office of the concerned
              country. ONAS Global ensures seamless submission processes.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* =========================================================
          INTRASTAT DECLARATION TABLE
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
            Diving Deep: What Constitutes an Intrastat Declaration?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
              mb: 2.5,
            }}
          >
            Intrastat filings demand an in-depth analysis of the data to determine whether the information is accurate and
            complete. ONAS Global provides comprehensive solutions for Intrastat declarations.
          </Typography>

          <TableContainer component={Paper} elevation={0} sx={{ border: '1px solid #e8ecf1', borderRadius: 2, overflow: 'hidden' }}>
            <Table>
              <TableHead sx={{ bgcolor: '#0B4C74' }}>
                <TableRow>
                  <TableCell sx={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>Declaration</TableCell>
                  <TableCell sx={{ color: 'white', fontWeight: 600, fontSize: '14px' }}>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {declarationData.map((row, index) => (
                  <TableRow key={index} sx={{ '&:nth-of-type(odd)': { bgcolor: '#f8f9fa' } }}>
                    <TableCell sx={{ fontWeight: 600, color: '#0B4C74', fontSize: '13px' }}>{row.declaration}</TableCell>
                    <TableCell sx={{ color: '#555', fontSize: '13px' }}>{row.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>

      {/* =========================================================
          INTRASTAT WITH ONAS GLOBAL (4 CARDS)
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
          Intrastat with ONAS Global: Seamless Reporting & Compliance
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
          WHAT IS INTRASTAT REPORTING USED FOR
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
            What is Intrastat Reporting used for?
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
            Intrastat Reporting serves multiple purposes. ONAS Global helps businesses leverage this reporting for:
          </Typography>
          <Box sx={{ mt: 1.5 }}>
            {[
              'Analyzing intra-EU trade patterns and informing economic and trade policies',
              'Calculating the trade component of a country\'s Gross Domestic Product (GDP)',
              'Monitoring the adherence to EU regulations and compliance requirements'
            ].map((item, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1 }}>
                <CheckCircleIcon sx={{ color: '#2E8BC0', fontSize: 18, mt: 0.5, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: '#444', lineHeight: 1.6, fontSize: { xs: '12px', md: '13px' } }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Paper>
      </Container>

      {/* =========================================================
          INTRASTAT DECLARATION REQUIRED INFO
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
            Intrastat Declaration Required Information
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            When submitting an Intrastat declaration, businesses must provide detailed information including the value and
            nature of the goods, the partner country, and the mode of transport. ONAS Global ensures accurate and complete
            data is crucial for compliance and for providing meaningful insights into trade flows.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          WHEN TO SUBMIT
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
            When to Submit Intrastat Reporting?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            Timely submission of Intrastat Reporting is critical. In general, businesses are required to submit their
            reports within a month following the reference period. ONAS Global helps businesses meet their national
            deadlines to avoid late submission penalties.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          WHO IS REQUIRED
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
            Who is required to make Intrastat declarations?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            Businesses engaged in the trade of goods across EU borders are typically required to submit Intrastat
            declarations. ONAS Global helps businesses understand their obligations when their trade exceeds a certain
            threshold, which varies from one member state to another. It's essential for companies to stay informed about
            their country-specific thresholds to ensure compliance.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          WHO IS EXEMPT
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
            Who is exempt from Intrastat reporting?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            Small businesses that do not exceed the predefined thresholds for Intrastat declarations are generally exempt.
            These thresholds are set by individual EU member states and can change annually. ONAS Global helps companies
            regularly check their national regulations to verify if they fall under the exemption criteria.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          WHEN DOES DECLARATION TAKE PLACE
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
            When does the Intrastat declaration take place?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            Intrastat declarations are typically submitted on a monthly basis. The specific deadlines for submission can
            vary among EU member states, so it's important for businesses to be aware of the deadlines set by their
            respective national statistical authorities. ONAS Global helps businesses stay on top of these deadlines.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          BREXIT SECTION
      ========================================================= */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2, sm: 3, md: 3.5 },
            borderRadius: 3,
            border: '1px solid #a5d6a7',
            bgcolor: '#e8f5e9',
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
            Is Intrastat still required after Brexit?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            Post-Brexit, the United Kingdom is no longer part of the EU Intrastat system for the movement of goods.
            However, businesses in Northern Ireland continue to be subject to Intrastat reporting for goods received from
            or sent to the EU. ONAS Global helps companies affected by Brexit understand the new regulations and comply
            accordingly.
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

export default Intrastat;