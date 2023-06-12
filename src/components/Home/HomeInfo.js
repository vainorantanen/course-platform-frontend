import { Container, Box, Typography, Button } from '@mui/material'
import React from 'react'
import DevicesIcon from '@mui/icons-material/Devices';
import CreditCardOffIcon from '@mui/icons-material/CreditCardOff';
import { Link } from 'react-router-dom';

const HomeInfo = () => {
  return (
    <Container>

<Box>
            <Typography sx={{
              fontSize: '3rem',
              textAlign: 'center',
              marginBottom: '2rem',
              '@media (max-width: 442px)': {
                fontSize: '1.5rem',
              },
        }}>What we offer?</Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
          <Box sx={{textAlign: 'center'}}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ marginBottom: '1rem' }}>
                <DevicesIcon /> Master MERN-stack and develop the most in-demand skills in the web development industry!
            </Typography>
            <Typography sx={{ marginBottom: '1rem' }}>
                Frontend development with React.js and Material UI
            </Typography>
            <Typography sx={{ marginBottom: '1rem' }}>
                Backend development with Express.js
            </Typography>
            <Typography sx={{ marginBottom: '1rem' }}>
                Learn to integrate databases into your applications using MongoDB
            </Typography>
              <Button sx={{backgroundColor: 'blue', color: 'white',
                transition: 'transform 0.3s',
                marginTop: '1rem',
                '&:hover': {
                  transform: 'scale(1.05)',
                  backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
              }}
              component={Link}
              to="/courses/reactfrontend"
              >See all courses
              </Button>
            </Box>
          </Box>

          </Box>
      </Box>

          <Box>
            <Typography sx={{
              fontSize: '3rem',
              textAlign: 'center',
              marginBottom: '2rem',
              '@media (max-width: 442px)': {
                fontSize: '1.5rem',
              },
        }}>Why choose us?</Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
          <Box sx={{textAlign: 'center'}}>
          <Typography sx={{ marginBottom: '1rem' }}>
                Learn the right thing from the beginning!
            </Typography>
          <Typography sx={{ marginBottom: '1rem' }}>
               <CreditCardOffIcon /> You can start learning Web Development for free!
            </Typography>
            <Typography sx={{ marginBottom: '1rem' }}>
                High quality courses with an amazing learing experience
            </Typography>
            <Typography sx={{ marginBottom: '1rem' }}>
                No previous experience required!
            </Typography>
          </Box>

          </Box>
      </Box>
    </Container>
  )
}

export default HomeInfo