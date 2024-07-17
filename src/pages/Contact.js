import React, { useRef } from 'react';
import {Container} from 'react-bootstrap';
import styles from '../styles/Contact.module.css';
import generalStyles from '../styles/General.module.css';
import ContactImage from '../assets/github-image.png';
import FaceBookLogo from '../assets/facebook-logo.jpg';
import InstaLogo from '../assets/insta-logo.jpg';
import WhatsappLogo from '../assets/whatsapp-logo.jpg';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';



emailjs.init('OpJYXrgt0vN7X3ifW');

export const Contact = () => {

  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_h99tp7z', 'template_q9do1eg', form.current, 'OpJYXrgt0vN7X3ifW')
    .then(
      (result) => {
        console.log("Email sent successfully.", result.text);
      },
      (error) => {
        console.log("Failed.", error.text);
      }
    );
  e.target.reset(); 
};

  return (
    <>
    <Container className={styles.ContactContainer}>
      <div className={`${generalStyles.LeftContainer} text-start }`}>
        <div className={generalStyles.BigHeading}>contact.</div>
        <div className={generalStyles.Title}>
            Get in touch via Social Media or email.
        </div>
        <div className={styles.LogoContainer}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={FaceBookLogo} alt="FaceBookLogo" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={InstaLogo} alt="InstaLogo" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img src={WhatsappLogo} alt="WhatsappLogo" />
            </a>
        </div>
        </div>
      <div className={generalStyles.RightContainer}>
        <img src={ContactImage} alt="Contact" />
      </div>
    </Container>
    <div className={`${generalStyles.GreyBackground} p-5`}>
      <Container>
      <h1 className={`${generalStyles.Title} text-start`}>Send me an Email</h1>
      <Form  ref={form} className={`${styles.EmailContainer}`} onSubmit={sendEmail}>
        <div className={styles.EmailInnerContainer}>
          <div className={`${generalStyles.LeftContainer}`}>
            <div className={styles.ShorterDiv}>
            <Form.Group className={`${styles.Label} mb-3`} controlId="Form.ControlInput">
              <Form.Label className='text-left'>Email </Form.Label>
              <Form.Control 
                type="email" 
                name="user_email"
                className={`${generalStyles.Border} p-3`} 
                required
                />
            </Form.Group>
            <Form.Group className={`${styles.Label} mb-3`} controlId="Form.ControlInput">
              <Form.Label className='text-left'>Name </Form.Label>
              <Form.Control 
                type="text" 
                name='user_name'
                className={`${generalStyles.Border}  p-3`}
                required
                />
            </Form.Group>
            </div>
          </div>
          <div className={generalStyles.RightContainer}>
            <div className={styles.ShorterDiv}>
              <Form.Group className={`${styles.Label} mb-3`} controlId="Form.ControlTextarea">
                <Form.Label className='text-left'>Message</Form.Label>
                <Form.Control 
                  as="textarea" rows={5}
                  name='message' 
                  className={`${generalStyles.Border} p-4`} 
                  required
                 />
              </Form.Group>
          </div>
          </div> 
        </div> 
        <div className={styles.ButtonDiv}>
          <button type="submit" className={styles.EmailButton}>Send Email</button>
        </div>
      </Form>
      </Container>
    </div>
    </>
  );
};

export default Contact
