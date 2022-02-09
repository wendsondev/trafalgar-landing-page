import { useState } from 'react';
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi';
import styles from './styles.module.scss';

export function Nav () {

  const [currentActive, setCurrentActive] = useState('');
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className={styles.container}>

      <div className={`${styles.menu} ${menuIsOpen ? styles.active : ''}`}>
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
      </div>

      {
        menuIsOpen ?
          <HiMenuAlt3 
            size={48} 
            className={styles.closeMenuMobile} 
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          />
        :
          <HiMenu 
            size={48} 
            className={styles.menuMobile}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          />
      }
    </nav> 
  );
}