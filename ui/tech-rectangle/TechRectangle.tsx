import Image, { StaticImageData } from 'next/image';
import React from 'react';
import styles from './TechRectangle.module.scss';
import volvo from '../../public/images/carouselIMG/Volvo.png';
interface Props {
  img: string | StaticImageData;
  title?: string;
}

export default function TechRectangle({ img, title }: Props) {
  return (
    <div className={styles.techRectangle}>
      <div className={styles.imageTitle}>
        <Image src={img} alt="tech icon" />
        <h1 className="light-paragraph">{title}</h1>
      </div>
    </div>
  );
}
