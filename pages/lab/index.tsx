import Head from 'next/head';
import React from 'react';
import LabServices from '../../sections/LabServices/LabServices';
import styles from './index.module.scss';
import LabHero from '../../sections/LabHero';
import WhyRadar from '../../sections/WhyRadar/WhyRadar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function Lab() {
  return (
    <div>
      <Head>
        <title>Lab</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.lab}>
        <LabHero />
        <LabServices />
        <WhyRadar />
      </div>
    </div>
  );
}

export default Lab;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'services', 'lab'])),
    },
  };
}
