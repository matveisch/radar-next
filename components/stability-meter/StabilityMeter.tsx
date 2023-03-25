import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './StabilityMeter.module.scss';
import stabilityImg from '../../images/stability.svg';
import { useTranslation } from 'next-i18next';

interface Props {
  value: number;
}

function StabilityMeter({ value }: Props) {
  const rotateRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation('common');

  return (
    <>
      <div id={styles.borderAround}>
        <div id={styles.mainWrapper}>
          <motion.div
            id={styles.bgImg}
            animate={{
              filter: [
                'hue-rotate(' + -(134 * (100 - value)) / 100 + 'deg)',
                'hue-rotate(' + 0 + 'deg)',
                'hue-rotate(' + -(134 * (100 - value)) / 100 + 'deg)',
              ],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',

              repeat: Infinity,
            }}
            // style={{
            //   filter: "hue-rotate(" + -(134 * (100 - value)) / 100 + "deg)",
            // }}
          ></motion.div>
          <motion.div
            ref={rotateRef}
            id={styles.imgWrapper}
            animate={{
              rotate: [(20 * (100 - value)) / 100 + 3, -(20 * (100 - value)) / 100 - 3, (20 * (100 - value)) / 100 + 3],
            }}
            transition={{
              duration: 4,
              ease: 'easeInOut',
              repeat: Infinity,
            }}>
            <Image src={stabilityImg} alt="stability img" />
          </motion.div>
        </div>
      </div>
      <h4 id={styles.title} className="paragraph">
        {t('stability')}
      </h4>
    </>
  );
}

export default StabilityMeter;
