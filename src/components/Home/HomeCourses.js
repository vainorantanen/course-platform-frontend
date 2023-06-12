import { Container, Box, Button, Typography } from '@mui/material'
import React from 'react'
import codingPic from '../../Assets/coding.png'

const styles = {
    title: {
      fontSize: '3rem',
      textAlign: 'center',
      '@media (max-width: 442px)': {
      fontSize: '1.5rem',
      },
    }
  }

const HomeCourses = () => {
  return (
    <Container>
        <Typography sx={styles.title}>
          Most Popular Courses
        </Typography>
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            textAlign: 'center',
            gap: '1rem',
            marginBottom: '2rem'
        }}>
          
              <Box>
                  <Button sx={{backgroundColor: 'blue', color: 'white',
                    transition: 'transform 0.3s',
                    marginTop: '1rem',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'},
                }}>Frontend</Button>
              </Box>
              
              <Box>
                <Button sx={{backgroundColor: 'blue', color: 'white',
          transition: 'transform 0.3s',
          marginTop: '1rem',
          '&:hover': {
            transform: 'scale(1.05)',
            backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'}
        }}>Backend</Button>
              </Box>
          </Box>

          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            textAlign: 'center',
            gap: '3rem',
            marginBottom: '2rem'
        }}>
          
          <Box sx={{background: 'linear-gradient(to bottom, rgb(0, 0, 0), #0000C3)', borderRadius: '1rem', boxShadow: '0.3rem 0.3rem 0.3rem 0.3rem white',
            transition: 'transform 0.3s',
            '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0.5rem 0.5rem 0.5rem 0.5rem white'
            }
            }}>
                <img src={codingPic} alt="Pic 1" style={{ width: '20rem', height: 'auto',
              borderRadius: '2rem', margin: '1rem'
               }}/>
                <Typography sx={{fontSize: '2rem'}}>
                React Frontend
                </Typography>
                <Typography sx={{maxWidth: '30rem', marginTop: '1rem'}}>
                Learn modern frontend web development by mastering one of the most popular JavaScript frontend frameworks: React.js!
                </Typography>
                <Typography sx={{marginTop: '1rem'}}>
                This course is free!
                </Typography>
                  <Button sx={{backgroundColor: 'blue', color: 'white',
                    transition: 'transform 0.3s',
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      backgroundImage: 'linear-gradient(to bottom, #003eff, #006eff)'},
                }}>Start!</Button>
              </Box>

          </Box>
    </Container>
  )
}

export default HomeCourses