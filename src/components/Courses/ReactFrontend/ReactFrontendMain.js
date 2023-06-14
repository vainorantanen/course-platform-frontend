import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ReactFrontendMain = () => {
  return (
    <Container sx={{ marginTop: '5rem', marginBottom: '3rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: '3rem',
            textAlign: 'center',
            '@media (max-width: 442px)': {
              fontSize: '1.5rem',
            },
          }}
        >
          React Frontend
        </Typography>
        <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt='react icon' style={{width: '20rem', height: 'auto',
    marginTop: '2rem', marginBottom: '2rem'}}></img>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Button
            sx={{
              backgroundColor: 'blue',
              color: 'white',
              transition: 'transform 0.3s',
              marginTop: '1rem',
              marginBottom: '1rem',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)',
              },
            }}
            component={Link}
            to="/courses/reactfrontend/part1"
          >
            Part 1: Basics of React.js
          </Button>
          <Button
            sx={{
              backgroundColor: 'blue',
              color: 'white',
              transition: 'transform 0.3s',
              marginTop: '1rem',
              marginBottom: '1rem',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)',
              },
            }}
            component={Link}
            to="/courses/reactfrontend/part2"
          >
            Part 2: JavaScript basics in Web development
          </Button>
          <Button
            sx={{
              backgroundColor: 'blue',
              color: 'white',
              transition: 'transform 0.3s',
              marginTop: '1rem',
              marginBottom: '1rem',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)',
              },
            }}
            component={Link}
            to="/courses/reactfrontend/part3"
          >
            Part 3: React Application
          </Button>

          <Typography sx={{ marginBottom: '1rem' }}>If you're not familiar with web development you might want to see these:</Typography>
          <Button sx={{
              backgroundColor: 'blue',
              color: 'white',
              transition: 'transform 0.3s',
              marginTop: '1rem',
              marginBottom: '1rem',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)',
              },
            }}>
            Setting up development environment
          </Button>
          <Button sx={{
              backgroundColor: 'blue',
              color: 'white',
              transition: 'transform 0.3s',
              marginTop: '1rem',
              marginBottom: '1rem',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)',
              },
            }}>
            Basics of HTML, CSS and JavaScript
          </Button>

        </Box>
      </Box>
    </Container>
  );
};

export default ReactFrontendMain;
