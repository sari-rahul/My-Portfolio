import React from 'react';
import { Container } from 'react-bootstrap';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
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
    <div className={styles.ProjectContainer}>
      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.1}>
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
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
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
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.7}>
          <div className={styles.ProjectContainer}>
            {/* Project 1 */}
            <div className={styles.Project}>
              <h2>Project 1 Title</h2>
              <p>Project 1 Description</p>
              <img src={PortfolioImage} alt="Project 1" />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.9}>
          <div className={styles.ProjectContainer}>
            {/* Project 2 */}
            <div className={styles.Project}>
              <h2>Project 2 Title</h2>
              <p>Project 2 Description</p>
              <img src={PortfolioImage} alt="Project 2" />
            </div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={1.1}>
          <div className={styles.ProjectContainer}>
            {/* Project 3 */}
            <div className={styles.Project}>
              <h2>Project 3 Title</h2>
              <p>Project 3 Description</p>
              <img src={PortfolioImage} alt="Project 3" />
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
      </div>
    </>
  );
};

export default Portfolio
