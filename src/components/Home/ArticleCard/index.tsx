import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import styles from './styles.module.scss';

type ArticleCardProps = {
  imgUrl: string;
  title: string;
  summary: string;
  link: string;
}

export function ArticleCard ({ imgUrl, title, summary, link } : ArticleCardProps) {
  return (
    <article className={styles.container}>
      <img src={imgUrl} alt={title} />

      <div>
        <strong>{title}</strong>

        <p>{summary}</p>

        <a href={link}>
          Read more
          <HiOutlineArrowNarrowRight />
        </a>
      </div>
    </article>
  );
}