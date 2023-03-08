import React, { useEffect, useState, useRef } from 'react';
import styles from './index.module.scss';
import Bubble from '../../ui/bubble';

export default function Bubbles() {
  const [bubblesArr, setBubblesArr] = useState([<Bubble />]);
  const [windowSize, setWindowSize] = useState({});
  const aga = [...bubblesArr];
  const ref = useRef(null);
  useEffect(() => {
    setWindowSize({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight,
    });
    console.log(ref.current.offsetWidth);
    console.log(ref.current.offsetHeight);
  }, [ref.current]);
  setTimeout(() => {
    aga.push(<Bubble width={windowSize.width} height={windowSize.height} />);
    setBubblesArr(aga);
  }, 700);

  return (
    <div ref={ref} id={styles.bubbleWrapper}>
      {bubblesArr}
    </div>
  );
}
