import React from 'react';
import { Container } from 'react-bootstrap';
import styles from '../styles/About.module.css';
import SkillsChart from '../components/Skills';
const About = () => {
  return (
    <>
    <Container className={styles.AboutContainer}>
      <div className={styles.LeftContainer}>
        <div className={styles.Heading}>about.</div>
        <div className={styles.SubHeading}>
          I’m a web developer based in vibrant Stuttgart, Germany.
        </div>
        <div className={styles.Data}>
        Since 2019, I've been dedicated to transforming complex 
        challenges into elegant, efficient, and user-friendly web 
        solutions. When I'm not immersed in code, you can find me 
        experimenting with new recipes in the kitchen, gardening 
        or enjoying outdoors.
        </div>
      </div>
      <div className={styles.RightContainer}>
        <img src="" alt="" />
      </div>
    </Container>
    <div className={`${styles.AboutContainer} ${styles.GreyBackground}`}>
      <div className={styles.RandomLeft}>
        <img src="" alt="" />
      </div>
      <div className={styles.RandomRight}>
          <div className={styles.RandomHeading}>Random Facts</div>
          <div className={styles.Data}>
            <ul>I am a Coffee Person.</ul>
            <ul>I am into designing and sketching.</ul>
            <ul>I love cooking and trying new recipes.</ul>
            <ul>Gardening is my zen time.</ul>
            <ul>I'm a bit of a clean freak.</ul>
            <ul>A proud and loving mother.</ul>
            <ul>Love spending quality time with my family.</ul>
          </div>
      </div>
    </div>
    <Container className={styles.SkillContainer}>
        <h1> My Skills</h1>
        <SkillsChart/>
    </Container>
    <div className={` ${styles.GreyBackground}`}>
      <div className={styles.InnerContainer}>
        <div className={`${styles.MystoryLeft} ${styles.SmallContainer}`}>
          <div className={`${styles.RandomHeading} text-start p-0`}>My Story</div>
          <div className={`${styles.Data} text-start ml-auto`}>
            Learn a little bit more about me, how I got into developing , and how 
            I built my career as a Web Developer. I’ve included key things 
            I've learned, book recommendations, and even some sneak peeks of the 
            first websites I created.
          </div>
          <br />
          <button className={`${styles.ReadmeButton} text-start`}>Read My Story</button>
        </div>
        <div className={styles.MystoryRight}>
          <img src="" alt="" />
        </div>
      </div>
    </div>
    </>
  );
};

export default About
