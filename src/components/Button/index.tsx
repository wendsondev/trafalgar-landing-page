import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import styles from './styles.module.scss';

type ButtonProps = {
  icon?: IconType
  inverted?: boolean;
  children: ReactNode;
}

export function Button({ children, icon: Icon, inverted = false }: ButtonProps) {
  return (
    <button className={`${styles.button} ${inverted ? styles.inverted : ''}`}>
      {children}
      {Icon && <Icon size={24} />}
    </button>
  );
}