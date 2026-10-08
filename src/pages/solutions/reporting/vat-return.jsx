import React from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import { ExpandMore, Check } from '@mui/icons-material';

import CalculateIcon from '@mui/icons-material/Calculate';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StorageIcon from '@mui/icons-material/Storage';
import ReceiptIcon from '@mui/icons-material/Receipt';
import GavelIcon from '@mui/icons-material/Gavel';

import SolutionsCTA from '../../../components/SolutionsCTA';

import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  cardSx,
  containerSx,
  ink, muted, line, soft, lime,
} from '../../../theme/theme';

import V1 from '../../../assets/images/solutions/vat-return/vat1.jpg';
import V2 from '../../../assets/images/solutions/vat-return/vat2.jpg';
import V3 from '../../../assets/images/solutions/vat-return/vat3.jpg';
import V4 from '../../../assets/images/solutions/vat-return/vat4.jpg';
import V5 from '../../../assets/images/solutions/vat-return/vat5.jpg';
import V6 from '../../../assets/images/solutions/vat-return/vat6.jpg';
import V7 from '../../../assets/images/solutions/vat-return/vat7.jpg';
import V8 from '../../../assets/images/solutions/vat-return/vat8.jpg';

const infoCardSx = {
  background: '#fff',
  border: `1px solid ${line}`,
  borderRadius: '2px',
  padding: { xs: '1.6rem 1.2rem', md: '2rem 1.6rem' },
  marginBottom: { xs: '1.2rem', md: '1.5rem' },
};

const VATReturn = () => {
  const features = [
    { title: 'Automated Calculations', description: 'ONAS Global automatically calculates VAT amounts based on set rates and rules for various jurisdictions.', icon: <CalculateIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: V1 },
    { title: 'Integration with Accounting Systems', description: "ONAS Global integrates seamlessly with businesses' existing accounting or ERP systems.", icon: <IntegrationInstructionsIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: V2 },
    { title: 'Real-time Regulatory Updates', description: 'ONAS Global reflects changes in VAT regulations across different jurisdictions in real-time.', icon: <TrendingUpIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: V3 },
    { title: 'Centralized Record-Keeping', description: 'ONAS Global provides a centralized platform for storing all relevant documentation.', icon: <StorageIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: V4 },
    { title: 'Reporting and Analytics', description: 'ONAS Global offers built-in reporting features, generating required VAT return forms and insights.', icon: <ReceiptIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: V5 },
    { title: 'Automated Cross-border Considerations', description: 'ONAS Global automatically determines the place of supply and applies the correct VAT treatment.', icon: <GavelIcon sx={{ fontSize: 22, color: '#0B4C74' }} />, image: V6 },
  ];

  const vatSteps = [
    'Collection and Payment of VAT: Businesses collect VAT when they sell goods or services and pass this VAT on to their customers. At the same time, businesses must record and account for the VAT they pay to their suppliers when they purchase goods and services.',
    "VAT Refunds and Refund Claims: For VAT refund claims, businesses calculate the amount of VAT they collect in a given period (usually a month or quarter). Refund claims arise when a business's VAT payments exceed its VAT collections.",
    'VAT Refund Application: Businesses submit VAT refund claims to the competent tax authorities. Applications are usually filed electronically and may need to be submitted within a certain period of time.',
    "Review and Approval Process: The tax authority may review the business's VAT refund claims. This review process may include auditing the business's documents and accounts. If everything is in order, the VAT refund is approved.",
    'VAT Refund: The approved VAT refund is paid to the business. The refund is usually made by bank transfer or check.',
  ];

  const calculationItems = [
    'VAT rate: Determine the applicable VAT rate for your goods or services. VAT rates can vary from country to country.',
    'Net Value: Calculate the net value of your goods or services. This is the selling price before VAT.',
    'VAT Amount: Multiply the net value by the decimal rate of VAT. For example, if the net value is $1,000 and the VAT rate is 20%, the VAT amount is $200 ($1,000 × 0.20).',
    'Gross Value: Add the net value and the amount from VAT together. In the example, the gross value would be $1,200 ($1,000 + 200).',
    "Input Tax Credit: Keep accurate records of VAT calculations as they're required for tax reporting and compliance.",
    'VAT Submitting Returns: File periodic VAT returns with your tax authority, including output VAT and input VAT.',
  ];

  const exampleItems = [
    'Application Petition: Submit your request with an official petition stating the reason, period and amount of VAT you are requesting to refund.',
    'VAT Declaration: Attach a copy of the VAT declaration for the relevant period confirming the VAT amounts reported.',
    'Invoices and Receipts: Attach all invoices, receipts and documents for the period to support your VAT refund claim.',
    'Transaction Document: Attach a transaction document stating the reason why you are claiming the VAT refund.',
    'Refund Request Form: Some countries may require a special refund request form for VAT refund claims.',
    'Other Relevant Documents: Include documents such as tax identification number, trade license, or certificate of registration.',
    'Required Signatures: Ensure your application has the signatures of authorized persons.',
    'Process Information: Comply with certain processes that the tax office or relevant authority may require.',
    'Date and Application Number: Specify the date of your application and a unique application number for tracking.',
  ];

  const faqs = [
    { question: 'When to do a VAT Return?', answer: 'In the realm of tax technology, a VAT Return is typically submitted at the end of each tax period as defined by the respective tax authority. ONAS Global provides advanced tax software solutions that notify businesses of upcoming VAT Return deadlines, ensuring compliance and timely submissions.' },
    { question: 'How often should I submit a VAT Return?', answer: 'The frequency of VAT Return submissions varies by jurisdiction. Most commonly, businesses are required to submit on a monthly or quarterly basis. ONAS Global tax technology platforms can automate this process, scheduling and reminding businesses based on their specific reporting requirements.' },
    { question: "Can I resubmit my VAT return if I've made an error?", answer: 'Yes, in most jurisdictions, if businesses discover errors in your submitted VAT Return, amendments can be made. ONAS Global modern tax technology systems have in-built error checks, greatly reducing discrepancies and miscalculations. However, if an error is detected post-submission, the software can aid in the correction and resubmission process.' },
    { question: 'Is a VAT the same as a tax?', answer: 'While VAT (Value Added Tax) is a form of tax, it specifically pertains to the added value on goods and services at each stage of production or distribution. ONAS Global tax technology distinguishes between different tax types, ensuring that VAT calculations and other tax computations are treated separately but integrated within the same system for seamless reporting.' },
    { question: 'Who needs to complete a VAT return?', answer: "Any business registered for VAT in a jurisdiction that enforces it is typically required to submit a VAT Return. Through ONAS Global tax technology solutions, businesses can automate the process of determining whether they're liable for VAT in various jurisdictions, thereby streamlining compliance and reporting tasks." },
  ];

  return (
    <PageShell>
      <Box
        sx={{
          position: 'relative',
          marginTop: { xs: '72px', sm: '76px', md: '92px', lg: '100px' },
          minHeight: { xs: 420, md: 500 },
          padding: { xs: '7rem 1rem 3rem', md: '9rem 2.5rem 4rem' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundImage: `url(${V7})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          isolation: 'isolate',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: -1,
            background: 'linear-gradient(180deg, rgba(255,255,255,.10) 0%, rgba(0,0,0,.45) 100%)',
          }}
        />

        <Container maxWidth={false} disableGutters sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: '#ffffff', textShadow: '0 2px 8px rgba(0,0,0,.95)' }}>
              VAT Returns
            </Eyebrow>
            <Typography
              component="h1"
              sx={{
                margin: '.4rem auto .9rem',
                font: "400 clamp(1.15rem, 2.2vw, 1.75rem)/1.15 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 900,
                textShadow: '0 2px 12px rgba(0,0,0,.95), 0 1px 3px rgba(0,0,0,1)',
              }}
            >
              VAT Returns: A Pillar of International Tax Compliance
            </Typography>
            <Body
              sx={{
                color: '#ffffff !important',
                maxWidth: 780,
                marginLeft: 'auto',
                marginRight: 'auto',
                textShadow: '0 1px 8px rgba(0,0,0,.95)',
              }}
            >
              Simplify VAT compliance with intelligent automation. Our platform helps businesses manage complex VAT return requirements across multiple jurisdictions, ensuring accuracy, timeliness, and full regulatory adherence.
            </Body>
          </motion.div>
        </Container>
      </Box>

      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr .95fr' },
            gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' },
            alignItems: 'center',
          }}
        >
          <Box>
            <Eyebrow>Overview</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              What is a VAT Return?
            </SectionHeading>
            <Body sx={{ marginBottom: '1rem' }}>
              A VAT Return, led by European Commission guidelines, is a formal declaration submitted by businesses. This document lists detailed data on sales and purchases totals and their respective VAT. The resulting difference will determine whether businesses must make a payment or receive a rebate. ONAS Global provides adapted solutions for each country&apos;s frequency and specifics of submissions.
            </Body>
            <Body>
              The deduction and reduction mechanism of the VAT ensures that no tax remains on those outside the end consumer to whom sales are made. Those in the producer-distributor chain deduct the tax they pay from the tax they collect and thus ensure that no tax remains on them. ONAS Global helps businesses manage this process efficiently, keeping the tax burden on the end consumer.
            </Body>
          </Box>

          <Box
            sx={{
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
              height: { xs: 220, sm: 260, md: 320 },
            }}
          >
            <Box
              component="img"
              src={V8}
              alt="VAT Return"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>What We Offer</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>
            How ONAS Global simplifies VAT Return Management
          </SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1.2rem', md: '1.4rem' },
            alignItems: 'stretch',
          }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box sx={{ ...cardSx, padding: 0, overflow: 'hidden' }}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: 140,
                    overflow: 'hidden',
                    background: soft,
                    borderBottom: `1px solid ${line}`,
                  }}
                >
                  <Box
                    component="img"
                    src={feature.image}
                    alt={feature.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </Box>

                <Box
                  sx={{
                    padding: { xs: '1.6rem 1.2rem 1.3rem', md: '1.8rem 1.4rem 1.5rem' },
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '-22px',
                      left: '1.2rem',
                      display: 'grid',
                      placeItems: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: '#fff',
                      border: `1px solid ${line}`,
                      boxShadow: '0 4px 12px rgba(18,63,59,0.08)',
                      flexShrink: 0,
                    }}
                  >
                    {feature.icon}
                  </Box>

                  <Typography
                    component="h3"
                    sx={{
                      margin: '1rem 0 .6rem',
                      font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif",
                      color: ink,
                      minHeight: '2.4rem',
                    }}
                  >
                    {feature.title}
                  </Typography>

                  <Body sx={{ flexGrow: 1, fontSize: '.64rem' }}>{feature.description}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      <Section>
        <Box sx={infoCardSx}>
          <Eyebrow>Process</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            How Does VAT Return Work?
          </SectionHeading>
          <Body sx={{ marginBottom: '1.4rem' }}>
            A VAT refund is a reimbursement by the government under the VAT law when the VAT paid by a business on its purchases is more than the VAT collected on its sales. Your business must be a VAT payer and you must file a VAT return. ONAS Global helps businesses prepare VAT declarations and calculate VAT accruals and deductions accurately.
          </Body>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
            {vatSteps.map((step, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '.9rem',
                  padding: { xs: '1rem 1rem', md: '1rem 1.2rem' },
                  background: i % 2 === 0 ? soft : '#fff',
                  border: `1px solid ${line}`,
                  borderRadius: '2px',
                }}
              >
                <Box
                  sx={{
                    minWidth: 26,
                    height: 26,
                    borderRadius: '50%',
                    background: '#0B4C74',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 600,
                    fontSize: '.6rem',
                    fontFamily: "'Poppins', sans-serif",
                    flexShrink: 0,
                    marginTop: '1px',
                  }}
                >
                  {i + 1}
                </Box>
                <Body sx={{ fontSize: '.66rem', lineHeight: 1.7 }}>{step}</Body>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ ...infoCardSx, background: '#fff', marginBottom: 0 }}>
          <Eyebrow>How to File</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            How to Fill in a VAT Return?
          </SectionHeading>
          <Body sx={{ lineHeight: 1.8 }}>
            To file a VAT return, start by providing business information, including the VAT number and reporting period. Next, sales and purchases should be recorded, distinguishing between standard rate, reduced rate and zero rate transactions. Calculate the VAT owed to the tax authorities by deducting input VAT (VAT on purchases) from output VAT (VAT on sales). ONAS Global helps businesses include any additional information or adjustments required by the tax authorities, such as reverse charge transactions or special schemes. Ensure that the VAT declaration is correct and submitted to the tax authority within the specified deadline. Keeping records in order and understanding local tax regulations is crucial for a smooth VAT refund process.
          </Body>
        </Box>
      </Section>

      <Section>
        <Box sx={infoCardSx}>
          <Eyebrow>Calculation</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            How to Calculate VAT?
          </SectionHeading>
          <Body sx={{ marginBottom: '1.4rem' }}>
            The calculation of value added tax (VAT) is a fundamental aspect of financial and fiscal management for businesses in many countries. ONAS Global helps businesses calculate VAT accurately:
          </Body>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: { xs: '.7rem', md: '.8rem' },
            }}
          >
            {calculationItems.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem' }}>
                <Check sx={{ color: '#5e987f', fontSize: 15, marginTop: '2px', flexShrink: 0 }} />
                <Body sx={{ fontSize: '.66rem', lineHeight: 1.7 }}>{item}</Body>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      <Section bg={soft}>
        <Box sx={{ ...infoCardSx, background: '#fff', marginBottom: 0 }}>
          <Eyebrow>Example</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            Example of a VAT Return
          </SectionHeading>
          <Body sx={{ marginBottom: '1.4rem' }}>
            A VAT refund claim application should be prepared to request a refund of VAT paid for a specific period. ONAS Global helps businesses prepare comprehensive applications with these important elements:
          </Body>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: { xs: '.7rem', md: '.8rem' },
            }}
          >
            {exampleItems.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem' }}>
                <Check sx={{ color: '#5e987f', fontSize: 15, marginTop: '2px', flexShrink: 0 }} />
                <Body sx={{ fontSize: '.66rem', lineHeight: 1.7 }}>{item}</Body>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>FAQ</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>
            Frequently Asked Questions
          </SectionHeading>
        </Box>

        <Box sx={{ maxWidth: 950, margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              elevation={0}
              disableGutters
              sx={{
                marginBottom: '.6rem',
                background: '#fff',
                border: `1px solid ${line}`,
                borderRadius: '2px !important',
                overflow: 'hidden',
                '&:before': { display: 'none' },
                '&.Mui-expanded': { margin: `0 0 .6rem 0`, borderColor: '#aac7b2' },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: '#0B4C74', fontSize: 20 }} />}
                sx={{
                  padding: { xs: '.6rem 1rem', md: '.7rem 1.4rem' },
                  '& .MuiAccordionSummary-content': { margin: '.6rem 0' },
                  '&.Mui-expanded': { minHeight: 'auto' },
                }}
              >
                <Typography sx={{ color: `${ink} !important`, fontFamily: "Georgia, 'Times New Roman', serif", fontSize: '.82rem', lineHeight: 1.4 }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>

              <AccordionDetails sx={{ padding: { xs: '.2rem 1rem 1.2rem', md: '.2rem 1.4rem 1.4rem' } }}>
                <Typography sx={{ color: `${muted} !important`, fontFamily: "'Poppins', sans-serif", fontSize: '.68rem', lineHeight: 1.8 }}>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Section>

      <SolutionsCTA />
    </PageShell>
  );
};

export default VATReturn;