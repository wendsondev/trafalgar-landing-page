import styles from './styles.module.scss';

export function Footer () {
  return (
    <footer className={styles.container}>
      <div className={styles.details}>
        <img src="/logo-light.svg" alt="trafalgar" />

        <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>

        <span>©Trafalgar PTY LTD 2020. All rights reserved</span>
      </div>

      
      <div className={styles.more}>
        <strong>Company</strong>

        <a href="#about">About</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#find">Find a doctor</a>
        <a href="#apps">Apps</a>
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