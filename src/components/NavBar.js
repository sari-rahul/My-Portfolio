import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  const location = useLocation();

  return (
    <Navbar expand="md" data-bs-theme="light" className={styles.NavBar}>
      <Container className={styles.NavContainer}>
        <Navbar.Brand as={Link} to="/about">
            <img src={Logo} alt="Logo" height={70} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.ToggleButton}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div className={styles.NavLinks}>
            <Nav.Item>
              <Link to="/about" className={`${styles.NavLink} ${location.pathname === '/about' ? styles.Active : ''}`}>
                about
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/portfolio" className={`${styles.NavLink} ${location.pathname === '/portfolio' ? styles.Active : ''}`}>
                portfolio
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/contact" className={`${styles.NavLink} ${location.pathname === '/contact' ? styles.Active : ''}`}>
                contact
              </Link>
            </Nav.Item>
            </div>
            <div className={styles.NavLinks}>
              <Nav.Link href="https://github.com/sari-rahul" target='_blank'>
              <i className="fa-brands fa-github"></i>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/sarimol-adampurath-90b320224/" target='_blank'>
                <i className="fa-brands fa-linkedin"></i>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavBar;
