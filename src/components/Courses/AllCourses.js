import { Container, Box, Typography } from '@mui/material'
import React from 'react'

const AllCourses = () => {
  return (
    <Container sx={{marginTop: '5rem'}}>
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
          All Courses
        </Typography>
      </Box>
    </Container>
  )
}

export default AllCourses