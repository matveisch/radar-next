import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './RtwBtn.module.scss';

import chain from '../../images/chain.svg';
import facebook from '../../images/facebook.svg';
import graph from '../../images/graph.svg';
import instagram from '../../images/instagram.svg';
import messenger from '../../images/messenger.svg';
import radar from '../../images/radar.svg';
import social from '../../images/social.svg';
import stat from '../../images/stat.svg';
import telegram from '../../images/telegram.svg';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export default function RtwBtn() {
  const [hovered, setHovered] = useState(false);
  const { t } = useTranslation('common');

  function getRand(from: number, to: number) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
  }

  const iconsArr = [chain, facebook, graph, instagram, messenger, radar, social, stat, telegram];

  return (
    <div id={styles.rtwBtnBackground}>
      <motion.div
        id={styles.rtwBtnContainer}
        animate={{
          background: hovered
            ? 'radial-gradient(25.8% 50% at 50% 50%, rgba(35, 41, 50, 0.4) 0%, rgba(105, 254, 139, 0) 100%)'
            : 'radial-gradient(25.8% 50% at 50% 50%, rgba(105, 254, 139, 0.4) 0%, rgba(105, 254, 139, 0.8) 100%)',
        }}
        transition={{
          background: {
            duration: 0.3,
          },
        }}>
        {iconsArr.map((item, index) => {
          return (
            <motion.div
              className={styles.rtwImgWrapper}
              initial={false}
              animate={{
                y: hovered ? 1 : 0,
                x: hovered ? 1 : 0,
                rotate: hovered ? getRand(-50, 50) : 0,
              }}
              transition={{
                x: {
                  type: hovered ? 'inertia' : 'just',
                  velocity: getRand(-350, 350),
                  power: 1,
                },
                y: {
                  type: hovered ? 'inertia' : 'just',
                  velocity: getRand(-90, 90),
                  power: 2,
                },
                rotate: {
                  type: hovered ? 'inertia' : 'just',
                  velocity: getRand(-50, 50),
                },
              }}
              key={index}>
              <Image src={item} alt={item} />
            </motion.div>
          );
        })}
        <motion.button
          id={styles.rtwBtn}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="H3">
          {t('readyToWork')}
        </motion.button>
      </motion.div>
    </div>
  );
}
