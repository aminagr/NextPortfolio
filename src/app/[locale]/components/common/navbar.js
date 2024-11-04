"use client";

import React, { useState } from 'react';
import { Link } from '@/i18n/routing';
import { usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import styles from './Navbar.module.css';

const NavLinks = [
    { id: 1, key: 'home', path: '/' },
    { id: 2, key: 'services', path: '/services' },
    { id: 3, key: 'projects', path: '/projects' },
    { id: 4, key: 'about', path: '/about' },
    { id: 5, key: 'contact', path: '/contact' },

];

const Navbar = ({ locale }) => { 
    const [isMenuOpen, setMenuOpen] = useState(false);
    const t = useTranslations('navbar');
    const pathname = usePathname();
    const isActive = (path) => path === pathname;

    const handleLanguageChange = (event) => {
        const newLocale = event.target.value;
        window.location.href = `/${newLocale}${pathname}`;
    };

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>MyPortfolio</Link>
            
            <select 
                onChange={handleLanguageChange} 
                style={{ backgroundColor: 'white' }} 
                defaultValue={locale} 
            >
                <option value="en">🇬🇧 English</option>
                <option value="fr">🇫🇷 Français</option>
            </select>
            
            <div className={styles.hamburger} onClick={toggleMenu}>
                {isMenuOpen ? '✖' : '☰'}
            </div>
            <div className={`${styles.menu} ${isMenuOpen ? styles.active : ''}`}>
                {NavLinks.map((link) => (
                    <Link
                        key={link.id}
                        href={link.path}
                        className={`${styles.link} ${isActive(link.path) ? styles.active : ''}`}
                        onClick={closeMenu}  
                    >
                        {t(link.key)}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
