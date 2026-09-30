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
  Alert,
  Link as MuiLink
} from '@mui/material';
import {
  VideoCameraFront,
  Mic,
  ScreenShare,
  Chat,
  Groups,
  Event,
  CheckCircle,
  ArrowForward
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const VirtualClassroom = () => {
  const classroomFeatures = [
    {
      title: "Live Video Classes",
      description: "HD video conferencing with low latency and stable connections.",
      tools: ["HD Video", "Multi-host", "Recording", "Low Latency"],
      icon: <VideoCameraFront />
    },
    {
      title: "Interactive Audio & Chat",
      description: "Real-time voice interaction and instant messaging.",
      tools: ["Mute Control", "Live Chat", "Raise Hand"],
      icon: <Mic />
    },
    {
      title: "Screen Sharing & Whiteboard",
      description: "Share screens, slides, and use collaborative whiteboards.",
      tools: ["Screen Share", "Whiteboard", "Annotations"],
      icon: <ScreenShare />
    },
    {
      title: "Classroom Management",
      description: "Manage participants, permissions, and sessions easily.",
      tools: ["Attendance", "Role Control", "Session Lock"],
      icon: <Groups />
    }
  ];

  const useCases = [
    "Online schools & universities",
    "Corporate training & onboarding",
    "Live workshops & webinars",
    "Coaching & tutoring sessions",
    "Hybrid classroom environments"
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
        <Typography color="text.primary">Virtual Classroom</Typography>
      </Breadcrumbs>

      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Event sx={{ fontSize: 60, color: '#0B4C74', mb: 2 }} />
        <Typography variant="h2" sx={{ fontWeight: 700, mb: 3, color: '#0B4C74' }}>
          Virtual Classroom Solutions
        </Typography>
        <Typography
          variant="h5"
          color="text.secondary"
          sx={{ maxWidth: 820, mx: 'auto', mb: 4 }}
        >
          Deliver real-time, interactive, and engaging online learning experiences
          with secure and scalable virtual classrooms.
        </Typography>
        <Button
          variant="contained"
          size="large"
          endIcon={<ArrowForward />}
          sx={{ bgcolor: '#0B4C74' }}
        >
          Launch Virtual Classes
        </Button>
      </Box>

      {/* Classroom Features */}
      <Box sx={{ mb: 8 }}>
        <Typography
          variant="h4"
          sx={{ mb: 4, textAlign: 'center', color: '#0B4C74' }}
        >
          Core Virtual Classroom Features
        </Typography>
        <Grid container spacing={4}>
          {classroomFeatures.map((feature, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card sx={{ height: '100%' }}>
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
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {feature.description}
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  {feature.tools.map((tool, i) => (
                    <Chip key={i} label={tool} size="small" sx={{ m: 0.5 }} />
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Use Cases */}
      <Box sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, height: '100%' }}>
              <Typography variant="h4" sx={{ mb: 3, color: '#0B4C74' }}>
                Use Cases
              </Typography>
              <List>
                {useCases.map((item, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <CheckCircle sx={{ color: '#0B4C74' }} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
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
              <Chat sx={{ fontSize: 60, color: '#0B4C74', mb: 2 }} />
              <Typography variant="h5" sx={{ mb: 2 }}>
                Secure & Scalable Live Learning
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Built with enterprise-grade security, real-time performance,
                and scalable infrastructure to support thousands of concurrent
                learners without interruptions.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      {/* Info Alert */}
      <Alert severity="info">
        Supports live classes, recorded sessions, attendance tracking,
        and future AI-powered moderation features.
      </Alert>
    </Container>
  );
};

export default VirtualClassroom;