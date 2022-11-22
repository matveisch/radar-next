import React from "react";
import { motion } from "framer-motion";
import styles from "./ReputationMeter.module.scss";
import Image from "next/image";
import reputationScale from "../../images/reputationScale.png";
import needle from "../../images/needle.svg";
function ReputationMeter() {
  return (
    <div id={styles.borderAround}>
      <div id={styles.mainWrapper}>
        <Image id={styles.scaleImg} src={reputationScale} alt="repScale" />
        <motion.div>
          <Image id={styles.needleImg} src={needle} alt="needle" />
        </motion.div>
      </div>
    </div>
  );
}

export default ReputationMeter;
