import Head from 'next/head';
import React from 'react';
import CircleContact from '../../components/circle-contact/CircleContact';
import ContactForm from '../../components/contact-form/ContactForm';
import styles from './index.module.scss';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id={styles.contactPage}>
        <CircleContact />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['contact', 'header', 'services'])),
    },
  };
}
