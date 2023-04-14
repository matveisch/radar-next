import Link from 'next/link';
import NavbarButton from '../../ui/navbar-button/NavbarButton';
import BurgerMenu from '../../ui/burger-menu-path/BurgerMenu';
import { motion, useCycle } from 'framer-motion';
import Image from 'next/image';
import logo from '../../images/logo.svg';
import styles from './Navbar.module.scss';
import React, { useContext } from 'react';
import { cardIdContextType, idContext } from '../Layout';
import AppSwitcher from '../AppSwitcher/AppSwitcher';
import LanguageToggle from '../../ui/language-toggle-desctop';
import LanguageToggleMobile from '../../ui/language-toggle-mobile';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import '../../styles/variables.module.scss';
const background = {
  open: {
    height: '450px',
    boxShadow: '0px 100px 90px 0px rgba(0, 0, 0, 0.5)',
  },
  closed: {
    height: '0',
  },
};

const navMenu = {
  open: {
    display: 'flex',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    display: 'none',
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const navItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function Navbar() {
  const { setCardId } = useContext(idContext) as cardIdContextType;
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { locale, pathname } = useRouter();
  const { t } = useTranslation('header');

  return (
    <nav id={styles.navbar} onClick={() => setCardId(null)}>
      <div>
        <Link href="/">
          <div id={styles.logo}>
            <Image
              src={logo}
              alt="logo"
              style={
                pathname === '/lab'
                  ? {
                      filter:
                        'invert(34%) sepia(87%) saturate(3749%) hue-rotate(261deg) brightness(98%) contrast(107%)',
                    }
                  : undefined
              }
            />
            <h1 className="H3">radar digitaly</h1>
          </div>
        </Link>
        <AppSwitcher />
      </div>
      <div id={styles.navbarLinks}>
        <NavbarButton buttonName={t('services')} linkTo={'/services'} />
        <NavbarButton buttonName={t('aboutUs')} linkTo={'/about-us'} />
        <NavbarButton buttonName={t('research')} linkTo={'/guides'} />
        <div id={pathname === '/lab' ? styles.contactBtnViolet : styles.contactBtn}>
          <NavbarButton buttonName={t('contact')} linkTo={'/contact'} />
        </div>
        <div id={styles.languageToggleWrapper}>
          <LanguageToggle />
        </div>
      </div>
      <motion.div id={styles.mobileNav} initial={false} animate={isOpen ? 'open' : 'closed'}>
        <BurgerMenu toggle={() => toggleOpen()} />
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragStart={() => toggleOpen()}
          dragElastic={0}
          dragMomentum={false}
          id={pathname === '/lab' ? styles.mobileNavBGLab : styles.mobileNavBG}
          variants={background}
          style={locale === 'he' ? { right: 'unset', left: '0' } : undefined}
          onClick={() => toggleOpen()}>
          <motion.ul id={styles.mobileNavUl} variants={navMenu}>
            <motion.li className={styles.mobileNavLi} variants={navItem}>
              <NavbarButton buttonName={t('services')} linkTo={'/services'} />
            </motion.li>
            <motion.li className={styles.mobileNavLi} variants={navItem}>
              <NavbarButton buttonName={t('aboutUs')} linkTo={'/about-us'} />
            </motion.li>
            <motion.li className={styles.mobileNavLi} variants={navItem}>
              <NavbarButton buttonName={t('research')} linkTo={'/guides'} />
            </motion.li>
            <motion.li className={styles.mobileNavLi} variants={navItem}>
              <NavbarButton buttonName={t('contact')} linkTo={'/contact'} />
            </motion.li>
            <motion.li className={styles.mobileNavLi} variants={navItem}>
              <p style={{ color: '#eeeeee', fontSize: '16px', textAlign: 'center', marginBottom: 10 }}>Language: </p>
              <LanguageToggleMobile />
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </nav>
  );
}
