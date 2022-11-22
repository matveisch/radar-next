import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import styles from "./AwarenessSection.module.scss";
import ReputationMeter from "../../components/reputation-meter/ReputationMeter";
function AwarenessSection() {
  const sliderBtn = useRef<HTMLDivElement>(null);
  const [sliderBgWidth, setSliderBgWidth] = useState<number | undefined>(200);

  const handleDrag = (e: any) => {
    console.log(sliderBtn);
    setSliderBgWidth(sliderBtn.current?.offsetLeft);
  };

  useEffect(() => {
    console.log("heyu");
    setSliderBgWidth(sliderBtn.current?.offsetLeft);
  }, []);
  return (
    <div id={styles.awarenessWrapper}>
      <h2 className="H2">
        Social <br /> Awareness{" "}
      </h2>
      <motion.div style={{ width: sliderBgWidth }} id={styles.sliderBG}>
        <motion.div
          onDrag={(event, info) => setSliderBgWidth(info.point.x - 150)}
          drag="x"
          dragConstraints={{ left: 0, right: 1000 }}
          dragMomentum={false}
          dragElastic={0}
          id={styles.sliderBtn}
          ref={sliderBtn}
        ></motion.div>
      </motion.div>

      <ReputationMeter />
    </div>
  );
}

export default AwarenessSection;
