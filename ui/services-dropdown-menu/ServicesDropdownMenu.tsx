import React, { useContext } from "react";
import { motion, useCycle } from "framer-motion";
import styles from "./ServicesDropdownMenu.module.scss";
import { cardIdContextType, idContext } from "../../components/Layout";
import ServicesDropdownItem from "../services-dropdown-item/ServicesDropdownItem";
import useServicesList from "../../data/servicesList";


interface Props{
    toggle: Function
}
const variants ={ 
    open: {
        display:'block',
        transition: { staggerChildren: 0.07, delayChildren: 0.2,  }
      },
      closed: {
        display:"none",
        transition: { staggerChildren: 0.05, staggerDirection: -1,  }
      }
}
export default function ServicesDropdownMenu({ toggle }: Props){
    const servicesArr = useServicesList();
    const { cardId } = useContext(idContext) as cardIdContextType;
    return(
        <motion.ul
        id={styles.servicesUl}
        variants={variants}
        >
           {servicesArr.filter(item => item.id!=cardId).map((item, index) => 
                <ServicesDropdownItem itemId={item.id} toggle={() => toggle()} />
           )}
            
        </motion.ul>
    )
}