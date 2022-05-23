import { useState } from 'react';
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';
import styles from './styles.module.scss';

export function Nav() {

  const [currentActive, setCurrentActive] = useState('');
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <nav className={styles.container}>

      <div className={`${styles.menu} ${menuIsOpen ? styles.active : ''}`}>
        <HashLink
          to="#home"
          smooth
          className={currentActive === 'home' ? styles.active : ''}
          onClick={() => setCurrentActive('home')}>Home</HashLink>

        <HashLink
          to="#find"
          smooth
          className={currentActive === 'find' ? styles.active : ''}
          onClick={() => setCurrentActive('find')}>Find a doctor</HashLink>

        <HashLink
          to="#apps"
          smooth
          className={currentActive === 'apps' ? styles.active : ''}
          onClick={() => setCurrentActive('apps')}>Apps</HashLink>

        <HashLink
          to="#testimonials"
          smooth
          className={currentActive === 'testimonials' ? styles.active : ''}
          onClick={() => setCurrentActive('testimonials')}>Testimonials</HashLink>

        <HashLink
          to="#about"
          smooth
          className={currentActive === 'about' ? styles.active : ''}
          onClick={() => setCurrentActive('about')}>About Us</HashLink>
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