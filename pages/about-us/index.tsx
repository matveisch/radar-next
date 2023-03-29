import Head from 'next/head';
import React, { useState, useEffect } from 'react';
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
import { start } from 'repl';
const members = [
  {
    job: 'Chief Executive Leader',
    name: 'Семён Шварцман',
    textArr: ['5 лет опыт организации рекламной деятельности', 'Эксперт в сфере контакта с инфлюенсерами'],
    img: 'simon.jpg',
  },
  {
    job: 'Executive Leader',
    name: 'Рина Журавлева',
    textArr: [
      'Опыт работы в рекламном бизнесе  более 25 лет',
      'Более 10 лет возглавляла Русскую Медиа Группу в Санкт-Петербурге (холдинг радиостанций «Русское радио», «Максимум», «Ди-фм», «Монте-Карло», «Питер-Фм»)',
      'Более 10 лет руководит рекламным агентством полного цикла',
      'Эксперт по продажам, дипломированный психолог',
    ],
    img: 'rina.jpg',
  },
  {
    job: 'Development Executive Leader',
    name: 'Вадим Снегирев',
    textArr: [
      'Опыт работы в рекламном бизнесе более 20 лет',
      'Эксперт в продвижении рекламных агентств на рынке России',
    ],
    img: 'vadim.jpg',
  },
  {
    job: 'General Chief Staff Leader',
    name: 'Елена Крахмаль',
    textArr: [
      'Более 20 лет опта работы в рекламном бизнесе',
      'Более тысячи успешных кейсов свидетельствуют об экспертности в коммуникации с держателями ресурсов',
    ],
    img: 'elena.jpg',
  },
];

const AboutUs = () => {
  // const [count, setCount] = useState(0);

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
        <title>About Us</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={styles.main}>
        <h2>About us</h2>
        <div id={styles.topFlex}>
          <p>
            Radar Digitaly - маркетинговая компания, которая помогает бизнесам достигать своих целей и увеличивать
            прибыль. Наша команда экспертов в области маркетинга и рекламы создает индивидуальные стратегии для каждого
            клиента, учитывая его потребности и особенности бизнеса. Мы используем современные технологии и инструменты,
            чтобы максимально эффективно достигать поставленных целей. Мы гордимся своими успехами и стараемся делать
            все возможное, чтобы наши клиенты чувствовали себя уверенно в своем успехе.
          </p>
          <div id={styles.meterWrapper}>
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

        <h2 className="H1">Team</h2>
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
      ...(await serverSideTranslations(locale, ['contact', 'header', 'services'])),
    },
  };
}
