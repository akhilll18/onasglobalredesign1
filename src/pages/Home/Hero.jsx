import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import BackgroundSection from './BackgroundSection';
import { Link as RouterLink } from 'react-router-dom';

// ==================== ANIMATED TEXT ROLLER (VERTICAL SLIDING - SMALL) ====================
const AnimatedTextRoller = ({ items, color = '#0FFCBE' }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <Box sx={{ overflow: 'hidden', height: '1.5rem' }}>
      <Box
        sx={{
          transition: 'transform 0.7s ease-in-out',
          transform: `translateY(-${index * 1.5}rem)`,
        }}
      >
        {items.map((item, i) => (
          <Typography
            key={i}
            sx={{
              height: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.8rem' },
              fontWeight: 500,
              color: color,
              whiteSpace: 'nowrap',
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

// ==================== SERVICE SECTION COMPONENT ====================
const ServiceSection = ({ title, data, titleColor, borderColor, delayOffset = 0 }) => {
  return (
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <Typography
        variant="subtitle2"
        sx={{
          color: '#fff',
          fontWeight: 600,
          mb: 2,
          letterSpacing: '0.5px',
          borderLeft: `3px solid ${borderColor}`,
          pl: 1.5,
          fontSize: '0.75rem',
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {data.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 + delayOffset }}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px',
            }}
          >
            {/* Category Label */}
            <Typography
              sx={{
                fontWeight: 500,
                color: titleColor,
                fontSize: { xs: '0.7rem', sm: '0.75rem', md: '0.75rem' },
                letterSpacing: '0.3px',
                minWidth: '110px',
              }}
            >
              {service.label}
            </Typography>

            {/* Arrow → */}
            <Typography
              sx={{
                fontSize: '0.9rem',
                color: service.color,
                fontWeight: 600,
              }}
            >
              →
            </Typography>

            {/* Animated Text Roller */}
            <AnimatedTextRoller items={service.items} color={service.color} />
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

// ==================== MAIN HERO COMPONENT ====================
const Hero = forwardRef((props, ref) => {
  const slides = props.slides || [];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Service data with all items
  const serviceData = [
    {
      label: 'AI ERP & CRM',
      items: ['SAP', 'Oracle', 'Netsuite', 'Workday', 'MS Dynamic 365', 'IFS', 'Salesforce', 'Service Now'],
      color: '#0FFCBE',
    },
    {
      label: 'DIGITAL TRANSFORMATION',
      items: ['AI & ML', 'Cloud Migration', 'Data Engineering', 'IoT', 'Product Engineering', 'Testing', 'GRC', 'IT Asset', 'GenAI'],
      color: '#0FFCBE',
    },
    {
      label: 'MANAGED IT',
      items: ['App Maintenance', 'Cloud Support', 'Cybersecurity', 'IT Infrastructure', 'Network Support', '24x7 Helpdesk'],
      color: '#0FFCBE',
    },
    {
      label: 'JAVA & SEO',
      items: ['Web Design', 'SEO', 'SMM', 'Content Marketing', 'Email Marketing', 'PPC'],
      color: '#0FFCBE',
    },
  ];

  const staffingData = [
    {
      label: 'IT CONSULTING',
      items: ['Banking & Finance', 'HR & Support', 'Legal & Compliance', 'Pharma & Healthcare', 'Sales & Trade', 'Wholesale & Retail'],
      color: '#0FFCBE',
    },
    {
      label: 'PROFESSIONAL SERVICES',
      items: ['Staff Augmentation', 'Contract Staffing', 'Executive Placement', 'Remote Staffing', 'Offshore Staffing', 'RPO', 'BPO'],
      color: '#0FFCBE',
    },
    {
      label: 'EDTECH SERVICES',
      items: ['EdTech Solutions'],
      color: '#0FFCBE',
    },
  ];

  useEffect(() => {
    let timer;
    if (slides.length > 0) {
      timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [currentSlide, slides]);

  useImperativeHandle(ref, () => ({
    setSlide: (index) => {
      if (index >= 0 && index < slides.length) {
        setCurrentSlide(index);
      }
    },
  }));

  return (
    <BackgroundSection
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 4, md: 6 },
        fontFamily: 'sans-serif',
      }}
    >
      {/* BACKGROUND VIDEO */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(11,76,116,0.88), rgba(0,0,0,0.75))',
          },
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          <source src="/videos/BG.mp4" type="video/mp4" />
        </video>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Coming Soon Badge */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: -15, md: -31 },
              right: { xs: 0, md: 0 },
              transform: 'rotate(5deg)',
              zIndex: 10,
            }}
          >
            <Box
              sx={{
                background: '#0B4C74',
                px: 2,
                py: 0.5,
                borderRadius: 1.5,
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                border: '1px solid #0FFCBE',
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: '#0FFCBE',
                  fontWeight: 700,
                  fontSize: '0.65rem',
                }}
              >
                🚀 Coming Soon <b style={{ color: '#FFEB3B' }}>Foyerbasic.com</b> From onas.
              </Typography>
            </Box>
          </Box>

          {/* Hero Heading with Highlighted Text - Using #0FFCBE */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '1.6rem', sm: '1.8rem', md: '2.2rem' },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 0.5,
              textShadow: '0 2px 8px rgba(0,0,0,0.4)',
            }}
          >
            <span style={{ color: '#fff' }}>Tailored IT Solutions With </span>
            <span style={{ color: '#0FFCBE' }}>Product-Led</span>
            <span style={{ color: '#fff' }}> Innovation & </span>
            <span style={{ color: '#0FFCBE' }}>AI Excellence</span>
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: '#0FFCBE',
              maxWidth: 600,
              mb: 3,
              fontSize: '0.8rem',
              lineHeight: 1.4,
            }}
          >
            Driving innovation through AI solutions, exceptional talent,
            and transformative technologies that shape tomorrow's digital landscape.
          </Typography>

          {/* Sections Side by Side */}
          <Grid container spacing={4} sx={{ mt: 1, mb: 4 }}>
            <Grid item xs={12} md={6}>
              <ServiceSection
                title="IT Services"
                data={serviceData}
                titleColor="#fff"
                borderColor="#0FFCBE"
                delayOffset={0}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <ServiceSection
                title="Staffing & EdTech Solutions"
                data={staffingData}
                titleColor="#ffffff"
                borderColor="#0FFCBE"
                delayOffset={0.2}
              />
            </Grid>
          </Grid>

          {/* Buttons */}
          <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 4 }}>
            <Button
              size="small"
              variant="contained"
              component={RouterLink}
              to="/#explore-us"
              sx={{
                bgcolor: '#0B4C74',
                fontSize: '0.7rem',
                py: 0.5,
                px: 2,
                border: '1px solid #0FFCBE',
                '&:hover': {
                  bgcolor: '#0FFCBE',
                  color: '#0B4C74',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Explore Services
            </Button>
            <Button
              size="small"
              variant="outlined"
              component={RouterLink}
              to="/resources/contact-us/"
              sx={{
                color: '#0FFCBE',
                borderColor: '#0FFCBE',
                fontSize: '0.7rem',
                py: 0.5,
                px: 2,
                '&:hover': {
                  bgcolor: 'rgba(15, 252, 190, 0.1)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Consult Us
            </Button>
          </Box>

          {/* Advertisement Box */}
          <Box
            sx={{
              mt: 2,
              p: 2,
              maxWidth: 450,
              background: 'rgba(11,76,116,0.95)',
              borderRadius: 2,
              border: '1px solid #0FFCBE',
              boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
            }}
          >
            <Typography variant="caption" sx={{ color: '#0FFCBE', fontWeight: 700, display: 'block', mb: 0.5, fontSize: '0.65rem' }}>
              ✨ Revolutionizing E-commerce
            </Typography>
            <Typography variant="caption" sx={{ color: '#fff', display: 'block', mb: 1, fontSize: '0.65rem', lineHeight: 1.3 }}>
              Get ready for Foyerbasic.com — built with cutting-edge AI and seamless UX.
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1 }}>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {['#0B4C74', '#0FFCBE', '#FFFFFF'].map((color, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: color,
                      border: '0.5px solid rgba(255,255,255,0.3)',
                    }}
                  />
                ))}
              </Box>
              <Typography variant="caption" sx={{ color: '#0FFCBE', fontWeight: 500, fontSize: '0.55rem' }}>
                Powered by ONAS
              </Typography>
              <Button
                size="small"
                variant="contained"
                sx={{
                  bgcolor: '#0FFCBE',
                  color: '#0B4C74',
                  fontWeight: 600,
                  fontSize: '0.6rem',
                  py: 0.25,
                  px: 1.5,
                  minWidth: 'auto',
                  '&:hover': { bgcolor: '#0FFCBE', opacity: 0.9 },
                }}
                onClick={() => alert('Join our waitlist for Foyerbasic.com!')}
              >
                Notify Me
              </Button>
            </Box>
          </Box>

          {/* Slide Indicators */}
          {slides.length > 0 && (
            <Box sx={{ mt: 3, display: 'flex', gap: 0.75 }}>
              {slides.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    cursor: 'pointer',
                    bgcolor: currentSlide === index ? '#0FFCBE' : 'rgba(255,255,255,0.3)',
                  }}
                />
              ))}
            </Box>
          )}
        </motion.div>
      </Container>
    </BackgroundSection>
  );
});

export default Hero;