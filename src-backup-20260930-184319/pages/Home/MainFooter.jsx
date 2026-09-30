import React from 'react';
import { Box, Typography, Grid, Link as MuiLink, Container, Stack, alpha } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import Logo from '../../../public/images/logo-bg.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PublicIcon from '@mui/icons-material/Public';

export default function MainFooter() {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',              // ⬅️ full width
        bgcolor: '#0B4C74',
        color: 'white',
        pt: { xs: 6, md: 4 },
        pb: { xs: 4, md: 3 },
        mt: 'auto',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2E8BC0 0%, #64B5F6 100%)',
        },
      }}
    >
      {/* Full-width container — maxWidth false, with internal px */}
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          width: '100%',
          px: { xs: 2, md: 8, lg: 12, xl: 16 },   // internal padding
          boxSizing: 'border-box',
        }}
      >
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Logo & About */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 4 }}>
              <img
                src={Logo}
                alt="ONAS Global Services"
                style={{
                  width: '100px',
                  height: 'auto',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </Box>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                lineHeight: 1.5,
                color: alpha('#fff', 0.85),
                fontSize: '0.5rem',
                maxWidth: '320px',
              }}
            >
              We understand that every business is unique. That's why we offer personalized
              global services designed to drive growth and success.
            </Typography>
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1.5, color: alpha('#fff', 0.9), fontWeight: 600, fontSize: '0.5rem' }}>
                Connect With Us
              </Typography>
              <SocialIcons color="white" />
            </Box>
          </Grid>

          {/* ERP */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography
              variant="h8"
              sx={{
                mb: 1.5,
                fontWeight: 700,
                color: 'white',
                fontSize: '0.55rem',
                pb: 0.5,
                display: 'block',
                borderBottom: `1px solid ${alpha('#fff', 0.2)}`,
              }}
            >
              ERP
            </Typography>
            <Stack spacing={0.3} sx={{ mt: 0.5 }}>
              {[
                { label: 'SAP', href: '/how-we-help/erp/sap' },
                { label: 'Oracle', href: 'https://www.onasit.com' },
                { label: 'Salesforce', href: '/how-we-help/erp/salesforce' },
                { label: 'Netsuite', href: '/how-we-help/erp/netsuite' },
                { label: 'Service Now', href: '/how-we-help/erp/servicenow' },
                { label: 'Workday', href: '/how-we-help/erp/workday' },
                { label: 'MicrosoftDynamics365', href: '/how-we-help/erp/microsoft-dynamics-365' },
                { label: 'IFS', href: 'how-we-help/erp/IFS' },
              ].map((item, idx) => (
                <MuiLink
                  key={idx}
                  component={RouterLink}
                  to={item.href}
                  underline="none"
                  sx={{
                    color: alpha('#fff', 0.8),
                    fontSize: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    py: 0.2,
                    transition: 'all 0.2s ease',
                    '&:hover': { color: '#64B5F6', transform: 'translateX(4px)' },
                  }}
                >
                  <ChevronRightIcon sx={{ fontSize: 10, mr: 0.3, opacity: 0.7 }} />
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Digital Transformation */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h8" sx={{ mb: 1.5, fontWeight: 700, color: 'white', fontSize: '0.55rem', pb: 0.5, display: 'block', borderBottom: `1px solid ${alpha('#fff', 0.2)}` }}>
              Digital Serv
            </Typography>
            <Stack spacing={0.3} sx={{ mt: 0.5 }}>
              {[
                { label: 'AI & ML', href: '/how-we-help/digital-transformation/ai-ml' },
                { label: 'Cloud Migration & Integration', href: '/how-we-help/digital-transformation/cloud-integ' },
                { label: 'Data Engineering & Analytics', href: '/how-we-help/digital-transformation/data-eng-ana' },
                { label: 'IoT Services', href: '/how-we-help/digital-transformation/iot-services' },
                { label: 'Product Engineering', href: '/how-we-help/digital-transformation/product-eng' },
                { label: 'Testing & Automation', href: '/how-we-help/digital-transformation/test-automation' },
                { label: 'Governance, Risk & Compliance (GRC)', href: '/how-we-help/digital-transformation/grc' },
                { label: 'IT Asset Management Solutions', href: '/how-we-help/digital-transformation/it-asset-management' },
                { label: 'GenAI Solutions', href: '/how-we-help/digital-transformation/genai' },
                { label: 'DevOps & Infra Automation', href: '/how-we-help/digital-transformation/devops' },
              ].map((item, idx) => (
                <MuiLink key={idx} component={RouterLink} to={item.href} underline="none" sx={{ color: alpha('#fff', 0.8), fontSize: '0.5rem', display: 'flex', alignItems: 'center', py: 0.2, transition: 'all 0.2s ease', '&:hover': { color: '#64B5F6', transform: 'translateX(4px)' } }}>
                  <ChevronRightIcon sx={{ fontSize: 10, mr: 0.3, opacity: 0.7 }} />
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Managed IT */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h8" sx={{ mb: 1.5, fontWeight: 700, color: 'white', fontSize: '0.55rem', pb: 0.5, display: 'block', borderBottom: `1px solid ${alpha('#fff', 0.2)}` }}>
              IT & Op
            </Typography>
            <Stack spacing={0.3} sx={{ mt: 0.5 }}>
              {[
                { label: 'Application Maintenance Services', href: '/how-we-help/managed-it-operations/app-maintenance' },
                { label: 'Cloud Support', href: '/how-we-help/managed-it-operations/cloud-support' },
                { label: 'Cybersecurity', href: '/how-we-help/managed-it-operations/cybersecurity' },
                { label: 'IT Infrastructure Services', href: '/how-we-help/managed-it-operations/it-infra' },
                { label: 'Network Support', href: '/how-we-help/managed-it-operations/network-support' },
                { label: '24x7 Helpdesk', href: '/how-we-help/managed-it-operations/helpdesk' },
              ].map((item, idx) => (
                <MuiLink key={idx} component={RouterLink} to={item.href} underline="none" sx={{ color: alpha('#fff', 0.8), fontSize: '0.5rem', display: 'flex', alignItems: 'center', py: 0.2, transition: 'all 0.2s ease', '&:hover': { color: '#64B5F6', transform: 'translateX(4px)' } }}>
                  <ChevronRightIcon sx={{ fontSize: 10, mr: 0.3, opacity: 0.7 }} />
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Other Services */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="h8" sx={{ mb: 1.5, fontWeight: 700, color: 'white', fontSize: '0.55rem', pb: 0.5, display: 'block', borderBottom: `1px solid ${alpha('#fff', 0.2)}` }}>
              Other Serv
            </Typography>
            <Stack spacing={0.3} sx={{ mt: 0.5 }}>
              {[
                { label: 'Web Designing & Development', href: '/how-we-help/other-services/web-dev' },
                { label: 'Search Engine Optimization', href: '/how-we-help/other-services/seo' },
                { label: 'Social Media Marketing', href: '/how-we-help/other-services/social-media' },
                { label: 'Content Marketing', href: '/how-we-help/other-services/content-marketing' },
                { label: 'Email Marketing', href: '/how-we-help/other-services/email-marketing' },
                { label: 'PPC Advertising', href: '/how-we-help/other-services/ppc' },
              ].map((item, idx) => (
                <MuiLink key={idx} component={RouterLink} to={item.href} underline="none" sx={{ color: alpha('#fff', 0.8), fontSize: '0.5rem', display: 'flex', alignItems: 'center', py: 0.2, transition: 'all 0.2s ease', '&:hover': { color: '#64B5F6', transform: 'translateX(4px)' } }}>
                  <ChevronRightIcon sx={{ fontSize: 10, mr: 0.3, opacity: 0.7 }} />
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* STAFFING SERVICES */}
          <Grid item xs={12} md={4}>
            <Typography variant="h8" sx={{ fontWeight: 700, color: 'white', fontSize: '0.55rem', pb: 0.5, display: 'block', borderBottom: `1px solid ${alpha('#fff', 0.2)}`, mb: 1 }}>
              STAFFING SERVICES
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box sx={{ mb: 1.5 }}>
                  <MuiLink component={RouterLink} to="/submit-vacancy" underline="none" sx={{ color: 'white', fontWeight: 700, fontSize: '0.5rem', display: 'flex', alignItems: 'center', mb: 0.3, '&:hover': { color: '#64B5F6' } }}>
                    <ChevronRightIcon sx={{ fontSize: 12, mr: 0.2 }} />
                    SUBMIT A VACANCY
                  </MuiLink>
                  <MuiLink component={RouterLink} to="/staffing/submit-a-vacancy/request-a-call-back/" underline="none" sx={{ color: alpha('#fff', 0.8), fontSize: '0.5rem', display: 'flex', alignItems: 'center', ml: 1.5, '&:hover': { color: '#64B5F6' } }}>
                    <ChevronRightIcon sx={{ fontSize: 10, mr: 0.3, opacity: 0.7 }} />
                    Request Call Back
                  </MuiLink>
                </Box>

                <Typography variant="h8" sx={{ fontWeight: 700, color: 'white', fontSize: '0.52rem', pb: 0.3, display: 'block', borderBottom: `1px solid ${alpha('#fff', 0.2)}`, mb: 0.5 }}>
                  IT CONSULTING
                </Typography>
                <Stack spacing={0.2} sx={{ mb: 1.5 }}>
                  {[
                    { label: 'Banking Finance Sales', href: '/staffing/it-consulting' },
                    { label: 'Finance & Accounting', href: '/staffing/it-consulting' },
                    { label: 'HR & Support', href: '/staffing/it-consulting' },
                    { label: 'Legal & Compliance', href: '/staffing/it-consulting' },
                    { label: 'Pharma, Healthcare & Life Sciences', href: '/staffing/it-consulting' },
                    { label: 'Sales & Trade Marketing', href: '/staffing/it-consulting' },
                    { label: 'Wholesale & Retail', href: '/staffing/it-consulting' },
                  ].map((item, idx) => (
                    <MuiLink key={`it-${idx}`} component={RouterLink} to={item.href} underline="none" sx={{ color: alpha('#fff', 0.8), fontSize: '0.5rem', display: 'flex', alignItems: 'center', py: 0.1, transition: 'all 0.2s ease', '&:hover': { color: '#64B5F6', transform: 'translateX(4px)' } }}>
                      <ChevronRightIcon sx={{ fontSize: 10, mr: 0.3, opacity: 0.7 }} />
                      {item.label}
                    </MuiLink>
                  ))}
                </Stack>
              </Grid>

              <Grid item xs={6}>
                <Typography variant="h8" sx={{ fontWeight: 700, color: 'white', fontSize: '0.52rem', pb: 0.3, display: 'block', borderBottom: `1px solid ${alpha('#fff', 0.2)}`, mb: 0.5 }}>
                  Professional Services
                </Typography>
                <Stack spacing={0.2} sx={{ mb: 1.5 }}>
                  {[
                    { label: 'Managed IT & Resource Services', href: '/staffing/professional-services' },
                    { label: 'Staff Augmentation Services', href: '/staffing/professional-services' },
                    { label: 'Temporary / Contract Staffing', href: '/staffing/professional-services' },
                    { label: 'Permanent Staffing / Executive Placement', href: '/staffing/professional-services' },
                    { label: 'Contract To Hire Staffing', href: '/staffing/professional-services' },
                    { label: 'Remote / Virtual Staffing', href: '/staffing/professional-services' },
                    { label: 'Offshore Staffing', href: '/staffing/professional-services' },
                    { label: 'RPO Services', href: '/staffing/professional-services' },
                    { label: 'BPO Services', href: '/staffing/professional-services' },
                    { label: 'Hire our Recruiters', href: '/staffing/professional-services' },
                    { label: 'Technical Support Services', href: '/staffing/professional-services' },
                  ].map((item, idx) => (
                    <MuiLink key={`prof-${idx}`} component={RouterLink} to={item.href} underline="none" sx={{ color: alpha('#fff', 0.8), fontSize: '0.5rem', display: 'flex', alignItems: 'center', py: 0.1, transition: 'all 0.2s ease', '&:hover': { color: '#64B5F6', transform: 'translateX(4px)' } }}>
                      <ChevronRightIcon sx={{ fontSize: 10, mr: 0.3, opacity: 0.7 }} />
                      {item.label}
                    </MuiLink>
                  ))}
                </Stack>

                <Typography variant="h8" sx={{ fontWeight: 700, color: 'white', fontSize: '0.52rem', pb: 0.3, display: 'block', borderBottom: `1px solid ${alpha('#fff', 0.2)}`, mb: 0.5 }}>
                  EDTech Serv
                </Typography>
                <Stack spacing={0.2}>
                  <MuiLink component="a" href="https://www.m2msoftsolutions.com" target="_blank" rel="noopener noreferrer" underline="none" sx={{ color: alpha('#fff', 0.8), fontSize: '0.5rem', display: 'flex', alignItems: 'center', py: 0.1, transition: 'all 0.2s ease', '&:hover': { color: '#64B5F6', transform: 'translateX(4px)' } }}>
                    <ChevronRightIcon sx={{ fontSize: 10, mr: 0.3, opacity: 0.7 }} />
                    EdTech Solutions
                  </MuiLink>
                </Stack>
              </Grid>
            </Grid>
          </Grid>

          {/* Contact */}
          <Grid item xs={6} sm={3} md={1}>
            <Typography variant="h8" sx={{ fontWeight: 700, color: 'white', fontSize: '0.55rem', pb: 0.5, display: 'flex', alignItems: 'center', borderBottom: `1px solid ${alpha('#fff', 0.2)}`, mb: 1 }}>
              <PublicIcon sx={{ mr: 0.3, fontSize: 12 }} />
              Contact
            </Typography>

            <Stack spacing={1.5}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <EmailIcon sx={{ color: '#64B5F6', mr: 0.5, mt: 0.2, fontSize: 12 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.7), mb: 0.1, fontSize: '0.45rem' }}>
                    Email
                  </Typography>
                  <MuiLink href="mailto:sales@onasglobal.com" sx={{ color: 'white', fontWeight: 500, fontSize: '0.5rem', textDecoration: 'none', wordBreak: 'break-all', '&:hover': { color: '#64B5F6' } }}>
                    sales@onasglobal.com
                  </MuiLink>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <PhoneIcon sx={{ color: '#64B5F6', mr: 0.5, mt: 0.2, fontSize: 12 }} />
                <Box>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.7), mb: 0.1, fontSize: '0.45rem' }}>
                    Phone
                  </Typography>
                  <Stack spacing={0.1}>
                    <MuiLink href="tel:+919281506440" sx={{ color: 'white', fontWeight: 500, fontSize: '0.5rem', textDecoration: 'none', display: 'block', '&:hover': { color: '#64B5F6' } }}>
                      91-928 150 6440
                    </MuiLink>
                    <MuiLink href="tel:+919281506440" sx={{ color: 'white', fontWeight: 500, fontSize: '0.5rem', textDecoration: 'none', display: 'block', '&:hover': { color: '#64B5F6' } }}>
                      91-928 150 6441
                    </MuiLink>
                    <MuiLink href="tel:+16073262406" sx={{ color: 'white', fontWeight: 500, fontSize: '0.5rem', textDecoration: 'none', display: 'block', '&:hover': { color: '#64B5F6' } }}>
                      +1 607-326-2406
                    </MuiLink>
                  </Stack>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}