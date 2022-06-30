import { useSwiper } from 'swiper/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import styles from './styles.module.scss';


type SwiperButtonControlProps = {
  type: 'next' | 'prev';
}

export const SwiperButtonControl = ({ type = 'next' }: SwiperButtonControlProps) => {
  const swiper = useSwiper();

  if (type === 'next') {
    return (
      <button
        className={styles.button}
        onClick={() => swiper.slideNext()}
      >
        <FaArrowRight size={32} />
      </button>
    );
  }

  return (
    <button
      className={styles.button}
      onClick={() => swiper.slidePrev()}
    >
      <FaArrowLeft size={32} />
    </button>
  );
};
