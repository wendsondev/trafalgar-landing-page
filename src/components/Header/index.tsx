import { HashLink } from 'react-router-hash-link';
import { useTheme } from '../../Contexts/Theme';
import { Nav } from './Nav';
import styles from './styles.module.scss';

export function Header() {

  const { theme } = useTheme();

  return (
    <header className={`${styles.container} background`}>
      <div>
        <HashLink to="/">
          <img
            src={theme === 'light' ? '/logo.svg' : '/logo-light.svg'}
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