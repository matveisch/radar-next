import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import LabServices from '../../sections/LabServices/LabServices';
import styles from './index.module.scss';
import LabHero from '../../sections/LabHero';
import WhyRadar from '../../sections/WhyRadar/WhyRadar';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import quoteIcon from '../../public/images/quote.svg';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

function Lab() {
  const { t } = useTranslation('lab');
  const { locale } = useRouter();

  return (
    <div>
      <Head>
        <title>Lab</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/labfavicon.svg" />
      </Head>
      <div className={styles.lab}>
        <LabHero />
        <div id={styles.labQuote} style={locale === 'he' ? { marginLeft: 'unset', marginRight: '-10vw' } : undefined}>
          <div id={styles.topDiv}></div>
          <div id={styles.quote}>
            <Image src={quoteIcon} alt="quoteIcon" id={styles.quoteIconLeft} />
            <p className="H4">
              {t('quotation')}
              {<br />}
              <span className="paragraph">{t('quoteAuthor')}</span>
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
