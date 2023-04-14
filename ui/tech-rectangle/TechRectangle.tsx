import Image from 'next/image';
import React from 'react';
import styles from './TechRectangle.module.scss';

interface Props {
  img: string;
  title: string;
}

export default function TechRectangle({ img, title }: Props) {
  return (
    <div className={styles.techRectangle}>
      <div className={styles.imageTitle}>
        <Image src={img} alt="" width="100" height="100" />
        <h1 className="light-paragraph">{title}</h1>
      </div>
    </div>
  );
}
