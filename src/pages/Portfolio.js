import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/Portfolio.module.css';
import generalStyles from '../styles/General.module.css';
import PortfolioImage from '../assets/portfolioimage.jpg';
import Htmllogo from '../assets/html-logo.webp';
import Csslogo from '../assets/css-logo.png';
import Jslogo from '../assets/js-logo.jpg';
import Pythonlogo from '../assets/python-logo.jpg';
import Djangologo from '../assets/django-logo.jpg';
import MongoDblogo from '../assets/momgoDb-logo.png';
import NodeJslogo from '../assets/nodejs-logo.png';
import Reactlogo from '../assets/react-logo.png';
import WordPresslogo from '../assets/wordpress-logo.png';
import Drupallogo from '../assets/drupal-logo.png';

const Portfolio = () => {
  return (
    <>
    <Container className={styles.PortfolioContainer}>
      <div className={`${generalStyles.LeftContainer} text-start }`}>
        <div className={generalStyles.BigHeading}>portfolio.</div>
        <div className={generalStyles.Title}>
        Check out some of my latest websites and case studies.
        </div>
        <div className={generalStyles.Details}>
        I have worked in small companies, where I discovered 
        a passion for software development. I have completed 
        several projects, driven by both the curriculum and my 
        self-motivation to deepen my expertise and practical 
        skills in the field.
        </div>
      </div>
      <div className={`${generalStyles.RightContainer} ${styles.PortfolioImage}`}>
          <img src={PortfolioImage} alt="computer and website" />
      </div>
    </Container>
    <div className={styles.LogoContainer}>
        <img src={Htmllogo} alt="Htmllogo" />
        <img src={Csslogo} alt="Csslogo" />
        <img src={Jslogo} alt="Jslogo" />
        <img src={Pythonlogo} alt="Pythonlogo" />
        <img src={Djangologo} alt="Djangologo" />
        <img src={MongoDblogo} alt="MongoDblogo" />
        <img src={NodeJslogo} alt="NodeJslogo" />
        <img src={Reactlogo} alt="Reactlogo" />
        <img src={WordPresslogo} alt="WordPresslogo" />
        <img src={Drupallogo} alt="Drupallogo" />
    </div>
    <div className={styles.ProjectContainer}>

    </div>
    </>
  )
}

export default Portfolio
