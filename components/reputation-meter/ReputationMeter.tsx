import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./ReputationMeter.module.scss";
import Image from "next/image";
import reputationScale from "../../images/reputationScale.png";
import needle from "../../images/needle.svg";
import { symlink } from "fs";
import { setDefaultResultOrder } from "dns";

interface Props {
  value: number;
}

function ReputationMeter({ value }: Props) {
  const [rotateValue, setRotateValue] = useState(
    "rotate(" + (300 * value) / 100 + "deg)"
  );
  useEffect(() => {
    setRotateValue("rotate(" + (300 * value) / 100 + "deg)");
  }, [value]);

  return (
    <>
      <div id={styles.borderAround}>
        <div id={styles.mainWrapper}>
          <motion.div
            id={styles.imgWrapper}
            animate={{ rotate: [1, -1, 1] }}
            transition={{
              duration: 0.3,
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
      <h4 id={styles.title} className="paragraph">
        Reputation
      </h4>
    </>
  );
}

export default ReputationMeter;
