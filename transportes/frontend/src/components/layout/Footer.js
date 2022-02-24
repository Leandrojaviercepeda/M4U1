import React from 'react';
import styles from '../../styles/components/layout/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.main}>
      <p>{`Derechos reservados. Transportes ${new Date().getDay()}${new Date().getDay()}/${new Date().getFullYear()}`}</p>
    </footer>
  );
}

export default Footer;