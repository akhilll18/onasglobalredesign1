import React, { useState } from 'react';
import { Box, Typography, Grid, Container, Chip, Tabs, Tab, Paper } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet';
 
// Lucide Icons - Enhanced for IFS Cloud
import {
  Cloud,
  Cpu,
  Rocket,
  Shield,
  BarChart3,
  Users,
  Wrench,
  Database,
  GitBranch,
  Zap,
  Target,
  Globe,
  Smartphone,
  Network,
  Award,
  TrendingUp,
  Layers,
  Lock,
  RefreshCw,
  LineChart,
  Briefcase,
  Truck,
  Factory,
  Building2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Star,
  Code2,
  Settings,
  UserCheck,
  Workflow,
  PieChart,
  RocketIcon,
  Server,
  Headphones,
  Gauge,
  Clock,
  HeartHandshake
} from 'lucide-react';
 
import Button from '@mui/material/Button';
 
const IFSCloud = () => {
  const [activeTab, setActiveTab] = useState(0);
 
  // Comprehensive IFS Cloud Keywords for SEO
  const ifsKeywords = [
    'IFS Cloud implementation services', 'IFS Cloud consulting partner', 'IFS Cloud ERP solutions',
    'IFS Cloud enterprise asset management', 'IFS Cloud field service management',
    'IFS Cloud for manufacturing', 'IFS Cloud for aerospace and defense',
    'IFS Cloud AI capabilities', 'IFS Cloud predictive analytics',
    'IFS Cloud digital transformation', 'Enterprise Asset Management'
  ].join(', ');
 
  // Enhanced Offerings with IFS-specific services
  const offerings = [
    { icon: <Rocket className="w-10 h-10" />,
       title: 'IFS Cloud Implementation',
        text: 'End-to-end implementation of IFS Cloud solutions tailored for asset-intensive industries with proven methodologies.' },
    { icon: <Shield className="w-10 h-10" />,
      title: 'Enterprise Asset Management',
        text: 'Comprehensive EAM solutions to optimize asset lifecycle, reduce downtime, and maximize operational efficiency.' },
    { icon: <Network className="w-10 h-10" />,
       title: 'Field Service Management',
        text: 'Intelligent FSM platform with mobile capabilities, real-time scheduling, and AI-driven optimization.' },
    { icon: <Cpu className="w-10 h-10" />,
       title: 'AI & IoT Integration',
       text: 'Harness predictive analytics, digital twin technology, and IoT sensor data for proactive maintenance.' },
    { icon: <Server className="w-10 h-10" />,
       title: 'Cloud Migration Services',
       text: 'Seamless migration from legacy systems to IFS Cloud with minimal disruption and data integrity.' },
    { icon: <Headphones className="w-10 h-10" />,
       title: 'Managed Services & Support',
        text: '24/7 proactive monitoring, continuous optimization, and expert support for business continuity.' },
    { icon: <RefreshCw className="w-10 h-10" />,
       title: 'Continuous Innovation',
       text: 'Stay ahead with regular updates and cutting-edge capabilities delivered through continuous innovation.' },
    { icon: <Target className="w-10 h-10" />,
      title: 'Industry-Specific Solutions',
       text: 'Tailored solutions with pre-configured best practices for manufacturing, aerospace, energy, and more.' }
 
   ];
 
  // End-to-End Implementation Approach
  const endToEnd = [
    { icon: <Target className="w-8 h-8" />, title: 'Discovery & Strategy', text: 'Deep dive into business processes and strategic objectives to create a tailored IFS Cloud roadmap.', color:'#0ffcbe' },
    { icon: <Settings className="w-8 h-8" />, title: 'Design & Architecture', text: 'Architect optimal solution design leveraging IFS Cloud\'s composable architecture.', color: '#0ffcbe' },
    { icon: <Database className="w-8 h-8" />, title: 'Migration & Integration', text: 'Secure data migration and seamless integration with existing systems.', color: '#0ffcbe' },
    { icon: <Code2 className="w-8 h-8" />, title: 'Customization & Extension', text: 'Extend IFS Cloud capabilities with tailored configurations and workflows.', color: '#0ffcbe' },
    { icon: <UserCheck className="w-8 h-8" />, title: 'Training & Adoption', text: 'Comprehensive training programs and change management strategies.', color: '#0ffcbe' },
    { icon: <Workflow className="w-8 h-8" />, title: 'Go-Live & Optimization', text: 'Managed go-live execution with hypercare support and continuous optimization.', color: '#0ffcbe' }
  ];
 
  // Value Proposition
  const valueDelivery = [
    { icon: <TrendingUp className="w-2 h-2" />, title: 'Rapid Time-to-Value', text: 'Accelerated methodology  delivering results in weeks.', stat: '40%', statLabel: 'Faster Deployment' },
    { icon: <Star className="w-2 h-2" />, title: 'Industry Expertise', text: 'Deep domain knowledge in asset-intensive industries.', stat: '7+', statLabel: 'Years Experience' },
    { icon: <Globe className="w-2 h-2" />, title: 'Global Delivery', text: 'Onshore, offshore, and hybrid delivery  models.', stat: '24/7', statLabel: 'Global Support' }
  ];
 
  // Industry Focus Areas
  const industries = [
    { name: 'Aerospace & Defense', icon: <Rocket size={40} />, bg: 'linear-gradient(135deg, #667eea 10%, #764ba2 100%)' },
    { name: 'Manufacturing', icon: <Factory size={40} />, bg: 'linear-gradient(135deg, #f093fb 10%, #f5576c 100%)' },
    { name: 'Energy & Utilities', icon: <Zap size={40} />, bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { name: 'Construction', icon: <Building2 size={40} />, bg: 'linear-gradient(135deg, #43e97b 10%, #38f9d7 100%)' },
    { name: 'Service Management', icon: <Briefcase size={40} />, bg: 'linear-gradient(135deg, #fa709a 10%, #fee140 100%)' },
  ];
 
  // Key Benefits
  const benefits = [
    'Unified platform for enterprise asset management, field service, and project management',
    'AI-powered predictive maintenance reducing downtime by up to 50%',
    'Real-time visibility across operations with IoT sensor integration',
    'Composable architecture enabling rapid innovation and flexibility',
    'Mobile-first field service capabilities for remote workforce efficiency',
    'Built-in industry best practices for asset-intensive industries',
    'Continuous updates with zero disruption to business operations'
  ];
 
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
 
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
 
  return (
    <>
      <Helmet>
        <title>IFS Cloud Implementation & Consulting Services | Enterprise Asset Management | ONAS Global</title>
        <meta name="description" content="Expert IFS Cloud implementation services for asset-intensive industries. Certified IFS partner providing enterprise asset management, field service management, and digital transformation solutions." />
        <meta name="keywords" content={ifsKeywords} />
        <link rel="canonical" href="https://www.onasglobal.com/ifs-cloud-consulting-services" />
      </Helmet>
 
      <Box sx={{ backgroundColor: '#f8fafc', fontFamily: 'Inter, Poppins, sans-serif' }}>
       
        {/* Hero Section */}
        <Box sx={{ mt: "50px", position: 'relative', background: 'linear-gradient(135deg, #0B2B40 0%, #1A4D6B 50%, #2C6E8F 100%)', color: 'white', overflow: 'hidden', py: { xs: 8, md: 12 }, px: { xs: 2, md: 4 } }}>
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px', opacity: 0.3 }} />
          <Container maxWidth="lg">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
              <Typography variant="h1" sx={{ fontSize: { xs: '2.0rem', md: '2rem' }, fontWeight: 900, mb: 2, background: 'linear-gradient(135deg, #0ffcbe 0%, #0ffcbe 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Transform Asset-Intensive Operations With{' '}
                <Box component="span" sx={{ color: '#0ffcbe', WebkitTextFillColor: '#0ffcbe' }}>IFS Cloud</Box>
              </Typography>
              <Typography variant="h6" sx={{ maxWidth: 900, mx: 'auto', mb: 4, fontSize: { xs: '1rem', md: '1.2rem' }, opacity: 0.95, lineHeight: 1.6 }}>
                IFS Cloud is the next-generation enterprise software platform that delivers exceptional experiences,
                asset productivity, and service agility for asset-intensive, project-driven, and service-focused industries.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                 <Button variant="contained" href="/resources/contact-us">
                        Contact us
                      </Button>
               
              </Box>
            </motion.div>
          </Container>
        </Box>
 
        {/* Stats Section */}
        <Container maxWidth="lg" sx={{ mt: 5, mb: 8, position: 'relative', zIndex: 10 }}>
          <Grid container spacing={1} justifyContent="center">
            {[
              { value: '98%', label: 'Customer Satisfaction', icon: <Star size={28} />, color: '#0ffcbe' },
              { value: '40%', label: 'Reduced Downtime', icon: <TrendingUp size={28} />, color: '#0ffcbe' },
              { value: '24/7', label: 'Global Support', icon: <Globe size={28} />, color: '#0ffcbe' }
            ].map((stat, idx) => (
              <Grid item xs={0} md={30} key={idx}>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}>
                  <Paper elevation={3} sx={{ borderRadius: 4, p: 3, textAlign: 'center', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(5px)' } }}>
                    <Box sx={{ color: stat.color, mb: 1 }}>{stat.icon}</Box>
                    <Typography variant="h3" sx={{ fontWeight: 1100, color: '#0B2B40' }}>{stat.value}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 900 }}>{stat.label}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
 
        {/* What is IFS Cloud Section */}
        <Container maxWidth="lg" sx={{ mb: 10 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={15} md={5}>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Chip label="Next-Generation Platform" sx={{ mb: 2, backgroundColor: '#0ffcbe',  fontWeight: 600, borderRadius: 2 }} />
                <Typography variant="h3" sx={{ fontWeight: 800, mb: 3, color: '#0B2B40', fontSize: { xs: '2rem', md: '2.5rem' } }}>
                  What Makes IFS Cloud Different?
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: '#ob2b40', lineHeight: 1.8 }}>
                  IFS Cloud represents a paradigm shift in enterprise software. Built on a composable architecture,
                  it combines the power of AI, IoT, and real-time analytics to deliver unparalleled agility and insight
                  for asset-intensive industries.
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {['Composable architecture for rapid innovation', 'AI-powered predictive maintenance', 'Mobile-first field service capabilities', 'Real-time IoT sensor integration'].map((feature, idx) => (
                    <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle2 size={20} color="#0ffcbe" />
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>{feature}</Typography>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={15} md={5}>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Paper elevation={2} sx={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)', borderRadius: 4, p: 5, position: 'relative', overflow: 'hidden' }}>
                  <Typography variant="h5" sx={{ color: '#0B2B40', fontWeight: 700, mb: 4 }}>The IFS Cloud Difference</Typography>
                  <Grid container spacing={3}>
                    {['Asset-Centric Approach', 'Service-First Mindset', 'Project-Driven Excellence', 'Composable Innovation'].map((item, idx) => (
                      <Grid item xs={12} sm={6} key={idx}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                          <Sparkles size={18} color="#0ffcbe" />
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>{item}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
 
        {/* Tabbed Layout Section */}
        <Box sx={{ backgroundColor: 'white', py: 8 }}>
          <Container maxWidth="lg">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '48px' }}>
              <Chip label="Explore Solutions" sx={{ mb: 2, backgroundColor: '#0ffcbe', color: '#0b2b4b', fontWeight: 700 }} />
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#0B2B40' }}>Everything You Need With IFS Cloud</Typography>
              <Typography variant="body1" sx={{ maxWidth: 700, mx: 'auto', color: '#4a5568' }}>Comprehensive solutions organized for easy navigation</Typography>
            </motion.div>
 
            <Tabs value={activeTab} onChange={handleTabChange} centered sx={{ mb: 5, borderBottom: '2px solid #0ffcbe', '& .MuiTab-root': { fontSize: '1rem', fontWeight: 600, textTransform: 'none', py: 2, px: 3 }, '& .Mui-selected': { color: '#0ffcbe' }, '& .MuiTabs-indicator': { backgroundColor: '#0ffcbe', height: 3 } }}>
              <Tab label="📌 Core Services" />
              <Tab label="🏭 Industries" />
              <Tab label="⚙️ Methodology" />
              <Tab label="✨ Key Benefits" />
            </Tabs>
 
         {/* Services Tab */}
<Box role="tabpanel" hidden={activeTab !== 0}>
  {activeTab === 0 && (
    <Grid container spacing={2} justifyContent="center">
      {offerings.map((item, i) => (
        <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Box
              sx={{
                textAlign: 'center',
                px: 3,
                py: 4,
                backgroundColor: '#fff',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 3,
                boxShadow: 3,
                maxWidth: 280,
              }}
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                style={{ marginBottom: 16 }}
              >
                <Box
                  sx={{
                    width: 70,
                    height: 70,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #0ffcbe 0%, #0ffcbe 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                  }}
                >
                  <Box sx={{ color: '#0b2b4b' }}>{item.icon}</Box>
                </Box>
              </motion.div>
              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#0B2B40' }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.75rem', lineHeight: 1.6, color: '#4a5568' }}>
                {item.text}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  )}
</Box>
 
            {/* Industries Tab */}
            <Box role="tabpanel" hidden={activeTab !== 1}>
              {activeTab === 1 && (
                <Grid container spacing={4}>
                  {industries.map((industry, idx) => (
                    <Grid item xs={12} sm={7} md={4} key={idx}>
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.1 }} whileHover={{ scale: 1.02 }}>
                        <Box sx={{ background: industry.bg, borderRadius: 1, p: 2, textAlign: 'center', color: 'white', cursor: 'pointer' }}>
                          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>{React.cloneElement(industry.icon, { size:65 })}</Box>
                          <Typography variant="h6" sx={{ fontWeight: 700 }}>{industry.name}</Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
 
           {/* Methodology Tab */}
<Box role="tabpanel" hidden={activeTab !== 2}>
  {activeTab === 2 && (
    <Grid container spacing={2} justifyContent="center">
      {endToEnd.map((item, i) => (
        <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Box
              sx={{
                textAlign: 'center',
                px: 3,
                py: 4,
                backgroundColor: '#fff',
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 3,
                boxShadow: 3,
                maxWidth: 250,
              }}
            >
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }} 
                transition={{ type: 'spring', stiffness: 200 }} 
                style={{ marginBottom: 16 }}
              >
                <Box sx={{ color: item.color }}>{item.icon}</Box>
              </motion.div>
              <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'text.secondary' }}>
                {item.text}
              </Typography>
            </Box>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  )}
</Box>
 
            {/* Benefits Tab */}
            <Box role="tabpanel" hidden={activeTab !== 3}>
              {activeTab === 3 && (
                <Grid container spacing={2}>
                  {benefits.map((benefit, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, p: 2, bgcolor: '#f8fafc', borderRadius: 2 }}>
                          <CheckCircle2 size={22} color="#0ffcbe" style={{ flexShrink: 0, marginTop: 2 }} />
                          <Typography variant="body2" sx={{ color: '#2d3748', lineHeight: 1.5, fontWeight: 500 }}>{benefit}</Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          </Container>
        </Box>
 
   {/* Why Choose Us */}
         <Box sx={{ py: 12, backgroundColor: '#f8fafc' }}>
    <Container maxWidth="lg">
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '28px' }}>
      <Chip label="Why Choose ONAS" sx={{ mb: 2, backgroundColor: '#0ffcbe', color: '#0b2b4b', fontWeight: 500 }} />
      <Typography variant="h4" sx={{ fontWeight: 1100, mb: 2, color: '#0B2B40' }}>Your Trusted IFS Cloud Partner</Typography>
    </motion.div>
    <Grid container spacing={2}>
      {valueDelivery.map((item, i) => (
        <Grid item xs={12} sm={4} md={4} key={i}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }}>
            <Paper elevation={2} sx={{ textAlign: 'center', p: 1, borderRadius: 3, transition: 'all 0.3s' }}>
              <Box sx={{ color: '#0ffcbe', mb: 2 }}>{item.icon}</Box>
              <Typography variant="h3" sx={{ fontWeight: 1100, color: '#0b2b4b', mb: 0.5, fontSize: '2rem' }}>{item.stat}</Typography>
              <Typography variant="body2" sx={{ fontWeight: 1100, mb: 1, color: '#0b2b4b' }}>{item.statLabel}</Typography>
              <Typography variant="caption" sx={{ color: '#4a5568', display: 'block' }}>{item.text}</Typography>
            </Paper>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  </Container>
        </Box>
 
        {/* Key Benefits Section */}
        <Box sx={{ py: 8, background: 'linear-gradient(130deg, #0B2B40 0%, #1A4D6B 100%)' }}>
          <Container maxWidth="-lg">
            <Grid container spacing={5} alignItems="center">
              <Grid item xs={12} md={5}>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <Typography variant="h1" sx={{ fontWeight: 1100, mb: 5, color: 'white', fontSize: { xs: '1.5rem', md: '1.5rem' } }}>
                    Unlock Business Value With IFS Cloud
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#e2e8f0', lineHeight: 1.5 }}>
                    Transform your asset-intensive operations with measurable results and tangible ROI
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={1} md={6}>
                <Grid container spacing={2}>
                  {benefits.slice(0, 10).map((benefit, idx) => (
                    <Grid item xs={6} sm={6} key={idx}>
                      <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.05 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
                          <CheckCircle2 size={10} color="#f7f7f3" style={{ marginTop: 2 }} />
                          <Typography variant="body2" sx={{ color: 'white', lineHeight: 1.5 }}>{benefit}</Typography>
                        </Box>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
 
     {/* CTA Section */}
<Box sx={{ py: 10, backgroundColor: 'white' }}>
  <Container maxWidth="md">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      whileInView={{ opacity: 1, scale: 1 }} 
      viewport={{ once: true }} 
      style={{ textAlign: 'center' }}
    >
      <Typography 
        variant="h3" 
        sx={{ 
          fontWeight: 800, 
          mb: 3, 
          color: '#0B2B40', 
          fontSize: { xs: '1.8rem', md: '2.5rem' } 
        }}
      >
        Ready to Transform Your Operations?
      </Typography>
      
      <Typography 
        variant="body1" 
        sx={{ 
          mb: 4, 
          color: '#0b2b4b', 
          maxWidth: 600, 
          mx: 'auto' 
        }}
      >
        Let's discuss how IFS Cloud can drive digital transformation for your asset-intensive business
      </Typography>
      
      {/* Updated button with navigation to contact us page */}
      <motion.button 
        whileHover={{ scale: 1.05 }} 
        whileTap={{ scale: 0.95 }} 
        onClick={() => window.location.href = '/resources/contact-us'}
        style={{ 
          padding: '16px 48px', 
          fontSize: '18px', 
          background: 'linear-gradient(135deg, #0ffcbe 0%, #0ffcbe 100%)', 
          color: '#0b2b4b', 
          border: 'none', 
          borderRadius: '50px', 
          cursor: 'pointer', 
          fontWeight: 700, 
          boxShadow: '0 4px 15px rgba(255,107,53,0.3)'
        }}
      >
        Get Started With IFS Cloud
      </motion.button>
    </motion.div>
  </Container>
</Box>
 
        {/* Footer */}
        <Box sx={{ backgroundColor: '#0b2b4b', py: 4 }}>
          <Container maxWidth="lg">
            <Typography variant="caption" sx={{ color: '#0ffcbe', display: 'block', textAlign: 'center' }}>
              IFS Cloud | Enterprise Asset Management | Field Service Management | AI-Powered ERP | Digital Transformation | Asset-Intensive Industries
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  );
};
 
export default IFSCloud;

 