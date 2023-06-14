import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';

const RFPart2Material = () => {
  return (
    <Container>
        <Box>
          <Typography
            sx={{
              fontSize: '2rem',
              textAlign: 'center',
              '@media (max-width: 442px)': {
                fontSize: '1rem',
              },
            }}
          >
            Variables
          </Typography>
        </Box>
        <Typography>Variables in JavaScript are used to store data values that can be accessed and manipulated throughout your code. They provide a way to store and retrieve data dynamically during program execution.</Typography>
        <Typography>There are three ways to declare variables in JavaScript: let, var, and const. Each has its own characteristics and usage scenarios.</Typography>
        <Typography>let</Typography>
        <ul>
            <li>
        <Typography>let allows you to declare block-scoped variables that can be reassigned.

Block scope means that the variable is only accessible within the nearest enclosing block (a block is typically defined by curly braces {}). Variables declared with let are not hoisted (not moved to the top of the scope).</Typography>
</li>
<li>
<Typography>let is useful when you need to declare a variable that might change its value or need to be limited to a specific block.</Typography>
</li>
</ul>
        <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`let age = 25;
if (age > 18) {
  let status = 'Adult';
  console.log(status); // Output: Adult
}
console.log(age); // Output: 25
console.log(status); // Error: status is not defined
`}
        </SyntaxHighlighter>
      </Box>
      <Typography>var</Typography>
      <ul>
        <li>
            <Typography>var is the older way of declaring variables in JavaScript. It has function scope or global scope.</Typography>
        </li>
        <li>
            <Typography>Variables declared with var are hoisted to the top of their scope, which means they are accessible throughout the entire function or globally if declared outside any function.</Typography>
        </li>
        <li>
            <Typography>
        var allows redeclaration and reassignment.</Typography>
        </li>
        <li>
            <Typography>
        Use var when you need to support older browsers or when you specifically need function scope.</Typography>
        </li>
      </ul>
      <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`var name = 'John';
if (true) {
  var name = 'Jane';
  console.log(name); // Output: Jane
}
console.log(name); // Output: Jane

`}
        </SyntaxHighlighter>
      </Box>


      <Typography>const</Typography>
      <ul>
        <li>
            <Typography>const allows you to declare variables with a constant value that cannot be reassigned.</Typography>
        </li>
        <li>
            <Typography>const variables are block-scoped and have the same scope rules as let.</Typography>
        </li>
        <li>
            <Typography>Once a value is assigned to a const, it cannot be changed.</Typography>
        </li>
        <li>
            <Typography>
        const is useful for declaring variables that should not be modified after initialization.</Typography>
        </li>
      </ul>
      <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const PI = 3.14;
console.log(PI); // Output: 3.14

PI = 3.1415; // Error: Assignment to constant variable
`}
        </SyntaxHighlighter>
      </Box>

      <Box>
          <Typography
            sx={{
              fontSize: '2rem',
              textAlign: 'center',
              '@media (max-width: 442px)': {
                fontSize: '1rem',
              },
            }}
          >
           Arrays
          </Typography>
        </Box>
        <Typography>Arrays in JavaScript are used to store multiple values in a single variable. They provide a way to organize and access data using numeric indices.

To declare an array, you can use square brackets [] and separate the values with commas. </Typography>
<Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const t = [1, -1, 3];
console.log(t.length); // Output: 3
console.log(t[1]);     // Output: -1
t.push(5);
console.log(t.length); // Output: 4
t[0] = 10;
console.log(t); // Output: [10, -1, 3, 5]
t.forEach(value => {
    console.log(value); // Output: 10, -1, 3, 5 (each value on its own line)
  });
  
`}
        </SyntaxHighlighter>
      </Box>
<Typography>In the previous example, a new element was added to the array using the push method. In the context of React, functional programming techniques are often applied, and one feature is to use immutable data structures. In React code, it is recommended to use the concat method instead, which does not add an element to the existing array but creates a new array that includes the element to be added along with the content of the original array.</Typography>
<Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const t = [1, -1, 3];
const t2 = t.concat(5);

console.log(t);  // Output: [1, -1, 3]
console.log(t2); // Output: [1, -1, 3, 5]  
`}
        </SyntaxHighlighter>
      </Box>
      <Typography>Arrays have many useful operations defined for them. Let's look at a small example of using the map method:</Typography>
      <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const t = [1, 2, 3];

const m1 = t.map(value => value * 2);
console.log(m1); // Output: [2, 4, 6]
`}
        </SyntaxHighlighter>
      </Box>
      <Typography>The map method creates a new array based on the original array. Each element of the new array is generated using the function provided as a parameter to map. In this example, the function multiplies each original number by 2 to create the new array.</Typography>
      <Typography>Individual elements of an array can be easily assigned to variables using the destructuring assignment:</Typography>
      <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const t = [1, 2, 3, 4, 5];

const [first, second, ...rest] = t;

console.log(first, second); // Output: 1, 2
console.log(rest);          // Output: [3, 4, 5]

`}
        </SyntaxHighlighter>
      </Box>
<Typography>In the above code, the values of the first two numbers in the array are assigned to the variables first and second. The remaining numbers are collected into a new array assigned to the variable rest.</Typography>
    
<Box>
          <Typography
            sx={{
              fontSize: '2rem',
              textAlign: 'center',
              '@media (max-width: 442px)': {
                fontSize: '1rem',
              },
            }}
          >
           Objects
          </Typography>
        </Box>
<Typography>In JavaScript, there are a few ways to define objects. One commonly used method is object literals, where an object is defined by listing its properties within curly braces:</Typography>
<Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const object1 = {
  city: 'New York',
  population: 8000000,
  country: 'USA',
};

const object2 = {
  city: 'Paris',
  population: 2200000,
  country: 'France',
};

const object3 = {
  city: 'Tokyo',
  population: 14000000,
  country: 'Japan',
};

`}
        </SyntaxHighlighter>
      </Box>

<Typography>In this example, we have defined three objects representing different cities. Each object has properties such as city, population, and country that provide information about the respective cities.

You can access the properties using dot notation or square brackets:</Typography>
      <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`console.log(object1.city); // Output: New York
console.log(object2['population']); // Output: 2200000
`}
        </SyntaxHighlighter>
      </Box>

<Typography>New properties can be added dynamically to objects using dot notation or square brackets:</Typography>
      <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`object1.language = 'English';
object2['landmark'] = 'Eiffel Tower';
`}
        </SyntaxHighlighter>
      </Box>

      <Box>
          <Typography
            sx={{
              fontSize: '2rem',
              textAlign: 'center',
              '@media (max-width: 442px)': {
                fontSize: '1rem',
              },
            }}
          >
           Functions
          </Typography>
        </Box>

    <Typography>I personally suggest using arrow functions because they are the most clear ones:</Typography>
    <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const greet = (name) => {
  console.log(name);
  console.log('Have a great day!');
};

greet('Alice');
// Output:
// Welcome, Alice!
// Have a great day!

`}
        </SyntaxHighlighter>
      </Box>

      <Box
        sx={{
          borderRadius: '1rem',
        }}
      >
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const calculateSquare = (number) => {
  return number * number;
};

console.log(calculateSquare(5)); // Output: 25
`}
        </SyntaxHighlighter>
      </Box>
    </Container>
  )
}

export default RFPart2Material