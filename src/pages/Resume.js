import React from 'react';
import { Container } from 'react-bootstrap';

import styles from '../styles/Resume.module.css';
import generalStyles from'../styles/General.module.css';


const Resume = () => {
  return (
    <>
    <Container className={`${styles.ResumeContainer} ${generalStyles.GreyBackground}`}> 
      <div className={`${styles.OutterContainer}`}>
        <div className={`${generalStyles.LeftContainer} ${generalStyles.Details}`}>
          You can see my resume here. It provides a 
          comprehensive overview of my professional background, 
          including my education, work experience, and key skills. 
          Feel free to review it to learn more about my qualifications 
          and career achievements.
        </div>
        <div className={`${generalStyles.RightContainer} ${styles.DisplayCenter}`}>
          <button className={styles.ResumeButton}>
            <i className="fa-solid fa-download"></i> Resume </button>
        </div>  
      </div>
      <div className={`${styles.OutterContainer}`}>        
        <div className={`${generalStyles.LeftContainer} ${generalStyles.Details}`}>
          This section showcases the diverse range of professional 
          certifications I've acquired, reflecting my dedication to 
          continuous learning and expertise in my field. Each certification 
          represents my commitment to mastering new skills and staying 
          updated with industry standards. Reviewing my certifications will 
          provide you with insight into my specialized knowledge and 
          professional development journey.
        </div>
        <div className={`${generalStyles.RightContainer}  ${styles.DisplayCenter}`}>
          <button className={styles.ResumeButton}>
            <i className="fa-solid fa-download"></i> Certificates </button>
        </div>
         
      </div>
      <div className={`${styles.OutterContainer}`}>
        <div className={`${generalStyles.LeftContainer} ${generalStyles.Details}`}> 
          These documents provide a detailed account of my professional 
          journey, highlighting the various roles I've undertaken and the 
          impact I've made in each position. They serve as a testament to 
          my skills, dedication, and the value I have brought to past employers.
          Reviewing my experience certificates will offer you a comprehensive 
          understanding of my career progression and accomplishments.
        </div>
        <div className={`${generalStyles.RightContainer}  ${styles.DisplayCenter}`}>
          <button className={styles.ResumeButton}>
            <i className="fa-solid fa-download"></i>  Experiences </button>
        </div>        
      </div>
    </Container>
    </>
  )
}

export default Resume
