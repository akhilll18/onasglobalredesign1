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
  Breadcrumbs,
  Link as MuiLink
} from '@mui/material';
import { Lock, ArrowForward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const DataProtection = () => {
  const pillars = [
    {
      title: "Data Discovery & Classification",
      capabilities: ["PII Detection", "Risk Scoring", "Inventory"]
    },
    {
      title: "Encryption & Tokenization",
      capabilities: ["AES-256", "HSM", "Key Management"]
    },
    {
      title: "Access Governance",
      capabilities: ["RBAC", "PAM", "Monitoring"]
    },
    {
      title: "Privacy Compliance",
      capabilities: ["GDPR", "CCPA", "Consent"]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <MuiLink component={Link} to="/">Home</MuiLink>
        <MuiLink component={Link} to="/security">Security</MuiLink>
        <Typography>Data Protection</Typography>
      </Breadcrumbs>

      <Box textAlign="center" mb={8}>
        <Lock sx={{ fontSize: 60, color: '#0B4C74' }} />
        <Typography variant="h2" fontWeight={700} color="#0B4C74">
          Data Protection & Privacy
        </Typography>
        <Typography variant="h5" color="text.secondary" my={3}>
          Secure sensitive data across its entire lifecycle
        </Typography>
        <Button variant="contained" endIcon={<ArrowForward />}>
          Schedule Data Assessment
        </Button>
      </Box>

      <Grid container spacing={4}>
        {pillars.map((p, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Card sx={{ p: 3 }}>
              <Typography variant="h5" color="#0B4C74">
                {p.title}
              </Typography>
              <Divider sx={{ my: 2 }} />
              {p.capabilities.map((c, j) => (
                <Chip key={j} label={c} sx={{ mr: 1, mb: 1 }} />
              ))}
            </Card>
          </Grid>
        ))}
      </Grid>

      <Paper sx={{ p: 4, mt: 6 }}>
        <Typography variant="h6">
          Global Privacy Compliance Support
        </Typography>
      </Paper>
    </Container>
  );
};

export default DataProtection;