import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/Portfolio.module.css';
import PortfolioImage from '../assets/portfolioimage.jpg';

const Portfolio = () => {
  return (
    <>
    <Container className={styles.PortfolioContainer}>
      <div className={`${styles.LeftContainer} text-start }`}>
        <div className={styles.BigHeading}>portfolio.</div>
        <div className={styles.Title}>
        Check out some of my latest websites and case studies.
        </div>
        <div className={styles.Details}>
        I have worked in a small company, where I discovered 
        a passion for software development. I have completed 
        several projects, driven by both the curriculum and my 
        self-motivation to deepen my expertise and practical 
        skills in the field.
        </div>
      </div>
      <div className={styles.RightContainer}>
          <img src={PortfolioImage} alt="Image of computer and website" />
      </div>
    </Container>
    <div className={styles.ProjectContainer}>

    </div>
    </>
  )
}

export default Portfolio
