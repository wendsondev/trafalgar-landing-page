import { testimonials } from '../../../util/testimonialsData';
import styles from './styles.module.scss';
import { Autoplay, Pagination, Keyboard, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperButtonControl } from '../../SwiperButtonControl';

import "swiper/css";
import "swiper/css/pagination";

export function TestimonialsBox() {

  return (
    <Swiper
      modules={[Keyboard, Pagination, Navigation, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{
        clickable: true,
        el: '.custom-pagination',
      }}
      keyboard={{ enabled: true }}
      loop
      autoplay={{
        delay: 5000,
        waitForTransition: true,
      }}
      onSwiper={(swiper) => swiper.pagination.el.classList.remove('swiper-pagination-bullets')}
    >
      {
        testimonials.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className={styles.container}>
                <div className={styles.testimonial}
                >
                  <h2>What our customer are saying</h2>

                  <div className={styles.separator} />

                  <div className={styles.content}>

                    <div className={styles.userInfo}>
                      <img src={item.user.imgUrl} alt={item.user.name} />

                      <div>
                        <strong>{item.user.name}</strong>
                        <span>{item.user.profession}</span>
                      </div>

                    </div>

                    <p>
                      {
                        item.testimonial.length > 200
                          ? `${item.testimonial.slice(0, 200)}...`

                          : item.testimonial
                      }
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })

      }

      <div className={styles.controller}>
        <SwiperButtonControl type="prev" />

        <div className='custom-pagination' />

        <SwiperButtonControl type="next" />
      </div>
    </Swiper>
  );
}