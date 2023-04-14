import TechRectangle from '../../ui/tech-rectangle/TechRectangle';
import Image from 'next/image';
import styles from './TechnologySection.module.scss';

import radarTechGif from '../../public/images/Radar-tech.gif';
import trandResearch from '../../public/images/Group 36.svg';
import marketTracking from '../../public/images/Group 34.svg';
import bots from '../../public/images/Group 39.svg';
import automaticServices from '../../public/images/Group 37.svg';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function TechnologySection() {
  const { t } = useTranslation('common');
  const { locale } = useRouter();

  return (
    <div id={styles.mainContainer}>
      <div id={styles.flex}>
        <div id={styles.leftContainer}>
          <h2 id={styles.techTitle} className="H2">
            {t('technology')}
          </h2>
          <p id={styles.techParagraph} className="paragraph">
            {t('proposition')}
          </p>
          <div id={styles.techCardsWrapper}>
            <TechRectangle img={marketTracking} title={t('marketTracking')} />
            <TechRectangle img={trandResearch} title={t('trendResearch')} />
            <TechRectangle img={bots} title={t('bots')} />
            <TechRectangle img={automaticServices} title={t('automaticServices')} />
          </div>
        </div>
        <div id={styles.rightContainer}>
          <Image
            id={styles.techRadarGif}
            src={radarTechGif}
            alt="Tech radar animation"
            style={locale === 'he' ? { right: 'unset', left: '25%' } : undefined}
          />
        </div>
      </div>
    </div>
  );
}
