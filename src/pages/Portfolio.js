import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Image } from 'react-bootstrap';
import styles from '../styles/Portfolio.module.css';
import generalStyles from '../styles/General.module.css';
import Htmllogo from '../assets/html-logo.webp';
import Csslogo from '../assets/css-logo.png';
import Jslogo from '../assets/js-logo.png';
import Pythonlogo from '../assets/python-logo.png';
import Djangologo from '../assets/django-logo.webp';
import Reactlogo from '../assets/react-logo.png';
import Bootstraplogo from '../assets/bootstrap-logo.jpg';
import DjangoRest from '../assets/djangorest-logo.png';
import GitLogo from '../assets/git-logo.webp';
import HerokuLogo from '../assets/heroku-logo.svg';
import PostgresLogo from '../assets/postgressql-logo.png';
import ReactBootstrapLogo from '../assets/react-bootstrap-logo.png';
import CloudinaryLogo from '../assets/cloudinary-logo.png';

import CandClaptop from '../assets/cakes&cokkies-laptop.png';
import CandClargescreen from '../assets/cakes&cokkies-largescreen.png';
import CandCmobile from '../assets/cakes&cokkies-mobile.png';
import CandCtab from '../assets/cakes&cokkies-tab.png';

import ssp_largescreen from '../assets/ssp-largescreen.png';
import ssp_laptop from '../assets/ssp-laptop.png';
import ssp_tab from '../assets/ssp-tab.png';
import ssp_mobile from '../assets/ssp-mobile.png';

import StackLogo from '../components/StackLogo';

const Portfolio = () => {
  return (
    <>
      <div className={styles.ProjectContainer}>
        <Parallax pages={7}>
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
          
          {/** Project 1 */}
          <ParallaxLayer offset={1} speed={0.5} style={{ zIndex: 2 }} sticky={{ start: 1, end: 2 }}>
            <div className={styles.PortfolioLeftContainer}>
              <p className={generalStyles.Heading}>Cakes&Cookies</p>
              <p className={`${generalStyles.Details} ${styles.TextLeft}`}>
                A Website built for an imaginary bakery business. I mainly 
                concentrated on the responsiveness and aesthetics. It is fully 
                responsive on different screen sizes.
              </p>
              <div className={styles.LogoContainer}>
                <StackLogo logo={Htmllogo} framework="HTML"/>
                <StackLogo logo={Csslogo} framework="CSS"/>
                <StackLogo logo={GitLogo} framework="Git"/>
              </div>
            </div>
          </ParallaxLayer>
          
          <ParallaxLayer offset={1} speed={.5} style={{ zIndex: 2 }}>
            <div className={`${styles.ImageContainer}`}>
              <ParallaxLayer offset={1} speed={0.5} style={{ zIndex: 2 }}>
                <Image src={CandClaptop} alt="Project 1 Image 1" className={`${styles.ProjectImage} ${styles.CandClaptop}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={1.05} speed={1} style={{ zIndex: 3 }}>
                <Image src={CandClargescreen} alt="Project 1 Image 2" className={`${styles.ProjectImage} ${styles.CandClargescreen}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={1.1} speed={1.5} style={{ zIndex: 4 }}>
                <Image src={CandCmobile} alt="Project 1 Image 3" className={`${styles.ProjectImage} ${styles.CandCmobile}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={1.15} speed={2} style={{ zIndex: 1 }}>
                <Image src={CandCtab} alt="Project 1 Image 4" className={`${styles.ProjectImage} ${styles.CandCtab}`} />
              </ParallaxLayer>
            </div>
          </ParallaxLayer>
          
          {/** Project 2 */}
          <ParallaxLayer offset={3} speed={0.5} style={{ zIndex: 2 }} sticky={{ start: 3, end: 4 }}>
            <div className={styles.PortfolioLeftContainer}>
              <p className={generalStyles.Heading}>Student Study Portal</p>
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
              <p className={generalStyles.Heading}>Paws & Snaps</p>
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
                <Image  alt="Project 3 Image 1" className={`${styles.ProjectImage} `} />
              </ParallaxLayer>
              <ParallaxLayer offset={5.05} speed={1} style={{ zIndex: 3 }}>
                <Image  alt="Project 3 Image 2" className={`${styles.ProjectImage} `} />
              </ParallaxLayer>
              <ParallaxLayer offset={5.1} speed={1.5} style={{ zIndex: 4 }}>
                <Image  alt="Project 3 Image 3" className={`${styles.ProjectImage}`} />
              </ParallaxLayer>
              <ParallaxLayer offset={5.15} speed={2} style={{ zIndex: 1 }}>
                <Image alt="Project 3 Image 4" className={`${styles.ProjectImage}`} />
              </ParallaxLayer>
            </div>
          </ParallaxLayer>

        </Parallax>
      </div>
    </>
  );
};

export default Portfolio;
