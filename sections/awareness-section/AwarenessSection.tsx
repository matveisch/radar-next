import React, { useRef, useEffect, useState } from 'react';
import styles from './AwarenessSection.module.scss';
import ReputationMeter from '../../components/reputation-meter/ReputationMeter';
import StabilityMeter from '../../components/stability-meter/StabilityMeter';
import ProfitMeter from '../../components/profit-meter/ProfitMeter';
import AttendanceMeter from '../../components/attendance-meter/AttendanceMeter';
import ReactSlider from 'react-slider';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useScroll } from 'framer-motion';

function AwarenessSection() {
  // new sliders value – accepts from 0 to 100
  const sectionWrapper = useRef<HTMLDivElement>(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const { scrollYProgress } = useScroll({
    target: sectionWrapper,
    offset: ['start end', 'end end'],
  });

  const handleScroll = () => {
    setSliderValue(Math.floor(scrollYProgress.get() * 100));
  };

  useEffect(() => {
    // looking for an element to appear on the page
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const intersecting = entry.isIntersecting;
        intersecting ? setSectionVisible(true) : setSectionVisible(false);
      });
    });

    // creating observer of the element
    if (sectionWrapper.current) {
      observer.observe(sectionWrapper.current);
    }
  }, []);

  // adding scroll listener when there the section is on the screen
  useEffect(() => {
    if (sectionVisible) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionVisible]);

  return (
    <div id={styles.awarenessWrapper} ref={sectionWrapper}>
      <div className={styles.header}>
        <h2 className="H2">
          {t('social')} <br /> {t('awareness')}{' '}
        </h2>

        <div id={styles.sliderWrapper}>
          <div className={styles.insideWrapper}>
            <ReactSlider
              invert={locale === 'he'}
              className="customSlider"
              trackClassName={locale === 'he' ? 'customSlider-track-rtl' : 'customSlider-track'}
              thumbClassName={locale === 'he' ? 'customSlider-thumb-rtl' : 'customSlider-thumb'}
              value={sliderValue}
              onChange={value => {
                setSliderValue(value);
              }}
              renderThumb={props => <div {...props}></div>}
            />
          </div>
        </div>
      </div>
      <p className="paragraph" id={styles.awarnessText}>
        {t('knownBusiness')}
      </p>
      <div className={styles.meters}>
        <div className={styles.meterWrapper}>
          <ReputationMeter value={sliderValue} />
        </div>
        <div className={styles.meterWrapper}>
          <StabilityMeter value={sliderValue} />
        </div>
        <div className={styles.meterWrapper}>
          <ProfitMeter value={sliderValue} />
        </div>
        <div className={styles.meterWrapper}>
          <AttendanceMeter value={sliderValue} />
        </div>
      </div>
    </div>
  );
}

export default AwarenessSection;
