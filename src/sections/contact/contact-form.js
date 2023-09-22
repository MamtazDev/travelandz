import React, { useState } from 'react';
import { m } from 'framer-motion';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { MotionViewport, varFade } from 'src/components/animate';

// ----------------------------------------------------------------------

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // New state for the pop-up


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_HOST_API}/getDemo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data sent successfully');
        // Clear the form after submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setIsSubmitted(true); // Set the state to show the pop-up
       
      } else {
        console.error('Failed to send form data');
      }
    } catch (error) {
      console.error('An error occurred while sending form data', error);
    }
  };

  const handleClosePopup = () => {
    setIsSubmitted(false); // Set the state to close the pop-up
  };

  return (
    <Stack component={MotionViewport} spacing={5}>
      <m.div variants={varFade().inUp}>
        <Typography variant="h3">
          Don't hesitate, just get in touch. <br />
          We&apos;ll be glad to offer you a demo of Travelandz.
        </Typography>
      </m.div>

      <Stack spacing={3}>
        <m.div variants={varFade().inUp}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        </m.div>

        <m.div variants={varFade().inUp}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        </m.div>

        <m.div variants={varFade().inUp}>
        <TextField
          fullWidth
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
        />
        </m.div>

        <m.div variants={varFade().inUp}>
        <TextField
          fullWidth
          label="Enter your message here."
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline rows={4}
        />
        </m.div>
      </Stack>

      <m.div variants={varFade().inUp}>
        <Button size="large" variant="contained" onClick={handleSubmit}>
          Submit Now
        </Button>
      </m.div>
       {/* Pop-up message */}
       {isSubmitted && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)' }}>
          <Typography variant="h5">Thank You!</Typography>
          <Typography>Your form has been submitted. We will get back to you soon.</Typography>
          <Button onClick={handleClosePopup}>OK, thanks</Button> {/* Close button */}

        </div>
      )}
    </Stack>
  );
}
