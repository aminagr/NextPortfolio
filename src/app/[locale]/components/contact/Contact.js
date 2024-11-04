"use client";

import React from 'react';
import styles from './Contact.module.css';
import ContactHead from './ContactHead';
import ContactForm from './ContactForm';
import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('contact'); 

    return (
        <div className={styles.contactContainer}>
           <ContactHead/>
            <ContactForm />
        </div>
    );
}
