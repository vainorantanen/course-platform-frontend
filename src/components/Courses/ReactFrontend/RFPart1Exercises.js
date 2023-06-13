import React from 'react'
import { Container, Box, Typography } from '@mui/material'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const RFPart1Exercises = () => {
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
          Exercises part 1
        </Typography>
      </Box>
      <Typography>Exercise 1.1: City Information 1</Typography>
      <Typography>
      Create a React application to display information about different cities. Start by creating a new project using create-react-app. Modify the index.js file to render the App component, and update the App.js file as follows:
      </Typography>
      <Box>
      <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React from 'react';

const App = () => {
  const cityName = 'City Guide';
  const city1 = 'Paris';
  const country1 = 'France';
  const population1 = 2;
  const city2 = 'Tokyo';
  const country2 = 'Japan';
  const population2 = 13;
  const city3 = 'New York City';
  const country3 = 'United States';
  const population3 = 8;

  return (
    <div>
      <h1>{cityName}</h1>
      <p>
        {city1}, {country1} - Population: {population1} million
      </p>
      <p>
        {city2}, {country2} - Population: {population2} million
      </p>
      <p>
        {city3}, {country3} - Population: {population3} million
      </p>
      <p>Total population: {population1 + population2 + population3}</p>
    </div>
  );
};

export default App;`}
        </SyntaxHighlighter>
      </Box>
      <Typography>As taught in the material, define index.js as follows:</Typography>
      <Box>
      <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)`}
        </SyntaxHighlighter>
      </Box>

<Typography>
And remove the unnecessary files (App.css, App.test.js, index.css, logo.svg, reportWebVitals.js, setupTests.js).

The entire application is now unfortunately contained within a single component. Refactor the code so that it consists of three new components: Header, Content, and Total. All the data will still be kept within the App component, which will pass the necessary information to each component using props. The Header component will be responsible for rendering the course name, the Content component for rendering the parts and their exercise counts, and the Total component for displaying the total number of exercises.

Create the new components in the App.js file.

The structure of the App component will be something like this:
</Typography>
<Box>
      <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const App = () => {
  // Define the necessary data

  return (
    <div>
      <Header cityName={cityName} />
      <Content ... />
      <Total ... />
    </div>
  );
};
`}
        </SyntaxHighlighter>
      </Box>
      <Typography>Exercise 1.2: City Information 2</Typography>
      <Typography>Refactor the Content component to display information about different cities. Create a new component named City, where each component will render details about one city, such as its name, country, and population.</Typography>
    
      <Box>
      <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const Content = () => {
  return (
    <div>
      <City .../>
      <City .../>
      <City .../>
    </div>
  );
};
`}
        </SyntaxHighlighter>
      </Box>
      <Typography>In this exercise, you can define the city data within the App component and pass the necessary information to each City component using props.</Typography>
        </Container>
  )
}

export default RFPart1Exercises