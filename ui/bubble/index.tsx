import React, { useState } from 'react';
import styles from './index.module.scss';
import { motion } from 'framer-motion';

export default function Bubble() {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onClick={() => setHovered(true)}
      animate={{
        scale: hovered ? [null, 1.3] : [0, 1, 1.3],
        x: 100,
        y: 100,
        opacity: hovered ? [null, 0] : [0, 1, 0],
        filter: 'blur(0px)',
      }}
      transition={{
        filter: { duration: 5 },
        scale: { duration: hovered ? 0.2 : 8, times: hovered ? [0, 1] : [0, 0.99, 1] },
        opacity: {
          duration: hovered ? 0.2 : 8,
          times: hovered ? [0, 1] : [0, 0.99, 1],
        },

        x: {
          type: 'just',
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
        },
        y: {
          type: 'just',
          duration: 3,
          repeat: Infinity,
          repeatType: 'mirror',
          delay: 2,
        },
      }}
      exit={{ opacity: 0, scale: 2 }}
      id={styles.border}>
      <div id={styles.bubble}></div>
    </motion.div>
  );
}
