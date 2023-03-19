import React from 'react';
import styles from './index.module.scss';

interface Props {
  step: number;
  text: string;
  last?: boolean;
}

export default function GuideStepRight({ step, text, last }: Props) {
  return (
    <div id={styles.main}>
      <div id={styles.border}>
        <div id={styles.stepNum}>
          <p className="H3">STEP {step}</p>
        </div>
        <div id={styles.wrapper}>
          <p className="paragraph">{text}</p>
        </div>
        {!last && <div id={styles.arrow}></div>}
      </div>
    </div>
  );
}
