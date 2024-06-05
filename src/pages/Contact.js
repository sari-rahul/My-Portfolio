import React from 'react';
import {Container} from 'react-bootstrap';
import styles from '../styles/Contact.module.css';
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
    <div className={`${styles.GreyBackground} p-5`}>
      <Container>
      <h1 className={`${styles.Title} text-start`}>Send me an Email</h1>
      <Form className={`${styles.EmailContainer}`}>
        <div className={`${styles.LeftContainer}`}>
          <div className={styles.ShorterDiv}>
          <Form.Group className='mb-3' controlId="Form.ControlInput">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" className={`${styles.Border} w`} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Form.ControlInput">
            <Form.Label>Name </Form.Label>
            <Form.Control type="text" className={`${styles.Border}`}/>
          </Form.Group>
          </div>
        </div>
        <div className={styles.RightContainer}>
          <div className={styles.ShorterDiv}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label> textarea</Form.Label>
              <Form.Control as="textarea" rows={5} className={`${styles.Border}`} />
            </Form.Group>
            <button>Send Email</button>
        </div>
        </div>  
      </Form>
      </Container>
    </div>
    </>
  );
};

export default Contact
