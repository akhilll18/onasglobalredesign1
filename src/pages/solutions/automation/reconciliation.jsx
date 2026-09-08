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

import FactCheckIcon from '@mui/icons-material/FactCheck';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import SolutionsCTA from '../../../components/SolutionsCTA';
import SolutionsServices from '../../../components/SolutionsServices';

const Reconciliation = () => {
  const benefits = [
    {
      title: 'Accurate Financial Matching',
      description:
        'Match invoices, payments, journal entries, and financial records within the ERP system to identify differences and maintain accurate accounts.',
      icon: <FactCheckIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://media.istockphoto.com/id/2276476149/photo/two-accountants-work-together-on-computer-analyzing-bank-transactions.jpg?s=612x612&w=0&k=20&c=Z4sYWleDlz4oSWsFEWnie_I60X8NdCbJ94bXS727Zv4=',
    },
    {
      title: 'Automated Reconciliation',
      description:
        'Automate repetitive reconciliation activities by comparing ERP records and identifying transactions that require attention.',
      icon: <AutoModeIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://media.istockphoto.com/id/1409560349/photo/the-businessman-holds-on-scales-bags-profits-expenses-summary-and-balance-sheet-income-and.jpg?s=612x612&w=0&k=20&c=r7Etl8o3DACQNhrYeBO7Anrg-6WooW675XWZLW0ZTJA=',
    },
    {
      title: 'Invoice & Payment Verification',
      description:
        'Verify invoice, payment, and ledger information inside the ERP environment to reduce duplicate, missing, or incorrectly recorded transactions.',
      icon: <ReceiptLongIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://media.istockphoto.com/id/2032561021/vector/accounting-icons-in-line-design-blue-accounting-analytics-finance-business-money-financial.jpg?s=612x612&w=0&k=20&c=p7WIl8FSj3PTMkqrdHQkZzhYTBcbHPfSbyAwV0hpXCI=',
    },
    {
      title: 'Transaction Exception Tracking',
      description:
        'Identify unmatched and inconsistent transactions so finance teams can investigate exceptions and resolve discrepancies efficiently.',
      icon: <FindInPageIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=350&fit=crop',
    },
    {
      title: 'ERP Financial Insights',
      description:
        'Use reconciled ERP data to understand financial activity, monitor account balances, and support reliable business reporting.',
      icon: <AnalyticsIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image:
        'https://media.istockphoto.com/id/139672999/photo/check-register.jpg?s=612x612&w=0&k=20&c=oNdJHqCn6rmEbXHjgWSBn13HAP5XmpJYG-HFA7yZyc4=',
    },
    {
      title: 'Centralized Account Control',
      description:
        'Maintain a consistent view of account activity across general ledger, accounts payable, accounts receivable, and other ERP modules.',
      icon: (
        <AccountBalanceIcon
          sx={{ fontSize: 40, color: '#2E8BC0' }}
        />
      ),
      image:
        'https://media.istockphoto.com/id/1296838512/photo/business-people-shaking-hands.jpg?s=612x612&w=0&k=20&c=gel29VlJ_7ZFemUne3z-A26YnTMf2jKRsjEYSIg4po4=',
    },
    {
      title: 'Audit-Ready Records',
      description:
        'Maintain structured reconciliation records and transaction history within the ERP system to support internal controls and audit activities.',
      icon: (
        <VerifiedUserIcon
          sx={{ fontSize: 40, color: '#2E8BC0' }}
        />
      ),
      image:
        'https://media.istockphoto.com/id/2288004788/photo/woman-reviews-expense-reports-and-tracks-company-costs.jpg?s=612x612&w=0&k=20&c=UGTQwImcSZPBXca1W637L7cHqoUIn2Bq4kgsxbxsjuY=',
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Collect ERP Records',
      text:
        'Relevant financial and operational records are gathered from the ERP modules involved in the reconciliation process.',
    },
    {
      number: '02',
      title: 'Compare Transactions',
      text:
        'The system compares related records such as invoices, payments, journal entries, and account balances.',
    },
    {
      number: '03',
      title: 'Identify Exceptions',
      text:
        'Unmatched, duplicate, incomplete, or inconsistent records are identified for further investigation.',
    },
    {
      number: '04',
      title: 'Resolve Differences',
      text:
        'Finance teams review exceptions and update the relevant ERP records when corrections are required.',
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: '#f8f9fa',
        minHeight: '100vh',
      }}
    >
      {/* =========================
          HERO SECTION
      ========================= */}
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
            'url(https://media.istockphoto.com/id/1194689166/photo/reconciliation-accounting-papers-in-the-accountant-hand.jpg?s=612x612&w=0&k=20&c=4l6etz2WT2rDLqoammt-3sSxMonjbr0KSc_VcsxczvA=)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.25) 100%)',
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                color: '#fff',
                fontWeight: 700,
                fontSize: {
                  xs: '1.8rem',
                  sm: '2.3rem',
                  md: '3rem',
                },
                lineHeight: 1.15,
                maxWidth: 780,
                mb: 1.5,
                mt: {
                  xs: 8,
                  sm: 10,
                  md: 10,
                },
              }}
            >
              Intelligent Reconciliation for Modern ERP Systems
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
                maxWidth: 720,
              }}
            >
              Simplify financial reconciliation within your ERP system by
              matching records, identifying discrepancies, improving data
              accuracy, and creating a reliable foundation for financial
              reporting and business operations.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* =========================
          INTRODUCTION
      ========================= */}
      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 2,
            sm: 3,
            md: 4,
          },
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
          <Box>
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
              What Is ERP Reconciliation?
            </Typography>

            <Typography
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
              ERP reconciliation is the process of comparing financial and
              operational records within an enterprise resource planning
              system to confirm that transactions, balances, and account
              information are consistent and accurate.
            </Typography>

            <Typography
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
              Reconciliation can involve comparing general ledger entries,
              invoices, payments, purchase records, sales transactions,
              receivables, payables, and other financial information managed
              through the ERP platform.
            </Typography>

            <Typography
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
              By identifying mismatches and unresolved transactions, ERP
              reconciliation helps finance teams maintain cleaner records and
              improve the reliability of financial information.
            </Typography>
          </Box>

          <Box>
            <Box
              component="img"
              src="https://media.istockphoto.com/id/1286772106/photo/handshake-between-a-man-and-woman-in-office.jpg?s=612x612&w=0&k=20&c=v8qpsZUNvYCyhb5bIBHsF0eT2H9Lt6Z1RmGwaiuRrGk="
              alt="ERP financial reconciliation"
              sx={{
                display: 'block',
                width: '100%',
                height: {
                  xs: 180,
                  sm: 220,
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

      {/* =========================
          PROCESS
      ========================= */}
      <Container
        maxWidth="lg"
        sx={{
          py: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: 850,
            mx: 'auto',
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
            How ERP Reconciliation Works
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: '12px',
                sm: '13px',
                md: '14px',
              },
              lineHeight: 1.7,
              color: '#555',
              mb: 3,
            }}
          >
            An ERP reconciliation process compares related records and
            identifies whether the information agrees. Matching records can
            be cleared while differences can be flagged for review.
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {processSteps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <Box
                  sx={{
                    height: '100%',
                    minHeight: 190,
                    bgcolor: '#fff',
                    borderRadius: 3,
                    p: 2.5,
                    textAlign: 'center',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(46,139,192,0.08)',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '28px',
                      fontWeight: 700,
                      color: '#2E8BC0',
                      mb: 1,
                    }}
                  >
                    {step.number}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#0B4C74',
                      fontWeight: 600,
                      fontSize: {
                        xs: '13px',
                        sm: '14px',
                      },
                      mb: 1,
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: '#666',
                      lineHeight: 1.6,
                      fontSize: {
                        xs: '11px',
                        sm: '12px',
                      },
                    }}
                  >
                    {step.text}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* =========================
          BENEFITS
      ========================= */}
      <Container
        maxWidth="lg"
        sx={{
          mb: 4,
          mt: 2,
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
          Key Benefits of ERP Reconciliation
        </Typography>

        <Typography
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
            maxWidth: 800,
            mx: 'auto',
          }}
        >
          A structured reconciliation process helps organizations improve
          financial data quality, reduce manual verification, identify
          discrepancies earlier, and maintain more reliable ERP records.
        </Typography>

        <Grid
          container
          spacing={1.5}
          justifyContent="center"
        >
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
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      boxShadow:
                        '0 12px 40px rgba(46,139,192,0.15)',
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

      {/* =========================
          CTA
      ========================= */}
      <SolutionsCTA />

      {/* =========================
          SERVICES
      ========================= */}
      <SolutionsServices />
    </Box>
  );
};

export default Reconciliation;