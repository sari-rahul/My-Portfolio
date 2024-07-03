import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Image } from 'react-bootstrap';
import styles from '../styles/Portfolio.module.css';
import generalStyles from '../styles/General.module.css';
import PortfolioImage from '../assets/portfolioimage.jpg';
import Htmllogo from '../assets/html-logo.webp';
import Csslogo from '../assets/css-logo.png';
import Jslogo from '../assets/js-logo.png';
import Pythonlogo from '../assets/python-logo.png';
import Djangologo from '../assets/django-logo.webp';
import Reactlogo from '../assets/react-logo.png';
import Bootstraplogo from '../assets/bootstrap-logo.jpg';
import GitLogo from '../assets/git-logo.webp';
import HerokuLogo from '../assets/heroku-logo.svg';
import PostgresLogo from '../assets/postgressql-logo.png';
import ReactBootstrapLogo from '../assets/react-bootstrap-logo.png';
import WordPresslogo from '../assets/wordpress-logo.png';
import Drupallogo from '../assets/drupal-logo.png';

const Portfolio = () => {
  return (
    <div className={styles.ProjectContainer}>
      <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.5}>
          <div className={styles.CenterCard}>
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
        </ParallaxLayer>
        
        <ParallaxLayer offset={0.2} speed={0.5}>
          <Image src={Htmllogo} alt="HTML" className={styles.TechLogo} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.4} speed={0.7}>
          <Image src={Csslogo} alt="CSS" className={styles.TechLogo} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={0.9}>
          <Image src={Jslogo} alt="JavaScript" className={styles.TechLogo} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.8} speed={1.1}>
          <Image src={Pythonlogo} alt="Python" className={styles.TechLogo} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1.3}>
          <Image src={Djangologo} alt="Django" className={styles.TechLogo} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={1.5}>
          <Image src={Reactlogo} alt="React" className={styles.TechLogo} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.4} speed={1.7}>
          <Image src={Bootstraplogo} alt="Bootstrap" className={styles.TechLogo} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.6} speed={1.9}>
          <Image src={GitLogo} alt="Git" className={styles.TechLogo} />
        </ParallaxLayer>
        <ParallaxLayer offset={1.8} speed={2.1}>
          <Image src={HerokuLogo} alt="Heroku" className={styles.TechLogo} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={2.3}>
          <Image src={PostgresLogo} alt="Postgres" className={styles.TechLogo} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} speed={2.5}>
          <Image src={ReactBootstrapLogo} alt="React Bootstrap" className={styles.TechLogo} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.4} speed={2.7}>
          <Image src={WordPresslogo} alt="WordPress" className={styles.TechLogo} />
        </ParallaxLayer>
        <ParallaxLayer offset={2.6} speed={2.9}>
          <Image src={Drupallogo} alt="Drupal" className={styles.TechLogo} />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5}>
          <div className={styles.Project}>
            <h2>Project 1 Title</h2>
            <p>Project 1 Description</p>
            <Image src={PortfolioImage} alt="Project 1" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3.5} speed={0.7}>
          <div className={styles.Project}>
            <h2>Project 2 Title</h2>
            <p>Project 2 Description</p>
            <Image src={PortfolioImage} alt="Project 2" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.9}>
          <div className={styles.Project}>
            <h2>Project 3 Title</h2>
            <p>Project 3 Description</p>
            <Image src={PortfolioImage} alt="Project 3" />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Portfolio;
