import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./ServicesMenuDesktop.module.scss";
import useServicesList from "../../data/servicesList";
import { cardIdContextType, idContext } from "../../components/Layout";
import ServicesBtn from "../../ui/services-btn/ServicesBtn";
import ServicesDescription from "../services-description/ServicesDescription";

export default function ServicesMenuDesktop() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [selectedId, setSelectedId] = useState<number>(0);

  const servicesArr = useServicesList();
  const { cardId } = useContext(idContext) as cardIdContextType;
  useEffect(() => {
    if (cardId != undefined) {
      setIsOpen(false);
    }
  }, []);

  return (
    <motion.div
      initial={false}
      id={styles.servicesMenuWrapper}
      animate={isOpen ? "open" : "closed"}
      onWheel={(event) => {
        event.deltaY > 0 ? setIsOpen(false) : setIsOpen(true);
      }}
    >
      <motion.div id={styles.servicesGrid}>
        {servicesArr.map((item, index) => {
          return (
            <ServicesBtn
              key={index}
              itemId={item.id}
              setOpen={setIsOpen}
              isOpen={isOpen}
            />
          );
        })}
      </motion.div>
      <ServicesDescription serviceId={cardId != null ? cardId : 0} />
    </motion.div>
  );
}
