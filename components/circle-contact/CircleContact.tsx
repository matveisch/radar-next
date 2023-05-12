import React from 'react';
import { motion } from 'framer-motion';
import styles from './CircleContact.module.scss';
import telegram from '../../public/images/telegram-filled.svg';
import whatsapp from '../../public/images/whatsapp.svg';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const CircleContact = () => {
  const { t } = useTranslation('contact');
  const { locale } = useRouter();

  return (
    <div className={styles.circleContact}>
      <div className={styles.circleGroup}>
        <motion.div
          initial={{ rotate: 270, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.6 }}
          className={`${styles.upperCircle} ${styles.circle}`}></motion.div>
        <div className={`${styles.lowerCircle} ${styles.circle}`}></div>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.6, delay: 0.3 }}
          style={locale === 'he' ? { left: 'unset', right: '-20px' } : undefined}
          className="H1">
          {t('lets')}
          <br />
          {t('talk')}
        </motion.h1>
      </div>
      <div className={`${styles.circleGroup} ${styles.secondCircle}`}>
        <motion.div
          initial={{ rotate: 270, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.6 }}
          className={`${styles.upperCircle} ${styles.circle}`}></motion.div>
        <div className={`${styles.lowerCircle} ${styles.circle}`}></div>
        <div className={styles.paragraphs} style={locale === 'he' ? { left: '-20px', right: 'unset' } : undefined}>
          <motion.a
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeOut',
              duration: 0.9,
              delay: 0.6,
            }}
            className="paragraph"
            href="mailto: clientoffice@radardigitaly.com">
            clientoffice@radardigitaly.com
          </motion.a>
          <motion.a
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeOut',
              duration: 0.9,
              delay: 0.4,
            }}
            className="paragraph"
            href="tel:0547575594"
            rel="noreferrer"
            target="_blank">
            054-757-5594
          </motion.a>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: 'easeOut',
              duration: 0.9,
              delay: 0.2,
            }}
            className={styles.icons}>
            <a href="https://t.me/FSMediaDrama" target="_blank" rel="noreferrer">
              <Image src={telegram} alt="icon" />
            </a>
            <a href="https://wa.link/djrk8t" target="_blank" rel="noreferrer">
              <Image src={whatsapp} alt="icon" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CircleContact;
