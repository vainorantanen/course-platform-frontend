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
import ReactFrontendMain from "./components/Courses/ReactFrontend/ReactFrontendMain";
import RFPart1 from "./components/Courses/ReactFrontend/RFPart1";
import ScrollToTop from "./components/ScrollToTop";
import RFPart2 from "./components/Courses/ReactFrontend/RFPart2";
import RFPart3 from "./components/Courses/ReactFrontend/RFPart3";

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
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<AllCourses />}/>
            <Route path="/courses/reactfrontend" element={<ReactFrontendMain />}/>
            <Route path="/courses/reactfrontend/part1" element={<RFPart1 />} />
            <Route path="/courses/reactfrontend/part2" element={<RFPart2 />} />
            <Route path="/courses/reactfrontend/part3" element={<RFPart3 />} />
          </Routes>
          <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App;
