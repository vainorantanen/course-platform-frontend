import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const RFPart3UseState = () => {
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
            The useState Hook
          </Typography>
        </Box>
        <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('logging...', counter)

  return (
    <div>{counter}</div>
  )
}

export default App
`}
        </SyntaxHighlighter>
      </Box>
    </Container>
  )
}

export default RFPart3UseState