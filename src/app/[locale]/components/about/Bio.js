"use client";
import React from 'react';
import { useTranslations } from 'next-intl'; 
import styles from './bio.module.css';

const Bio = () => {
    const t = useTranslations('bio'); 
    const name = process.env.NEXT_PUBLIC_NAME; 
    const fname = process.env.NEXT_PUBLIC_FNAME; 

    return (
        <div className={styles.bioContainer}>
            <div className={styles.textSection}>
                <h1 className={styles.title}>{t('title')}</h1>
                <h2 className={styles.subtitle}>{t('subtitle')}</h2>
                <p className={styles.paragraph}>
                    {t('paragraph1').replace('{fname}', fname)}
                </p>
                <p className={styles.paragraph}>
                    {t('paragraph2')}
                </p>
                <p className={styles.paragraph}>
                    {t('paragraph3')}
                </p>
            </div>
            <div className={styles.imageSection}>
                <img src="/images/marketing.jpg" alt="Marketing digital" className={styles.image} />
            </div>
        </div>
    );
};

export default Bio;
