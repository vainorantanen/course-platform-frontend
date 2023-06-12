import { Container, Box, Typography, Button } from '@mui/material'
import React from 'react'
import ai from '../../Assets/user-interface.png'

const HomeHeader = () => {
  return (
    <Container>
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
          Welcome to Vainoe.com!
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: '1.5rem',
            textAlign: 'center',
            '@media (max-width: 442px)': {
              fontSize: '1rem',
            },
            marginTop: '1rem',
            marginBottom: '1rem'
          }}
        >
         Learn modern Web Development by Mastering the MERN stack: MongoDB, Express.js, React.js, Node.js and Much More!
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
          textAlign: 'center'
        }}
      >
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '20rem'
        }}>
          <Typography>No previous programming experience needed. Start learning modern Web Development for free!</Typography>
          <Button sx={{backgroundColor: 'blue', color: 'white',
          transition: 'transform 0.3s',
          marginTop: '1rem',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
        }}>React Frontend</Button>
        </Box>
        <Box>
          <img src={ai} alt="Pic of ui"  style={{ width: '20rem', height: 'auto' }}/>
          </Box>
      </Box>

    </Container>
  )
}

export default HomeHeader