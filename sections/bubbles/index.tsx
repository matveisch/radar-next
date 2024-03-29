import React, { useEffect, useState, useRef } from 'react';
import styles from './index.module.scss';
import Bubble from '../../ui/bubble';

export default function Bubbles() {
  const ref = useRef<HTMLDivElement>(null);

  const [bubblesArr, setBubblesArr] = useState<JSX.Element[]>([<Bubble key={0} width={300} height={500} />]);
  const [secondBubblesArr, setSecondBubblesArr] = useState<JSX.Element[]>([
    <Bubble key={0} width={300} height={500} />,
  ]);
  const [changed, setChanged] = useState<boolean>(true);
  const notInitialRender = useRef(false);

  function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: 100,
      height: 100,
    });

    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: ref.current!.offsetWidth - 300,
          height: ref.current!.offsetHeight - 300,
        });
      }

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
  }
  useEffect(() => {
    let timer = 500;
    // console.log('FIRST: ' + bubblesArr.length);
    setTimeout(() => {
      if (bubblesArr.length > 20) {
        notInitialRender.current = true;
        setChanged(!changed);
        setTimeout(() => {
          setBubblesArr([]);
        }, 10000);
      } else {
        setBubblesArr([...bubblesArr, <Bubble key={bubblesArr.length} width={size.width} height={size.height} />]);
      }
    }, timer);
  }, [bubblesArr]);

  useEffect(() => {
    // let timer = 500;
    // console.log('SECOND: ' + secondBubblesArr.length);
    if (notInitialRender.current) {
      setTimeout(() => {
        if (secondBubblesArr.length > 20) {
          setTimeout(() => {
            setSecondBubblesArr([]);
          }, 10000);
        } else {
          setSecondBubblesArr([
            ...secondBubblesArr,
            <Bubble key={secondBubblesArr.length} width={size.width} height={size.height} />,
          ]);
          setChanged(!changed);
        }
      }, 500);
    }
    // } else {
    //   notInitialRender.current = true;
    // }
  }, [changed]);

  const size = useWindowSize();
  useEffect(() => {
    setBubblesArr([]);
    setSecondBubblesArr([]);
  }, [size]);
  return (
    <div ref={ref} id={styles.bubbleWrapper}>
      {bubblesArr}
      {secondBubblesArr}
    </div>
  );
}
