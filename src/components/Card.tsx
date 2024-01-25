import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  subtitle: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, subtitle, content }) => (
  <div className={styles.card}>
    <h2>{title}</h2>
    <p className={styles.subtitle}>{subtitle}</p>
    <p>{content}</p>
  </div>
);

export default Card;
