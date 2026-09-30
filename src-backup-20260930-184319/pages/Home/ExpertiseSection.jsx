import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Tabs,
  Tab,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';

import CloudIcon from '@mui/icons-material/Cloud';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import SecurityIcon from '@mui/icons-material/Security';
import { ArrowForward, Check } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

// ── Arvee editorial palette ──
const ink = '#123f3b';
const muted = '#647572';
const line = '#dfe8df';
const soft = '#f1f6ef';
const cream = '#fbfcf7';
const lime = '#baf58c';

const eyebrowSx = {
  color: '#257a68',
  fontSize: '.55rem',
  letterSpacing: '.12em',
  textTransform: 'uppercase',
  fontWeight: 700,
  fontFamily: "'Poppins', sans-serif",
};

const containerSx = {
  width: '100%',
  maxWidth: { xs: '100%', md: '1240px' },
  margin: '0 auto',
  padding: { xs: '0 1rem', md: '0 1.5rem' },
  boxSizing: 'border-box',
};

function Eyebrow({ children }) {
  return <Typography sx={eyebrowSx}>{children}</Typography>;
}

const cardSx = {
  display: 'flex',
  flexDirection: 'column',
  background: '#fff',
  border: `1px solid ${line}`,
  borderRadius: '2px',
  overflow: 'hidden',
  height: '100%',
  width: '100%',
  transition: 'all .25s ease',
  '&:hover': {
    borderColor: '#aac7b2',
    transform: 'translateY(-3px)',
  },
};

const expertiseData = [
  {
    id: 1,
    category: 'ERP Services',
    icon: <CloudIcon />,
    description:
      'Future-proofing your enterprise with AI-augmented ERP implementation and dynamic optimization for continuous excellence.',
    examples: [
      { label: 'SAP Implementation', link: '/how-we-help/erp/sap' },
      { label: 'Oracle Cloud Solutions', link: 'https://www.onasit.com/', external: true },
      { label: 'Salesforce CRM', link: '/how-we-help/erp/salesforce' },
      { label: 'Workday Integration', link: '/how-we-help/erp/workday' },
      { label: 'Service Now', link: '/how-we-help/erp/servicenow' },
      { label: 'Netsuite', link: '/how-we-help/erp/netsuite' },
    ],
    stats: '7+ ERP Systems',
    benefits: ['Streamlined Operations', 'Real-time Insights', 'Enhanced Collaboration'],
  },
  {
    id: 2,
    category: 'IT Consulting',
    icon: <BusinessIcon />,
    description: 'Strategic IT consulting to transform operations and drive digital excellence.',
    examples: [
      { label: 'Digital Transformation Strategy', link: '/staffing/it-consulting#transformation' },
      { label: 'Technology Roadmapping', link: '/staffing/it-consulting#roadmapping' },
      { label: 'Business Process Optimization', link: '/staffing/it-consulting#optimization' },
      { label: 'IT Infrastructure Planning', link: '/staffing/it-consulting#infrastructure' },
      { label: 'Banking Finance Sales', link: '/staffing/it-consulting#banking-finance' },
      { label: 'Finance & Accounting', link: '/staffing/it-consulting#finance-accounting' },
      { label: 'HR & Support', link: '/staffing/it-consulting#hr-support' },
      { label: 'Legal & Compliance', link: '/staffing/it-consulting#legal-compliance' },
      { label: 'Pharma, Healthcare & Life Sciences', link: '/staffing/it-consulting#pharma-healthcare-lifesciences' },
    ],
    stats: '95% Client Satisfaction',
    benefits: ['Cost Reduction', 'Improved Efficiency', 'Scalable Solutions'],
  },
  {
    id: 3,
    category: 'Professional Services',
    icon: <GroupsIcon />,
    description: 'Elite staffing solutions with top-tier professionals for your business needs.',
    examples: [
      { label: 'Managed IT Services', link: '/staffing/professional-services#managed-it' },
      { label: 'Expert Staff Augmentation', link: '/staffing/professional-services#staff-augmentation' },
      { label: 'Contract Staffing Solutions', link: '/staffing/professional-services#temporary-contract' },
      { label: 'Executive Placement', link: '/staffing/professional-services#permanent-executive' },
      { label: 'Contract To Hire Staffing', link: '/staffing/professional-services#contract-to-hire' },
      { label: 'Remote / Virtual Staffing', link: '/staffing/professional-services#remote-virtual' },
    ],
    stats: '100+ Professionals Placed',
    benefits: ['Access to Top Talent', 'Flexible Staffing', 'Reduced Overhead'],
  },
  {
    id: 4,
    category: 'Digital Solutions',
    icon: <CodeIcon />,
    description: 'Cutting-edge web and digital solutions to amplify your online presence.',
    examples: [
      { label: 'Custom Web Development', link: '/how-we-help/other-services/web-dev' },
      { label: 'SEO & Digital Marketing', link: '/how-we-help/other-services/seo' },
      { label: 'Mobile App Development', link: '/how-we-help/other-services/mobileapp' },
      { label: 'UI/UX Design Excellence', link: '/how-we-help/other-services/uiuxsection' },
      { label: 'Social Media Marketing', link: '/how-we-help/other-services/social-media' },
      { label: 'Content Marketing', link: '/how-we-help/other-services/content-marketing' },
    ],
    stats: '25+ Projects Delivered',
    benefits: ['Enhanced User Experience', 'Increased Conversions', 'Brand Visibility'],
  },
  {
    id: 5,
    category: 'EdTech Services',
    icon: <SchoolIcon />,
    description: 'Innovative educational technology solutions for modern learning ecosystems.',
    examples: [
      { label: 'LMS Implementation', link: '/education/lms-implementation' },
      { label: 'E-Learning Platform Development', link: '/education/e-learning' },
      { label: 'Educational Analytics', link: '/education/analytics' },
      { label: 'Virtual Classroom Solutions', link: '/education/virtual-classroom' },
    ],
    stats: '30+ Educational Institutions',
    benefits: ['Enhanced Learning Outcomes', 'Scalable Education', 'Modern Learning Tools'],
  },
  {
    id: 6,
    category: 'Cybersecurity',
    icon: <SecurityIcon />,
    description: 'Advanced security solutions to protect your digital assets and ensure compliance.',
    examples: [
      { label: 'Security Risk Assessment', link: '/security/securityrisk' },
      { label: 'Network Security Solutions', link: '/security/networksecurity' },
      { label: 'Data Protection & Privacy', link: '/security/dataprotection' },
      { label: 'Compliance Management', link: '/security/compliancemanagement' },
    ],
    stats: '99.9% Security Uptime',
    benefits: ['Data Protection', 'Regulatory Compliance', 'Threat Prevention'],
  },
];

const industries = [
  { name: 'Banking & Finance', icon: '🏦', link: '/industries/banking-finance' },
  { name: 'Healthcare', icon: '🏥', link: '/industries/healthcare' },
  { name: 'Education', icon: '🎓', link: '/industries/education' },
  { name: 'Manufacturing', icon: '🏭', link: '/industries/manufacturing' },
  { name: 'Retail', icon: '🛒', link: '/industries/retail' },
  { name: 'Insurance', icon: '🛡️', link: '/industries/insurance' },
  { name: 'Energy & Utilities', icon: '⚡', link: '/industries/energy-utilities' },
  { name: 'Professional Services', icon: '💼', link: '/industries/professional-services' },
  { name: 'Information Technology', icon: '💻', link: '/industries/information-technology' },
  { name: 'Hi-Tech', icon: '🚀', link: '/industries/hi-tech' },
  { name: 'Energy Source & Utilities', icon: '🔋', link: '/industries/energy-source-utilities' },
  { name: 'Communication Media & Information Services', icon: '📡', link: '/industries/communication-media' },
  { name: 'Engineering, Construction & Operations', icon: '🏗️', link: '/industries/engineering-construction' },
  { name: 'Public Services', icon: '🏛️', link: '/industries/public-services' },
  { name: 'Life Sciences & Pharma', icon: '🧬', link: '/industries/life-sciences-pharma' },
];

export default function ExpertiseSection() {
  const [activeCategory, setActiveCategory] = useState(expertiseData[0]);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setActiveCategory(expertiseData[newValue]);
  };

  return (
    <Box
      sx={{
        background: cream,
        color: ink,
        width: '100%',
        overflowX: 'hidden',
        '& h1, & h2, & h3': {
          fontFamily: "Georgia, 'Times New Roman', serif",
          fontWeight: 400,
          letterSpacing: 0,
        },
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          ...containerSx,
          paddingTop: { xs: '3.5rem', md: '5rem' },
          paddingBottom: { xs: '3.5rem', md: '5rem' },
        }}
      >
        {/* ── Heading + Image (two-column) ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.1fr .9fr' },
            gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 4rem)' },
            alignItems: 'center',
            marginBottom: { xs: '2.5rem', md: '3.5rem' },
          }}
        >
          <Box>
            <Eyebrow>Our Expertise</Eyebrow>
            <Typography
              component="h2"
              sx={{
                margin: '.7rem 0 1rem',
                font: "400 clamp(1.4rem, 2.4vw, 2rem)/1.1 Georgia, 'Times New Roman', serif",
                color: ink,
              }}
            >
              Transform Your Business With Expert Solutions
            </Typography>
            <Typography
              sx={{
                color: `${muted} !important`,
                fontFamily: "'Poppins', sans-serif",
                fontSize: '.72rem',
                lineHeight: 1.75,
                marginBottom: '1.6rem',
              }}
            >
              Partner with us for comprehensive IT services that drive innovation, enhance
              productivity, and deliver measurable business outcomes across industries.
            </Typography>

            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: { xs: 2, md: 3 },
                padding: { xs: '0.8rem 1.2rem', md: '1rem 1.6rem' },
                border: `1px solid ${line}`,
                borderRadius: '2px',
                background: '#fff',
                flexWrap: 'wrap',
              }}
            >
              {[
                { value: '7+', label: 'Years' },
                { value: '40+', label: 'Clients' },
                { value: '98%', label: 'Satisfaction' },
              ].map((stat, idx) => (
                <Box key={idx} sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{
                      fontSize: '.95rem',
                      fontWeight: 700,
                      color: ink,
                      fontFamily: "Georgia, 'Times New Roman', serif",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '.55rem',
                      color: muted,
                      fontFamily: "'Poppins', sans-serif",
                      letterSpacing: '.05em',
                      textTransform: 'uppercase',
                      marginTop: '.3rem',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85"
              alt="Our expertise"
              sx={{
                width: '100%',
                height: 'auto',
                maxHeight: { xs: 260, md: 360 },
                objectFit: 'cover',
                borderRadius: '2px',
                display: 'block',
              }}
            />
          </Box>
        </Box>

        {/* ── Tabs — FULL WIDTH ── */}
        <Box
          sx={{
            borderBottom: `1px solid ${line}`,
            marginBottom: { xs: '2rem', md: '3rem' },
            width: '100%',
          }}
        >
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="fullWidth"
            scrollButtons={false}
            sx={{
              width: '100%',
              '& .MuiTabs-flexContainer': {
                width: '100%',
                justifyContent: 'space-between',
              },
              '& .MuiTab-root': {
                flex: 1,
                minHeight: 60,
                fontSize: '.72rem',
                fontWeight: 600,
                textTransform: 'none',
                color: muted,
                fontFamily: "'Poppins', sans-serif",
                '&.Mui-selected': { color: ink },
              },
              '& .MuiTabs-indicator': {
                backgroundColor: '#257a68',
                height: 2,
              },
            }}
          >
            {expertiseData.map((item, index) => (
              <Tab
                key={item.id}
                label={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                    <Box
                      sx={{
                        color: activeTab === index ? '#257a68' : muted,
                        transition: 'color 0.3s',
                        display: 'flex',
                        '& svg': { fontSize: 18 },
                      }}
                    >
                      {item.icon}
                    </Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '.72rem',
                      }}
                    >
                      {item.category}
                    </Typography>
                  </Box>
                }
              />
            ))}
          </Tabs>
        </Box>

        {/* ── ERP Services Card — FULL WIDTH ── */}
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Box sx={{ ...cardSx, marginBottom: { xs: '2rem', md: '3rem' } }}>
            {/* Header */}
            <Box
              sx={{
                padding: { xs: '1.6rem 1.2rem', md: '1.8rem 1.6rem' },
                borderBottom: `1px solid ${line}`,
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <Avatar
                  sx={{
                    width: 52,
                    height: 52,
                    bgcolor: '#e6efe8',
                    color: '#257a68',
                    '& svg': { fontSize: 26 },
                  }}
                >
                  {activeCategory.icon}
                </Avatar>
                <Box>
                  <Typography
                    component="h3"
                    sx={{
                      margin: 0,
                      font: "400 clamp(1rem, 1.8vw, 1.35rem)/1.2 Georgia, 'Times New Roman', serif",
                      color: ink,
                      marginBottom: '.4rem',
                    }}
                  >
                    {activeCategory.category}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#257a68',
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '.6rem',
                      fontWeight: 700,
                      letterSpacing: '.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {activeCategory.stats}
                  </Typography>
                </Box>
              </Box>

              <Typography
                sx={{
                  color: `${muted} !important`,
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '.72rem',
                  lineHeight: 1.8,
                  marginBottom: '1.2rem',
                  maxWidth: 900,
                }}
              >
                {activeCategory.description}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
                {activeCategory.benefits?.map((benefit, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '.35rem',
                      padding: '.35rem .75rem',
                      background: soft,
                      border: `1px solid ${line}`,
                      borderRadius: '2px',
                      color: ink,
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '.6rem',
                      fontWeight: 500,
                    }}
                  >
                    <Check sx={{ fontSize: 12, color: '#257a68' }} />
                    {benefit}
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Key Services */}
            <Box sx={{ padding: { xs: '1.4rem 1.2rem', md: '1.8rem 1.6rem' }, flexGrow: 1 }}>
              <Eyebrow>Key Services</Eyebrow>
              <Typography
                component="h4"
                sx={{
                  margin: '.5rem 0 1.2rem',
                  font: "400 clamp(.9rem, 1.4vw, 1.05rem)/1.25 Georgia, 'Times New Roman', serif",
                  color: ink,
                }}
              >
                What we deliver in {activeCategory.category}
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                  },
                  gap: '.7rem',
                }}
              >
                {activeCategory.examples.map((example, idx) => {
                  const isExternal = example.external || /^https?:\/\//.test(example.link);
                  return (
                    <Box
                      key={idx}
                      {...(isExternal
                        ? { component: 'a', href: example.link, target: '_blank', rel: 'noopener noreferrer' }
                        : { component: RouterLink, to: example.link }
                      )}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '.6rem',
                        padding: '.85rem 1rem',
                        background: '#fff',
                        border: `1px solid ${line}`,
                        borderRadius: '2px',
                        textDecoration: 'none',
                        color: ink,
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '.66rem',
                        fontWeight: 500,
                        transition: 'all .2s ease',
                        '&:hover': {
                          borderColor: '#aac7b2',
                          background: soft,
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                        <Check sx={{ fontSize: 14, color: '#5e987f' }} />
                        {example.label}
                      </Box>
                      <ArrowForward sx={{ fontSize: 12, color: '#257a68' }} />
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* ── Industries Card — FULL WIDTH ── */}
        <Box sx={{ ...cardSx, marginBottom: { xs: '2.5rem', md: '3.5rem' } }}>
          <Box
            sx={{
              padding: { xs: '1.4rem 1.2rem', md: '1.6rem 1.6rem' },
              borderBottom: `1px solid ${line}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <Box>
              <Eyebrow>Industries</Eyebrow>
              <Typography
                component="h3"
                sx={{
                  margin: '.5rem 0 0',
                  font: "400 clamp(1rem, 1.8vw, 1.35rem)/1.2 Georgia, 'Times New Roman', serif",
                  color: ink,
                }}
              >
                Industries We Serve
              </Typography>
            </Box>
            <Typography
              sx={{
                color: `${muted} !important`,
                fontFamily: "'Poppins', sans-serif",
                fontSize: '.66rem',
                maxWidth: 400,
              }}
            >
              Tailored solutions for diverse sectors — from banking to life sciences.
            </Typography>
          </Box>

          <Box
            sx={{
              padding: { xs: '1.2rem', md: '1.4rem 1.6rem' },
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                sm: 'repeat(3, 1fr)',
                md: 'repeat(5, 1fr)',
              },
              gap: '.6rem',
            }}
          >
            {industries.map((industry, idx) => (
              <Box
                key={idx}
                component={RouterLink}
                to={industry.link}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '.35rem',
                  padding: '.75rem .5rem',
                  background: '#fff',
                  border: `1px solid ${line}`,
                  borderRadius: '2px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  transition: 'all .2s ease',
                  '&:hover': {
                    borderColor: '#aac7b2',
                    background: soft,
                  },
                }}
              >
                <Typography sx={{ fontSize: '1.4rem', lineHeight: 1 }}>
                  {industry.icon}
                </Typography>
                <Typography
                  sx={{
                    color: `${muted} !important`,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '.55rem',
                    lineHeight: 1.35,
                    fontWeight: 500,
                  }}
                >
                  {industry.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Bottom row: CTA + Trusted by ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: '1.5rem', md: '1.8rem' },
            alignItems: 'stretch',
          }}
        >
          {/* CTA */}
          <Box
            sx={{
              background: ink,
              borderRadius: '2px',
              padding: { xs: '1.8rem 1.4rem', md: '2.2rem 1.8rem' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <Typography sx={{ ...eyebrowSx, color: lime }}>
              Ready to Transform?
            </Typography>
            <Typography
              component="h3"
              sx={{
                margin: '.7rem 0 1rem',
                font: "400 clamp(1rem, 1.8vw, 1.35rem)/1.2 Georgia, 'Times New Roman', serif",
                color: '#fff',
              }}
            >
              Let&apos;s discuss how we can help you achieve your business goals.
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,.82) !important',
                fontFamily: "'Poppins', sans-serif",
                fontSize: '.66rem',
                lineHeight: 1.75,
                marginBottom: '1.4rem',
              }}
            >
              Get tailored IT solutions that fit your exact needs.
            </Typography>

            <Box
              component={RouterLink}
              to="/resources/contact-us"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '.5rem',
                padding: '.75rem 1.4rem',
                borderRadius: '2px',
                background: lime,
                color: ink,
                fontWeight: 600,
                fontSize: '.62rem',
                fontFamily: "'Poppins', sans-serif",
                textDecoration: 'none',
                margin: '0 auto',
                transition: 'background .2s ease',
                '&:hover': { background: '#d3ffb0' },
              }}
            >
              Get Free Consultation <ArrowForward sx={{ fontSize: 14 }} />
            </Box>
          </Box>

          {/* Trusted by */}
          <Box
            sx={{
              background: soft,
              border: `1px solid ${line}`,
              borderRadius: '2px',
              padding: { xs: '1.8rem 1.4rem', md: '2.2rem 1.8rem' },
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Eyebrow>Trusted by Industry Leaders</Eyebrow>
            <Typography
              component="h3"
              sx={{
                margin: '.7rem auto 1.6rem',
                font: "400 clamp(.95rem, 1.5vw, 1.1rem)/1.25 Georgia, 'Times New Roman', serif",
                color: ink,
                maxWidth: 500,
              }}
            >
              Align with forward-thinking innovators who have accelerated their digital evolution.
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: { xs: 1.5, md: 2 },
              }}
            >
              {[
                { value: '40+', label: 'Global Clients' },
                { value: '10+', label: 'Countries Served' },
                { value: '98%', label: 'Client Retention' },
                { value: '24/7', label: 'Support Coverage' },
              ].map((stat, idx) => (
                <Box key={idx} sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{
                      font: "400 clamp(1.4rem, 2.4vw, 1.9rem)/1 Georgia, 'Times New Roman', serif",
                      color: ink,
                      marginBottom: '.35rem',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      color: `${muted} !important`,
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: '.55rem',
                      letterSpacing: '.05em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}