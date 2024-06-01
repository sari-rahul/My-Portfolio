import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/About.module.css';
const About = () => {
  return (
    <Container className={styles.AboutContainer}>
      <div className={styles.LeftContainer}>
        <div className={styles.Heading}>about.</div>
        <div className={styles.SubHeading}>
        Lorem ipsum dolor sit amet, consetetur sadip
        </div>
        <div className={styles.Data}>
        Lorem ipsum dolor sit amet, consetetur sadipscing 
        elitr, sed diam nonumy eirmod tempor invidunt ut 
        labore et dolore magna aliquyam erat, sed diam 
        voluptua. At vero eos et accusam et justo duo 
        </div>
      </div>
      <div className={styles.RightContainer}>
        <img src="" alt="" />
      </div>
    </Container>
  )
}

export default About
