import React, { useEffect, useState, useRef } from 'react';
import styles from './index.module.scss';
import Bubble from '../../ui/bubble';
import { number } from 'yup';

export default function Bubbles() {
  const ref = useRef();

  const [bubblesArr, setBubblesArr] = useState<any[]>([]);
  // useEffect(() => {
  //   setWindowSize({
  //     width: ref.current ? undefined : ref.current.offsetWidth,
  //     height: ref.current!.offsetHeight,
  //   });
  //   setBubblesArr([
  //     <Bubble height={windowSize.height} width={windowSize.width} />,
  //     <Bubble height={windowSize.height} width={windowSize.width} />,
  //     <Bubble height={windowSize.height} width={windowSize.width} />,
  //     <Bubble height={windowSize.height} width={windowSize.width} />,
  //     <Bubble height={windowSize.height} width={windowSize.width} />,
  //     <Bubble height={windowSize.height} width={windowSize.width} />,
  //     <Bubble height={windowSize.height} width={windowSize.width} />,
  //   ]);
  // }, [ref.current]);

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: 100,
      height: 100,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: ref.current!.offsetWidth,
          height: ref.current!.offsetHeight,
        });
      }

      window.addEventListener('resize', handleResize);

      handleResize();

      console.log(ref);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
  }
  useEffect(() => {
    setTimeout(() => {
      if (bubblesArr.length > 20) {
        setBubblesArr(bubblesArr.slice(1, bubblesArr.length));
      }
      setBubblesArr([...bubblesArr, <Bubble width={size.width} height={size.height} />]);
    }, 500);
  }, [bubblesArr]);

  // while (bubblesArr.length < 10) {
  //   setTimeout(() => {
  //     setBubblesArr([...bubblesArr, bubblesArr.length]);
  //   }, 1000);
  //   if (bubblesArr.length >= 9) {
  //     let arr = [...bubblesArr];
  //     arr.shift();
  //     setBubblesArr([...arr]);
  //   }
  // }
  const size = useWindowSize();
  console.log(size);
  return (
    <div ref={ref} id={styles.bubbleWrapper}>
      {/* {bubblesArr.length ? bubblesArr.map(item => <Bubble width={size.width} height={size.height} />) : <></>} */}
      {bubblesArr}
    </div>
  );
}
