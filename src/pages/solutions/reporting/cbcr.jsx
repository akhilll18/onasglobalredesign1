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
import SpeedIcon from '@mui/icons-material/Speed';
import StorageIcon from '@mui/icons-material/Storage';
import PublicIcon from '@mui/icons-material/Public';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GavelIcon from '@mui/icons-material/Gavel';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BusinessIcon from '@mui/icons-material/Business';
import DescriptionIcon from '@mui/icons-material/Description';

import SolutionsCTA from '../../../components/SolutionsCTA';
import SolutionsServices from '../../../components/SolutionsServices';

const CBCR = () => {
  const valueProps = [
    {
      title: 'Data Gathering & Consistency',
      description: 'ONAS Global offers centralized data management and integration capabilities, allowing for easy consolidation of data from various jurisdictions.',
      icon: <StorageIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOgbhqi4sej65hcZ0BS1DHUXvXbiEMbuY5uMQI6Zqrw&s=10',
    },
    {
      title: 'Cost & Resource Saving',
      description: 'Automating the CbCR reporting process via ONAS Global can lead to significant cost savings, reducing the need for external consultants.',
      icon: <AttachMoneyIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-b8lM_1VDPs2RgCNqgNkCzJsKyOQi99uCW_871CEMg&s=10',
    },
    {
      title: 'Effective Risk Management',
      description: 'ONAS Global offers advanced data security features and audit trails, ensuring data is securely stored and changes are transparently tracked.',
      icon: <SecurityIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjl8siZVTE7GLHgVLeoQ3Qh2OYPn_JRXrhqUQb_0G5Q&s=10',
    },
  ];

  const inclusions = [
    'Income Distribution: A comprehensive view of how income is scattered across the various tax jurisdictions.',
    'Profit Appropriation: Insights into the division of profits between the different operational regions.',
    'Tax Payment Records: A detailed breakdown of the taxes paid across all tax jurisdictions.',
    'Economic Activity Data: Extensive data on the economic activities undertaken in each tax jurisdiction, including assets held, number of employees, and tangible assets.',
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
            'url(https://transferpricingasia.com/wp-content/uploads/2019/02/country-by-country-reporting.jpg)',
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
              CbCR <br />(Country by Country Reports)
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
              Achieve global tax transparency with comprehensive Country-by-Country Reporting solutions. Our platform helps multinational enterprises meet OECD compliance requirements while streamlining data collection, analysis, and submission processes across all operating jurisdictions.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* =========================================================
          WHO HAS TO FILE
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
            Who Has to File Country-by-Country Reporting?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            Multinational Enterprises (MNEs): The primary criterion for CbCR is the entity's status as a large MNE.
            ONAS Global helps such MNEs prepare and submit CbCR reports regardless of their operational scope. Across the
            European Union, the CbCR report is required by law to be submitted annually. This obligation is mandatory for
            MNEs with a turnover of €750,000 or more. ONAS Global provides comprehensive solutions to meet these reporting
            obligations efficiently.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          WHAT IS INCLUDED
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
            What is Included in Country-by-Country Reporting?
          </Typography>
          <Grid container spacing={1.5}>
            {inclusions.map((item, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: '#2E8BC0', fontSize: 18, mt: 0.5, flexShrink: 0 }} />
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
          VALUE PROPOSITION (3 CARDS)
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
          The Value Proposition of CbCR with ONAS Global
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
          With the world's most advanced data security features and audit trails, ONAS Global ensures that data is not
          only securely stored but also that any changes are transparently tracked.
        </Typography>

        <Grid container spacing={1.5} justifyContent="center">
          {valueProps.map((item, index) => (
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
                    image={item.image}
                    alt={item.title}
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
                      {item.icon}
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
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#666',
                        lineHeight: 1.5,
                        fontSize: { xs: '11px', sm: '12px', md: '12px' },
                      }}
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* =========================================================
          WHAT IS CbCR
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4JaAyAQ9c5hEpRr2zfhhrwhNEJ4-mAx21BNrg0t8Eg&s=10"
              alt="CbCR"
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
              What Is Country-by-Country Reporting?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                lineHeight: 1.7,
                color: '#555',
              }}
            >
              Country-by-Country Reporting (CbCR) represents a pivotal shift in international taxation, offering
              unprecedented transparency. It's a reporting mechanism mandated by the OECD under the Base Erosion and Profit
              Shifting (BEPS) Action Plan. Essentially, CbCR requires multinational enterprises (MNEs) to report income,
              taxes, and other key financial data for each country where they operate. ONAS Global helps businesses
              navigate this form of reporting that shines a spotlight on tax planning strategies, aiming to curb tax
              avoidance and ensure a fair distribution of tax revenues.
            </Typography>
          </Box>
        </Box>
      </Container>

      {/* =========================================================
          WHO NEEDS TO FILE
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
            Who needs to file CbCR?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            CbCR obligations fall primarily on MNEs with consolidated group revenue exceeding a certain threshold,
            generally €750 million or its equivalent. ONAS Global helps these entities file detailed reports, breaking
            down financial data for each jurisdiction they operate in. This requirement applies not just to the parent
            companies but also to subsidiaries and affiliates, depending on the rules of the specific country.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          CBC REPORTING OBLIGATIONS
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
            CBC Reporting Obligations
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            The reporting obligations under CbCR are comprehensive. MNEs must disclose a range of data, including revenue
            generated, pre-tax profit or loss, income tax paid and accrued, stated capital, accumulated earnings, number
            of employees, and tangible assets other than cash or cash equivalents. ONAS Global helps businesses compile
            these details crucial for tax authorities to assess where economic activity is taking place and where taxation
            should rightfully occur.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          WHEN WILL CbCR BE IMPLEMENTED
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
            When will CbCR be implemented?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            CbCR is already in effect in many countries, with implementation dates varying globally. Since its introduction
            in the BEPS Action Plan, numerous countries have swiftly adopted CbCR, aligning their local laws with OECD
            guidelines. ONAS Global helps businesses consult specific national regulations to determine the exact
            implementation timelines. The exact date of implementation can vary from country to country, with some nations
            adopting the practice shortly after the OECD's recommendations, while others took longer.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          WHY ARE CbCR REPORTS NEEDED
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
            Why are CbCR Reports Needed?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            CbCR reports are a cornerstone in the fight against tax avoidance. By requiring detailed reporting, tax
            authorities can better understand where profits are being made and where taxes are being paid. ONAS Global
            helps businesses achieve this increased transparency to prevent profit shifting and base erosion, ensuring
            that companies contribute their fair share of taxes in the markets where they truly operate.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          WHEN WILL CbCR REPORTS BE FILED
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
            When will CbCR reports need to be filed?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            Filing deadlines for CbCR reports vary by country but are generally required annually. In many jurisdictions,
            the report is due within 12 months after the end of the reporting fiscal year of the MNE group. ONAS Global
            helps businesses stay attentive in understanding the specific deadlines in each jurisdiction to ensure timely
            compliance.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          WHERE IS CbCR FILED
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
            Where is a CbCR report filed?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            The primary CbCR report is typically filed in the jurisdiction where the MNE's ultimate parent entity resides.
            However, under certain conditions such as the lack of an information exchange agreement, secondary filing may
            be required in other jurisdictions. ONAS Global helps MNEs understand the global landscape of CbCR to navigate
            the complexities of where and how to file.
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

export default CBCR;