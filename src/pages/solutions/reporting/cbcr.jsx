import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Check } from '@mui/icons-material';

import StorageIcon from '@mui/icons-material/Storage';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SecurityIcon from '@mui/icons-material/Security';

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

const CBCR = () => {
  const valueProps = [
    {
      title: 'Data Gathering & Consistency',
      description:
        'ONAS Global offers centralized data management and integration capabilities, allowing for easy consolidation of data from various jurisdictions.',
      icon: <StorageIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOgbhqi4sej65hcZ0BS1DHUXvXbiEMbuY5uMQI6Zqrw&s=10',
    },
    {
      title: 'Cost & Resource Saving',
      description:
        'Automating the CbCR reporting process via ONAS Global can lead to significant cost savings, reducing the need for external consultants.',
      icon: <AttachMoneyIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-b8lM_1VDPs2RgCNqgNkCzJsKyOQi99uCW_871CEMg&s=10',
    },
    {
      title: 'Effective Risk Management',
      description:
        'ONAS Global offers advanced data security features and audit trails, ensuring data is securely stored and changes are transparently tracked.',
      icon: <SecurityIcon sx={{ fontSize: 22, color: '#0B4C74' }} />,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShjl8siZVTE7GLHgVLeoQ3Qh2OYPn_JRXrhqUQb_0G5Q&s=10',
    },
  ];

  const inclusions = [
    'Income Distribution: A comprehensive view of how income is scattered across the various tax jurisdictions.',
    'Profit Appropriation: Insights into the division of profits between the different operational regions.',
    'Tax Payment Records: A detailed breakdown of the taxes paid across all tax jurisdictions.',
    'Economic Activity Data: Extensive data on the economic activities undertaken in each tax jurisdiction, including assets held, number of employees, and tangible assets.',
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
            'url(https://transferpricingasia.com/wp-content/uploads/2019/02/country-by-country-reporting.jpg)',
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
              'linear-gradient(90deg, rgba(11,76,116,.94) 0%, rgba(11,76,116,.72) 55%, rgba(11,76,116,.85) 100%)',
          }}
        />

        <Container
          maxWidth={false}
          disableGutters
          sx={{ ...containerSx, position: 'relative', zIndex: 2, textAlign: 'center' }}
        >
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow sx={{ color: lime }}>CbCR</Eyebrow>

            <Typography
              component="h1"
              sx={{
                margin: '.4rem auto .9rem',
                font: "400 clamp(1.15rem, 2.2vw, 1.75rem)/1.15 Georgia, 'Times New Roman', serif",
                color: '#fff',
                maxWidth: 900,
              }}
            >
              CbCR (Country by Country Reports)
            </Typography>

            <Body
              sx={{
                color: 'rgba(255,255,255,.82) !important',
                maxWidth: 780,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Achieve global tax transparency with comprehensive Country-by-Country Reporting
              solutions. Our platform helps multinational enterprises meet OECD compliance
              requirements while streamlining data collection, analysis, and submission processes
              across all operating jurisdictions.
            </Body>
          </motion.div>
        </Container>
      </Box>

      {/* ── Who Has to File ── */}
      <Section>
        <Box sx={{ ...infoCardSx, textAlign: 'center', maxWidth: 900, margin: '0 auto 1.5rem' }}>
          <Eyebrow>Eligibility</Eyebrow>
          <SectionHeading sx={{ margin: '.7rem 0 1rem' }}>
            Who Has to File Country-by-Country Reporting?
          </SectionHeading>
          <Body>
            Multinational Enterprises (MNEs): The primary criterion for CbCR is the entity&apos;s
            status as a large MNE. ONAS Global helps such MNEs prepare and submit CbCR reports
            regardless of their operational scope. Across the European Union, the CbCR report is
            required by law to be submitted annually. This obligation is mandatory for MNEs with
            a turnover of €750,000 or more. ONAS Global provides comprehensive solutions to meet
            these reporting obligations efficiently.
          </Body>
        </Box>
      </Section>

      {/* ── What is Included ── */}
      <Section bg={soft}>
        <Box sx={{ ...infoCardSx, background: 'transparent', border: 'none', marginBottom: 0 }}>
          <Eyebrow>Inclusions</Eyebrow>
          <SectionHeading sx={{ margin: '.7rem 0 1.4rem' }}>
            What is Included in Country-by-Country Reporting?
          </SectionHeading>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: { xs: '.7rem', md: '.8rem' },
            }}
          >
            {inclusions.map((item, i) => (
              <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: '.6rem' }}>
                <Check sx={{ color: '#5e987f', fontSize: 15, marginTop: '2px', flexShrink: 0 }} />
                <Body sx={{ fontSize: '.64rem' }}>{item}</Body>
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      {/* ── Value Proposition (3 cards) ── */}
      <Section>
        <Box sx={{ textAlign: 'center', marginBottom: '1.8rem' }}>
          <Eyebrow>Value Proposition</Eyebrow>
          <SectionHeading sx={{ marginTop: '.7rem', marginBottom: '1rem' }}>
            The Value Proposition of CbCR with ONAS Global
          </SectionHeading>
          <Body sx={{ maxWidth: 800, margin: '0 auto' }}>
            With the world&apos;s most advanced data security features and audit trails, ONAS
            Global ensures that data is not only securely stored but also that any changes are
            transparently tracked.
          </Body>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: '1.2rem', md: '1.4rem' },
            alignItems: 'stretch',
          }}
        >
          {valueProps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              style={{ display: 'flex', width: '100%' }}
            >
              <Box
                sx={{
                  ...cardSx,
                  padding: 0,
                  overflow: 'hidden',
                }}
              >
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
                    src={item.image}
                    alt={item.title}
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
                    {item.icon}
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
                    {item.title}
                  </Typography>

                  <Body sx={{ flexGrow: 1, fontSize: '.64rem' }}>{item.description}</Body>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Section>

      {/* ── What Is Country-by-Country Reporting? ── */}
      <Section bg={soft}>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF4JaAyAQ9c5hEpRr2zfhhrwhNEJ4-mAx21BNrg0t8Eg&s=10"
              alt="CbCR"
              sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </Box>

          <Box>
            <Eyebrow>Overview</Eyebrow>
            <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
              What Is Country-by-Country Reporting?
            </SectionHeading>
            <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
              Country-by-Country Reporting (CbCR) represents a pivotal shift in international
              taxation, offering unprecedented transparency. It&apos;s a reporting mechanism
              mandated by the OECD under the Base Erosion and Profit Shifting (BEPS) Action Plan.
              Essentially, CbCR requires multinational enterprises (MNEs) to report income, taxes,
              and other key financial data for each country where they operate. ONAS Global helps
              businesses navigate this form of reporting that shines a spotlight on tax planning
              strategies, aiming to curb tax avoidance and ensure a fair distribution of tax
              revenues.
            </Body>
          </Box>
        </Box>
      </Section>

      {/* ── Info Cards ── */}
      <Section>
        <Box sx={infoCardSx}>
          <Eyebrow>Filing</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            Who needs to file CbCR?
          </SectionHeading>
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
            CbCR obligations fall primarily on MNEs with consolidated group revenue exceeding a
            certain threshold, generally €750 million or its equivalent. ONAS Global helps these
            entities file detailed reports, breaking down financial data for each jurisdiction
            they operate in. This requirement applies not just to the parent companies but also
            to subsidiaries and affiliates, depending on the rules of the specific country.
          </Body>
        </Box>

        <Box sx={{ ...infoCardSx, background: soft }}>
          <Eyebrow>Obligations</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            CBC Reporting Obligations
          </SectionHeading>
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
            The reporting obligations under CbCR are comprehensive. MNEs must disclose a range of
            data, including revenue generated, pre-tax profit or loss, income tax paid and
            accrued, stated capital, accumulated earnings, number of employees, and tangible
            assets other than cash or cash equivalents. ONAS Global helps businesses compile these
            details crucial for tax authorities to assess where economic activity is taking place
            and where taxation should rightfully occur.
          </Body>
        </Box>

        <Box sx={infoCardSx}>
          <Eyebrow>Implementation</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            When will CbCR be implemented?
          </SectionHeading>
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
            CbCR is already in effect in many countries, with implementation dates varying
            globally. Since its introduction in the BEPS Action Plan, numerous countries have
            swiftly adopted CbCR, aligning their local laws with OECD guidelines. ONAS Global
            helps businesses consult specific national regulations to determine the exact
            implementation timelines. The exact date of implementation can vary from country to
            country, with some nations adopting the practice shortly after the OECD&apos;s
            recommendations, while others took longer.
          </Body>
        </Box>

        <Box sx={{ ...infoCardSx, background: soft }}>
          <Eyebrow>Purpose</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            Why are CbCR Reports Needed?
          </SectionHeading>
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
            CbCR reports are a cornerstone in the fight against tax avoidance. By requiring
            detailed reporting, tax authorities can better understand where profits are being made
            and where taxes are being paid. ONAS Global helps businesses achieve this increased
            transparency to prevent profit shifting and base erosion, ensuring that companies
            contribute their fair share of taxes in the markets where they truly operate.
          </Body>
        </Box>

        <Box sx={infoCardSx}>
          <Eyebrow>Deadlines</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            When will CbCR reports need to be filed?
          </SectionHeading>
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
            Filing deadlines for CbCR reports vary by country but are generally required annually.
            In many jurisdictions, the report is due within 12 months after the end of the
            reporting fiscal year of the MNE group. ONAS Global helps businesses stay attentive in
            understanding the specific deadlines in each jurisdiction to ensure timely compliance.
          </Body>
        </Box>

        <Box sx={{ ...infoCardSx, background: soft, marginBottom: 0 }}>
          <Eyebrow>Filing Location</Eyebrow>
          <SectionHeading sx={{ textAlign: 'left', margin: '.7rem 0 1rem' }}>
            Where is a CbCR report filed?
          </SectionHeading>
          <Body sx={{ fontSize: '.72rem', lineHeight: 1.8 }}>
            The primary CbCR report is typically filed in the jurisdiction where the MNE&apos;s
            ultimate parent entity resides. However, under certain conditions such as the lack of
            an information exchange agreement, secondary filing may be required in other
            jurisdictions. ONAS Global helps MNEs understand the global landscape of CbCR to
            navigate the complexities of where and how to file.
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

export default CBCR;