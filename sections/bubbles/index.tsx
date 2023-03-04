import React, { useEffect, useState, useRef } from 'react';
import styles from './index.module.scss';
import Bubble from '../../ui/bubble';

export default function Bubbles() {
  const [bubblesArr, setBubblesArr] = useState([<Bubble />]);
  const aga = [bubblesArr];
  setTimeout(() => {
    aga.push([<Bubble />]);
    setBubblesArr(aga);
  }, 3000);

  return <div>{bubblesArr}</div>;
}
