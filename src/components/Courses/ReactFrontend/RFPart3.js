import { Container, Box, Typography } from '@mui/material';
import React from 'react';
import RFPart3MoreComponents from './RFPart3MoreComponents';
import RFPart3UseState from './RFPart3UseState';

const RFPart3 = () => {
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
            Part 3: React Application
          </Typography>
        </Box>
        <RFPart3MoreComponents />
        <RFPart3UseState />
    </Container>
  );
};

export default RFPart3;