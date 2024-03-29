import React, { useState } from 'react';
import styles from './index.module.scss';
import { motion } from 'framer-motion';

interface Props {
  width: number;
  height: number;
}

export default function Bubble({ width, height }: Props) {
  const [hovered, setHovered] = useState<boolean>(false);
  const [pos, setPos] = useState({
    top: Math.random() * height + 'px',
    left: Math.random() * width + 'px',
  });

  const [scale, setScale] = useState(Math.random() * 1.3);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onClick={() => setHovered(true)}
      style={pos}
      animate={{
        scale: hovered ? [null, scale] : [0, scale, scale + 0.3],
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: hovered ? [null, 0] : [0, 1, 0],
        filter: 'blur(0px)',
        rotate: Math.random() * 180,
        display: hovered ? 'none' : 'absolute',
      }}
      transition={{
        filter: { duration: 3 },
        scale: { duration: hovered ? 0.2 : 5, times: hovered ? [0, 1] : [0, 0.99, 1] },
        opacity: {
          duration: hovered ? 0.2 : 5,
          times: hovered ? [0, 1] : [0, 0.99, 1],
        },

        x: {
          type: 'just',
          duration: 2,
          repeat: 5,
          repeatType: 'mirror',
        },
        y: {
          type: 'just',
          duration: 2,
          repeat: 4,
          repeatType: 'mirror',
          delay: 2,
        },
        rotate: {
          type: 'just',
          duration: 10,
        },
        display: {
          delay: 0.5,
        },
      }}
      onAnimationEnd={() => console.log('END')}
      id={styles.border}>
      <div id={styles.bubble}></div>
    </motion.div>
  );
}
