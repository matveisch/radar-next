import React, { useContext } from "react";
import { motion, useCycle } from "framer-motion";
import styles from "./ServicesMenuMobile.module.scss";
import Image from "next/image";
import { cardIdContextType, idContext } from "../../components/Layout";
import ServicesDropdownMenu from "../../ui/services-dropdown-menu/ServicesDropdownMenu";
import ServicesDescription from "../services-description/ServicesDescription";
import useServicesList from "../../data/servicesList";

const listWrapper ={ 
    open: {
        height: 0
    },
    closed: {
        height: 100
    }
}

export default function ServicesMenuMobile(){
    const [isOpen, toggleOpen] = useCycle(false, true)
    const servicesArr = useServicesList();
    const { cardId } = useContext(idContext) as cardIdContextType;
    return(
        <motion.div  initial={false}
        id={styles.servicesMenuWrapper}
        animate={isOpen ? "open" : "closed"}>
           
            <motion.div id={styles.listWrapper} >
                <motion.div id={styles.chosenService}  onClick={() => {toggleOpen()}}>
                    <Image id={styles.chosenServiceImg} src={require(`../../images/${servicesArr[cardId != null ? cardId : 0].img}.svg`)} alt={servicesArr[cardId != null ? cardId : 0].name}/>
                    <p className='H4' id={styles.chosenServiceText}>{servicesArr[cardId != null ? cardId : 0].name}</p>
                    <motion.div
                    id={styles.dropDownImg}
                    animate={{rotate: isOpen ? -180 : 0}}>
                        <Image
                        src={require(`../../images/drop-down.svg`)} alt='drop down icon'/>
                    </motion.div>
                </motion.div>
                <ServicesDropdownMenu toggle={() => toggleOpen()}/>
                <ServicesDescription serviceId={cardId != null ? cardId : 0}/>
            </motion.div>
        </motion.div>
    )
}