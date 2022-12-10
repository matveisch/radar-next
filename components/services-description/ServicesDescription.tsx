import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ServicesDescription.module.scss";
import useServicesList from "../../data/servicesList";

interface Props {
    serviceId: number;
  }

  const variants = {
    closed: { opacity: 1, x: 0 },
    open: { opacity: 0, x:0 },
  }

export default function ServicesDescription({ serviceId }: Props){
    const servicesArr = useServicesList();
    return(
        <div>
            <motion.div
               variants={variants}
          className={styles.paragraphs}
        >
          <p style={{ color: "white", fontSize: "60px" }}>
            {servicesArr[serviceId].name}
          </p>
          <p style={{ color: "white", fontSize: "60px" }}>
            {servicesArr[serviceId].content}
          </p> 
        </motion.div>
        </div>
    )
}