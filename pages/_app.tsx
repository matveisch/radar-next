import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.scss';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const dir = locale === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(App);
