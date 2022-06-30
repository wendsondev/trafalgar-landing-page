import styles from './styles.module.scss';
import { HashLink } from 'react-router-hash-link';

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.details}>
        <img src="/logo-light.svg" alt="trafalgar" />

        <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>

        <span>Copyright © 2022 Wendson Sousa. All rights reserved</span>
      </div>

      <div className={styles.more}>
        <strong>Company</strong>

        <HashLink to="#about" smooth>
          About
        </HashLink>
        <HashLink to="#testimonials" smooth>
          Testimonials
        </HashLink>
        <HashLink to="#find" smooth>
          Find a doctor
        </HashLink>
        <HashLink to="#apps" smooth>
          Apps
        </HashLink>
      </div>

      <div className={styles.more}>
        <strong>Region</strong>

        <a href="#">Indonesia</a>
        <a href="#">Singapore</a>
        <a href="#">Hongkong</a>
        <a href="#">Canada</a>
      </div>

      <div className={styles.more}>
        <strong>Help</strong>

        <a href="#">Help center</a>
        <a href="#">Contact support</a>
        <a href="#">Instructions</a>
        <a href="#">How it works</a>
      </div>

    </footer>
  );
}