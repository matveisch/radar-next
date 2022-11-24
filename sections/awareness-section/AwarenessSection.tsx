import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import styles from "./AwarenessSection.module.scss";
import ReputationMeter from "../../components/reputation-meter/ReputationMeter";
import StabilityMeter from "../../components/stability-meter/StabilityMeter";
import ProfitMeter from "../../components/profit-meter/ProfitMeter";

function AwarenessSection() {
  const sliderBtn = useRef<HTMLDivElement>(null);
  const btnContainer = useRef<HTMLDivElement>(null);
  const [sliderBgWidth, setSliderBgWidth] = useState<number | undefined>(0);

  function handleDrag(info: any) {
    if (btnContainer.current != undefined) {
      info.point.x <= btnContainer.current?.clientWidth + 85
        ? setSliderBgWidth(info.point.x - 85)
        : setSliderBgWidth(btnContainer.current?.clientWidth);
    } else {
      return;
    }
  }
  return (
    <div id={styles.awarenessWrapper}>
      <h2 className="H2">
        Social <br /> Awareness{" "}
      </h2>
      <div style={{ width: sliderBgWidth }} id={styles.sliderBG} />
      <div style={{ width: "100%" }} ref={btnContainer}>
        <motion.div
          onDrag={(event, info) => handleDrag(info)}
          drag="x"
          dragConstraints={btnContainer}
          dragMomentum={false}
          dragElastic={0}
          id={styles.sliderBtn}
          ref={sliderBtn}
        ></motion.div>
      </div>
      <div id={styles.flexBox}>
        <div>
          <ReputationMeter
            value={
              sliderBgWidth != undefined && btnContainer.current != undefined
                ? (sliderBgWidth * 100) / btnContainer.current?.clientWidth
                : 0
            }
          />
        </div>
        <div>
          <StabilityMeter
            value={
              sliderBgWidth != undefined && btnContainer.current != undefined
                ? (sliderBgWidth * 100) / btnContainer.current?.clientWidth
                : 0
            }
          />
        </div>
        <div>
          <ProfitMeter
            value={
              sliderBgWidth != undefined && btnContainer.current != undefined
                ? (sliderBgWidth * 100) / btnContainer.current?.clientWidth
                : 0
            }
          />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AwarenessSection;
