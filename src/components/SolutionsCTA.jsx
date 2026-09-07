import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const SolutionsCTA = ({ 
  title = "Talk to Our Experts",
  subtitle = "Book a one-on-one session with our experienced team at ONAS Global Services for personalized guidance on shaping your Tax Technology platform strategy.",
  buttonText = "Book a Demo",
  buttonLink = "/resources/contact-us/"
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#0B4C74',
        py: { xs: 4, md: 6 },
        mb: 5,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative circles */}
      <Box
        sx={{
          position: 'absolute',
          right: -50,
          top: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.05)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          left: -30,
          bottom: -30,
          width: 150,
          height: 150,
          borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.03)',
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{
            color: 'white',
            mb: 1,
            fontSize: { xs: '22px', md: '30px' },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'rgba(255,255,255,0.85)',
            mb: 3,
            fontSize: '16px',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          {subtitle}
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={RouterLink}
          to={buttonLink}
          sx={{
            bgcolor: 'white',
            color: '#0B4C74',
            fontWeight: 600,
            px: 5,
            py: 1.5,
            borderRadius: 20,
            '&:hover': {
              bgcolor: '#050505',
              transform: 'scale(1.02)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          {buttonText}
        </Button>
      </Container>
    </Box>
  );
};

export default SolutionsCTA;