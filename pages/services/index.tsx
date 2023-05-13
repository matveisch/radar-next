import React from 'react';
import ServicesMenuMobile from '../../components/services-menu-mobile/ServicesMenuMobile';
import ServicesMenuDesktop from '../../components/services-menu-desktop/ServicesMenuDesktop';
import styles from './index.module.scss';

import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Services = () => {
  //   const location = useLocation();

  return (
    <div>
      <Head>
        <title>Services</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* DESCKTOP MENU */}
        <div id={styles.servicesDesktopWrapper}>
          <ServicesMenuDesktop />
        </div>

        {/* MOBILE MENU */}
        <div id={styles.servicesMobileWrapper}>
          <ServicesMenuMobile />
        </div>
      </main>
    </div>
  );
};

export default Services;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['header', 'services', 'tariffs'])),
    },
  };
}
