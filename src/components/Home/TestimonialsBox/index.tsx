import { useEffect, useState } from 'react';
import { testimonials } from '../../../util/testimonialsData';
import styles from './styles.module.scss';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';

export function TestimonialsBox () {

  const [page, setPage] = useState(0)
  const [isFade, setIsFade] = useState(false);
  const data = testimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFade(true);

      if(page < data.length - 1){
        setPage(pageCurrent => pageCurrent + 1 );
      }
      else{
        setPage(0);
      }

    }, 5000)

    return () => clearInterval(timer);

  }, [page]);

  const handleNextTestimonialPage = () => {
    if(page > 0){
      setPage(currentPage => currentPage - 1);
      setIsFade(true);
    }
  }

  const handlePreviousTestimonialPage = () => {
    if(page < data.length){
      setPage(currentPage => currentPage + 1);
      setIsFade(true);
    }
  }

  return (
    <section className={styles.container}>

      <div className={`${styles.testimonial} ${isFade ? styles.fade : ''}`} 
        onAnimationEnd={() => setIsFade(false)}
      >
        <h2>What our customer are saying</h2>

        <div className={styles.separator} />

        <div className={styles.content}>

          <div className={styles.userInfo}>
            <img src={data[page].user.imgUrl} alt={data[page].user.name} />

            <div>
              <strong>{data[page].user.name}</strong>
              <span>{data[page].user.profession}</span>
            </div>
            
          </div>

          <p>
            {
              data[page].testimonial.length > 200 
              ? `${data[page].testimonial.slice(0, 200)}...`

              : data[page].testimonial
            }
          </p>
        </div>
      </div>

      <nav className={styles.carouselNav}>
        
        <button 
          disabled={page <= 0 ? true : false}
          onClick={handleNextTestimonialPage}
        >
          <ImArrowLeft2 />
        </button>
        
        <div className={styles.controller}>
          {
            data.map( item => {
              return (
                <span 
                  key={item.id} 
                  onClick={() => setPage(item.id - 1)}
                  className={item.id - 1 === page ? styles.active : ''} 
                />
              );
            })
          }
        </div>
        
        <button 
          disabled={page >= data.length - 1 ? true : false} 
          onClick={handlePreviousTestimonialPage}
        >
          <ImArrowRight2 />
        </button>
      </nav>
    </section>
  );
}