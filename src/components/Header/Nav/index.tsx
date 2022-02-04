import { useState } from 'react';
import styles from './styles.module.scss';

export function Nav () {

  const [currentActive, setCurrentActive] = useState('');

  return (
    <nav className={styles.container}>
      <a className={currentActive === 'home' ? styles.active : ''} href="#home" 
        onClick={() => setCurrentActive('home')}>Home</a>

      <a href="#find" 
        className={currentActive === 'find' ? styles.active : ''}
        onClick={() => setCurrentActive('find')}>Find a doctor</a>

      <a href="#apps"
        className={currentActive === 'apps' ? styles.active : ''}
        onClick={() => setCurrentActive('apps')}>Apps</a>

      <a href="#testimonials"
        className={currentActive === 'testimonials' ? styles.active : ''}
        onClick={() => setCurrentActive('testimonials')}>Testimonials</a>

      <a href="#about"
        className={currentActive === 'about' ? styles.active : ''}
        onClick={() => setCurrentActive('about')}>About Us</a>
    </nav> 
  );
}