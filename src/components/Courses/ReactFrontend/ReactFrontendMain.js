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
          <Typography sx={{ marginBottom: '1rem' }}>
            Part 1: Setting up development environment
          </Typography>
          <Typography sx={{ marginBottom: '1rem' }}>Part 2: Basics of HTML, CSS and JavaScript</Typography>
          <Typography sx={{ marginBottom: '1rem' }}>Part 3: Basics of React.js</Typography>
          <Typography sx={{ marginBottom: '1rem' }}>Part 4: Frontend Application</Typography>
          <Button
            sx={{
              backgroundColor: 'blue',
              color: 'white',
              transition: 'transform 0.3s',
              marginTop: '1rem',
              '&:hover': {
                transform: 'scale(1.05)',
                backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)',
              },
            }}
            component={Link}
            to="/courses/reactfrontend/part1"
          >
            Start from part 1
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ReactFrontendMain;
