import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
  Chip,
  Divider,
  Paper,
  Alert,
  Breadcrumbs,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link as MuiLink
} from '@mui/material';
import {
  MenuBook,
  Code,
  DeviceHub,
  Psychology,
  LibraryBooks,
  CheckCircle,
  ArrowForward
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ELearningPlatform = () => {
  const developmentServices = [
    {
      title: "Custom Platform Development",
      description: "Build from scratch or extend existing platforms with custom features",
      technologies: ["React", "Node.js", "Python/Django", "MongoDB", "AWS", "Azure"],
      icon: <Code />
    },
    {
      title: "Mobile Learning Apps",
      description: "Native and cross-platform mobile learning applications",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Offline Sync"],
      icon: <DeviceHub />
    },
    {
      title: "Gamification Engine",
      description: "Boost engagement with rewards, challenges, and leaderboards",
      technologies: ["Badges", "Points", "Leaderboards", "Progress Tracking"],
      icon: <Psychology />
    },
    {
      title: "Content Authoring Tools",
      description: "Create interactive courses without technical knowledge",
      technologies: ["Drag & Drop", "Templates", "Media Library", "Collaboration"],
      icon: <LibraryBooks />
    }
  ];

  const platformFeatures = [
    {
      category: "Interactive Content",
      items: [
        "Interactive videos",
        "Virtual labs & simulations",
        "Branching scenarios",
        "360° learning experiences"
      ]
    },
    {
      category: "Social Learning",
      items: [
        "Discussion forums",
        "Peer reviews",
        "Learning communities",
        "Mentorship programs"
      ]
    },
    {
      category: "Accessibility",
      items: [
        "WCAG 2.1 compliance",
        "Screen reader support",
        "Captions & transcripts",
        "Keyboard navigation"
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <MuiLink component={Link} to="/" color="inherit">Home</MuiLink>
        <MuiLink component={Link} to="/education" color="inherit">Education Technology</MuiLink>
        <Typography color="text.primary">E-Learning Platform Development</Typography>
      </Breadcrumbs>

      {/* Hero */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <MenuBook sx={{ fontSize: 60, color: '#0B4C74', mb: 2 }} />
        <Typography variant="h2" sx={{ mb: 3, fontWeight: 700, color: '#0B4C74' }}>
          Custom E-Learning Platform Development
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
          Build scalable, engaging, and personalized learning platforms tailored to your business
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          sx={{ bgcolor: '#0B4C74' }}
        >
          Start Your Project
        </Button>
      </Box>

      {/* Services */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: '#0B4C74' }}>
          Our Development Services
        </Typography>
        <Grid container spacing={4}>
          {developmentServices.map((service, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                <Box sx={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  bgcolor: '#E8F4FD',
                  color: '#0B4C74',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 3
                }}>
                  {service.icon}
                </Box>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {service.description}
                </Typography>
                <Divider sx={{ mb: 2 }} />
                {service.technologies.map((tech, i) => (
                  <Chip key={i} label={tech} size="small" sx={{ m: 0.5 }} />
                ))}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Platform Features */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ mb: 4, color: '#0B4C74' }}>
          Advanced Platform Features
        </Typography>
        <Grid container spacing={4}>
          {platformFeatures.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper sx={{ p: 3, height: '100%' }}>
                <Typography variant="h5" sx={{ mb: 2, color: '#0B4C74' }}>
                  {feature.category}
                </Typography>
                <List>
                  {feature.items.map((item, i) => (
                    <ListItem key={i}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: '#0B4C74' }} />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Success Alert */}
      <Alert severity="success">
        Successfully delivered e-learning platforms serving 50,000+ learners globally.
      </Alert>
    </Container>
  );
};

export default ELearningPlatform;