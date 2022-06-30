import { useEffect, useState } from 'react';
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './styles.module.scss';

export function Nav() {

  const [currentActive, setCurrentActive] = useState('');
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    setCurrentActive(hash.split('#')[1]);
  }, [hash])

  return (
    <nav className={styles.container}>

      <div className={`${styles.menu} ${menuIsOpen ? styles.active : ''}`}>
        <HashLink
          to="#home"
          smooth
          className={currentActive === 'home' ? styles.active : ''}
        >Home</HashLink>

        <HashLink
          to="#find"
          smooth
          className={currentActive === 'find' ? styles.active : ''}
        >Find a doctor</HashLink>

        <HashLink
          to="#apps"
          smooth
          className={currentActive === 'apps' ? styles.active : ''}
        >Apps</HashLink>

        <HashLink
          to="#testimonials"
          smooth
          className={currentActive === 'testimonials' ? styles.active : ''}
        >Testimonials</HashLink>

        <HashLink
          to="#about"
          smooth
          className={currentActive === 'about' ? styles.active : ''}
        >About Us</HashLink>
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