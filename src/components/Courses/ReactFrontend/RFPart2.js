import { Container, Box, Typography } from '@mui/material';
import React from 'react';
import RFPart2Material from './RFPart2Material';
import RFPart2Exercises from './RFPart2Exercises';

const RFPart2 = () => {
  return (
    <Container sx={{ marginTop: '5rem' }}>
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
            Part 2: JavaScript in web development
          </Typography>
        </Box>
        <RFPart2Material />
        <RFPart2Exercises />
    </Container>
  );
};

export default RFPart2;