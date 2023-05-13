import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import { useSpring, animated } from 'react-spring';
import styles from './StatsInfo.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

function StatsInfo() {
  const [currentSlide, setCurrentSlide] = useState(1);
  SwiperCore.use([Autoplay]);
  const { t } = useTranslation('common');
  const { locale } = useRouter();

  const num1 = useSpring({
    val: 981,
    from: { val: 0 },
    reset: currentSlide === 1 || currentSlide === 5,
  });
  const num2 = useSpring({
    val: 16,
    from: { val: 0 },
    reset: currentSlide === 2,
  });
  const num3 = useSpring({
    val: 586,
    from: { val: 0 },
    reset: currentSlide === 3,
  });
  const num4 = useSpring({
    val: 88,
    from: { val: 0 },
    reset: currentSlide === 4,
  });

  return (
    <div id={styles.statsParent}>
      {/* <div id="stats-bg"></div> */}
      <div className={styles.statsContainerMobile}>
        <Swiper
          className={styles.swiper}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
          loop={true}
          onSlideChange={swiper => setCurrentSlide(swiper.activeIndex)}>
          <SwiperSlide>
            <div className={styles.slider}>
              <p className={`light-paragraph ${styles.statText}`}>{t('adsViews')}</p>
              <animated.div className="H4">{num1.val.to(val => Math.floor(val))}</animated.div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slider}>
              <p className={`light-paragraph ${styles.statText}`}>{t('trafficPerWeek')}</p>
              <div className={`${styles.number} H4`}>
                <animated.div>{num2.val.to(val => Math.floor(val))}</animated.div>K
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slider}>
              <p className={`light-paragraph ${styles.statText}`}>{t('trafficEngagement')}</p>
              <animated.div className="H4">{num3.val.to(val => Math.floor(val))}</animated.div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.slider}>
              <p className={`light-paragraph ${styles.statText}`}>{t('adsCreated')}</p>
              <div className={`${styles.number} H4`}>
                <animated.div>{num4.val.to(val => Math.floor(val))}</animated.div>K
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div id={styles.statsContainer} style={locale === 'he' ? { direction: 'rtl' } : { direction: 'ltr' }}>
        <div id="firstChild" className={styles.flexBox}>
          <p className={`light-paragraph ${styles.statText}`}>{t('adsViews')}</p>
          <animated.div className="H4">{num1.val.to(val => Math.floor(val))}</animated.div>
        </div>
        <div id="secondChild" className={styles.flexBox}>
          <p className={`light-paragraph ${styles.statText}`}>{t('trafficPerWeek')}</p>
          <div className={`${styles.number} H4`}>
            <animated.div>{num2.val.to(val => Math.floor(val))}</animated.div>K
          </div>
        </div>
        <div id="thirdChild" className={styles.flexBox}>
          <p className={`light-paragraph ${styles.statText}`}>{t('trafficEngagement')}</p>
          <animated.div className="H4">{num3.val.to(val => Math.floor(val))}</animated.div>
        </div>
        <div id="fourthChild" className={styles.flexBox}>
          <p className={`light-paragraph ${styles.statText}`}>{t('adsCreated')}</p>
          <div className={`${styles.number} H4`}>
            <animated.div>{num4.val.to(val => Math.floor(val))}</animated.div>K
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsInfo;
