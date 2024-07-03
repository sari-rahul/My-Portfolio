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

const Portfolio = () => {
  return (
    <>
      <div className={styles.ProjectContainer}>
        <Parallax pages={4}>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 2 }}>
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

          <ParallaxLayer offset={0.9} speed={0.5} style={{ zIndex: 2 }}>
            <div className={styles.Project}>
              <div className={generalStyles.LeftContainer}>
                <p className={generalStyles.Heading}>Project 1 Description</p>
                <div>Stack Logos</div>
              </div>
              <div className={`${styles.ImageContainer} `}>
                <ParallaxLayer offset={0.1} speed={0.5} style={{ zIndex: 2 }}>
                  <Image src={Pythonlogo} alt="Project 1 Image 1" className={styles.ProjectImage} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.3} speed={1} style={{ zIndex: 2 }}>
                  <Image src={Djangologo} alt="Project 1 Image 2" className={styles.ProjectImage} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.5} speed={1.5} style={{ zIndex: 2 }}>
                  <Image src={Reactlogo} alt="Project 1 Image 3" className={styles.ProjectImage} />
                </ParallaxLayer>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={0.7} style={{ zIndex: 2 }}>
            <div className={styles.Project}>
              <h2>Project 2 Title</h2>
              <p>Project 2 Description</p>
              <div className={styles.ImageContainer}>
                <ParallaxLayer offset={0.1} speed={0.5} style={{ zIndex: 2 }}>
                  <Image src={PortfolioImage} alt="Project 2 Image 1" className={styles.ProjectImage} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.3} speed={0.7} style={{ zIndex: 2 }}>
                  <Image src={PortfolioImage} alt="Project 2 Image 2" className={styles.ProjectImage} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.5} speed={0.9} style={{ zIndex: 2 }}>
                  <Image src={PortfolioImage} alt="Project 2 Image 3" className={styles.ProjectImage} />
                </ParallaxLayer>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={2.3} speed={0.9} style={{ zIndex: 2 }}>
            <div className={styles.Project}>
              <h2>Project 3 Title</h2>
              <p>Project 3 Description</p>
              <div className={styles.ImageContainer}>
                <ParallaxLayer offset={0.1} speed={0.5} style={{ zIndex: 2 }}>
                  <Image src={PortfolioImage} alt="Project 3 Image 1" className={styles.ProjectImage} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.3} speed={0.7} style={{ zIndex: 2 }}>
                  <Image src={PortfolioImage} alt="Project 3 Image 2" className={styles.ProjectImage} />
                </ParallaxLayer>
                <ParallaxLayer offset={0.5} speed={0.9} style={{ zIndex: 2 }}>
                  <Image src={PortfolioImage} alt="Project 3 Image 3" className={styles.ProjectImage} />
                </ParallaxLayer>
              </div>
            </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};

export default Portfolio;
