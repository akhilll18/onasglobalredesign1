import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Switch,
  Slide,
  useMediaQuery,
  useTheme
} from '@mui/material';

import {
  Close,
  Settings,
  PrivacyTip,
  Cookie,
  AdsClick,
  Analytics,
  CheckCircle,
  Block
} from '@mui/icons-material';

const PrivacyConsentBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const [cookies, setCookies] = useState({
    necessary: { enabled: true, required: true, label: 'Necessary', description: 'Basic site functionality' },
    preferences: { enabled: false, required: false, label: 'Preferences', description: 'Settings and preferences' },
    analytics: { enabled: false, required: false, label: 'Analytics', description: 'Website improvement' },
    marketing: { enabled: false, required: false, label: 'Marketing', description: 'Relevant ads' },
    social: { enabled: false, required: false, label: 'Social Media', description: 'Sharing features' }
  });

  useEffect(() => {
    const consentGiven = localStorage.getItem('privacyConsent');
    if (!consentGiven) {
      setTimeout(() => setOpen(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const updated = { ...cookies };
    Object.keys(updated).forEach(key => (updated[key].enabled = true));
    setCookies(updated);
    localStorage.setItem('privacyConsent', JSON.stringify(updated));
    setOpen(false);
  };

  const handleDisableAll = () => {
    const updated = { ...cookies };
    Object.keys(updated).forEach(key => {
      if (!updated[key].required) updated[key].enabled = false;
    });
    setCookies(updated);
    localStorage.setItem('privacyConsent', JSON.stringify(updated));
    setOpen(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('privacyConsent', JSON.stringify(cookies));
    setOpenSettings(false);
    setOpen(false);
  };

  const handleCookieToggle = (type) => {
    if (cookies[type].required) return;
    setCookies({
      ...cookies,
      [type]: { ...cookies[type], enabled: !cookies[type].enabled }
    });
  };

  const getCookieIcon = (type) => {
    switch (type) {
      case 'necessary': return <PrivacyTip fontSize="small" />;
      case 'preferences': return <Settings fontSize="small" />;
      case 'analytics': return <Analytics fontSize="small" />;
      case 'marketing': return <AdsClick fontSize="small" />;
      default: return <Cookie fontSize="small" />;
    }
  };

  return (
    <>
      {/* Settings Dialog */}
      <Dialog open={openSettings} onClose={() => setOpenSettings(false)} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ bgcolor: '#0B4C74', color: '#fff', py: 2, fontSize: 'body1.fontSize' }}>
          Privacy Settings
        </DialogTitle>

        <DialogContent sx={{ pt: 3 }}>
          <DialogContentText sx={{ mb: 3, fontSize: '0.875rem' }}>
            Manage your consent preferences. You can change these settings anytime.
          </DialogContentText>

          <List>
            {Object.entries(cookies).map(([key, cookie]) => (
              <ListItem key={key} sx={{ py: 1.5 }}>
                {getCookieIcon(key)}
                <ListItemText
                  primary={cookie.label}
                  secondary={cookie.description}
                  primaryTypographyProps={{ fontSize: '0.9rem', fontWeight: 500 }}
                  secondaryTypographyProps={{ fontSize: '0.8rem' }}
                  sx={{ ml: 2 }}
                />
                <Switch
                  size="small"
                  checked={cookie.enabled}
                  disabled={cookie.required}
                  onChange={() => handleCookieToggle(key)}
                />
              </ListItem>
            ))}
          </List>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button
            onClick={handleSaveSettings}
            variant="contained"
            size="small"
            sx={{ fontSize: '0.875rem' }}
          >
            Save Preferences
          </Button>
        </DialogActions>
      </Dialog>

      {/* Consent Banner */}
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Paper
          elevation={20}
          sx={{
            position: 'fixed',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            width: isMobile ? '100%' : '50%',
            maxWidth: isMobile ? '100%' : 720,
            p: { xs: 2, sm: 3 },
            borderRadius: isMobile ? 0 : 2,
            borderTop: isMobile ? '2px solid #0B4C74' : 'none'
          }}
        >
          <Container disableGutters>
            <Box display="flex" flexDirection="column" gap={2.5}>
              {/* Buttons */}
              <Box
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                gap={1.5}
                justifyContent="flex-end"
                flexWrap="wrap"
              >
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Settings fontSize="small" />}
                  onClick={() => setOpenSettings(true)}
                  sx={{ fontSize: '0.8rem' }}
                >
                  Settings
                </Button>

                <Button
                  variant="outlined"
                  size="small"
                  color="error"
                  startIcon={<Block fontSize="small" />}
                  onClick={handleDisableAll}
                  sx={{ fontSize: '0.8rem' }}
                >
                  Disable All
                </Button>

                <Button
                  variant="contained"
                  size="small"
                  startIcon={<CheckCircle fontSize="small" />}
                  onClick={handleAcceptAll}
                  sx={{
                    fontSize: '0.8rem',
                    bgcolor: '#0B4C74',
                    '&:hover': { bgcolor: '#083A5A' }
                  }}
                >
                  Accept All
                </Button>
              </Box>

              {/* Content */}
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    mb: 1,
                    color: '#0B4C74',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: '0.95rem'
                  }}
                >
                  <PrivacyTip fontSize="small" />
                  We Value Your Privacy
                </Typography>

                <Typography variant="body2" sx={{
                  color: 'text.secondary',
                  lineHeight: 1.5,
                  fontSize: '0.8rem'
                }}>
                  By clicking <strong>"Accept All"</strong> you consent to cookies and technologies as described in our{' '}
                  <Link
                    href="/privacy-policy"
                    sx={{
                      color: '#0B4C74',
                      fontWeight: 600,
                      textDecoration: 'none',
                      fontSize: 'inherit',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    Privacy Policy
                  </Link>
                  {' '}for enhanced experience, personalized content, and website analytics.
                </Typography>
              </Box>
            </Box>

            {/* Close Button */}
            <IconButton
              onClick={() => setOpen(false)}
              size="small"
              sx={{ position: 'absolute', top: 8, right: 8 }}
            >
              <Close fontSize="small" />
            </IconButton>
          </Container>
        </Paper>
      </Slide>
    </>
  );
};

export default PrivacyConsentBanner;