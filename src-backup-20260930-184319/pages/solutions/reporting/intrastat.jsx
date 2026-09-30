import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Check } from '@mui/icons-material';

import DescriptionIcon from '@mui/icons-material/Description';
import StorageIcon from '@mui/icons-material/Storage';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';

import SolutionsCTA from '../../../components/SolutionsCTA';
import SolutionsServices from '../../../components/SolutionsServices';

// Shared design
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

// Local-only info card (not part of shared theme)
const infoCardSx = {
  background: '#fff',
  border: `1px solid ${line}`,
  borderRadius: '2px',
  padding: { xs: '1.6rem 1.2rem', md: '2rem 1.6rem' },
  marginBottom: { xs: '1.2rem', md: '1.5rem' },
};

const Intrastat = () => {
  const features = [
    {
      title: 'Guided Filings',
      description:
        'Get step-by-step assistance from ONAS Global to ensure your reports are accurate and compliant.',
      icon: <DescriptionIcon sx={{ fontSize: 22, color: '#257a68' }} />,
      image: 'https://community.sap.com/legacyfs/online/storage/blog_attachments/2019/04/Figure-25.png',
    },
    {
      title: 'Automated Data Aggregation',
      description:
        'ONAS Global tools swiftly collate the required data, decreasing manual errors and saving time.',
      icon: <StorageIcon sx={{ fontSize: 22, color: '#257a68' }} />,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKoclXsnNlkuohOH3dlE-VyHNalcq7B4ZF6JdZ_Up7TA&s=10',
    },
    {
      title: 'Up-to-date Information',
      description:
        'Stay informed about any changes in EU regulations or reporting standards with ONAS Global.',
      icon: <TrendingUpIcon sx={{ fontSize: 22, color: '#257a68' }} />,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDPbDiqylZ5ECY1oN-TaK-qseArwhldR96O6b5P6p-g&s=10',
    },
    {
      title: 'Holistic Analysis',
      description:
        'Dive deep into your trade data to acquire actionable insights and drive business strategies with ONAS Global.',
      icon: <PublicIcon sx={{ fontSize: 22, color: '#257a68' }} />,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNUdP02W9wIX0rcKhNG9GxUabVaBdIKKH8tvPmKdkqng&s',
    },
  ];

  const declarationData = [
    { declaration: 'Goods Description', description: "The goods' description, including the name, quantity, and value." },
    { declaration: 'Quantity & Value', description: 'The quantity and value of the goods being traded.' },
    { declaration: 'Delivery Terms', description: 'The delivery terms, including the delivery date and the method of delivery.' },
    { declaration: 'Delivery Date', description: 'The date by which the goods must be delivered.' },
    { declaration: 'Country Data', description: "The country data, including the country code and the country's GDP." },
    { declaration: 'GDP', description: 'The Gross Domestic Product of the country.' },
  ];

  return (
    <PageShell>
      {/* ── HERO ── */}
      <Box
        sx={{
          position: 'relative',
          minHeight: { xs: 420, md: 500 },
          padding: { xs: '5rem 1rem 3rem', md: '7rem 2.5rem 4rem' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundImage:
            'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9hX8L5FvtPoAGTnZ9vwZblpTVJHEybn8quXutmwP9AA&s=10)',
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
            background:
              'linear-gradient(90deg, rgba(8,49,46,.94) 0%, rgba(8,49,46,.72) 55%, rgba(8,49,46,.85) 100%)',
          }}
        />

        <Container
          maxWidth={false}
          disableGutters
          sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}
        >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: lime }}>Intrastat</Eyebrow>

            <Typography
              component="h1"
              sx={{
                margin: '.4rem auto .9rem',
                font: "400 clamp(1.15rem, 2.2vw, 1.75rem)/1.15 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 900,
              }}
            >
              Intrastat Reports
            </Typography>

            <Body
              sx={{
                color: 'rgba(255,255,255,.82) !important',
                maxWidth: 780,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Simplify EU trade reporting with comprehensive Intrastat solutions. Our platform
              helps businesses navigate the complexities of intra-EU goods movement reporting,
              ensuring accurate submissions and seamless compliance with statistical requirements
              across all member states.
            </Body>
          </motion.div>
        </Container>
      </Box>

      {/* ── Reporting Timelines ── */}
      <Section>
        <Box sx={{ ...infoCardSx, textAlign: 'center', maxWidth: 900, margin: '0 auto 1.5rem' }}>
          <Eyebrow>Timelines</Eyebrow>
          <SectionHeading sx={{ margin: '.7rem 0 1rem' }}>
            Intrastat Reporting Timelines
          </SectionHeading>
          <Body sx={{ marginBottom: '1rem' }}>
            The agreement to report depends on certain thresholds defined for each EU nation.
            ONAS Global helps businesses understand these thresholds that can vary between
            dispatch and arrivals, even within a single country, and are individually higher
            than VAT registration thresholds.
          </Body>
          <Body>
            Across the European Union, Intrastat reporting especially follows a monthly measure.
            These filings usually correspond with VAT return submissions and are directed to the
            respective statistical office of the concerned country. ONAS Global ensures timely
            and accurate submissions.
          </Body>
        </Box>
      </Section>

      {/* ── What is Intrastat Reporting? ── */}
      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '.95fr 1.05fr' },
            gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' },
            alignItems: 'center',
          }}
        >
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDaedQD3BsaZPPa4mENqqCt5xCpulsSe8C6-EFToHwuA&s=10"
              alt="Intrastat Reporting"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          <Box>
            <Eyebrow>Overview</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              What is Intrastat Reporting?
            </SectionHeading>
            <Body sx={{ marginBottom: '1rem' }}>
              Intrastat Reporting is a vital statistical tool used within the European Union (EU)
              to collect data on the movement of goods between EU member states. ONAS Global helps
              businesses navigate this reporting mechanism that plays a crucial role in
              understanding trade patterns, supporting economic policies, and ensuring the smooth
              functioning of the internal market.
            </Body>
            <Body>
              Across the European Union, Intrastat reporting especially follows a monthly measure.
              These filings usually correspond with VAT return submissions and are directed to the
              respective statistical office of the concerned country. ONAS Global ensures seamless
              submission processes.
            </Body>
          </Box>
        </Box>
      </Section>

      {/* ── Intrastat Declaration Table ── */}
      <Section bg={soft}>
        <Box sx={{ ...infoCardSx, background: 'transparent', border: 'none', marginBottom: 0, padding: 0 }}>
          <Eyebrow>Declaration</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            Diving Deep: What Constitutes an Intrastat Declaration?
          </SectionHeading>
          <Body sx={{ marginBottom: '1.4rem' }}>
            Intrastat filings demand an in-depth analysis of the data to determine whether the
            information is accurate and complete. ONAS Global provides comprehensive solutions
            for Intrastat declarations.
          </Body>

          <Box
            sx={{
              border: `1px solid ${line}`,
              borderRadius: '2px',
              overflow: 'hidden',
              background: '#fff',
            }}
          >
            {/* Header row */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '.9fr 1.6fr' },
                background: ink,
                color: '#fff',
                padding: { xs: '.7rem 1rem', md: '.8rem 1.4rem' },
              }}
            >
              <Typography
                sx={{
                  color: '#fff !important',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '.66rem',
                  fontWeight: 700,
                  letterSpacing: '.05em',
                  textTransform: 'uppercase',
                }}
              >
                Declaration
              </Typography>
              <Typography
                sx={{
                  color: '#fff !important',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '.66rem',
                  fontWeight: 700,
                  letterSpacing: '.05em',
                  textTransform: 'uppercase',
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                Description
              </Typography>
            </Box>

            {/* Body rows */}
            {declarationData.map((row, i) => (
              <Box
                key={i}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: '.9fr 1.6fr' },
                  padding: { xs: '.9rem 1rem', md: '.95rem 1.4rem' },
                  borderTop: `1px solid ${line}`,
                  background: i % 2 === 0 ? '#fff' : soft,
                  gap: { xs: '.3rem', sm: 0 },
                }}
              >
                <Typography
                  sx={{
                    color: `${ink} !important`,
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: '.82rem',
                    fontWeight: 400,
                  }}
                >
                  {row.declaration}
                </Typography>
                <Typography
                  sx={{
                    color: `${muted} !important`,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '.66rem',
                    lineHeight: 1.7,
                  }}
                >
                  {row.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      {/* ── Intrastat with ONAS Global (4 cards) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>With ONAS Global</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem' }}>
            Intrastat with ONAS Global: Seamless Reporting &amp; Compliance
          </SectionHeading>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
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
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
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

      {/* ── Info Cards ── */}
      <Section bg={soft}>
        <Box sx={{ ...infoCardSx, background: '#fff' }}>
          <Eyebrow>Purpose</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            What is Intrastat Reporting used for?
          </SectionHeading>
          <Body sx={{ marginBottom: '1rem' }}>
            Intrastat Reporting serves multiple purposes. ONAS Global helps businesses leverage this reporting for:
          </Body>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
            {[
              'Analyzing intra-EU trade patterns and informing economic and trade policies',
              "Calculating the trade component of a country's Gross Domestic Product (GDP)",
              'Monitoring the adherence to EU regulations and compliance requirements',
            ].map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem' }}>
                <Check sx={{ color: '#5e987f', fontSize: 15, marginTop: '2px', flexShrink: 0 }} />
                <Body sx={{ fontSize: '.66rem', lineHeight: 1.7 }}>{item}</Body>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={infoCardSx}>
          <Eyebrow>Required Information</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            Intrastat Declaration Required Information
          </SectionHeading>
          <Body sx={{ lineHeight: 1.8 }}>
            When submitting an Intrastat declaration, businesses must provide detailed information
            including the value and nature of the goods, the partner country, and the mode of
            transport. ONAS Global ensures accurate and complete data is crucial for compliance
            and for providing meaningful insights into trade flows.
          </Body>
        </Box>

        <Box sx={{ ...infoCardSx, background: '#fff' }}>
          <Eyebrow>Submission</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            When to Submit Intrastat Reporting?
          </SectionHeading>
          <Body sx={{ lineHeight: 1.8 }}>
            Timely submission of Intrastat Reporting is critical. In general, businesses are
            required to submit their reports within a month following the reference period. ONAS
            Global helps businesses meet their national deadlines to avoid late submission
            penalties.
          </Body>
        </Box>

        <Box sx={infoCardSx}>
          <Eyebrow>Obligations</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            Who is required to make Intrastat declarations?
          </SectionHeading>
          <Body sx={{ lineHeight: 1.8 }}>
            Businesses engaged in the trade of goods across EU borders are typically required to
            submit Intrastat declarations. ONAS Global helps businesses understand their
            obligations when their trade exceeds a certain threshold, which varies from one member
            state to another. It&apos;s essential for companies to stay informed about their
            country-specific thresholds to ensure compliance.
          </Body>
        </Box>

        <Box sx={{ ...infoCardSx, background: '#fff' }}>
          <Eyebrow>Exemptions</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            Who is exempt from Intrastat reporting?
          </SectionHeading>
          <Body sx={{ lineHeight: 1.8 }}>
            Small businesses that do not exceed the predefined thresholds for Intrastat
            declarations are generally exempt. These thresholds are set by individual EU member
            states and can change annually. ONAS Global helps companies regularly check their
            national regulations to verify if they fall under the exemption criteria.
          </Body>
        </Box>

        <Box sx={infoCardSx}>
          <Eyebrow>Deadlines</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            When does the Intrastat declaration take place?
          </SectionHeading>
          <Body sx={{ lineHeight: 1.8 }}>
            Intrastat declarations are typically submitted on a monthly basis. The specific
            deadlines for submission can vary among EU member states, so it&apos;s important for
            businesses to be aware of the deadlines set by their respective national statistical
            authorities. ONAS Global helps businesses stay on top of these deadlines.
          </Body>
        </Box>

        <Box sx={{ ...infoCardSx, marginBottom: 0 }}>
          <Eyebrow>Post-Brexit</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            Is Intrastat still required after Brexit?
          </SectionHeading>
          <Body sx={{ lineHeight: 1.8 }}>
            Post-Brexit, the United Kingdom is no longer part of the EU Intrastat system for the
            movement of goods. However, businesses in Northern Ireland continue to be subject to
            Intrastat reporting for goods received from or sent to the EU. ONAS Global helps
            companies affected by Brexit understand the new regulations and comply accordingly.
          </Body>
        </Box>
      </Section>

      {/* ── CTA ── */}
      <SolutionsCTA />

      {/* ── Services ── */}
      <SolutionsServices />
    </PageShell>
  );
};

export default Intrastat;