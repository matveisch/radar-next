import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './ReputationMeter.module.scss';
import Image from 'next/image';
import needle from '../../public/images/needle.svg';
import { useTranslation } from 'next-i18next';

interface Props {
  value: number;
}

function ReputationMeter({ value }: Props) {
  const { t } = useTranslation('common');
  const [rotateValue, setRotateValue] = useState('rotate(' + (300 * value) / 100 + 'deg)');

  useEffect(() => {
    setRotateValue('rotate(' + (300 * value) / 100 + 'deg)');
  }, [value]);

  return (
    <>
      <div id={styles.borderAround}>
        <div id={styles.mainWrapper}>
          <motion.div
            id={styles.imgWrapper}
            animate={{ rotate: [1, -1, 1] }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',

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
        {t('reputation')}
      </h4>
    </>
  );
}

export default ReputationMeter;
