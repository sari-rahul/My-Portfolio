import React from 'react';
import Image from 'react-bootstrap/Image';
import Tippy from '@tippyjs/react';
import styles from '../styles/StackLogo.module.css';

const StackLogo = ({framework,logo }) => {
  return (
   <Tippy content={framework} animation='scale' placement='bottom' className={styles.CustomTooltip }>
      <Image 
        src={logo} 
        alt={`${framework} logo`} 
        className={styles.StackLogo} 
      />
   </Tippy>     
  );
};

export default StackLogo
