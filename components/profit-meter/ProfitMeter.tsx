import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './ProfitMeter.module.scss';
import Image from 'next/image';
import needle from '../../public/images/needle.svg';
import { useTranslation } from 'next-i18next';
import profitBg from '../../public/images/profit-bg.png';
import profitScales from '../../public/images/profit-bg-scales.png';

interface Props {
  value: number;
}

function ProfitMeter({ value }: Props) {
  const [rotateValue, setRotateValue] = useState('rotate(' + ((235 * value) / 100 - 60) + 'deg)');
  const { t } = useTranslation('common');

  useEffect(() => {
    setRotateValue('rotate(' + ((235 * value) / 100 - 45) + 'deg)');
  }, [value]);

  return (
    <>
      <div id={styles.borderAround}>
        <div id={styles.mainWrapper}>
          <Image
            src={profitBg}
            alt="profit-bg"
            id={styles.bgImgWrapper}
            style={{
              filter: 'hue-rotate(' + -(134 * (100 - value)) / 100 + 'deg)',
            }}
          />
          <Image src={profitScales} alt="profit-bg-scales" id={styles.bgImgScales} />
          <motion.div
            id={styles.imgWrapper}
            animate={{ rotate: [30, 0, 30] }}
            transition={{
              duration: 6,
              ease: 'easeOut',
              repeat: Infinity,
            }}>
            <Image
              style={{ transform: rotateValue }}
              id={styles.needleImg}
              src={needle}
              alt="needle"
              width="100"
              height="100"
            />
          </motion.div>
        </div>
      </div>
      <h4 id={styles.title} className="paragraph">
        {t('profit')}
      </h4>
    </>
  );
}

export default ProfitMeter;
