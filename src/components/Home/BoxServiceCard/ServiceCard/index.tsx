import styles from './styles.module.scss';

type ServiceCardProps = {
  src: string;
  title: string;
  description: string;
}

export function ServiceCard ({ src, title, description } : ServiceCardProps) {
  return (
    <div className={styles.container}>
      <img src={src} alt={title} />

      <strong>{title}</strong>

      <p>{description}</p>
    </div>
  );
}