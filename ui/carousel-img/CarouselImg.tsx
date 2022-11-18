import React from "react";
import styles from "../../components/carousel/Carousel.module.scss";

type Props = {
  image: string;
};

export default function CarouselImg({ image }: Props) {
  return (
    <div
      style={{
        backgroundImage: `url('${image}')`,
      }}
      className={styles.carouselItem}
    ></div>
  );
}
