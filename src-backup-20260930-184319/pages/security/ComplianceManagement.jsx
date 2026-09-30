import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  Chip,
  Alert,
  Breadcrumbs,
  Link as MuiLink
} from '@mui/material';
import {
  Policy,
  VerifiedUser,
  Assessment,
  Shield,
  ArrowForward,
  CheckCircle
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ComplianceManagement = () => {
  const frameworks = [
    { name: "ISO 27001", icon: <VerifiedUser /> },
    { name: "SOC 2", icon: <Assessment /> },
    { name: "NIST CSF", icon: <Shield /> },
    { name: "GDPR", icon: <Policy /> }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <MuiLink component={Link} to="/">Home</MuiLink>
        <MuiLink component={Link} to="/security">Security</MuiLink>
        <Typography>Compliance Management</Typography>
      </Breadcrumbs>

      <Box textAlign="center" mb={8}>
        <Policy sx={{ fontSize: 60, color: '#0B4C74' }} />
        <Typography variant="h2" fontWeight={700} color="#0B4C74">
          Compliance Management
        </Typography>
        <Typography variant="h5" color="text.secondary" my={3}>
          Audit-ready compliance with continuous monitoring
        </Typography>
        <Button variant="contained" endIcon={<ArrowForward />}>
          Get Compliance Assessment
        </Button>
      </Box>

      <Grid container spacing={4}>
        {frameworks.map((f, i) => (
          <Grid item xs={12} md={3} key={i}>
            <Card>
              <CardContent>
                <Box color="#0B4C74">{f.icon}</Box>
                <Typography variant="h6">{f.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Alert severity="warning" sx={{ mt: 6 }}>
        Stay ahead of upcoming regulatory changes
      </Alert>
    </Container>
  );
};

export default ComplianceManagement;