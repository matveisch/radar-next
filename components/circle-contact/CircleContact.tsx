import React from "react";
import { motion } from "framer-motion";
import styles from "./CircleContact.module.scss";
import telegram from "../../images/telegram-filled.svg";
import whatsapp from "../../images/whatsapp.svg";
import Image from "next/image";

const CircleContact = () => {
  return (
    <div className={styles.circleContact}>
      <div className={styles.circleGroup}>
        <motion.div
          initial={{ rotate: 270, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className={`${styles.upperCircle} ${styles.circle}`}
        ></motion.div>
        <div className={`${styles.lowerCircle} ${styles.circle}`}></div>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6, delay: 0.3 }}
          className="H1"
        >
          {`Let's`}
          <br />
          Talk
        </motion.h1>
      </div>
      <div className={`${styles.circleGroup} ${styles.secondCircle}`}>
        <motion.div
          initial={{ rotate: 270, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className={`${styles.upperCircle} ${styles.circle}`}
        ></motion.div>
        <div className={`${styles.lowerCircle} ${styles.circle}`}></div>
        <div className={styles.paragraphs}>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: "easeOut",
              duration: 0.9,
              delay: 0.6,
            }}
            className="paragraph"
          >
            email@gmail.com
          </motion.p>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: "easeOut",
              duration: 0.9,
              delay: 0.4,
            }}
            className="paragraph"
          >
            053-123-4567
          </motion.p>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ease: "easeOut",
              duration: 0.9,
              delay: 0.2,
            }}
            className={styles.icons}
          >
            <Image src={telegram} alt="icon" />
            <Image src={whatsapp} alt="icon" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CircleContact;
