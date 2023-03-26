import React, { useContext } from 'react';
import NavbarButton from '../../ui/navbar-button/NavbarButton';
import useServicesList from '../../data/servicesList';
import Sublink from '../../ui/sublink/Sublink';
import Image from 'next/image';
import styles from './Footer.module.scss';
import logo from '../../images/logo.png';
import telegram from 'images/telegram-filled.svg';
import whatsapp from 'images/whatsapp.svg';
import { cardIdContextType, idContext } from '../Layout';
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const servicesList = useServicesList();
  const { setCardId } = useContext(idContext) as cardIdContextType;
  const { t } = useTranslation('header');

  return (
    <footer id={styles.footerMainWrapper}>
      <div id={styles.footerLeftContainer}>
        <div id={styles.footerLogo}>
          <Image src={logo} alt="logo" />
          <h1 className="H3">radar digitaly</h1>
        </div>
        <div id={styles.footerContact}>
          <a className="link">email@radar.com</a>
          <a>012-345-6789</a>
          <div id={styles.footerSocialIcons}>
            <a href="">
              <Image src={telegram} alt="icon" />
            </a>
            <a href="">
              <Image src={whatsapp} alt="icon" />
            </a>
          </div>
        </div>
      </div>
      <div id={styles.footerRightContainer}>
        <div id={styles.footerMenu}>
          <NavbarButton buttonName={t('services')} linkTo={'/services'} />
          <NavbarButton buttonName={t('aboutUs')} linkTo={'/'} />
          <NavbarButton buttonName={t('research')} linkTo={'/'} />
          <NavbarButton buttonName={t('contact')} linkTo={'/contact'} />
        </div>
        <div id={styles.footerSubmenu}>
          {servicesList.map(item => {
            return <Sublink key={item.id} to="/services" title={item.name} onClick={() => setCardId(item.id)} />;
          })}
        </div>
      </div>
    </footer>
  );
}
