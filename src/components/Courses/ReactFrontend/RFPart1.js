import { Container, Box, Typography } from '@mui/material';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
      <Typography>
      Let's now familiarize ourselves with perhaps the most important topic of the course, the React library. We will immediately create a simple React application and explore the basic concepts of React. The easiest way to get started is by using a tool called create-react-app. You can install create-react-app on your computer, but it's not necessary if your Node installation already includes the npm tool with a version of at least 5.3. In that case, npm comes with the npx command,
which allows you to use create-react-app without installing it separately. You can check your npm version by running the command npm -v on your command line. For this part, I'm using Node version 18.12.1.
      </Typography>
      <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`npx create-react-app part1firstapp\n\ncd part1firstapp`}
        </SyntaxHighlighter>
      </Box>
      <Typography>To start the application, run the following command:</Typography>
      <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`npm start`}
        </SyntaxHighlighter>
      </Box>
      <Typography>Chrome should open automatically. Once the application has opened, open developer tools by pressing F12 on windows. You should see the following screen:</Typography>
        <Typography>
The code for the application is in the src directory. Let's simplify the existing code so that the content of the index.js file becomes:</Typography>
<Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)`}
        </SyntaxHighlighter>
      </Box>
        <Typography>And App.js:</Typography>
        <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const App = () => (
  <div>
    <p>My first React Application!</p>
  </div>
)

export default App`}
        </SyntaxHighlighter>
      </Box>
<Typography>
  Now you should see the text "My first React Application!" render on your screen on the application. Congratulations, you've created your first react application!
The files App.css, App.test.js, index.css, logo.svg, reportWebVitals.js, and setupTests.js can be removed as we don't need them.</Typography>

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
          React Components
        </Typography>
      </Box>

      <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const Content = () => {
  return (
    <div>
      <p>My first React Component!</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>My first React Application!</h1>
      <Content />
    </div>
  )
}`}
        </SyntaxHighlighter>
      </Box>

      <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const App = () => {
  return (
    <div>
      <h1>My first React Application!</h1>
      <Content />
      <Content />
    </div>
  )
}`}
        </SyntaxHighlighter>
      </Box>

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
          Passing props into a component
        </Typography>
      </Box>

      <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const Content = (props) => {
  return (
    <div>
      <p>My {props.number} React Component!</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>My first React Application!</h1>
      <Content number="first"/>
      <Content number="second"/>
      <Content number="third"/>
    </div>
  )
}`}
        </SyntaxHighlighter>
      </Box>

      <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const Content = (props) => {
  return (
    <div>
      <p>My {props.number} React Component is {props.opinion}!</p>
    </div>
  )
}

const App = () => {
  const secondNum = "second"
  const secondOpinion = "great"

  return (
    <div>
      <h1>My first React Application!</h1>
      <Content number="first" opinion="awesome" />
      <Content number={secondNum} opinion={secondOpinion} />
      <Content number={1+2} opinion="the third component" />
    </div>
  )
}`}
        </SyntaxHighlighter>
      </Box>
      <Typography>NOTE: React component must always start with a capital letter. For example the following code won't work:</Typography>
<Box>
      <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const content = (props) => {
  return (
    <div>
      <p>My {props.number} React Component is {props.opinion}!</p>
    </div>
  )
}

const App = () => {
  const secondNum = "second"
  const secondOpinion = "great"

  return (
    <div>
      <h1>My first React Application!</h1>
      <content number="first" opinion="awesome" />
    </div>
  )
}`}
        </SyntaxHighlighter>
      </Box>

      <Typography>NOTE: It's also worth keeping in mind that the content of a React component should (usually) have a single root element. So, if we tried to define the component App without an outer div element. For example the following code won't work:</Typography>
<Box>
      <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const App = () => {
  return (
      <h1>My first React Application!</h1>
      <Content number="first" opinion="awesome" />
  )
}`}
        </SyntaxHighlighter>
      </Box>

    </Container>
  );
};

export default RFPart1;
