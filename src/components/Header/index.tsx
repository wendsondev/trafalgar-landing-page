import { HashLink } from 'react-router-hash-link';
import { Nav } from './Nav';
import styles from './styles.module.scss';

export function Header() {

  return (
    <header className={styles.container}>
      <div>
        <HashLink to="/">
          <img
            src="/logo.svg"
            alt="Trafalgar"
            onClick={() => window.scrollTo({
              behavior: 'smooth',
              top: 0,
              left: 0,
            })
            }
          />
        </HashLink>

        <Nav />
      </div>
    </header>
  );
}