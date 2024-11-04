"use client"; 
import styles from './About.module.css';
import { useTranslations } from 'next-intl'; 
import Bio from './Bio';


export default function About() {
  const t = useTranslations('about'); 
    return (
      <div>
        <h1 className={styles.title}>{t('title')}</h1>
        <Bio/>
 
      </div>
    );
}
