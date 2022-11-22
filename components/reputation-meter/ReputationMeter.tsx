import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./ReputationMeter.module.scss";
import Image from "next/image";
import reputationScale from "../../images/reputationScale.png";
import needle from "../../images/needle.svg";

interface Props {
  value: number;
}

function ReputationMeter({ value }: Props) {
  const [rotateValue, setRotateValue] = useState("rotate(" + value + "deg)");
  useEffect(() => {
    setRotateValue("rotate(" + value + "deg)");
  }, [value]);
  return (
    <div id={styles.borderAround}>
      <div id={styles.mainWrapper}>
        <Image id={styles.scaleImg} src={reputationScale} alt="repScale" />
        <motion.div
          id={styles.imgWrapper}
          animate={{ rotate: [10, -10, 10] }}
          transition={{
            duration: 2,
            ease: "easeInOut",

            repeat: Infinity,
          }}
        >
          <Image
            style={{ transform: rotateValue }}
            id={styles.needleImg}
            src={needle}
            alt="needle"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ReputationMeter;
