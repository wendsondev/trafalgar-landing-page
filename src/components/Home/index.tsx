import { BoxServiceCard } from './BoxServiceCard';
import styles from './styles.module.scss';

export function Home () {
  return (
    <main className={styles.container}>
        <section className={styles.services}>
          <div>
            <h1>Virtual healthcare for you</h1>

            <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>

            <button>Consult today</button>
          </div>

          <img src="/illustration.png" alt="healthcare services" />
        </section>

        <section className={styles.ourServices}>
          <div className={styles.headerOurServices}>
            <h2>Our services</h2>

            <div />

            <p>We provide to you the best choices for you. Adjust it to you health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
          </div>

          <BoxServiceCard />

          <button>Learn more</button>
        </section>
      </main>
  );
}