import { Container, Box, Typography } from '@mui/material';
import React from 'react';
import RFPart1Exercises from './RFPart1Exercises';
import RFPart1Material from './RFPart1Material';

const RFPart1 = () => {
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
            Part 1: Basics of React.js
          </Typography>
        </Box>
        <RFPart1Material />
        <RFPart1Exercises />
    </Container>
  );
};

export default RFPart1;
