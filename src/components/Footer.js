import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const location = useLocation();
  return (
    <Navbar expand="md" data-bs-theme="light" className={styles.Footer}>
        <Container className={styles.FooterContainer}>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Item>
              <Link to="/about" className={`${styles.FooterLink} ${location.pathname === '/about' ? styles.Active : ''}`}>
                about
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/portfolio" className={`${styles.FooterLink} ${location.pathname === '/portfolio' ? styles.Active : ''}`}>
                portfolio
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className={`${styles.FooterLink} ${location.pathname === '/contact' ? styles.Active : ''}`}>
                contact
              </Link>
            </Nav.Item>
            
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Footer
