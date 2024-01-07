import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styling/header.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.link} to='/'>
        Instagram
      </Link>
      <Link className={styles.link} to='/paintings'>
        Politica de livrare
      </Link>
      <Link className={styles.link} to='/sculptures'>
        Retur
      </Link>
    </div>
  );
};
export default Footer;