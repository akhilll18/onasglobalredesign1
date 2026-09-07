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
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { motion } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import StorageIcon from '@mui/icons-material/Storage';
import CalculateIcon from '@mui/icons-material/Calculate';
import ReceiptIcon from '@mui/icons-material/Receipt';
import GavelIcon from '@mui/icons-material/Gavel';
import HelpIcon from '@mui/icons-material/Help';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

import SolutionsCTA from '../../../components/SolutionsCTA';
import SolutionsServices from '../../../components/SolutionsServices';

const VATReturn = () => {
  const features = [
    {
      title: 'Automated Calculations',
      description: 'ONAS Global automatically calculates VAT amounts based on set rates and rules for various jurisdictions.',
      icon: <CalculateIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop',
    },
    {
      title: 'Integration with Accounting Systems',
      description: 'ONAS Global integrates seamlessly with businesses\' existing accounting or ERP systems.',
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tu__VkEPB0w9WLyickO-pHc5G4aWC2aPAXXi3isxuw&s=10',
    },
    {
      title: 'Real-time Regulatory Updates',
      description: 'ONAS Global reflects changes in VAT regulations across different jurisdictions in real-time.',
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlHe-BlCqcMAWIgouRCtzgQNvox7RM9YKTkQJEEOmiIQ&s=10',
    },
    {
      title: 'Centralized Record-Keeping',
      description: 'ONAS Global provides a centralized platform for storing all relevant documentation.',
      icon: <StorageIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMcWc3cuFhvRb9Xw6JPMhVDdfhfbR9p7_PYVOoVzs0g&s',
    },
    {
      title: 'Reporting and Analytics',
      description: 'ONAS Global offers built-in reporting features, generating required VAT return forms and insights.',
      icon: <ReceiptIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGstMr3fO77eXhC67Xhn3V6YFRqqyIflyCWVh4xB0DA&s',
    },
    {
      title: 'Automated Cross-border Considerations',
      description: 'ONAS Global automatically determines the place of supply and applies the correct VAT treatment.',
      icon: <GavelIcon sx={{ fontSize: 40, color: '#2E8BC0' }} />,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLO9Cf8pIC15r9Z00nakWs2JvEtMJl_3BDzoYUdp0-fA&s=10',
    },
  ];

  const vatSteps = [
    'Collection and Payment of VAT: Businesses collect VAT when they sell goods or services and pass this VAT on to their customers. At the same time, businesses must record and account for the VAT they pay to their suppliers when they purchase goods and services.',
    'VAT Refunds and Refund Claims: For VAT refund claims, businesses calculate the amount of VAT they collect in a given period (usually a month or quarter). Refund claims arise when a business\'s VAT payments exceed its VAT collections.',
    'VAT Refund Application: Businesses submit VAT refund claims to the competent tax authorities. Applications are usually filed electronically and may need to be submitted within a certain period of time.',
    'Review and Approval Process: The tax authority may review the business\'s VAT refund claims. This review process may include auditing the business\'s documents and accounts. If everything is in order, the VAT refund is approved.',
    'VAT Refund: The approved VAT refund is paid to the business. The refund is usually made by bank transfer or check.',
  ];

  const faqs = [
    {
      question: 'When to do a VAT Return?',
      answer: 'In the realm of tax technology, a VAT Return is typically submitted at the end of each tax period as defined by the respective tax authority. ONAS Global provides advanced tax software solutions that notify businesses of upcoming VAT Return deadlines, ensuring compliance and timely submissions.'
    },
    {
      question: 'How often should I submit a VAT Return?',
      answer: 'The frequency of VAT Return submissions varies by jurisdiction. Most commonly, businesses are required to submit on a monthly or quarterly basis. ONAS Global tax technology platforms can automate this process, scheduling and reminding businesses based on their specific reporting requirements.'
    },
    {
      question: 'Can I resubmit my VAT return if I\'ve made an error?',
      answer: 'Yes, in most jurisdictions, if businesses discover errors in your submitted VAT Return, amendments can be made. ONAS Global modern tax technology systems have in-built error checks, greatly reducing discrepancies and miscalculations. However, if an error is detected post-submission, the software can aid in the correction and resubmission process.'
    },
    {
      question: 'Is a VAT the same as a tax?',
      answer: 'While VAT (Value Added Tax) is a form of tax, it specifically pertains to the added value on goods and services at each stage of production or distribution. ONAS Global tax technology distinguishes between different tax types, ensuring that VAT calculations and other tax computations are treated separately but integrated within the same system for seamless reporting.'
    },
    {
      question: 'Who needs to complete a VAT return?',
      answer: 'Any business registered for VAT in a jurisdiction that enforces it is typically required to submit a VAT Return. Through ONAS Global tax technology solutions, businesses can automate the process of determining whether they\'re liable for VAT in various jurisdictions, thereby streamlining compliance and reporting tasks.'
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
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tu__VkEPB0w9WLyickO-pHc5G4aWC2aPAXXi3isxuw&s=10)',
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
              VAT Returns: A Pillar of <br />International Tax Compliance
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
              Simplify VAT compliance with intelligent automation. Our platform helps businesses manage complex VAT return requirements across multiple jurisdictions, ensuring accuracy, timeliness, and full regulatory adherence.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* =========================================================
          WHAT IS A VAT RETURN
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
              What is a VAT Return?
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
              A VAT Return, led by European Commission guidelines, is a formal declaration submitted by businesses. This
              document lists detailed data on sales and purchases totals and their respective VAT. The resulting difference
              will determine whether businesses must make a payment or receive a rebate. ONAS Global provides adapted
              solutions for each country's frequency and specifics of submissions.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '12px', sm: '13px', md: '14px' },
                lineHeight: 1.7,
                color: '#555',
              }}
            >
              The deduction and reduction mechanism of the VAT ensures that no tax remains on those outside the end consumer
              to whom sales are made. Those in the producer-distributor chain deduct the tax they pay from the tax they
              collect and thus ensure that no tax remains on them. ONAS Global helps businesses manage this process
              efficiently, keeping the tax burden on the end consumer.
            </Typography>
          </Box>

          <Box sx={{ width: '100%', minWidth: 0 }}>
            <Box
              component="img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzw78EoYBfsZz5P2OYz4EDPv_jbZFZSHmYbb3_Jjr4xQ&s=10"
              alt="VAT Return"
              sx={{
                display: 'block',
                width: '100%',
                height: { xs: 180, sm: 200, md: 350 },
                borderRadius: 3,
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* =========================================================
          HOW ONAS GLOBAL SIMPLIFIES VAT RETURN MANAGEMENT (6 CARDS)
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
          How ONAS Global simplifies VAT Return Management:
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
          HOW DOES VAT RETURN WORK
      ========================================================= */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            color: '#0B4C74',
            mb: 1.5,
            fontSize: { xs: '18px', sm: '20px', md: '24px' },
          }}
        >
          How Does VAT Return Work?
        </Typography>

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
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
              mb: 2.5,
            }}
          >
            A VAT refund is a reimbursement by the government under the VAT law when the VAT paid by a business on its
            purchases is more than the VAT collected on its sales. Your business must be a VAT payer and you must file a
            VAT return. ONAS Global helps businesses prepare VAT declarations and calculate VAT accruals and deductions
            accurately.
          </Typography>

          <Box>
            {vatSteps.map((step, index) => (
              <Paper
                key={index}
                elevation={0}
                sx={{
                  p: 2,
                  mb: 1.5,
                  bgcolor: index % 2 === 0 ? '#f8f9fa' : 'white',
                  borderRadius: 2,
                  border: '1px solid #e8ecf1',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    minWidth: 28,
                    height: 28,
                    borderRadius: '50%',
                    bgcolor: '#2E8BC0',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: '13px',
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </Box>
                <Typography variant="body2" sx={{ color: '#444', lineHeight: 1.7, fontSize: { xs: '12px', md: '13px' } }}>
                  {step}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Paper>
      </Container>

      {/* =========================================================
          HOW TO FILL IN A VAT RETURN
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
            How to Fill in a VAT Return?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '12px', sm: '13px', md: '14px' },
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            To file a VAT return, start by providing business information, including the VAT number and reporting period.
            Next, sales and purchases should be recorded, distinguishing between standard rate, reduced rate and zero rate
            transactions. Calculate the VAT owed to the tax authorities by deducting input VAT (VAT on purchases) from
            output VAT (VAT on sales). ONAS Global helps businesses include any additional information or adjustments
            required by the tax authorities, such as reverse charge transactions or special schemes. Ensure that the VAT
            declaration is correct and submitted to the tax authority within the specified deadline. Keeping records in
            order and understanding local tax regulations is crucial for a smooth VAT refund process.
          </Typography>
        </Paper>
      </Container>

      {/* =========================================================
          HOW TO CALCULATE VAT
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
            How to Calculate VAT?
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
            The calculation of value added tax (VAT) is a fundamental aspect of financial and fiscal management for
            businesses in many countries. ONAS Global helps businesses calculate VAT accurately:
          </Typography>

          <Grid container spacing={1.5}>
            {[
              'VAT rate: Determine the applicable VAT rate for your goods or services. VAT rates can vary from country to country.',
              'Net Value: Calculate the net value of your goods or services. This is the selling price before VAT.',
              'VAT Amount: Multiply the net value by the decimal rate of VAT. For example, if the net value is $1,000 and the VAT rate is 20%, the VAT amount is $200 ($1,000 × 0.20).',
              'Gross Value: Add the net value and the amount from VAT together. In the example, the gross value would be $1,200 ($1,000 + 200).',
              'Input Tax Credit: Keep accurate records of VAT calculations as they\'re required for tax reporting and compliance.',
              'VAT Submitting Returns: File periodic VAT returns with your tax authority, including output VAT and input VAT.'
            ].map((item, index) => (
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
          EXAMPLE OF A VAT RETURN
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
            Example of a VAT Return
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
            A VAT refund claim application should be prepared to request a refund of VAT paid for a specific period.
            ONAS Global helps businesses prepare comprehensive applications with these important elements:
          </Typography>

          <Grid container spacing={1.5}>
            {[
              'Application Petition: Submit your request with an official petition stating the reason, period and amount of VAT you are requesting to refund.',
              'VAT Declaration: Attach a copy of the VAT declaration for the relevant period confirming the VAT amounts reported.',
              'Invoices and Receipts: Attach all invoices, receipts and documents for the period to support your VAT refund claim.',
              'Transaction Document: Attach a transaction document stating the reason why you are claiming the VAT refund.',
              'Refund Request Form: Some countries may require a special refund request form for VAT refund claims.',
              'Other Relevant Documents: Include documents such as tax identification number, trade license, or certificate of registration.',
              'Required Signatures: Ensure your application has the signatures of authorized persons.',
              'Process Information: Comply with certain processes that the tax office or relevant authority may require.',
              'Date and Application Number: Specify the date of your application and a unique application number for tracking.'
            ].map((item, index) => (
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
          FAQ SECTION
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

        <Box>
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
                '&.Mui-expanded': {
                  borderColor: '#2E8BC0',
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: '#2E8BC0' }} />}
                sx={{
                  px: 2.5,
                  py: 0.5,
                  bgcolor: 'white',
                  '&:hover': {
                    bgcolor: '#f8f9fa',
                  },
                  '& .MuiAccordionSummary-content': {
                    my: 1.5,
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <HelpIcon sx={{ color: '#2E8BC0', fontSize: 20 }} />
                  <Typography variant="h6" fontWeight={600} sx={{ color: '#0B4C74', fontSize: '14px' }}>
                    {faq.question}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 2.5, pb: 2.5, bgcolor: '#fafafa' }}>
                <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.7, fontSize: { xs: '12px', md: '13px' } }}>
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
      <SolutionsServices />

    </Box>
  );
};

export default VATReturn;