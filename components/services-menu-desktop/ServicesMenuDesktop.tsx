import React, { useContext } from "react";
import { motion, useCycle } from "framer-motion";
import styles from "./ServicesMenuDesktop.module.scss";
import useServicesList from "../../data/servicesList";
import { cardIdContextType, idContext } from "../../components/Layout";

export default function ServicesMenuDesktop() {
  const [isOpen, toggleOpen] = useCycle(true, false);
  const servicesArr = useServicesList();
  const { cardId } = useContext(idContext) as cardIdContextType;
  return (
    <motion.div
      initial={false}
      id={styles.servicesMenuWrapper}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div id={styles.gridWrapper}></motion.div>
    </motion.div>
  );
}
