import React, { useState, useEffect, useRef, useContext } from "react";
import { motion } from "framer-motion";
import useServicesList from "../../data/servicesList";
import Link from "next/link";
import ServicesBtn from "../../ui/services-btn/ServicesBtn";
import styles from "./index.module.scss";
import { cardIdContextType, idContext } from "../../components/Layout";

const Services = () => {
  //   const location = useLocation();
  const servicesArr = useServicesList();
  const [isOpen, setIsOpen] = useState(true);
  const [checkedService, setCheckedService] = useState(servicesArr[0]);
  const [gridBottomEdgePos, setGridBottomEdgePos] = useState(0);
  const contactBtn = useRef<HTMLDivElement>(null);

  const { cardId } = useContext(idContext) as cardIdContextType;

  //Проверяем если при открытии страницы услуг был
  //передан индекс услуги чтобы открыть конкретную
  useEffect(() => {
    //Сразу открываем выбранную услугу
    const checkedServiceIndex = cardId;
    console.log(cardId);
    if (cardId !== null) {
      setIsOpen(false);
      checkedServiceIndex &&
        setCheckedService(servicesArr[checkedServiceIndex]);
    } else {
      setIsOpen(true);
    }
  }, [cardId]);

  //Обновляет нижнюю координату Contact кнопочки => высоту grid элемента
  //Позволяет определить когда юзер долистал до конца кнопочек
  useEffect(() => {
    setGridBottomEdgePos(
      contactBtn.current != null ? contactBtn.current.offsetTop + 210 : 0
    );
  });

  //Скролл до упора вверх раскрывает кнопочки
  //Скролл ниже чем кнопочки закрывает кнопочки
  const handleWheel = (e: any) => {
    //Если уперлись вверх - открываем:
    if (e.deltaY < 0 && e.view.pageYOffset == 0) {
      setIsOpen(true);

      //Или если пролистали до конца кнопочек - закрываем:
    } else if (e.view.pageYOffset + e.view.innerHeight >= gridBottomEdgePos) {
      setIsOpen(false);
    }
  };

  //Открывает секцию на котрую нажали
  const handleClick = (index: number) => {
    setCheckedService(servicesArr[index]);
    setIsOpen(false);
  };

  return (
    <div id={styles.servicesMainWrapper} onWheel={handleWheel}>
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
              <ServicesBtn name={item.name} image={item.img} isOpen={isOpen} />
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
        style={{ visibility: isOpen ? "hidden" : "visible" }}
      >
        <p style={{ color: "white", fontSize: "60px" }} className="paragraph">
          {checkedService.name}
        </p>
        <p style={{ color: "white", fontSize: "60px" }} className="paragraph">
          {checkedService.content}
        </p>
      </motion.div>
    </div>
  );
};

export default Services;
