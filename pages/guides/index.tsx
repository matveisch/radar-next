import Head from 'next/head';
import React, { useContext, useEffect } from 'react';
import styles from './index.module.scss';
import GuidesHero from '../../sections/guides-hero';
import GuideStepLeft from '../../components/guide-step-left';
import GuideStepRight from '../../components/guide-step-right';
import useGuidesList from '../../data/guidesList.js';
import useServicesList from '../../data/servicesList';
import { guideIdContextType, guideContext } from '../../components/Layout';
import GuideBtn from '../../ui/guide-menu-btn';
import GuideService from '../../components/guide-service';

function Services() {
  const guidesArr = useGuidesList();
  const servicesArr = useServicesList();
  // useEffect(() => {
  //   document.body.style.background =
  //     'conic-gradient(from 90deg at 3px 3px, #232932 90deg, #242f3a 0) -3px -3px/70px 70px';
  // }, []);
  const { guideId } = useContext(guideContext) as guideIdContextType;
  const stepsArr = [...guidesArr[guideId].steps];
  console.log(guidesArr[guideId].steps[0]);
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.guide}>
        {/* <div className={styles.squaresBg}></div> */}
        <GuidesHero />
        {stepsArr.map((item, index) => {
          if (index % 2 == 0) {
            return <GuideStepLeft text={item} step={index + 1} last={stepsArr.length < index + 2 ? true : false} />;
          } else {
            return <GuideStepRight text={item} step={index + 1} last={stepsArr.length < index + 2 ? true : false} />;
          }
        })}
        <h2 className="H2" id={styles.alsoTitle}>
          Мы можем помочь
        </h2>
        <div id={styles.servicesWrapper}>
          <GuideService
            service={
              servicesArr[guidesArr[guideId].serviceId - 1] != undefined
                ? servicesArr[guidesArr[guideId].serviceId - 1]
                : servicesArr[servicesArr.length - 1]
            }
          />
          <GuideService service={servicesArr[guidesArr[guideId].serviceId]} highlight={true} />
          <GuideService
            service={
              servicesArr[guidesArr[guideId].serviceId + 1] != undefined
                ? servicesArr[guidesArr[guideId].serviceId + 1]
                : servicesArr[0]
            }
          />
        </div>
        <h2 className="H2" id={styles.alsoTitle}>
          Читайте также
        </h2>
        <div className={styles.also}>
          {guidesArr
            .filter(item => item.id != guideId)
            .map((item, index) => {
              return <GuideBtn key={index} id={item.id} text={item.shortName} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Services;