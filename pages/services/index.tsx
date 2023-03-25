import React, { useState, useEffect, useRef, useContext } from 'react';
import ServicesMenuMobile from '../../components/services-menu-mobile/ServicesMenuMobile';
import ServicesMenuDesktop from '../../components/services-menu-desktop/ServicesMenuDesktop';
import useServicesList from '../../data/servicesList';
import styles from './index.module.scss';
import { cardIdContextType, idContext } from '../../components/Layout';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Services = () => {
  //   const location = useLocation();
  const servicesArr = useServicesList();
  const [isOpen, setIsOpen] = useState(true);
  const [checkedService, setCheckedService] = useState(servicesArr[0]);
  const [gridBottomEdgePos, setGridBottomEdgePos] = useState(0);
  const contactBtn = useRef<HTMLDivElement>(null);

  const { cardId } = useContext(idContext) as cardIdContextType;

  //Check if when opening the services page there was
  //service index passed to open a specific
  useEffect(() => {
    //Immediately open the selected service
    const checkedServiceIndex = cardId;
    if (cardId !== null) {
      setIsOpen(false);
      checkedServiceIndex && setCheckedService(servicesArr[checkedServiceIndex]);
    } else {
      setIsOpen(true);
    }
  }, [cardId]);

  //Updates the bottom coordinate of the Contact button => the height of the grid element
  //Allows to determine when the user scrolled to the end of the buttons
  useEffect(() => {
    setGridBottomEdgePos(contactBtn.current != null ? contactBtn.current.offsetTop + 210 : 0);
  });

  //Scroll all the way up reveals the buttons
  //Scroll lower than the buttons closes the buttons
  const handleWheel = (e: any) => {
    //Если уперлись вверх - открываем:
    if (e.deltaY < 0 && e.view.pageYOffset == 0) {
      setIsOpen(true);

      //Or if you scrolled to the end of the buttons => close:
    } else if (e.view.pageYOffset + e.view.innerHeight >= gridBottomEdgePos) {
      setIsOpen(false);
    }
  };

  //Opens the clicked section
  const handleClick = (index: number) => {
    setCheckedService(servicesArr[index]);
    setIsOpen(false);
  };

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
      ...(await serverSideTranslations(locale, ['header', 'services'])),
    },
  };
}
