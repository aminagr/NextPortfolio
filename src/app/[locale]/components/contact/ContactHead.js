"use client";

import React from 'react';
import styles from './Contact.module.css';

import { useTranslations } from 'next-intl';

export default function ContactHead() {
    const t = useTranslations('contact'); 

    return (
        <div className={styles.contactContainer}>
            <h1 className={styles.title}>{t('title')}</h1> 
            <p className={styles.subtitle}>
                {t('subtitle')} 
            </p>
   
        </div>
    );
}
