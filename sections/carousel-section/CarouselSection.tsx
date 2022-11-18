import React from "react";
import TechRectangle from "../../ui/tech-rectangle/TechRectangle";
import CarouselImg from "../../ui/carousel-img/CarouselImg";
import Carousel from "../../components/carousel/Carousel";

import creatives from "../../images/colored-creative.svg";
import development from "../../images/colored-developent.svg";
import copyrighting from "../../images/colored-copyrighting.svg";
import styles from "./CarouselSection.module.scss";
import carouselStyles from "../../components/carousel/Carousel.module.scss";

export default function CarouselSection() {
  const arrayOfBlocks = [
    <TechRectangle img={development} title="Development" key={0} />,
    <CarouselImg
      image="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      key={1}
    />,
    <TechRectangle img={copyrighting} title="Copyrighting" key={2} />,
    <p className="paragraph" key={3}>
      Мы устраиваем вот такие штуки и вот такие штуки и можем проводить эфиры
      вообще без проблем хотете? И рекламу в телик БАМ
    </p>,
    <TechRectangle img={creatives} title="Creatives" key={4} />,
    <CarouselImg
      image="https://images.unsplash.com/photo-1524124689028-f924049fe2d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      key={5}
    />,
  ];

  return (
    <div id={styles.carouselSection}>
      <Carousel
        arrayOfBlocks={arrayOfBlocks}
        styleType={carouselStyles.animationOne}
      />
      <Carousel
        arrayOfBlocks={arrayOfBlocks}
        styleType={carouselStyles.animationTwo}
      />
      <Carousel
        arrayOfBlocks={arrayOfBlocks}
        styleType={carouselStyles.animationThree}
      />
    </div>
  );
}
