import React from 'react';
import styles from './FeatureCard.module.css';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className={styles['feature-card']}>
    <div className={styles['feature-icon']}>{icon}</div>
    <div className={styles['feature-content']}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default FeatureCard;
