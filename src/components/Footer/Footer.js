import React from 'react';
import { Container, Typography } from '@mui/material';
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import './footer.css'; // Import custom CSS for styling

const Footer = () => {
  return (
    <footer>
      <Container className='footerContainer'>
        <Typography variant="body1" className="companyName">
          Vainoe.com
        </Typography>

        <Typography variant="body1" className="copyright">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>

        <Typography variant="body1" className="address">
          123 Main Street, City, State, Country
        </Typography>

        <Typography variant="body1" className="contact">
          +1 123-456-7890
        </Typography>

        <Typography variant="body1" className="contact">
          info@example.com
        </Typography>

        <div className="socialIcons">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </div>

        <Typography variant="body1" className="poweredBy">
          Powered by Vainoe Oy
        </Typography>

        
      </Container>
    </footer>
  );
};

export default Footer;
