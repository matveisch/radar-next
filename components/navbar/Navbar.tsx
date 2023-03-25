import Link from 'next/link';

import NavbarButton from '../../ui/navbar-button/NavbarButton';
import BurgerMenu from '../../ui/burger-menu-path/BurgerMenu';
import { motion, useCycle } from 'framer-motion';
import Image from 'next/image';
import logo from '../../images/logo.png';
import styles from './Navbar.module.scss';
import React, { useContext, useEffect } from 'react';
import { cardIdContextType, idContext } from '../Layout';
import AppSwitcher from '../AppSwitcher/AppSwitcher';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const background = {
  open: {
    height: 'auto',
    boxShadow: '0px 100px 90px 0px rgba(0, 0, 0, 0.5)',
  },
  closed: {
    height: 0,
  },
};

const navMenu = {
  open: {
    dislay: 'block',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    dislay: 'none',
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
  const router = useRouter();
  const { t } = useTranslation('header');

  useEffect(() => {
    isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
  }, [isOpen]);

  return (
    <nav id={styles.navbar} onClick={() => setCardId(null)}>
      <div>
        <Link href="/">
          <div id={styles.logo}>
            <Image src={logo} alt="logo" />
            <h1 className="H3">radar digitaly</h1>
          </div>
        </Link>
        <AppSwitcher />
      </div>
      <div id={styles.navbarLinks}>
        <Link href={router.pathname} locale="ru">
          Ru
        </Link>
        <Link href={router.pathname} locale="en">
          En
        </Link>
        <Link href={router.pathname} locale="he">
          He
        </Link>
        <NavbarButton buttonName={t('services')} linkTo={'/services'} />
        <NavbarButton buttonName={t('aboutUs')} linkTo={'/'} />
        <NavbarButton buttonName={t('research')} linkTo={'/guides'} />
        <div id={styles.contactBtn}>
          <NavbarButton buttonName={t('contact')} linkTo={'/contact'} />
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
          id={styles.mobileNavBG}
          variants={background}
          onClick={() => toggleOpen()}>
          <motion.ul id={styles.mobileNavUl} variants={navMenu}>
            <motion.li className={styles.mobileNavLi} variants={navItem}>
              <NavbarButton buttonName={t('services')} linkTo={'/services'} />
            </motion.li>
            <motion.li className={styles.mobileNavLi} variants={navItem}>
              <NavbarButton buttonName={t('aboutUs')} linkTo={'/'} />
            </motion.li>
            <motion.li className={styles.mobileNavLi} variants={navItem}>
              <NavbarButton buttonName={t('research')} linkTo={'/'} />
            </motion.li>
            <motion.li className={styles.mobileNavLi} variants={navItem}>
              <NavbarButton buttonName={t('contact')} linkTo={'/contact'} />
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </nav>
  );
}
