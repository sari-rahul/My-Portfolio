import React from 'react';
import {Container} from 'react-bootstrap';
import styles from '../styles/Contact.module.css';
import generalStyles from '../styles/General.module.css';
import ContactImage from '../assets/github-image.png';
import FaceBookLogo from '../assets/facebook-logo.jpg';
import InstaLogo from '../assets/insta-logo.jpg';
import TwitterLogo from '../assets/twitter-logo.jpg';
import WhatsappLogo from '../assets/whatsapp-logo.jpg';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <>
    <Container className={styles.ContactContainer}>
      <div className={`${generalStyles.LeftContainer} text-start }`}>
        <div className={generalStyles.BigHeading}>contact.</div>
        <div className={generalStyles.Title}>
            Get in touch via Social Media or email.
        </div>
        <div className={styles.LogoContainer}>
          <img src={FaceBookLogo} alt="FaceBookLogo"/>
          <img src={InstaLogo} alt="InstaLogo" />
          <img src={TwitterLogo} alt="TwitterLogo" />
          <img src={WhatsappLogo} alt="WhatsappLogo" />
        </div>
        </div>
      <div className={generalStyles.RightContainer}>
        <img src={ContactImage} alt="Contact" />
      </div>
    </Container>
    <div className={`${generalStyles.GreyBackground} p-5`}>
      <Container>
      <h1 className={`${generalStyles.Title} text-start`}>Send me an Email</h1>
      <Form className={`${styles.EmailContainer}`}>
        <div className={styles.EmailInnerContainer}>
          <div className={`${generalStyles.LeftContainer}`}>
            <div className={styles.ShorterDiv}>
            <Form.Group className={`${styles.Label} mb-3`} controlId="Form.ControlInput">
              <Form.Label className='text-left'>Email </Form.Label>
              <Form.Control type="email" className={`${generalStyles.Border} p-3`} />
            </Form.Group>
            <Form.Group className={`${styles.Label} mb-3`} controlId="Form.ControlInput">
              <Form.Label className='text-left'>Name </Form.Label>
              <Form.Control type="text" className={`${generalStyles.Border}  p-3`}/>
            </Form.Group>
            </div>
          </div>
          <div className={generalStyles.RightContainer}>
            <div className={styles.ShorterDiv}>
              <Form.Group className={`${styles.Label} mb-3`} controlId="Form.ControlTextarea">
                <Form.Label className='text-left'>Message</Form.Label>
                <Form.Control as="textarea" rows={5} className={`${generalStyles.Border} p-4`} />
              </Form.Group>
          </div>
          </div> 
        </div> 
        <div className={styles.ButtonDiv}>
          <button className={styles.EmailButton}>Send Email</button>
        </div>
      </Form>
      </Container>
    </div>
    </>
  );
};

export default Contact
