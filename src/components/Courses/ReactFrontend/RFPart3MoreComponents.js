import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';


const RFPart3MoreComponents = () => {
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
            More about React components
          </Typography>
        </Box>
        <Typography>Lets assume we have the following component</Typography>
        <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const City = (props) => {
  const name = props.name
  const currentPopulation = props.currentPopulation
  const populationGrowth = props.populationGrowth

  const forecastedPopulation = () => {
    return currentPopulation + populationGrowth
  }

  return (
    <div>
      <p>The city {name}, has currently {current} people. Growth is about {forecast} people</p>
      <p>In the future, there will be approximately {forecastedPopulation()} people</p>
    </div>
  )
}
`}
        </SyntaxHighlighter>
      </Box>
      <Typography>To make the code more clear, faster to write and easier to manage. We can get the props in the following way:</Typography>
      <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const City = (props) => {
  const { name, currentPopulation, populationGrowth } = props

  const forecastedPopulation = () => {
    return currentPopulation + populationGrowth
  }

  return (
    <div>
      <p>The city {name}, has currently {currentPopulation} people. Growth is about {populationGrowth} people</p>
      <p>In the future, there will be approximately {forecastedPopulation()} people</p>
    </div>
  )
}
`}
        </SyntaxHighlighter>
      </Box>
    <Typography>This is because the props is an object in the following format:</Typography>
    <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`props = {
    name: "Paris",
    currentPopulation: 8
    populationGrowth: 2
}
`}
        </SyntaxHighlighter>
      </Box>
      <Typography>You might have guessed the next step. We can bring the variables in to an object in a more clear way like this:</Typography>
      <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const City = ({ name, currentPopulation, populationGrowth }) => {

  const forecastedPopulation = () => {
    return currentPopulation + populationGrowth
  }

  return (
    <div>
      <p>The city {name}, has currently {currentPopulation} people. Growth is about {populationGrowth} people</p>
      <p>In the future, there will be approximately {forecastedPopulation()} people</p>
    </div>
  )
}
`}
        </SyntaxHighlighter>
      </Box>


    </Container>
  )
}

export default RFPart3MoreComponents