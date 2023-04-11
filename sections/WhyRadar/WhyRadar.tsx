import styles from './WhyRadar.module.scss';
import radarWhy from '../../images/radar-why.svg';
import gearWhy from '../../images/gear-why.svg';
import bulbWhy from '../../images/bulb-why.svg';
import moneyWhy from '../../images/money-why.svg';
import WhyBlock from '../../components/WhyBlock/WhyBlock';
import radarTechGif from '../../images/Radar-tech-purple.gif';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function WhyRadar() {
  const { t } = useTranslation('lab');
  const { locale } = useRouter();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener('resize', () => {
        setScreenWidth(window.innerWidth);
      });
    };
  }, []);

  const blocks = [
    {
      image: radarWhy,
      text: t('followTrends'),
    },
    {
      image: gearWhy,
      text: t('organization'),
    },
    {
      image: bulbWhy,
      text: t('individualIdeas'),
    },
    {
      image: moneyWhy,
      text: t('decreasingCosts'),
    },
  ];

  return (
    <div className={styles.whyRadar}>
      <h2>{t('whyRadar')}</h2>
      <div className={styles.mainContainer}>
        <div className={styles.blocks}>
          {blocks.map((block, index) => (
            <WhyBlock key={index} image={block.image} text={block.text} />
          ))}
        </div>
        <Image
          className={styles.techRadarGif}
          src={radarTechGif}
          alt="Tech radar animation"
          style={locale === 'he' && screenWidth > 1000 ? { left: 'unset', right: '50%' } : undefined}
        />
      </div>
    </div>
  );
}

export default WhyRadar;
