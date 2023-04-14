import { motionDivProps } from '../../components/radar/Radar';
import Image from 'next/image';
import { motion } from 'framer-motion';
import style from '../../components/radar/Radar.module.scss';

export default function MotionDiv({ source, id, coordinates, duration, delay }: motionDivProps) {
  return (
    <motion.div
      animate={coordinates}
      transition={{
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatDelay: 0,
        delay: delay,
      }}
      id={id}
      className={style.imageWrapper}>
      <Image src={source} alt="" />
    </motion.div>
  );
}
