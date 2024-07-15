import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Image } from 'react-bootstrap';
import styles from '../styles/Portfolio.module.css';
import generalStyles from '../styles/General.module.css';
import Htmllogo from '../assets/html-logo.webp';
import Csslogo from '../assets/css-logo.png';
import Pythonlogo from '../assets/python-logo.png';
import Djangologo from '../assets/django-logo.webp';
import Reactlogo from '../assets/react-logo.png';
import Bootstraplogo from '../assets/bootstrap-logo.png';
import DjangoRest from '../assets/djangorest-logo.png';
import GitLogo from '../assets/git-logo.webp';
import HerokuLogo from '../assets/heroku-logo.svg';
import PostgresLogo from '../assets/postgressql-logo.png';
import ReactBootstrapLogo from '../assets/react-bootstrap-logo.png';
import CloudinaryLogo from '../assets/cloudinary-logo.png';
import NetlifyLogo from '../assets/netlify-logo.png';
import GitHubLogo from '../assets/gtihub-logo.png';

import CandC_laptop from '../assets/cakes&cokkies-laptop.png';
import CandC_largescreen from '../assets/cakes&cokkies-largescreen.png';
import CandC_mobile from '../assets/cakes&cokkies-mobile.png';
import CandC_tab from '../assets/cakes&cokkies-tab.png';

import ssp_largescreen from '../assets/ssp-largescreen.png';
import ssp_laptop from '../assets/ssp-laptop.png';
import ssp_tab from '../assets/ssp-tab.png';
import ssp_mobile from '../assets/ssp-mobile.png';

import pands_mobile from '../assets/pans-mobile.png';
import pands_largescreen from '../assets/pands-largescreen.png';
import pands_laptop from '../assets/pands-laptop.png';
import pands_tab from '../assets/pands-tab.png';

import bb_laptop from '../assets/bb-laptop.png';
import bb_largescreen from '../assets/bb-largescreen.png';
import bb_mobile from '../assets/bb-mobile.png';
import bb_tab from '../assets/bb-tab.png';

import StackLogo from '../components/StackLogo';

const Portfolio = () => {
  return (
    <>
      <div className={styles.ProjectContainer}>
        <Parallax pages={8}>
          <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: 2 }}>
            <div className={styles.CenterCard}>
              <div className={generalStyles.BigHeading}>portfolio.</div>
              <div className={generalStyles.Title}>
                Check out some of my latest websites or projects.
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
          
          {/** Project 1 */}
          <ParallaxLayer offset={1} speed={0.5} style={{ zIndex: 2 }} sticky={{ start: 1, end: 2 }}>
            <div className={styles.PortfolioLeftContainer}>
              <p className={styles.Heading}>Bite-Buzz</p>
              <p className={`${generalStyles.Details} ${styles.TextLeft}`}>
              Bite-Buzz is a frontend application developed using ReactJS, a popular JavaScript library 
              for building user interfaces. Version control for the project is managed with Git.
              </p>
              <div className={styles.LogoContainer}>
                <StackLogo logo={Reactlogo} framework="ReactJS"/>
                <StackLogo logo={GitLogo} framework="Git"/>
                <StackLogo logo={NetlifyLogo} framework="Netlify"/>
              </div>
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer offset={1} speed={0.5} style={{ zIndex: 2 }}>
            <div className={`${styles.ImageContainer}`}>
              <ParallaxLayer offset={1} speed={0.5} style={{ zIndex: 2 }}>
                <Image src={bb_laptop} alt="Project 1 Image 1" className={`${styles.ProjectImage} ${styles.bblaptop}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={1.05} speed={1} style={{ zIndex: 3 }}>
                <Image src={bb_largescreen} alt="Project 1 Image 2" className={`${styles.ProjectImage} ${styles.bblargescreen}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={1.1} speed={1.5} style={{ zIndex: 4 }}>
                <Image src={bb_mobile} alt="Project 1 Image 3" className={`${styles.ProjectImage} ${styles.bbmobile}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={1.15} speed={2} style={{ zIndex: 1 }}>
                <Image src={bb_tab} alt="Project 1 Image 4" className={`${styles.ProjectImage} ${styles.bbtab}`} />
              </ParallaxLayer>
            </div>
          </ParallaxLayer>
          
          {/** Project 2 */}
          <ParallaxLayer offset={3} speed={0.5} style={{ zIndex: 2 }} sticky={{ start: 3, end: 4 }}>
            <div className={styles.PortfolioLeftContainer}>
              <p className={styles.Heading}>Student Study Portal</p>
              <p className={`${generalStyles.Details} ${styles.TextLeft}`}>
                A website built for students, where they can create and store notes,
                refer different websites, and also ask questions and discuss subjects in the forum.
              </p>
              <div className={styles.LogoContainer}>
                <StackLogo logo={Htmllogo} framework="HTML"/>
                <StackLogo logo={Csslogo} framework="CSS"/>
                <StackLogo logo={Pythonlogo} framework="Python"/>
                <StackLogo logo={Bootstraplogo} framework="Bootstrap"/>
                <StackLogo logo={Djangologo} framework="Django"/>
                <StackLogo logo={PostgresLogo} framework="PostgresSQL"/>
                <StackLogo logo={HerokuLogo} framework="Heroku"/>
                <StackLogo logo={CloudinaryLogo} framework="Cloudinary"/>
                <StackLogo logo={GitLogo} framework="Git"/>
              </div>
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer offset={3} speed={0.5} style={{ zIndex: 2 }}>
            <div className={`${styles.ImageContainer}`}>
              <ParallaxLayer offset={3} speed={0.5} style={{ zIndex: 2 }}>
                <Image src={ssp_laptop} alt="Project 2 Image 1" className={`${styles.ProjectImage} ${styles.ssp_laptop}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={3.05} speed={1} style={{ zIndex: 3 }}>
                <Image src={ssp_largescreen} alt="Project 2 Image 2" className={`${styles.ProjectImage} ${styles.ssp_largescreen}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={3.1} speed={1.5} style={{ zIndex: 4 }}>
                <Image src={ssp_mobile} alt="Project 2 Image 3" className={`${styles.ProjectImage} ${styles.ssp_mobile}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={3.15} speed={2} style={{ zIndex: 1 }}>
                <Image src={ssp_tab} alt="Project 2 Image 4" className={`${styles.ProjectImage} ${styles.ssp_tab}`} />
              </ParallaxLayer>
            </div>
          </ParallaxLayer>

          {/** Project 3 */}
          <ParallaxLayer offset={5} speed={0.5} style={{ zIndex: 2 }} sticky={{ start: 5, end: 6 }}>
            <div className={styles.PortfolioLeftContainer}>
              <p className={styles.Heading}>Paws & Snaps</p>
              <p className={`${generalStyles.Details} ${styles.TextLeft}`}>
                A blog Website built using React and Django REST Framework. The users can read,
                add, delete, and update blogs. They can also comment on blogs which will be 
                published after admin approval.
              </p>
              <div className={styles.LogoContainer}>
                <StackLogo logo={Htmllogo} framework="HTML"/>
                <StackLogo logo={Csslogo} framework="CSS"/>
                <StackLogo logo={PostgresLogo} framework="PostgresSQL"/>
                <StackLogo logo={Reactlogo} framework="React"/>
                <StackLogo logo={DjangoRest} framework="DjangoRest"/>
                <StackLogo logo={ReactBootstrapLogo} framework="ReactBootstrap"/>
                <StackLogo logo={HerokuLogo} framework="Heroku"/>
                <StackLogo logo={CloudinaryLogo} framework="Cloudinary"/>
                <StackLogo logo={GitLogo} framework="Git"/>
              </div>
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer offset={5} speed={0.5} style={{ zIndex: 2 }}>
            <div className={`${styles.ImageContainer}`}>
              <ParallaxLayer offset={5} speed={0.5} style={{ zIndex: 2 }}>
                <Image  src={pands_laptop} alt="Project 3 Image 1" className={`${styles.ProjectImage} ${styles.pands_Laptop}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={5.05} speed={1} style={{ zIndex: 3 }}>
                <Image src={pands_largescreen} alt="Project 3 Image 2" className={`${styles.ProjectImage} ${styles.pands_Largescreen}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={5.1} speed={1.5} style={{ zIndex: 4 }}>
                <Image src={pands_mobile} alt="Project 3 Image 3" className={`${styles.ProjectImage} ${styles.pands_Mobile}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={5.15} speed={2} style={{ zIndex: 1 }}>
                <Image src={pands_tab} alt="Project 3 Image 4" className={`${styles.ProjectImage} ${styles.pands_Tab}`} />
              </ParallaxLayer>
            </div>
          </ParallaxLayer>

          {/** Project 4 */}
          <ParallaxLayer offset={7} speed={0.5} style={{ zIndex: 2 }} sticky={{ start: 7, end: 8}}>
            <div className={styles.PortfolioLeftContainer}>
              <p className={styles.Heading}>Cakes&Cookies</p>
              <p className={`${generalStyles.Details} ${styles.TextLeft}`}>
                A Website built using HTML and CSS for an imaginery Cake Baker.The version control was done 
                using Git.It is hosted on GitHub.
              </p>
              <div className={styles.LogoContainer}>
                <StackLogo logo={Htmllogo} framework="HTML"/>
                <StackLogo logo={Csslogo} framework="CSS"/>
                <StackLogo logo={GitLogo} framework="Git"/>
                <StackLogo logo={GitHubLogo} framework="GitHub"/>
              </div>
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer offset={7} speed={0.5} style={{ zIndex: 2 }}>
            <div className={`${styles.ImageContainer}`}>
              <ParallaxLayer offset={5} speed={0.5} style={{ zIndex: 2 }}>
                <Image  src={CandC_laptop} alt="Project 3 Image 1" className={`${styles.ProjectImage} ${styles.candc_Laptop}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={7.05} speed={1} style={{ zIndex: 3 }}>
                <Image src={CandC_largescreen} alt="Project 3 Image 2" className={`${styles.ProjectImage} ${styles.candc_Largescreen}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={7.1} speed={1.5} style={{ zIndex: 4 }}>
                <Image src={CandC_mobile} alt="Project 3 Image 3" className={`${styles.ProjectImage} ${styles.candc_Mobile}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={7.15} speed={2} style={{ zIndex: 1 }}>
                <Image src={CandC_tab} alt="Project 3 Image 4" className={`${styles.ProjectImage} ${styles.candc_Tab}`} />
              </ParallaxLayer>
            </div>
          </ParallaxLayer>

        </Parallax>
      </div>
    </>
  );
};

export default Portfolio;
