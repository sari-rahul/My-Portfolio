import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/About.module.css';
import generalStyles from '../styles/General.module.css';
import SkillsChart from '../components/Skills';
import DeskImage  from '../assets/desktopimage.jpg';
import FactsImage from '../assets/momAndChildGarndening.jpg';
import PortfolioImage from '../assets/github-image.png';

const About = () => {

    const navigate = useNavigate();
    const handleButtonClick = () =>{
        navigate('/mystory');
    };

  return (
    <>
    <Container className={styles.AboutContainer}>
        <div className={`${generalStyles.LeftContainer} text-start }`}>
            <div className={generalStyles.BigHeading}>about.</div>
            <div className={generalStyles.Title}>
                I’m a web developer based in vibrant Stuttgart, Germany.
            </div>
            <div className={generalStyles.Details}>
            Since 2019, I've been dedicated to transforming complex 
            challenges into elegant, efficient, and user-friendly web 
            solutions. When I'm not immersed in code, you can find me 
            experimenting with new recipes in the kitchen, gardening 
            or enjoying outdoors.
            </div>

            <button className={styles.ResumeButton}><i className="fa-solid fa-download"></i> Resume</button>
        </div>
        <div className={generalStyles.RightContainer}>
            <img src={PortfolioImage} alt="portfolio" />
        </div>
    </Container>
    <div className={`${generalStyles.GreyBackground}  p-5`}>
        <Container>
        <h1 className= {`${generalStyles.Heading} text-end`}>My Skills</h1>
        <SkillsChart/>
        </Container>
    </div>
    <Container className={styles.AboutContainer}>
        <div className={generalStyles.LeftContainer}>
            <img src={FactsImage} alt="Mom and son in garden" />
        </div>
        <div className={`${generalStyles.RightContainer} ${generalStyles.Height} 
                ${styles.PaddingLeft} pt-5  text-start`}>
            <div className={generalStyles.Heading}>Random Facts</div>
            <div className={`${generalStyles.Details}`}>
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
    <div className={generalStyles.GreyBackground}>
        <Container className={styles.AboutContainer}>
            <div className={`${generalStyles.LeftContainer} text-start }`}>
                <div className={`${generalStyles.Heading} p-0`}>My Story</div>
                <div className={`${generalStyles.Details}`}>
                    Learn a little bit more about me, how I got into developing , and how 
                    I built my career as a Web Developer. I’ve included key things 
                    I've learned, book recommendations, and even some sneak peeks of the 
                    first websites I created.
                </div>
                <br />
                <button className={`${styles.ReadmeButton} text-start`} onClick={handleButtonClick}>Read my story</button>

            </div>
            <div className={`${generalStyles.RightContainer} ${generalStyles.Height} `}>
                <img src={DeskImage} alt="workstation" className={`${styles.Border} w-75 h-75`} />
            </div>
        </Container>
    </div>
      
    </>
  )
}

export default About
