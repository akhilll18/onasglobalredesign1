import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Divider,
  Paper,
  Breadcrumbs,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Link as MuiLink
} from '@mui/material';
import {
  Analytics,
  Insights,
  Timeline,
  Assessment,
  TrendingUp,
  School,
  ArrowForward,
  CheckCircle
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const EducationalAnalytics = () => {
  const analyticsServices = [
    {
      title: "Learning Performance Analytics",
      description:
        "Track student engagement, completion rates, and performance metrics in real time.",
      tools: ["Dashboards", "KPIs", "Completion Tracking", "Engagement Scores"],
      icon: <Analytics />
    },
    {
      title: "Predictive Learning Insights",
      description:
        "Use AI-driven models to predict learner success and dropout risks.",
      tools: ["AI Models", "Behavior Analysis", "Early Warnings"],
      icon: <Insights />
    },
    {
      title: "Progress & Outcome Tracking",
      description:
        "Measure progress across courses, modules, and certifications.",
      tools: ["Skill Mapping", "Milestones", "Certificates"],
      icon: <Timeline />
    },
    {
      title: "Institutional Reporting",
      description:
        "Generate detailed reports for instructors, admins, and stakeholders.",
      tools: ["Custom Reports", "Exports", "Compliance Metrics"],
      icon: <Assessment />
    }
  ];

  const benefits = [
    "Improved student retention",
    "Data-driven teaching decisions",
    "Personalized learning paths",
    "Early identification of learning gaps",
    "Institution-level performance insights"
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 4 }}>
        <MuiLink component={Link} to="/" color="inherit">
          Home
        </MuiLink>
        <MuiLink component={Link} to="/education" color="inherit">
          Education Technology
        </MuiLink>
        <Typography color="text.primary">Educational Analytics</Typography>
      </Breadcrumbs>

      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <TrendingUp sx={{ fontSize: 60, color: '#0B4C74', mb: 2 }} />
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: '#0B4C74' }}>
          Educational Analytics & Insights
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ maxWidth: 820, mx: 'auto', mb: 4 }}
        >
          Transform learning data into actionable insights that improve outcomes,
          engagement, and institutional performance.
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          sx={{ bgcolor: '#0B4C74' }}
        >
          Explore Analytics Solutions
        </Button>
      </Box>

      {/* Analytics Services */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h4"
          sx={{ mb: 4, textAlign: 'center', color: '#0B4C74' }}
        >
          Our Analytics Capabilities
        </Typography>
        <Grid container spacing={4}>
          {analyticsServices.map((service, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card sx={{ height: '100%', p: 2 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
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
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {service.description}
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  {service.tools.map((tool, i) => (
                    <Chip key={i} label={tool} size="small" sx={{ m: 0.5 }} />
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%' }}>
              <Typography
                variant="h4"
                sx={{ mb: 3, color: '#0B4C74' }}
              >
                Why Educational Analytics Matters
              </Typography>
              <List>
                {benefits.map((benefit, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#0B4C74' }} />
                    </ListItemIcon>
                    <ListItemText primary={benefit} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <School sx={{ fontSize: 60, color: '#0B4C74', mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2 }}>
                Built for Institutions & EdTech Platforms
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Our analytics solutions support schools, universities,
                corporate training platforms, and online education providers
                with scalable, secure, and actionable data insights.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default EducationalAnalytics;