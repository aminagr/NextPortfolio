"use client";

import React from 'react';
import { Link } from '@/i18n/routing'; 
import { usePathname } from '@/i18n/routing'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css';
import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations('footer');
    const pathname = usePathname(); 

    const NavLinks = [
        { id: 1, key: 'home', path: '/' },
        { id: 2, key: 'projects', path: '/projects' },
        { id: 3, key: 'about', path: '/about' },
        { id: 4, key: 'contact', path: '/contact' }
    ];

    const isActive = (path) => path === pathname; 



    return (
        <div>
            <br />
            <footer className={styles.footer}>
                <div className={styles.logoContainer}>
                    <Link href="/" className={styles.logo}>My Portfolio </Link>
                </div>
                <div className={styles.footerContent}>
                    <div className={styles.email}>me@gmail.com</div>
                    <div className={styles.menu}>
                        {NavLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={link.path}
                                className={`${styles.link} ${isActive(link.path) ? styles.active : ''}`}
                            >
                                {t(link.key)}
                            </Link>
                        ))}
                    </div>
                    <div className={styles.socialIcons}>
                        <a href="https://github.com/" className={styles.icon}><FaGithub /></a>
                        <a href="https://linkedin.com/" className={styles.icon}><FaLinkedin /></a>
                    </div>
                </div>
            </footer>
            <div className={styles.copy}>
                &copy; {new Date().getFullYear()} Me {t('rights')}
            </div>
        </div>
    );
};

export default Footer;
