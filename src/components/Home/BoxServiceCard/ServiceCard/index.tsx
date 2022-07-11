import styles from './styles.module.scss';

type ServiceCardProps = {
  src: string;
  title: string;
  description: string;
}

export function ServiceCard({ src, title, description }: ServiceCardProps) {
  return (
    <div className={`${styles.container} backgroundSecondary shadow`}>
      <img src={src} alt={title} />

      <strong className="text">{title}</strong>

      <p className="textSecondary">{description}</p>
    </div>
  );
}