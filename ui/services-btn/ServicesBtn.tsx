import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./ServicesBtn.module.scss";
import Image from "next/image";

interface Props {
  name: string;
  image: string;
  isOpen: boolean;
}

const ServicesBtn: React.FC<Props> = (props: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{ height: props.isOpen ? "170px" : "60px" }}
      id={styles.mainWrapperBtn}
    >
      <motion.h4
        animate={{
          fontSize: props.isOpen ? "50px" : "34px",
          marginTop: props.isOpen ? "20px" : 0,
          width: props.isOpen ? "40%" : "100%",
        }}
        id={styles.titleBtn}
        className="H4"
      >
        {props.name}
      </motion.h4>
      <motion.div
        animate={{
          height: props.isOpen ? "210px" : "55px",
          x: hovered && props.isOpen ? 20 : 0,
          scale: hovered && props.isOpen ? 1.2 : 1,
          rotate: hovered ? -10 : !props.isOpen ? 0 : -20,
        }}
      >
        <Image
          id={styles.imgBtn}
          src={require(`../../images/${props.image}.svg`)}
          alt={props.image}
        />
      </motion.div>
      <motion.div
        id={styles.arrow}
        animate={{
          opacity: props.isOpen ? 1 : 0,
          width: hovered ? 100 : 20,
        }}
        transition={{
          default: {
            duration: 0.2,
          },
          opacity: {
            duration: 0,
          },
        }}
      ></motion.div>
    </motion.div>
  );
};
export default ServicesBtn;
