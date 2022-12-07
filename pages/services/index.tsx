import React, { useState, useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";
import useServicesList from "../../data/servicesList";
import Link from "next/link";
import ServicesBtn from "../../ui/services-btn/ServicesBtn";
import styles from "./index.module.scss";
import { cardIdContextType, idContext } from "../../components/Layout";
import Head from "next/head";

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
      checkedServiceIndex &&
        setCheckedService(servicesArr[checkedServiceIndex]);
    } else {
      setIsOpen(true);
    }
  }, [cardId]);

  //Updates the bottom coordinate of the Contact button => the height of the grid element
  //Allows to determine when the user scrolled to the end of the buttons
  useEffect(() => {
    setGridBottomEdgePos(
      contactBtn.current != null ? contactBtn.current.offsetTop + 210 : 0
    );
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
      <main
        id={styles.servicesMainWrapper}
        onWheel={handleWheel}
        style={{ height: isOpen ? "calc(100vh-300px)" : "auto" }}
      >
        <div id={styles.servicesBtnGrid}>
          {servicesArr.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index == checkedService.id && !isOpen
                    ? `${styles.checkedServiceBtn} ${styles.servicesBtn}`
                    : styles.servicesBtn
                }
                onClick={() => handleClick(index)}
              >
                <ServicesBtn
                  name={item.name}
                  image={item.img}
                  isOpen={isOpen}
                />
              </div>
            );
          })}
          <motion.div
            ref={contactBtn}
            id={styles.contactCard}
            animate={{ height: isOpen ? "170px" : "60px" }}
          >
            <motion.h4
              id={styles.title}
              className="H4"
              animate={{
                height: isOpen ? "100px" : 0,
                fontSize: isOpen ? "47px" : "34px",
                marginTop: isOpen ? "20px" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{
                default: {},
                opacity: {
                  duration: 0,
                },
              }}
            >
              Need help?
            </motion.h4>
            <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.03 }}>
              <Link href="/contact" id={styles.contactCardBtn} className="link">
                Ask Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          animate={{ opacity: isOpen ? 0 : 1 }}
          style={{
            visibility: isOpen ? "hidden" : "visible",
            display: isOpen ? "none" : "block",
          }}
          className={styles.paragraphs}
        >
          <p style={{ color: "white", fontSize: "60px" }}>
            {checkedService.name}
          </p>
          <p style={{ color: "white", fontSize: "60px" }}>
            {checkedService.content}
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Services;
