import React, { useContext } from "react";
import { motion, useCycle } from "framer-motion";
import styles from "./ServicesDropdownItem.module.scss";
import useServicesList from "../../data/servicesList";
import { cardIdContextType, idContext } from "../../components/Layout";

interface Props {
    itemId: number;
    toggle: Function
  }
const variants = {
    open: {
      y: 0,
      opacity: 1,
      height: "auto",
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      height: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

export default function ServicesDropdownItem({ itemId, toggle }: Props){
    const servicesArr = useServicesList();
    const { cardId, setCardId } = useContext(idContext) as cardIdContextType;
    return(
        <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={()=>{
            setCardId(itemId)
            toggle()}}
            id={styles.itemLi}
        >
            <div>
                <p>{servicesArr[itemId].name}</p>
            </div>
        </motion.li>
    )
}