"use client"; 

import React from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import styles from './ContactCard.module.css';
import { useTranslations } from 'next-intl';

const ContactCard = () => {
    
    const t = useTranslations('contact'); 
    return (
        <div className={styles.cardsContainer}>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <FaMapMarkerAlt className={styles.icon} />
                    <div>
                        <h3 className={styles.cardTitle}>{t('location-title')}</h3>
                        <p className={styles.cardText}>{t('location')}</p> 
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <FaEnvelope className={styles.icon} />
                    <div>
                        <h3 className={styles.cardTitle}>Email</h3> 
                        <p className={styles.cardText}>me@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
