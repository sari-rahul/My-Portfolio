import React from 'react';
import Image from 'react-bootstrap/Image';
import styles from '../styles/StackLogo.module.css';

const StackLogo = ({framework,logo }) => {
  return (
    <Image 
      src={logo} 
      alt={`${framework} logo`} 
      className={styles.StackLogo} 
    />
  )
}

export default StackLogo
