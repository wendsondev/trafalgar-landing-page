import { BoxServiceCard } from './BoxServiceCard';
import styles from './styles.module.scss';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { TestimonialsBox } from './TestimonialsBox';
import { ArticleCard } from './ArticleCard';

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

        <TestimonialsBox />

        <section className={styles.aboutUs}>
          <h2>Check out our latest article</h2>

          <div className={styles.aboutUsSeparator} />

          <div className={styles.articleCardBox}>
            <ArticleCard 
              imgUrl="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350"
              title="disease detection, check up in the laboratory"
              summary="In this case, the role of the health laboratory is very important to do a disease detection..."
              link="#"
            />

            <ArticleCard 
              imgUrl="https://images.unsplash.com/photo-1582560475093-ba66accbc424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350"
              title="Herbal medicines that are safe for consumption"
              summary="Herbal medicine is very widely used at this time because of its very good for your health..."
              link="#"
            />

            <ArticleCard 
              imgUrl="https://images.unsplash.com/photo-1531299244174-d247dd4e5a66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350"
              title="Natural care for healthy"
              summary="A healthy lifestyle should start from now and also for your skin health. There are some..."
              link="#"
            />
          </div>

          <button>View all</button>
        </section>
      </main>
  );
}