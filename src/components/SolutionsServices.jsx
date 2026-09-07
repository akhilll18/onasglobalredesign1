// src/components/SolutionsServices.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const defaultServices = [
  {
    title: 'DRR',
    description: 'ONAS Global provides comprehensive Digital Reporting Requirements solutions for tax compliance and reporting across multiple jurisdictions.',
    path: '/solutions/drr/drr',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop',
  },
  {
    title: 'e-Reporting',
    description: 'Simplify electronic reporting and improve tax compliance with automated reporting workflows.',
    path: '/solutions/reporting',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapZ79NLBkOACgGzv90z2QbkyuhRoSEFkiE9qPt1ETgw&s',
  },
  {
    title: 'e-Invoicing',
    description: 'Simplify invoicing with support for diverse standards, periodic reporting and real-time compliance.',
    path: '/solutions/drr/e-invoicing',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
  },
  {
    title: 'SAF-T',
    description: 'Standard Audit File for Tax solutions for detailed transactional data reporting.',
    path: '/solutions/reporting/saf-t',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=200&fit=crop',
  },
  {
    title: 'Invoice Reporting',
    description: 'Support invoice reporting requirements across multiple countries and jurisdictions.',
    path: '/solutions/drr/invoice-reporting',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
  },
];

const SolutionsServices = ({ 
  services = defaultServices,
  title = "Our Solutions", 
  subtitle = "A comprehensive suite for e-Documents, VAT Reports and Reconciliation" 
}) => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#f8f9fa', py: { xs: 2, sm: 3, md: 4 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between', 
          alignItems: { xs: 'flex-start', sm: 'center' }, 
          mb: { xs: 2, sm: 3, md: 4 },
          gap: { xs: 1, sm: 0 }
        }}>
          <Box>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{
                color: '#0B4C74',
                fontSize: { xs: '20px', sm: '24px', md: '32px' },
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', mt: 0.5, fontSize: { xs: '12px', sm: '13px', md: '14px' } }}>
              {subtitle}
            </Typography>
          </Box>
          <Button
            component={RouterLink}
            to="/solutions/drr/e-invoicing"
            endIcon={<ArrowForwardIcon />}
            sx={{
              color: '#2E8BC0',
              fontWeight: 600,
              textTransform: 'none',
              fontSize: { xs: '13px', sm: '14px', md: '15px' },
              p: 0,
              '&:hover': { bgcolor: 'black' },
            }}
          >
            Explore More 
          </Button>
        </Box>

        {/* Services Cards with Images */}
        <Grid container spacing={{ xs: 1.5, sm: 2, md: 1 }} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={6} sm={4} md={12/5} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ width: '100%', height: '100%' }}
              >
                <Card
                  sx={{
                    width: '100%',
                    maxWidth: { xs: '100%', sm: '100%', md: '200px' },
                    height: { xs: 260, sm: 270, md: 250 },
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    '&:hover': {
                      boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
                      transform: 'translateY(-6px)',
                    },
                  }}
                  component={RouterLink}
                  to={service.path}
                  style={{ textDecoration: 'none' }}
                >
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.title}
                    sx={{
                      height: { xs: 140, sm: 150, md: 125 },
                      objectFit: 'cover',
                      flexShrink: 0,
                    }}
                  />
                  <CardContent sx={{ 
                    textAlign: 'center', 
                    p: { xs: 1.5, sm: 2, md: 2 },
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                    <Typography
                      variant="h6"
                      fontWeight={700}
                      sx={{
                        color: '#0B4C74',
                        mb: 0.5,
                        fontSize: { xs: '13px', sm: '14px', md: '15px' },
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#666', 
                        lineHeight: 1.3, 
                        fontSize: { xs: '10px', sm: '11px', md: '12px' },
                        display: '-webkit-box',
                        WebkitLineClamp: { xs: 2, sm: 2, md: 2 },
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SolutionsServices;