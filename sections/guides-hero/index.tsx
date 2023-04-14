import React, { useContext } from 'react';
import styles from './index.module.scss';
import GuideBtn from '../../ui/guide-menu-btn';
import useGuidesList from '../../data/guidesList.js';
import { guideIdContextType, guideContext } from '../../components/Layout';
import Image from 'next/image';
import testingImg from '../../public/images/TESTIMG.jpg';

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
        <Image src={testingImg} alt="testing-img" id={styles.image} priority />
      </div>
    </div>
  );
}

export default GuidesHero;
