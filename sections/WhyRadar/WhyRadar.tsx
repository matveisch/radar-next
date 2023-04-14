import styles from './WhyRadar.module.scss';
import radarWhy from '../../public/images/radar-why.svg';
import gearWhy from '../../public/images/gear-why.svg';
import bulbWhy from '../../public/images/bulb-why.svg';
import moneyWhy from '../../public/images/money-why.svg';
import WhyBlock from '../../components/WhyBlock/WhyBlock';
import radarTechGif from '../../public/images/Radar-tech-purple.gif';
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
          height="100"
          width="100"
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
