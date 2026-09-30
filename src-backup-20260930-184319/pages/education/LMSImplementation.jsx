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
  Chip,
  Divider,
  Alert,
  Breadcrumbs,
  Link as MuiLink,
  Tabs,
  Tab
} from '@mui/material';
import {
  School,
  MenuBook,
  Assessment,
  Group,
  Dashboard,
  CheckCircle,
  ArrowForward
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const LMSImplementation = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const features = [
    {
      icon: <MenuBook />,
      title: "Course Management",
      description: "Create, organize, and manage courses with intuitive content authoring tools",
      capabilities: ["SCORM compliance", "Content sequencing", "Version control", "Bulk operations"]
    },
    {
      icon: <Assessment />,
      title: "Assessment Engine",
      description: "Comprehensive testing and evaluation with automated grading",
      capabilities: ["Question banks", "Randomized tests", "Plagiarism detection", "Rubric grading"]
    },
    {
      icon: <Group />,
      title: "User Management",
      description: "Flexible user roles, permissions, and organizational hierarchies",
      capabilities: ["Single Sign-On", "Role-based access", "Batch enrollment", "Self-registration"]
    },
    {
      icon: <Dashboard />,
      title: "Reporting Dashboard",
      description: "Real-time analytics and customizable reporting for administrators",
      capabilities: ["Completion tracking", "Engagement metrics", "Custom reports", "Export capabilities"]
    }
  ];

  const implementationPhases = [
    {
      phase: "Discovery & Planning",
      duration: "2-3 Weeks",
      deliverables: ["Requirements document", "Project plan", "Stakeholder alignment"],
      color: "#0B4C74"
    },
    {
      phase: "Configuration & Customization",
      duration: "3-4 Weeks",
      deliverables: ["System configuration", "Brand customization", "Integration setup"],
      color: "#1976d2"
    },
    {
      phase: "Content Migration",
      duration: "4-6 Weeks",
      deliverables: ["Content strategy", "Data migration", "Quality assurance"],
      color: "#2e7d32"
    },
    {
      phase: "Training & Deployment",
      duration: "2-3 Weeks",
      deliverables: ["Admin training", "User adoption plan", "Go-live support"],
      color: "#ed6c02"
    },
    {
      phase: "Optimization & Support",
      duration: "Ongoing",
      deliverables: ["Performance monitoring", "Continuous improvement", "Technical support"],
      color: "#7b1fa2"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Breadcrumbs sx={{ mb: 4 }}>
        <MuiLink component={Link} to="/" color="inherit">Home</MuiLink>
        <MuiLink component={Link} to="/education" color="inherit">Education Technology</MuiLink>
        <Typography color="text.primary">LMS Implementation</Typography>
      </Breadcrumbs>

      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <School sx={{ fontSize: 60, color: '#0B4C74', mb: 2 }} />
        <Typography variant="h2" sx={{ mb: 3, color: '#0B4C74', fontWeight: 700 }}>
          Learning Management System Implementation
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
          Comprehensive LMS solutions that transform how organizations deliver, track, and manage training
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          sx={{ bgcolor: '#0B4C74', '&:hover': { bgcolor: '#083A5A' } }}
        >
          Schedule Discovery Call
        </Button>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ mb: 3, color: '#0B4C74' }}>
          LMS Solutions for Every Need
        </Typography>

        <Tabs
          value={tabValue}
          onChange={(e, newValue) => setTabValue(newValue)}
          sx={{ mb: 4 }}
        >
          <Tab label="Corporate Training" />
          <Tab label="Higher Education" />
          <Tab label="K-12 Schools" />
          <Tab label="Extended Enterprise" />
        </Tabs>

        <Paper sx={{ p: 4 }}>
          {tabValue === 0 && (
            <>
              <Typography variant="h5" sx={{ mb: 2, color: '#0B4C74' }}>
                Corporate LMS Solutions
              </Typography>
              <Typography sx={{ mb: 3 }}>
                Designed for employee training, compliance, and professional development.
              </Typography>
              <Grid container spacing={2}>
                {["Compliance tracking", "HRIS integration", "Mobile learning", "Multi-tenant"].map((item, i) => (
                  <Grid item key={i}>
                    <Chip label={item} />
                  </Grid>
                ))}
              </Grid>
            </>
          )}
        </Paper>
      </Box>

      <Box sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {features.map((f, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{f.title}</Typography>
                  <Typography sx={{ mb: 2 }}>{f.description}</Typography>
                  <Divider sx={{ mb: 2 }} />
                  {f.capabilities.map((c, idx) => (
                    <Chip key={idx} label={c} sx={{ mr: 1, mb: 1 }} />
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Alert severity="info">
        LMS integrates with HR systems, video conferencing, CRM, payment gateways, and SSO.
      </Alert>
    </Container>
  );
};

export default LMSImplementation;