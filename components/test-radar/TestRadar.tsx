import { motion } from 'framer-motion';
import chain from '../../public/images/chain.svg';
import connection from '../../public/images/connection.svg';
import facebook from '../../public/images/facebook.svg';
import graph from '../../public/images/graph.svg';
import instagram from '../../public/images/instagram.svg';
import messenger from '../../public/images/messenger.svg';
import radar from '../../public/images/radar.svg';
import social from '../../public/images/social.svg';
import sound from '../../public/images/sound.svg';
import stat from '../../public/images/stat.svg';
import telegram from '../../public/images/telegram.svg';
import MotionDiv from '../../ui/motion-div/MotionDiv';
import style from './TestRadar.module.scss';

export interface motionDivProps {
  source: string;
  id: string;
}

export default function TestRadar() {
  const iconsArr: Array<motionDivProps> = [
    {
      source: sound,
      id: style.sound,
    },
    {
      source: graph,
      id: style.graph,
    },
    {
      source: facebook,
      id: style.facebook,
    },
    {
      source: connection,
      id: style.connection,
    },
    {
      source: messenger,
      id: style.messenger,
    },
    {
      source: social,
      id: style.social,
    },
    {
      source: chain,
      id: style.chain,
    },
    {
      source: telegram,
      id: style.telegram,
    },
    {
      source: stat,
      id: style.stat,
    },
  ];
  return (
    <>
      <div id={style.mainWrapper}>
        <div id={style.masked}></div>
        <motion.div
          id={style.radar}
          animate={{
            rotate: -270,
            opacity: 0.3,
          }}
          transition={{
            default: {
              ease: 'linear',
              repeat: Infinity,
              duration: 8,
              repeatDelay: 1,
            },
            opacity: {
              ease: 'linear',
              repeat: Infinity,
              duration: 0.8,
              repeatType: 'reverse',
            },
            background: {
              repeat: Infinity,
              duration: 5,
              repeatType: 'reverse',
            },
          }}></motion.div>
      </div>
    </>
  );
}
