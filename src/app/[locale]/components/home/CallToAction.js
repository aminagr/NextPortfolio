"use client";
import React from 'react';
import styles from './CallToAction.module.css'; 
import { useTranslations } from 'next-intl';

const CallToAction = () => {
    const t = useTranslations('callToAction'); 

    return (
        <div className={styles.ctaBackground}>
            <div className={styles.ctaContainer}>
                <h1 className={styles.ctaTitle}>{t('title')}</h1> 
                <h3 className={styles.ctaSubtitle}>{t('subtitle')}</h3> 
                <p className={styles.ctaText}>
                    {t('text')} 
                </p>
                <a href="#contact" className={styles.ctaButton}>{t('button')}</a> 
            </div>
        </div>
    );
};

export default CallToAction;  
