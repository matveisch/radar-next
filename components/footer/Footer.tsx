import React, { useContext } from 'react';
import NavbarButton from '../../ui/navbar-button/NavbarButton';
import useServicesList from '../../data/servicesList';
import Sublink from '../../ui/sublink/Sublink';
import Image from 'next/image';
import styles from './Footer.module.scss';
import logo from '../../public/images/logo.svg';
import telegram from '../../public/images/telegram-filled.svg';
import whatsapp from '../../public/images/whatsapp.svg';
import { cardIdContextType, idContext } from '../Layout';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function Footer() {
  const servicesList = useServicesList();
  const { setCardId } = useContext(idContext) as cardIdContextType;
  const { t } = useTranslation('header');
  const { pathname } = useRouter();

  return (
    <footer id={styles.footerMainWrapper}>
      <div id={styles.footerLeftContainer}>
        <div id={styles.footerLogo}>
          <Image
            src={logo}
            alt="logo"
            style={
              pathname === '/lab'
                ? {
                    filter: 'invert(34%) sepia(87%) saturate(3749%) hue-rotate(261deg) brightness(98%) contrast(107%)',
                  }
                : undefined
            }
          />
          <h1 className="H3">radar digitaly</h1>
        </div>
        <div id={styles.footerContact}>
          <a className="link" href="mailto: clientoffice@radardigitaly.com">
            clientoffice@radardigitaly.com
          </a>
          <a className="link" href="tel:0547575594" rel="noreferrer" target="_blank">
            054-757-5594
          </a>
          <div id={styles.footerSocialIcons}>
            <a href="https://t.me/FSMediaDrama" target="_blank" rel="noreferrer">
              <Image src={telegram} alt="icon" />
            </a>
            <a href="https://wa.link/djrk8t" target="_blank" rel="noreferrer">
              <Image src={whatsapp} alt="icon" />
            </a>
          </div>
        </div>
      </div>
      <div id={styles.footerRightContainer}>
        <div id={styles.footerMenu}>
          <NavbarButton buttonName={t('services')} linkTo={'/services'} />
          <NavbarButton buttonName={t('aboutUs')} linkTo={'/about-us'} />
          <NavbarButton buttonName={t('research')} linkTo={'/guides'} />
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
