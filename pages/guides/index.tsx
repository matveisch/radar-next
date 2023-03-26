import Head from 'next/head';
import React, { useContext } from 'react';
import styles from './index.module.scss';
import GuidesHero from '../../sections/guides-hero';
import GuideStepLeft from '../../components/guide-step-left';
import GuideStepRight from '../../components/guide-step-right';
import useGuidesList from '../../data/guidesList.js';
import useServicesList from '../../data/servicesList';
import { guideIdContextType, guideContext } from '../../components/Layout';
import GuideBtn from '../../ui/guide-menu-btn';
import GuideService from '../../components/guide-service';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function Services() {
  const guidesArr = useGuidesList();
  const servicesArr = useServicesList();
  const { guideId } = useContext(guideContext) as guideIdContextType;
  const stepsArr = [...guidesArr[guideId].steps];
  const { t } = useTranslation('guides');

  // useEffect(() => {
  //   document.body.style.background =
  //     'conic-gradient(from 90deg at 3px 3px, #232932 90deg, #242f3a 0) -3px -3px/70px 70px';
  // }, []);

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
            return <GuideStepLeft text={item} step={index + 1} last={stepsArr.length < index + 2} key={index} />;
          } else {
            return <GuideStepRight text={item} step={index + 1} last={stepsArr.length < index + 2} key={index} />;
          }
        })}
        <h2 className="H2" id={styles.alsoTitle}>
          {t('weCanHelp')}
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
          {t('readAlso')}
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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['guides', 'header', 'services'])),
    },
  };
}
