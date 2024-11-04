import React from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';


const Hero = () => {
    const t = useTranslations('hero');

    return (
        <section className={styles.hero}>
            <div className={styles.leftColumn}>
                <h1 className={styles.title}>{t('title')}</h1>
            
                <p className={styles.description}>{t('description')}</p>
              
            </div>
            <div className={styles.rightColumn}>
                <Image
                    src="/images/hero.jpg"
                    alt={t('description')}
                    layout="responsive"
                    width={500}
                    height={800}
                    className={styles.image}
                />
            </div>
        </section>
    );
};

export default Hero;
