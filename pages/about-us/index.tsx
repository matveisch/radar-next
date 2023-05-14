import Head from 'next/head';
import React from 'react';
import styles from './index.module.scss';
import AboutCard from '../../components/aboutCard';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import StabilityMeter from '../../components/stability-meter/StabilityMeter';
import AttendanceMeter from '../../components/attendance-meter/AttendanceMeter';
import ProfitMeter from '../../components/profit-meter/ProfitMeter';
import ReputationMeter from '../../components/reputation-meter/ReputationMeter';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { useTranslation } from 'next-i18next';

const AboutUs = () => {
  const { t } = useTranslation('about');
  // const [count, setCount] = useState(0);

  const members = [
    {
      job: 'Chief Executive Leader',
      name: t('simonName'),
      textArr: [t('simonDescription.experience'), t('simonDescription.expert')],
      img: 'simon.jpg',
    },
    {
      job: 'Executive Leader',
      name: t('rinaName'),
      textArr: [
        t('rinaDescription.experience'),
        t('rinaDescription.spb'),
        t('rinaDescription.marketingAgency'),
        t('rinaDescription.expert'),
      ],
      img: 'rina.jpg',
    },
    {
      job: 'Development Executive Leader',
      name: t('vadimName'),
      textArr: [t('vadimDescription.experience'), t('vadimDescription.expert')],
      img: 'vadim.jpg',
    },
    {
      job: 'General Chief Staff Leader',
      name: t('elenaName'),
      textArr: [t('elenaDescription.experience'), t('elenaDescription.cases')],
      img: 'elena.jpg',
    },
  ];

  // useEffect(() => {
  //   console.log(count);
  //   const interval = setInterval(() => {
  //     if (count < 100) {
  //       setCount(count + 1);
  //     }
  //   }, 30);

  //   return () => clearInterval(interval);
  // }, [count]);

  return (
    <div>
      <Head>
        <title>{t('aboutUs')}</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div id={styles.main}>
        <h2>{t('aboutUs')}</h2>
        <div id={styles.topFlex}>
          <p>{t('aboutRadar')}</p>
          <div id={styles.meterWrapper} dir={'ltr'}>
            <Swiper
              slidesPerView={1}
              className="mySwiper"
              centeredSlides={true}
              spaceBetween={30}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}>
              <SwiperSlide>
                <StabilityMeter value={70} />
              </SwiperSlide>
              <SwiperSlide>
                <AttendanceMeter value={70} />
              </SwiperSlide>
              <SwiperSlide>
                <ProfitMeter value={70} />
              </SwiperSlide>
              <SwiperSlide>
                <ReputationMeter value={70} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <h2 className="H1">{t('team')}</h2>
        <div id={styles.membersWrapper}>
          {members.map((item, index) => {
            return (
              <AboutCard
                img={item.img}
                job={item.job}
                textArr={item.textArr}
                name={item.name}
                ltr={index % 2 != 0}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['about', 'header', 'services', 'common'])),
    },
  };
}
