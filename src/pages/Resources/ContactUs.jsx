import React, { useState, useRef } from 'react';
import { Box, Typography, TextField, Button, MenuItem, Snackbar, Alert, CircularProgress } from '@mui/material';
import emailjs from '@emailjs/browser';

const services = ['ERP','Consulting', 'Staffing', 'Digital Transformation', 'Software Development','JAVA Technologies','SEO','Other'];
const offices = [
  {
    name: 'Hyderabad Office',
    company: 'ONASTech Global Services Pvt Ltd',
    address: 'Vasavi Sky City, 8th Floor, Gachibowli Cir, Telecom Nagar, Gachibowli, Hyderabad, Telangana 500032',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.437211628847!2d78.36212117369062!3d17.438775801325626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ee44e40b52cf5e7%3A0xcb5f6c9932fd733e!2sONAS%20Consulting%20Services!5e0!3m2!1sen!2sus!4v1759363285471!5m2!1sen!2sus'
  },
  {
    name: 'Chennai Office',
    company: 'ONASTech Global Services Pvt Ltd',
    address: 'GREETA TOWERS, Industrial Estate, 1st Floor, Thirumalai Nagar, Perungudi, Chennai, TN, India – 600096',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7776.57706122955!2d80.24336!3d12.95338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d1ad4ff789f%3A0xc9efd3550dfc21c2!2s4th%20St%2C%20Manikkodi%20Srinivasan%20Nagar%2C%20Perungudi%2C%20Chennai%2C%20Tamil%20Nadu%20600096!5e0!3m2!1sen!2sin!4v1759363488370!5m2!1sen!2sin'
  },
  {
    name: 'USA Office',
    company: 'ONAS Global Services LLC',
    address: '701 Tillery Street Unit 12 #3338, Austin, TX 78702',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.9999999999995!2d-97.7430607!3d30.2649176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5bcecd5a2b1%3A0xabcdef123456!2s701%20Tillery%20St%2C%20Austin%2C%20TX%2078702!5e0!3m2!1sen!2sus!4v1695977104321!5m2!1sen!2sus'
  }
];

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_z6cwp83';
const EMAILJS_ADMIN_TEMPLATE_ID = 'template_airu3dh';
const EMAILJS_USER_TEMPLATE_ID = 'template_17ujefq';
const EMAILJS_PUBLIC_KEY = 'SP7FmVESGAZ0wXGhK';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.company.trim()) newErrors.company = 'Required';
    if (!formData.service) newErrors.service = 'Required';
    if (!formData.message.trim()) newErrors.message = 'Required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setLoading(true);

      try {
        const dateTime = new Date();
        const date = dateTime.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        const time = dateTime.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit'
        });

        const fullName = `${formData.firstName} ${formData.lastName}`;

        // Template parameters for ADMIN email
        const adminParams = {
          to_email: 'sales@onasglobal.com',
          from_name: fullName,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company,
          service: formData.service,
          message: formData.message,
          date: date,
          time: time,
        };

        // Template parameters for USER confirmation email
        const userParams = {
          to_email: formData.email,
          to_name: fullName,
          from_name: 'ONAS Global Services',
          company: formData.company,
          service: formData.service,
          date: date,
        };

        console.log('Sending email...');
        
        // Initialize EmailJS
        emailjs.init(EMAILJS_PUBLIC_KEY);

        // Send admin email
        const adminResult = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_ADMIN_TEMPLATE_ID,
          adminParams
        );

        console.log('Admin email result:', adminResult);

      
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_USER_TEMPLATE_ID,
          userParams
        ).then(result => {
          console.log('User email result:', result);
        }).catch(err => {
          console.log('User email error (non-critical):', err);
        });

       
        setSnackbar({
          open: true,
          message: '✓ Thank you! Your message has been sent successfully. Our team will contact you within 24 hours.',
          severity: 'success'
        });

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
        setErrors({});

      } catch (error) {
        console.error('Email error:', error);
        
        
        if (error.status === 200 || error.text === 'OK' || error.message?.includes('200')) {
          setSnackbar({
            open: true,
            message: '✓ Thank you! Your message has been sent successfully. Our team will contact you within 24 hours.',
            severity: 'success'
          });
          // Reset form anyway
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            message: '',
          });
          setErrors({});
        } else {
          setSnackbar({
            open: true,
            message: 'Unable to send email. Please contact us directly at sales@onasglobal.com or call +91-928 150 6440.',
            severity: 'error'
          });
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Box sx={{
      px: { xs: 2, md: 8, lg: 12, xl: 16 },
      pt: { xs: 18, md: 20, lg: 28, xl: 32 },
      pb: { xs: 8, md: 8, lg: 12, xl: 16 },
      mx: 'auto',
      maxWidth: 1600,
    }}>
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 6, color: '#0B4C74' }}>
        Contact Us
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
        <Box sx={{ flex: 1 }}>
          <Box sx={{ mb: 3 }}>
            <iframe
              src={offices[0].mapSrc}
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: 8 }}
              allowFullScreen
              loading="lazy"
              title="Hyderabad Office"
            ></iframe>
          </Box>
          <Box sx={{ backgroundColor: '#0a3d62', color: '#fff', p: 3, borderRadius: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <strong>Email Us:</strong>{' '}
              <a href="mailto:sales@onasglobal.com" style={{ textDecoration: 'none', color: '#4fc3f7' }}>
                sales@onasglobal.com
              </a>
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              <strong>Call Us:</strong>{' '}
              <a href="tel:+91-9281506440" style={{ textDecoration: 'none', color: '#4fc3f7' }}>
                +91-928 150 6440 & 441
              </a>{' '}
              &{' '}
              <a href="tel:+16073262406" style={{ textDecoration: 'none', color: '#4fc3f7' }}>
                +1 607-326-2406
              </a>
            </Typography>
            <Typography variant="subtitle1">
              <strong>Development center:</strong> {offices[0].address}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 3, backgroundColor: '#fff', p: 4, borderRadius: 2, boxShadow: 3 }}
          >
            <TextField
              name="firstName"
              label="First Name"
              fullWidth
              onChange={handleChange}
              value={formData.firstName}
              error={!!errors.firstName}
              helperText={errors.firstName}
              disabled={loading}
              required
            />

            <TextField
              name="lastName"
              label="Last Name"
              fullWidth
              onChange={handleChange}
              value={formData.lastName}
              error={!!errors.lastName}
              helperText={errors.lastName}
              disabled={loading}
              required
            />

            <TextField
              name="email"
              label="Email Address"
              type="email"
              fullWidth
              onChange={handleChange}
              value={formData.email}
              error={!!errors.email}
              disabled={loading}
              required
              helperText={errors.email || "We'll send confirmation to this email"}
            />

            <TextField
              name="phone"
              label="Phone Number (Optional)"
              type="tel"
              fullWidth
              onChange={handleChange}
              value={formData.phone}
              error={!!errors.phone}
              helperText={errors.phone}
              disabled={loading}
              placeholder="+91 98765 43210"
            />

            <TextField
              name="company"
              label="Company Name"
              fullWidth
              onChange={handleChange}
              value={formData.company}
              error={!!errors.company}
              helperText={errors.company}
              disabled={loading}
              required
            />

            <TextField
              name="service"
              label="Looking For?"
              select
              fullWidth
              value={formData.service}
              onChange={handleChange}
              error={!!errors.service}
              helperText={errors.service}
              disabled={loading}
              required
            >
              <MenuItem value="">Select Service</MenuItem>
              {services.map((s, i) => <MenuItem key={i} value={s}>{s}</MenuItem>)}
            </TextField>

            <TextField
              name="message"
              label="How Can We Help You?"
              multiline
              rows={4}
              fullWidth
              onChange={handleChange}
              value={formData.message}
              error={!!errors.message}
              helperText={errors.message}
              disabled={loading}
              required
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={loading}
              sx={{ mt: 2 }}
            >
              {loading ? <CircularProgress size={24} /> : 'Send Message'}
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', mb: 6, color: '#0B4C74' }}>
          Our Global Presence
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, justifyContent: 'center', alignItems: 'stretch' }}>
          {offices.map((office, i) => (
            <Box key={i} sx={{ flex: 1, backgroundColor: '#0a3d62', color: '#fff', borderRadius: 2, p: 3, display: 'flex', flexDirection: 'column', minHeight: 400 }}>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {office.name}
                </Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {office.company}
                </Typography>
                <Typography variant="body2">{office.address}</Typography>
              </Box>
              <Box sx={{ mt: 'auto' }}>
                <iframe
                  src={office.mapSrc}
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: 8 }}
                  allowFullScreen
                  loading="lazy"
                  title={office.name}
                ></iframe>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}