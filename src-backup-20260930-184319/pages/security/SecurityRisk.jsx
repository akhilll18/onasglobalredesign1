import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Alert,
  Breadcrumbs,
  Link as MuiLink
} from '@mui/material';
import {
  Security,
  Visibility,
  Analytics,
  PriorityHigh,
  Assessment,
  ArrowForward
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const SecurityRisk = () => {

  const features = [
    {
      icon: <Visibility />,
      title: "Continuous Monitoring",
      description:
        "AI tools constantly scan environments to identify new devices, users, and applications, maintaining an up-to-date asset inventory without manual intervention."
    },
    {
      icon: <Analytics />,
      title: "Predictive Analysis",
      description:
        "By analyzing large volumes of historical data, AI predicts where vulnerabilities are most likely to be exploited, enabling proactive remediation."
    },
    {
      icon: <PriorityHigh />,
      title: "Automated Vulnerability Prioritization",
      description:
        "AI correlates vulnerabilities with real-world threat intelligence to determine which risks are actively targeted, helping teams focus on critical issues first."
    },
    {
      icon: <Assessment />,
      title: "Contextual Risk Scoring",
      description:
        "AI assigns dynamic risk scores based on asset exposure, business value, and current threat landscape, providing real-time visibility into risk posture."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>

      <Breadcrumbs sx={{ mb: 4 }}>
        <MuiLink component={Link} to="/">Home</MuiLink>
        <MuiLink component={Link} to="/security">Security</MuiLink>
        <Typography>Security Risk</Typography>
      </Breadcrumbs>

      <Box textAlign="center" mb={8}>
        <Security sx={{ fontSize: 60, color: '#0B4C74' }} />
        <Typography variant="h2" fontWeight={700} color="#0B4C74">
          AI in Security Risk Assessment
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ my: 3 }}>
          Transforming risk management from manual reviews to intelligent, predictive protection
        </Typography>
        <Button variant="contained" endIcon={<ArrowForward />}>
          Request Risk Assessment
        </Button>
      </Box>

      <Grid container spacing={4} mb={8}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Box color="#0B4C74">
                  {feature.icon}
                </Box>
                <Typography variant="h6" mt={2}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Alert severity="info">
        AI-driven risk assessment enables continuous, dynamic, and predictive security posture management.
      </Alert>

    </Container>
  );
};

export default SecurityRisk;