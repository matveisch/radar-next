import React from 'react';
import TechRectangle from '../../ui/tech-rectangle/TechRectangle';
import CarouselImg from '../../ui/carousel-img/CarouselImg';
import Carousel from '../../components/carousel/Carousel';
import creatives from '../../public/images/colored-creative.svg';
import development from '../../public/images/colored-developent.svg';
import copyrighting from '../../public/images/colored-copyrighting.svg';
import adrenaline from '../../public/images/carouselIMG/Ardrenaline.jpg';
import bmw from '../../public/images/carouselIMG/BMW.png';
import bud from '../../public/images/carouselIMG/Bud.png';
import ford from '../../public/images/carouselIMG/Ford.png';
import jaguar from '../../public/images/carouselIMG/Jaguar.png';
import kfc from '../../public/images/carouselIMG/KFC.jpg';
import landRover from '../../public/images/carouselIMG/LandRover.png';
import renault from '../../public/images/carouselIMG/Renault.png';
import s7airlines from '../../public/images/carouselIMG/S7Airlines.png';
// import volvo from '';
import yokohama from '../../public/images/carouselIMG/Yokohama.png';
import styles from './CarouselSection.module.scss';
import carouselStyles from '../../components/carousel/Carousel.module.scss';
import { useTranslation } from 'next-i18next';

export default function CarouselSection() {
  const { t } = useTranslation('common');

  const arrayOfBlocks = [
    // <TechRectangle img={development} title={t('development')} key={0} />,
    <TechRectangle img={bmw} title="" />,
    <p className="paragraph">
      Мы помогаем компаниям повысить узнаваемость и привлечь новых клиентов, разрабатывая индивидуальные стратегии
      маркетинга.
    </p>,
    <TechRectangle img={development} title="Development" />,
    <CarouselImg
      image="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      key={1}
    />,
    <p className="paragraph">
      Наша команда профессионалов использует различные маркетинговые инструменты, чтобы ваша компания выделялась на фоне
      конкурентов и была успешной.
    </p>,
    <TechRectangle img={renault} title="" />,
    <CarouselImg
      image="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      key={1}
    />,
    <TechRectangle img={copyrighting} title="Copyrighting" />,

    <TechRectangle img={adrenaline} title="" />,

    // <TechRectangle img={copyrighting} title={t('copywriting')} key={2} />,
    // <p className="paragraph" key={3} dir="rtl">
    //   {t('weDo')}
    // </p>,
    // <TechRectangle img={creatives} title={t('creatives')} key={4} />,
    // <CarouselImg
    //   image="https://images.unsplash.com/photo-1524124689028-f924049fe2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
    //   key={5}
    // />,
  ];
  const firtArr = [];
  return (
    <div id={styles.carouselSection} dir={'ltr'}>
      <Carousel arrayOfBlocks={arrayOfBlocks} styleType={carouselStyles.animationOne} />
      <Carousel arrayOfBlocks={arrayOfBlocks} styleType={carouselStyles.animationTwo} />
      <Carousel arrayOfBlocks={arrayOfBlocks} styleType={carouselStyles.animationThree} />
    </div>
  );
}
