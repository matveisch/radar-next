import React from 'react';
import useServicesList from '../../data/servicesList';
import ServiceCard from '../../ui/service-card/ServiceCard';
import styles from './ServicesSection.module.scss';
import { useTranslation } from 'next-i18next';

export default function ServicesSection() {
  const servicesArr = useServicesList();
  const { t } = useTranslation('common');

  return (
    <div id={styles.mainWrapperServicesSection}>
      <h2 id={styles.servicesTitle} className="H2">
        {t('ourServices')}
      </h2>
      <div id={styles.servicesWrapper} className="paragraph">
        <p className={styles.servicesParagraphSmaller}>{t('ourTeamDoes')}</p>
        <div className={styles.serviceCardsContainer}>
          <p className={styles.servicesParagraphBigger}>{t('ourTeamDoes')}</p>
          {servicesArr.map((item, index) => {
            return (
              <ServiceCard
                key={index}
                id={item.id}
                title={item.name}
                imageURL={item.img}
                description={item.describtionArr}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
