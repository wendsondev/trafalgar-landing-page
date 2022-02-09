import { BoxServiceCard } from './BoxServiceCard';
import styles from './styles.module.scss';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';

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

        <section className={styles.findADoctor}>
          <img src="/illustration_2.png" alt="find a doctor" />

          <div>
            <h2>Leading healthcare providers</h2>

            <div />

            <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it's not just work. We take pride in the solutions we deliver</p>

            <button>Learn more</button>
          </div>
        </section>

        <section className={styles.apps}>
          <div>
            <h2>Download our mobile apps</h2>

            <div />

            <p>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely</p>

            <button>
              Download
              <HiOutlineArrowNarrowDown size={24} />
            </button>
          </div>

          <img src="/illustration_3.png" alt="App" />
        </section>
      </main>
  );
}