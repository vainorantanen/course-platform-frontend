import { Container } from "@mui/material";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer'
import './App.css'

import {
  Routes, Route
} from 'react-router-dom'

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from "@emotion/react";
import AllCourses from "./components/Courses/AllCourses";

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat'
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<AllCourses />}/>
          </Routes>
          <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App;
