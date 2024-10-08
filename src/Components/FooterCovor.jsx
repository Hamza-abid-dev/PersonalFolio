import { Box, Container, Typography } from '@mui/material';
import { Element } from 'react-scroll';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const FooterCovor = () => {
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    
    const templateParams = {
      user_email: email,
    };

    emailjs
      .send('service_lysrfvi', 'template_9slnbfr', templateParams, 'jEDHb_ZtdIW4uthcE')
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setStatusMessage('Email sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error);
          setStatusMessage('Failed to send email. Please try again.');
        }
      );

    // Clear the email field after submission
    setEmail('');
  };

  return (
    <Element name='Newsletter'>
      <Box sx={{ position: 'relative', top: 140 }}>
        <Container maxWidth="lg">
          <Box className="background-container" sx={{ backgroundColor: '#023b38', color: 'white', pt: 5, pb: 13, borderRadius: '20px' }}>
            <Box sx={{ pl: { lg: 10, xs: 2 }, pr: { lg: 0, xs: 2 } }}>
              <Typography sx={{ fontSize: { lg: '50px', xs: '40px' }, fontWeight: '700' }}>
                GET MY NEWSLETTER
              </Typography>
              <Typography sx={{ mt: 1, mb: 5, width: { lg: '70%' }, opacity: '0.8' }}>
                PSA: My emails have no schedule. You can expect me in your inbox anytime :) If you press the button below, you consent to the occasional 3am rant about buzzwords like "synergy".
              </Typography>
              <form onSubmit={sendEmail}>
                <Box sx={{ display: { lg: 'flex' }, gap: { lg: 3, xs: 1 } }}>
                  <Box sx={{ input: { py: 1.5, bgcolor: 'transparent', border: '1px solid white', pr: { lg: 7 }, pl: 3, borderRadius: '10px', color: 'white', width: { lg: '50%', xs: '90%' } } }}>
                    <input
                      placeholder='E-mail address'
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      name='email'
                      required
                    />
                    <style>
                      {`
                      ::placeholder { 
                          color: white; 
                      }`}
                    </style>
                  </Box>
                  <Box component="button" type="submit" sx={{ bgcolor: '#7cd5c5', borderRadius: '10px', border: 'none', px: { lg: 2, xs: 3 }, py: { lg: 1, xs: 1.5 }, transition: 'all ease-in-out 0.3s', cursor: 'pointer', ":hover": { bgcolor: 'transparent', color: 'white', border: '1px solid white' }, mt: { lg: 0, xs: 2 } }}>
                    I volunteer my inbox
                  </Box>
                </Box>
              </form>
              {statusMessage && <Typography sx={{ mt: 2, opacity: '0.8' }}>{statusMessage}</Typography>}
            </Box>
          </Box>
        </Container>
      </Box>
    </Element>
  );
};

export default FooterCovor;
