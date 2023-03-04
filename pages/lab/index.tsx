import Head from 'next/head';
import React from 'react';
import Bubbles from '../../sections/bubbles';
import Bubble from '../../ui/bubble';
import LabServices from '../../sections/LabServices/LabServices';
import styles from './index.module.scss';

function Lab() {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.lab}>
        <LabServices />
        {/* <Bubbles /> */}
        <Bubble />
      </div>
    </div>
  );
}

export default Lab;
