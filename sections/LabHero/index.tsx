import styles from './index.module.scss';
import Bubbles from '../bubbles';
import { useTranslation } from 'next-i18next';

export default function LabHero() {
  const { t } = useTranslation('lab');

  return (
    <div id={styles.labhero}>
      <Bubbles />
      <div id={styles.titles}>
        <h1 className="H1">Radar Digitaly</h1>
        <h2 className="H3" style={{ marginTop: 10 }}>
          {t('newAgency')}
        </h2>
      </div>
    </div>
  );
}
