import React, { useState, useEffect } from 'react';
import {
  TextField,
  Button,
  Typography,
  Container,
  Box
} from '@mui/material';

//import contactService from '../services/contact'

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
/*
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data or send it to the server
    console.log(formData);
    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    contactService.create(formData).then(returnedData => {
            setContacts(contacts.concat(returnedData))
        });

  };
*/
  return (
    <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
 }}>
      <Box>
        <Typography
          sx={{
            fontSize: '3rem',
            textAlign: 'center',
            '@media (max-width: 442px)': {
              fontSize: '1.5rem',
            },
          }}
        >
          Contact Us
        </Typography>
        </Box>
        <Box
        component="form"
        onSubmit={() => {console.log("Submitted!")}}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '2rem',
          marginBottom: '2rem',
          width: '100%',
          maxWidth: '30rem',
        }}
      >
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: '1rem'}}
          InputProps={{ style: { color: 'white', borderColor: 'white' } }}
          InputLabelProps={{ style: { color: 'white' } }}
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: '1rem' }}
          InputProps={{ style: { color: 'white', borderColor: 'white' } }}
          InputLabelProps={{ style: { color: 'white' } }}
        />
        <TextField
          label="Write a message..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          required
          sx={{ marginBottom: '1rem' }}
          InputProps={{ style: { color: 'white', borderColor: 'white' } }}
          InputLabelProps={{ style: { color: 'white' } }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{backgroundColor: 'blue', color: 'white',
          transition: 'transform 0.3s',
          marginTop: '1rem',
          marginBottom: '1rem',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
        }}
        >
          Submit!
        </Button>
      </Box>
    </Container>
  );
};

export default ContactForm;