import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/About.module.css';
import SkillsChart from '../components/Skills';
import DeskImage  from '../assets/desktopimage.jpg';
import FactsImage from '../assets/momAndChildGarndening.jpg';
import PortfolioImage from '../assets/github-image.png';

const Aboutnew = () => {
  return (
    <>
    <Container className={styles.AboutContainer}>
        <div className={`${styles.LeftContainer} text-start }`}>
            <div className={styles.BigHeading}>about.</div>
            <div className={styles.Title}>
                I’m a web developer based in vibrant Stuttgart, Germany.
            </div>
            <div className={styles.Details}>
            Since 2019, I've been dedicated to transforming complex 
            challenges into elegant, efficient, and user-friendly web 
            solutions. When I'm not immersed in code, you can find me 
            experimenting with new recipes in the kitchen, gardening 
            or enjoying outdoors.
            </div>
        </div>
        <div className={styles.RightContainer}>
            <img src={PortfolioImage} alt="portfolio" />
        </div>
    </Container>
    <div className={`${styles.GreyBackground}  p-5`}>
        <Container>
        <h1 className= {`${styles.Heading} text-end`}>My Skills</h1>
        <SkillsChart/>
        </Container>
    </div>
    <Container className={styles.AboutContainer}>
        <div className={styles.LeftContainer}>
            <img src={FactsImage} alt="Mom and son in garden" />
        </div>
        <div className={`${styles.RightContainer} ${styles.Height} ${styles.PaddingLeft} pt-5  text-start`}>
            <div className={styles.Heading}>Random Facts</div>
            <div className={`${styles.Details}`}>
                <ul>I am a Coffee Person.</ul>
                <ul>I am into designing and sketching.</ul>
                <ul>I love cooking and trying new recipes.</ul>
                <ul>Gardening is my zen time.</ul>
                <ul>I'm a bit of a clean freak.</ul>
                <ul>A proud and loving mother.</ul>
                <ul>Love spending quality time with my family.</ul>    
            </div>
        </div>
    </Container>
    <div className={styles.GreyBackground}>
        <Container className={styles.AboutContainer}>
            <div className={`${styles.LeftContainer} text-start }`}>
                <div className={`${styles.Heading} p-0`}>My Story</div>
                <div className={`${styles.Details}`}>
                    Learn a little bit more about me, how I got into developing , and how 
                    I built my career as a Web Developer. I’ve included key things 
                    I've learned, book recommendations, and even some sneak peeks of the 
                    first websites I created.
                </div>
                <br />
                <button className={`${styles.ReadmeButton} text-start`}>Read my story</button>

            </div>
            <div className={`${styles.RightContainer} ${styles.Height} `}>
                <img src={DeskImage} alt="workstation" className={`${styles.Border} w-75 h-75`} />
            </div>
        </Container>
    </div>
      
    </>
  )
}

export default Aboutnew
