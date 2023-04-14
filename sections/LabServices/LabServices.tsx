import styles from './LabServices.module.scss';
import LabServiceBlock from '../../components/LabServiceBlock/LabServiceBlock';
import tvLab from '../../public/images/tv-lab.svg';
import { useTranslation } from 'next-i18next';

function LabServices() {
  const { t } = useTranslation('lab');

  return (
    <div className={styles.labServices}>
      <h2 className="H2">{t('ourServices')}</h2>
      <div className={styles.servicesContainer}>
        <LabServiceBlock
          id={styles.service1}
          title={t('radio')}
          description={t('radioDescription')}
          price={3000}
          image={tvLab}
        />
        <LabServiceBlock
          id={styles.service2}
          title={t('billboard')}
          description={t('billboardDescription')}
          price={5000}
          image={tvLab}
        />
        <LabServiceBlock
          id={styles.service3}
          title={t('events')}
          description={t('eventsDescription')}
          price={10000}
          image={tvLab}
        />
      </div>
    </div>
  );
}

export default LabServices;
