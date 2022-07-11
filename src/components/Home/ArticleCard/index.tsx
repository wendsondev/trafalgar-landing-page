import { ImArrowRight2 } from 'react-icons/im';
import styles from './styles.module.scss';

type ArticleCardProps = {
  imgUrl: string;
  title: string;
  summary: string;
  link: string;
}

export function ArticleCard({ imgUrl, title, summary, link }: ArticleCardProps) {
  return (
    <article className={`${styles.container} backgroundSecondary shadow`}>
      <img src={imgUrl} alt={title} />

      <div>
        <strong className="text">{title}</strong>

        <p className="textSecondary">{summary}</p>
      </div>

      <a href={link}>
        Read more
        <ImArrowRight2 size={14} />
      </a>
    </article>
  );
}