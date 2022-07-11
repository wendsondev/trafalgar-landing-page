import { useEffect, useState } from 'react';
import { HiMenu, HiMenuAlt3 } from 'react-icons/hi';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useTheme } from '../../../Contexts/Theme';
import styles from './styles.module.scss';

export function Nav() {

  const [currentActive, setCurrentActive] = useState('');
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();
  const { hash } = useLocation();

  useEffect(() => {
    setCurrentActive(hash.split('#')[1]);
  }, [hash])

  return (
    <nav className={styles.container}>

      <div className={`${styles.menu} ${menuIsOpen ? `${styles.active}` : ''}`}>
        <HashLink
          to="#home"
          smooth
          className={`${currentActive === 'home' ? `${styles.active} text` : 'textSecondary'} hover`}
        >Home</HashLink>

        <HashLink
          to="#find"
          smooth
          className={`${currentActive === 'find' ? `${styles.active} text` : 'textSecondary'} hover`}
        >Find a doctor</HashLink>

        <HashLink
          to="#apps"
          smooth
          className={`${currentActive === 'apps' ? `${styles.active} text` : 'textSecondary'} hover`}
        >Apps</HashLink>

        <HashLink
          to="#testimonials"
          smooth
          className={`${currentActive === 'testimonials' ? `${styles.active} text` : 'textSecondary'} hover`}
        >Testimonials</HashLink>

        <HashLink
          to="#about"
          smooth
          className={`${currentActive === 'about' ? `${styles.active} text` : 'textSecondary'} hover`}
        >About Us</HashLink>

        <button className="text" onClick={toggleTheme}>
          {
            theme === 'light' ?
              <MdLightMode size={32} className="aniRotation" />
              :
              <MdDarkMode size={32} className="aniRotation" />
          }
        </button>
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
            className={`${styles.menuMobile} markText`}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          />
      }
    </nav>
  );
}