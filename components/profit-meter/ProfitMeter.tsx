import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./ProfitMeter.module.scss";
import Image from "next/image";
import reputationScale from "../../images/reputationScale.png";
import needle from "../../images/needle.svg";
import { getTsBuildInfoEmitOutputFilePath } from "typescript";

interface Props {
  value: number;
}

function ProfitMeter({ value }: Props) {
  const [rotateValue, setRotateValue] = useState(
    "rotate(" + ((235 * value) / 100 - 60) + "deg)"
  );
  useEffect(() => {
    setRotateValue("rotate(" + ((235 * value) / 100 - 45) + "deg)");
  }, [value]);

  return (
    <>
      <div id={styles.borderAround}>
        <div id={styles.mainWrapper}>
          <div
            id={styles.bgImgWrapper}
            style={{
              filter: "hue-rotate(" + -(134 * (100 - value)) / 100 + "deg)",
            }}
          ></div>
          <div id={styles.bgImgScales}></div>
          <motion.div
            id={styles.imgWrapper}
            animate={{ rotate: [30, 0, 30] }}
            transition={{
              duration: 6,
              ease: "easeOut",
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
      <h4 id={styles.title} className="paragraph">
        Profit
      </h4>
    </>
  );
}

export default ProfitMeter;
