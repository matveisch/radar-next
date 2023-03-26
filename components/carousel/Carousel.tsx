import styles from './Carousel.module.scss';
import { useEffect, useState } from 'react';

type Props = {
  arrayOfBlocks: JSX.Element[];
  styleType: string;
};

export default function Carousel({ arrayOfBlocks, styleType }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [animationStyle, setAnimationStyle] = useState({
    animationPlayState: 'running',
  });

  useEffect(() => {
    setAnimationStyle({
      animationPlayState: isHovered ? 'paused' : 'running',
    });
  }, [isHovered]);

  return (
    <div
      className={styles.slider}
      onTouchStart={() => {
        setIsHovered(!isHovered);
      }}
      onTouchEnd={() => {
        setIsHovered(!isHovered);
      }}
      onMouseEnter={() => {
        setIsHovered(!isHovered);
      }}
      onMouseLeave={() => {
        setIsHovered(!isHovered);
      }}>
      <div className={`${styles.slideTrack} ${styleType}`} style={animationStyle}>
        {arrayOfBlocks.map((item, index) => {
          return (
            <div key={index} className={styles.carouselItem}>
              {item}
            </div>
          );
        })}
        {arrayOfBlocks.map((item, index) => {
          return (
            <div key={index} className={styles.carouselItem}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
