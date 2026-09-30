import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Alert,
  Breadcrumbs,
  Link as MuiLink
} from '@mui/material';
import {
  Security,
  NetworkCheck,
  Visibility,
  Cloud,
  Speed,
  VerifiedUser,
  CheckCircle,
  ArrowForward
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const NetworkSecurity= () => {
  const features = [
    {
      icon: <NetworkCheck />,
      title: "Advanced Firewall Protection",
      description: "Next-generation firewalls with intrusion prevention and threat intelligence"
    },
    {
      icon: <Security />,
      title: "Zero Trust Architecture",
      description: "Least-privilege access with micro-segmentation"
    },
    {
      icon: <Visibility />,
      title: "Network Traffic Analysis",
      description: "Real-time monitoring and anomaly detection"
    },
    {
      icon: <Cloud />,
      title: "Cloud Security",
      description: "CASB and cloud-native security controls"
    },
    {
      icon: <Speed />,
      title: "DDoS Mitigation",
      description: "Automatic traffic scrubbing and rate limiting"
    },
    {
      icon: <VerifiedUser />,
      title: "VPN & Remote Access",
      description: "Secure access with MFA and endpoint checks"
    }
  ];

  const solutions = [
    {
      category: "Infrastructure Security",
      items: [
        "Network segmentation",
        "Wireless security (WPA3)",
        "SD-WAN security",
        "DNS filtering"
      ]
    },
    {
      category: "Monitoring & Response",
      items: [
        "24/7 SOC",
        "NDR",
        "SIEM integration",
        "Threat hunting"
      ]
    },
    {
      category: "Compliance",
      items: [
        "PCI DSS",
        "NIST 800-53",
        "ISO 27001",
        "HIPAA"
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <MuiLink component={Link} to="/">Home</MuiLink>
        <MuiLink component={Link} to="/security">Security</MuiLink>
        <Typography>Network Security</Typography>
      </Breadcrumbs>

      <Box textAlign="center" mb={8}>
        <Security sx={{ fontSize: 60, color: '#0B4C74' }} />
        <Typography variant="h2" fontWeight={700} color="#0B4C74">
          Network Security Solutions
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ my: 3 }}>
          Protect your network from modern threats
        </Typography>
        <Button variant="contained" endIcon={<ArrowForward />}>
          Request Network Assessment
        </Button>
      </Box>

      <Grid container spacing={4} mb={8}>
        {features.map((f, i) => (
          <Grid item xs={12} md={6} lg={4} key={i}>
            <Card sx={{ height: '100%' }}>
              <CardContent textAlign="center">
                <Box color="#0B4C74">{f.icon}</Box>
                <Typography variant="h6" mt={2}>{f.title}</Typography>
                <Typography variant="body2">{f.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={4}>
        {solutions.map((s, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" color="#0B4C74">
                {s.category}
              </Typography>
              <List>
                {s.items.map((item, j) => (
                  <ListItem key={j}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Alert severity="info" sx={{ mt: 6 }}>
        24/7 Network Security Emergency Support Available
      </Alert>
    </Container>
  );
};

export default NetworkSecurity;