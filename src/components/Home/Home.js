import React from 'react';

import { Container,} from '@mui/material';
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