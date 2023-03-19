import React, { useContext } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import styles from './index.module.scss';
import Image from 'next/image';
import GuideBtn from '../../ui/guide-menu-btn';
import useGuidesList from '../../data/guidesList.js';
import { guideIdContextType, guideContext } from '../../components/Layout';
function GuidesHero() {
  const servicesArr = useGuidesList();

  const { guideId } = useContext(guideContext) as guideIdContextType;

  return (
    <div id={styles.hero}>
      <div id={styles.btnWrapper}>
        {servicesArr.map((item, index) => {
          return <GuideBtn key={index} id={item.id} text={item.shortName} />;
        })}
      </div>
      <div id={styles.heroTitle}>
        <h1 className="H1" id={styles.title}>
          {servicesArr[guideId].name}
        </h1>
        <div id={styles.image}> </div>
      </div>
    </div>
  );
}

export default GuidesHero;
