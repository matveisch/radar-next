import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import LabServices from '../../sections/LabServices/LabServices';
import styles from './index.module.scss';
import LabHero from '../../sections/LabHero';
import WhyRadar from '../../sections/WhyRadar/WhyRadar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import quoteIcon from '../../images/quote.svg';

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
        <div id={styles.labQuote}>
          <div id={styles.topDiv}></div>
          <div id={styles.quote}>
            <Image src={quoteIcon} alt="quoteIcon" id={styles.quoteIconLeft} />
            <p className="H4">
              Самый простой способ завоевать новых клиентов — это делать хорошую рекламу.
              <p>- Дэвил Огилви</p>
            </p>

            <Image src={quoteIcon} alt="quoteIcon" id={styles.quoteIconRight} />
          </div>

          <div id={styles.bottomDiv}></div>
        </div>
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
