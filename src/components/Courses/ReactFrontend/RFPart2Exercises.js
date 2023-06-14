import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const RFPart2Exercises = () => {
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
          Exercises part 2
        </Typography>
      </Box>
      <Typography>Exercise 2.1: City Information 3</Typography>
      <Typography>
      Let's start using objects in our application. Change the variable definitions in the App component to the following format and modify all parts of the application so that it continues to work:
      </Typography>
      <Box>
      <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React from 'react';

const App = () => {
      const cityName = 'City Guide';
      const city1 = {
        name: 'Paris',
        country: 'France',
        population: 2,
      };
      const city2 = {
        name: 'Tokyo',
        country: 'Japan',
        population: 13,
      };
      const city3 = {
        name: 'New York City',
        country: 'United States',
        population: 8,
      };
    
      return (
        <div>
          ...
        </div>
      );
    };
    
    export default App;`}
        </SyntaxHighlighter>
      </Box>
      <Typography>Exercise 2.2: City Information 4</Typography>
      <Typography>Next, let's put the objects into an array. Change the variable definitions in the App component to the following format and modify all parts of the application accordingly</Typography>
      <Box>
      <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React from 'react';

    const App = () => {
      const cityName = 'City Guide';
      const cities = [
      {
        name: 'Paris',
        country: 'France',
        population: 2,
      },
      {
        name: 'Tokyo',
        country: 'Japan',
        population: 13,
      },
        {
        name: 'New York City',
        country: 'United States',
        population: 8,
      }
    ]
    
      return (
        <div>
          ...
        </div>
      );
    };
    
    export default App;`}
        </SyntaxHighlighter>
      </Box>

<Typography>
At this stage, you can assume that the table always contains three elements, so it is not necessary to iterate through the table.
</Typography>
<Typography>However, do not pass different objects from the component "App" to the components "Content" and "Total" as separate props, but directly as an array.</Typography>
<Box>
      <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const App = () => {
  // Define the necessary data

  return (
    <div>
      <Header cityName={...} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};
`}
        </SyntaxHighlighter>
      </Box>
      <Typography>Exercise 2.3: City Information 5</Typography>
      <Typography>
Let's take the change one step further and make the course and its parts a single JavaScript object. Fix everything that breaks.</Typography>
    
      <Box>
      <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React from 'react';

const App = () => {
  const cityName = {
    name: 'City Guide',
    cities = [
  {
    name: 'Paris',
    country: 'France',
    population: 2,
  },
  {
    name: 'Tokyo',
    country: 'Japan',
    population: 13,
  },
    {
    name: 'New York City',
    country: 'United States',
    population: 8,
  }
]
};

  return (
    <div>
      ...
    </div>
  );
};

export default App;
`}
        </SyntaxHighlighter>
      </Box>
        </Container>
  )
}

export default RFPart2Exercises