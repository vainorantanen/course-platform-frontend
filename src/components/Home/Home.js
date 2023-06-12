import React from 'react';
import palvelu1 from '../../Assets/palvelu1.jpg'
import palvelu2 from '../../Assets/palvelu2.jpg'
import palvelu3 from '../../Assets/palvelu3.jpg'
import ai from '../../Assets/ai.png'

import { Container, Box, Typography, Button,
  List, ListItem, ListItemText, TextField } from '@mui/material';
import HomeHeader from './HomeHeader';
import HomeCourses from './HomeCourses';
import ContactForm from './ContactForm';
import HomeInfo from './HomeInfo';


const Home = () => {

  return (
    <Container sx={{ marginTop: '5rem' }}>
      <HomeHeader />
      <HomeInfo />
      <HomeCourses />
      <ContactForm />
</Container>


  );
};

export default Home;