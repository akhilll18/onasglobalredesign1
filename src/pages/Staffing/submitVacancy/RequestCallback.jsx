import React, { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem, FormGroup, FormControlLabel, Checkbox, FormHelperText, Snackbar, Alert, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import emailjs from '@emailjs/browser';
import RequestImage from '../../../assets/images/staffing/submitVacancy/vacancy.png';

// Shared design
import {
  PageShell,
  Section,
  Eyebrow,
  SectionHeading,
  Body,
  ink, muted, line, lime,
} from '../../../theme/theme';

// EmailJS Configuration (same as ContactUs)
const EMAILJS_SERVICE_ID = 'service_z6cwp83';
const EMAILJS_ADMIN_TEMPLATE_ID = 'template_airu3dh';
const EMAILJS_USER_TEMPLATE_ID = 'template_17ujefq';
const EMAILJS_PUBLIC_KEY = 'SP7FmVESGAZ0wXGhK';

const industries = ['IT', 'Finance', 'Healthcare', 'Education', 'Manufacturing', 'Other'];
const services = ['Consulting', 'Staffing', 'Training', 'Software Development', 'Other'];
const heardFromOptions = ['Instagram', 'YouTube', 'LinkedIn', 'Referral', 'Other'];

export default function RequestCallback() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    industry: '',
    service: '',
    jobFile: null,
    notes: '',
    heardFrom: [],
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    const { name, files, type, checked, value } = e.target;
    if (files) {
      const file = files[0];
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      ];

      if (file && !allowedTypes.includes(file.type)) {
        setErrors((prev) => ({ ...prev, jobFile: 'Only PDF, DOC, or DOCX files are allowed' }));
        setFormData((prev) => ({ ...prev, jobFile: null }));
      } else {
        setErrors((prev) => ({ ...prev, jobFile: '' }));
        setFormData((prev) => ({ ...prev, jobFile: file }));
      }
    } else if (type === 'checkbox' && name === 'terms') {
      setFormData({ ...formData, terms: checked });
    } else if (type === 'checkbox' && name === 'heardFrom') {
      const updatedArray = checked
        ? [...formData.heardFrom, value]
        : formData.heardFrom.filter((item) => item !== value);
      setFormData({ ...formData, heardFrom: updatedArray });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName) newErrors.lastName = 'Required';
    if (!formData.email) newErrors.email = 'Required';
    if (!formData.phone) newErrors.phone = 'Required';
    if (!formData.company) newErrors.company = 'Required';
    if (!formData.designation) newErrors.designation = 'Required';
    if (!formData.industry) newErrors.industry = 'Required';
    if (!formData.service) newErrors.service = 'Required';
    if (!formData.jobFile) newErrors.jobFile = 'Please upload a file (PDF, DOC, DOCX)';
    if (!formData.terms) newErrors.terms = 'You must accept terms and conditions';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validate();
    setErrors(formErrors);

    if (Object.keys(formErrors).length !== 0) return;

    setLoading(true);

    try {
      const dateTime = new Date();
      const date = dateTime.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const time = dateTime.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      });

      const fullName = `${formData.firstName} ${formData.lastName}`;

      const adminParams = {
        to_email: 'sales@onasglobal.com',
        from_name: fullName,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        company: formData.company,
        designation: formData.designation,
        industry: formData.industry,
        service: formData.service,
        notes: formData.notes || 'Not provided',
        heard_from: formData.heardFrom.join(', ') || 'Not provided',
        fileName: formData.jobFile?.name || 'No file attached',
        message: formData.notes || 'Vacancy submission',
        date: date,
        time: time,
      };

      const userParams = {
        to_email: formData.email,
        to_name: fullName,
        from_name: 'ONAS Global Services',
        company: formData.company,
        service: formData.service,
        date: date,
      };

      emailjs.init(EMAILJS_PUBLIC_KEY);

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_ADMIN_TEMPLATE_ID, adminParams);

      emailjs
        .send(EMAILJS_SERVICE_ID, EMAILJS_USER_TEMPLATE_ID, userParams)
        .then((result) => {
          console.log('User email result:', result);
        })
        .catch((err) => {
          console.log('User email error (non-critical):', err);
        });

      setSnackbar({
        open: true,
        message: '✓ Thank you! Your vacancy has been submitted successfully. Our team will contact you within 24 hours.',
        severity: 'success',
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        designation: '',
        industry: '',
        service: '',
        jobFile: null,
        notes: '',
        heardFrom: [],
        terms: false,
      });
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      setErrors({});
    } catch (error) {
      console.error('Email error:', error);

      if (error.status === 200 || error.text === 'OK' || error.message?.includes('200')) {
        setSnackbar({
          open: true,
          message: '✓ Thank you! Your vacancy has been submitted successfully.',
          severity: 'success',
        });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          designation: '',
          industry: '',
          service: '',
          jobFile: null,
          notes: '',
          heardFrom: [],
          terms: false,
        });
        const fileInput = document.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = '';
        setErrors({});
      } else {
        setSnackbar({
          open: true,
          message: 'Unable to submit. Please contact us directly at sales@onasglobal.com or call +91-928 150 6440.',
          severity: 'error',
        });
      }
    } finally {
      setLoading(false);
    }
  };

  // Shared input styling
  const inputSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '2px',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '.72rem',
      background: '#fff',
      '& fieldset': { borderColor: line },
      '&:hover fieldset': { borderColor: '#aac7b2' },
      '&.Mui-focused fieldset': { borderColor: '#0B4C74' },
    },
    '& .MuiInputLabel-root': {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '.72rem',
      color: muted,
      '&.Mui-focused': { color: '#0B4C74' },
    },
    '& .MuiFormHelperText-root': {
      fontFamily: "'Poppins', sans-serif",
      fontSize: '.6rem',
    },
  };

  return (
    <PageShell>
      {/* ── Heading ── */}
      <Section>
        <Box sx={{ textAlign: 'center', mt: { xs: '3rem', md: '5rem' } }}>
          <Eyebrow>Get in Touch</Eyebrow>
          <SectionHeading sx={{ margin: '.7rem auto 1rem', maxWidth: 800 }}>
            Submit a Vacancy
          </SectionHeading>
          <Body sx={{ maxWidth: 700, margin: '0 auto' }}>
            Share the role details and our team will get back to you within 24 hours.
          </Body>
        </Box>
      </Section>

      {/* ── Image + Form ── */}
      <Section>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: { xs: '2rem', md: 'clamp(2rem, 5vw, 3.5rem)' },
            alignItems: 'stretch',
          }}
        >
          {/* Left — image in bordered card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex' }}
          >
            <Box
              sx={{
                width: '100%',
                border: `1px solid ${line}`,
                borderRadius: '2px',
                overflow: 'hidden',
                background: '#fff',
              }}
            >
              <Box
                component="img"
                src={RequestImage}
                alt="Submit Vacancy"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  minHeight: { xs: 260, md: 420 },
                }}
              />
            </Box>
          </motion.div>

          {/* Right — form card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.2rem',
                background: '#fff',
                border: `1px solid ${line}`,
                borderRadius: '2px',
                padding: { xs: '1.6rem 1.2rem', md: '2rem 1.7rem' },
              }}
            >
              <Box>
                <Eyebrow>Send Your Details</Eyebrow>
                <Typography
                  component="h2"
                  sx={{
                    margin: '.5rem 0 0',
                    font: "400 clamp(1rem, 1.8vw, 1.35rem)/1.2 Georgia, 'Times New Roman', serif",
                    color: ink,
                  }}
                >
                  Tell us about the role
                </Typography>
              </Box>

              <TextField name="firstName" label="First Name" fullWidth required onChange={handleChange} value={formData.firstName} error={!!errors.firstName} helperText={errors.firstName} disabled={loading} sx={inputSx} />
              <TextField name="lastName" label="Last Name" fullWidth required onChange={handleChange} value={formData.lastName} error={!!errors.lastName} helperText={errors.lastName} disabled={loading} sx={inputSx} />
              <TextField name="email" label="Business Email" type="email" fullWidth required onChange={handleChange} value={formData.email} error={!!errors.email} helperText={errors.email} disabled={loading} sx={inputSx} />
              <TextField name="phone" label="Phone Number" type="tel" fullWidth required onChange={handleChange} value={formData.phone} error={!!errors.phone} helperText={errors.phone} disabled={loading} sx={inputSx} />
              <TextField name="company" label="Company Name" fullWidth required onChange={handleChange} value={formData.company} error={!!errors.company} helperText={errors.company} disabled={loading} sx={inputSx} />
              <TextField name="designation" label="Designation" fullWidth required onChange={handleChange} value={formData.designation} error={!!errors.designation} helperText={errors.designation} disabled={loading} sx={inputSx} />

              <TextField
                name="industry"
                label="Industry"
                select
                fullWidth
                required
                value={formData.industry}
                onChange={handleChange}
                error={!!errors.industry}
                helperText={errors.industry}
                disabled={loading}
                sx={inputSx}
              >
                <MenuItem value="">Please Select</MenuItem>
                {industries.map((item, i) => <MenuItem key={i} value={item}>{item}</MenuItem>)}
              </TextField>

              <TextField
                name="service"
                label="Need Your Services In"
                select
                fullWidth
                required
                value={formData.service}
                onChange={handleChange}
                error={!!errors.service}
                helperText={errors.service}
                disabled={loading}
                sx={inputSx}
              >
                <MenuItem value="">Please Select</MenuItem>
                {services.map((item, i) => <MenuItem key={i} value={item}>{item}</MenuItem>)}
              </TextField>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                <Button
                  variant="outlined"
                  component="label"
                  disabled={loading}
                  sx={{
                    textTransform: 'none',
                    borderRadius: '2px',
                    py: 1.5,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '.66rem',
                    borderColor: line,
                    color: ink,
                    '&:hover': { borderColor: '#aac7b2', background: '#fff' },
                  }}
                >
                  Upload Job Description / Profile / Role Details
                  <input
                    type="file"
                    name="jobFile"
                    hidden
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                  />
                </Button>

                {formData.jobFile && (
                  <Box
                    sx={{
                      mt: 1,
                      px: 1.5,
                      py: 0.8,
                      border: `1px solid ${line}`,
                      borderRadius: '2px',
                      display: 'inline-block',
                      background: '#fff',
                      maxWidth: '100%',
                      wordBreak: 'break-word',
                    }}
                  >
                    <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.66rem', color: ink }}>
                      Selected File: <strong>{formData.jobFile.name}</strong>
                    </Typography>
                  </Box>
                )}

                {errors.jobFile && <FormHelperText error>{errors.jobFile}</FormHelperText>}
              </Box>

              <TextField
                name="notes"
                label="Point of Discussion / Additional Notes"
                multiline
                rows={4}
                fullWidth
                onChange={handleChange}
                value={formData.notes}
                disabled={loading}
                sx={inputSx}
              />

              <Box>
                <Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.66rem', color: ink, mb: 1 }}>
                  Where did you hear about us?
                </Typography>
                <FormGroup row>
                  {heardFromOptions.map((option, index) => (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          value={option}
                          checked={formData.heardFrom.includes(option)}
                          onChange={handleChange}
                          name="heardFrom"
                          disabled={loading}
                          sx={{ color: '#0B4C74', '&.Mui-checked': { color: '#0B4C74' } }}
                        />
                      }
                      label={<Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.66rem' }}>{option}</Typography>}
                    />
                  ))}
                </FormGroup>
              </Box>

              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.terms}
                    onChange={handleChange}
                    name="terms"
                    disabled={loading}
                    sx={{ color: '#0B4C74', '&.Mui-checked': { color: '#0B4C74' } }}
                  />
                }
                label={<Typography sx={{ fontFamily: "'Poppins', sans-serif", fontSize: '.66rem' }}>I agree to the Terms and Conditions</Typography>}
              />
              {errors.terms && <FormHelperText error>{errors.terms}</FormHelperText>}

              <Box
                component="button"
                type="submit"
                disabled={loading}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '.5rem',
                  padding: '.75rem 1.2rem',
                  marginTop: '.4rem',
                  border: 0,
                  borderRadius: '2px',
                  background: '#0B4C74',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '.66rem',
                  fontFamily: "'Poppins', sans-serif",
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'background .2s ease',
                  '&:hover': { background: loading ? '#0B4C74' : '#d3ffb0', color: loading ? '#ffffff' : '#000000' },
                }}
              >
                {loading ? <CircularProgress size={18} sx={{ color: '#ffffff' }} /> : (<>Submit <ArrowForward sx={{ fontSize: 14 }} /></>)}
              </Box>
            </Box>
          </motion.div>
        </Box>
      </Section>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </PageShell>
  );
}