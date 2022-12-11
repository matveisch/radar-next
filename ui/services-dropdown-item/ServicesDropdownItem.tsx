import React, { useContext } from "react";
import { motion, useCycle } from "framer-motion";
import Image from "next/image";
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
            
              <Image id={styles.menuItemImg} src={require(`../../images/${servicesArr[itemId].img}.svg`)} alt={servicesArr[itemId].name} />
                <p className='paragraph' id={styles.menuItemText}>{servicesArr[itemId].name}</p>
            
        </motion.li>
    )
}