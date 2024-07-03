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
  const logos = [
    { src: Htmllogo, alt: 'HTML', style: styles.HtmlLogo },
    { src: Csslogo, alt: 'CSS', style: styles.CssLogo },
    { src: Jslogo, alt: 'JavaScript', style: styles.JsLogo },
    { src: Pythonlogo, alt: 'Python', style: styles.PythonLogo },
    { src: Djangologo, alt: 'Django', style: styles.DjangoLogo },
    { src: Reactlogo, alt: 'React', style: styles.ReactLogo },
    { src: Bootstraplogo, alt: 'Bootstrap', style: styles.BootstrapLogo },
    { src: GitLogo, alt: 'Git', style: styles.GitLogo },
    { src: HerokuLogo, alt: 'Heroku', style: styles.HerokuLogo },
    { src: PostgresLogo, alt: 'Postgres', style: styles.PostgresLogo },
    { src: ReactBootstrapLogo, alt: 'React Bootstrap', style: styles.ReactBootstrapLogo },
    { src: WordPresslogo, alt: 'WordPress', style: styles.WordPressLogo },
    { src: Drupallogo, alt: 'Drupal', style: styles.DrupaLogo }
  ];

  const duplicatedLogos = Array(15).fill(logos).flat();

  return (
    <div className={styles.ProjectContainer}>
      <Parallax pages={5}>
        {duplicatedLogos.map((logo, index) => (
          <ParallaxLayer
            key={index}
            offset={Math.random() * 5}
            speed={Math.random() * 2}
            style={{ zIndex: 1 }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              className={`${styles.TechLogo} ${logo.style}`}
              style={{
                position: 'absolute',
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `move ${Math.random() * 10 + 5}s linear infinite`
              }}
            />
          </ParallaxLayer>
        ))}

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

        <ParallaxLayer offset={1} speed={0.5} style={{ zIndex: 2 }}>
          <div className={styles.Project}>
            <h2>Project 1 Title</h2>
            <p>Project 1 Description</p>
            <Image src={PortfolioImage} alt="Project 1" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.7} style={{ zIndex: 2 }}>
          <div className={styles.Project}>
            <h2>Project 2 Title</h2>
            <p>Project 2 Description</p>
            <Image src={PortfolioImage} alt="Project 2" />
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.9} style={{ zIndex: 2 }}>
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
