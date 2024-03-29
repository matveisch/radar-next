import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './ServicesMenuDesktop.module.scss';
import useServicesList from '../../data/servicesList';
import { cardIdContextType, idContext } from '../Layout';
import ServicesBtn from '../../ui/services-btn/ServicesBtn';
import ServicesDescription from '../services-description/ServicesDescription';
import { useTranslation } from 'next-i18next';

const contactCardAnim = {
  open: {
    height: 'calc(40vh - 100px)',
  },
  closed: {
    height: '60px',
  },
};
const contactTitleAnim = {
  open: {
    display: 'block',
  },
  closed: {
    display: 'none',
  },
};
const contactBtnAnim = {
  open: { height: '60px', margin: '20px' },
  closed: { height: '100%', margin: '0' },
};
export default function ServicesMenuDesktop() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const servicesArr = useServicesList();
  const { cardId } = useContext(idContext) as cardIdContextType;
  const { t } = useTranslation('services');

  useEffect(() => {
    if (cardId != undefined) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, []);

  return (
    <motion.div
      initial={false}
      id={styles.servicesMenuWrapper}
      animate={isOpen ? 'open' : 'closed'}
      onWheel={(event: any) => {
        console.log(event.view);
        event.deltaY < 0 && event.view.pageYOffset < 1 ? setIsOpen(true) : setIsOpen(false);
      }}>
      <motion.div id={styles.servicesGrid}>
        {servicesArr.map((item, index) => {
          return <ServicesBtn key={index} itemId={item.id} setOpen={setIsOpen} isOpen={isOpen} />;
        })}
        <motion.div id={styles.contactCard} variants={contactCardAnim}>
          <motion.h4 id={styles.contactTitle} className="H3" variants={contactTitleAnim}>
            {t('needHelp')}
          </motion.h4>
          <motion.div
            id={styles.contactBtn}
            variants={contactBtnAnim}
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 3px 16px 0px rgba(105, 254, 139, 0.2)',
            }}>
            <Link href="/contact" id={styles.contactLink} className="paragraph">
              {t('askUs')}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
      <ServicesDescription serviceId={cardId != null ? cardId : 0} />*
    </motion.div>
  );
}
