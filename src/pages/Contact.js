import React from 'react';
import {Container} from 'react-bootstrap';
import styles from '../styles/Contact.module.css';
import ContactImage from '../assets/github-image.png';
import FaceBookLogo from '../assets/facebook-logo.jpg';
import InstaLogo from '../assets/insta-logo.jpg';
import TwitterLogo from '../assets/twitter-logo.jpg';
import WhatsappLogo from '../assets/whatsapp-logo.jpg';
const Contact = () => {
  return (
    <>
    <Container className={styles.ContactContainer}>
      <div className={`${styles.LeftContainer} text-start }`}>
        <div className={styles.BigHeading}>contact.</div>
        <div className={styles.Title}>
            Get in touch via Social Media or email.
        </div>
        <div className={styles.LogoContainer}>
          <img src={FaceBookLogo} alt="FaceBookLogo"/>
          <img src={InstaLogo} alt="InstaLogo" />
          <img src={TwitterLogo} alt="TwitterLogo" />
          <img src={WhatsappLogo} alt="WhatsappLogo" />
        </div>
        </div>
      <div className={styles.RightContainer}>
        <img src={ContactImage} alt="Contact Image" />
      </div>
    </Container>
    <Container></Container>
    </>
  )
}

export default Contact
