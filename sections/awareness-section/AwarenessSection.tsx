import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./AwarenessSection.module.scss";
import ReputationMeter from "../../components/reputation-meter/ReputationMeter";
import StabilityMeter from "../../components/stability-meter/StabilityMeter";
import ProfitMeter from "../../components/profit-meter/ProfitMeter";

function AwarenessSection() {
  const sliderBtn = useRef<HTMLDivElement>(null);
  const btnContainer = useRef<HTMLDivElement>(null);
  const sectionWrapper = useRef<HTMLDivElement>(null);
  const [btnOffsetX, setBtnOffsetX] = useState<number | undefined>(
    Number(
      sliderBtn.current?.style.transform.slice(
        11,
        sliderBtn.current?.style.transform.indexOf(".")
      )
    ) + 16
  );
  const [sliderBgWidth, setSliderBgWidth] = useState<number | undefined>(0);

  const { scrollYProgress } = useScroll({
    target: sectionWrapper,
    offset: ["end end", "start start"],
  });

  let x = useTransform(
    scrollYProgress,
    // Map x from these values:
    [0, 1],
    // Into these values:
    [0, btnContainer.current?.clientWidth]
  );

  useEffect(() => {
    setBtnOffsetX(
      Number(
        sliderBtn.current?.style.transform.slice(
          11,
          sliderBtn.current?.style.transform.indexOf(".")
        )
      ) + 16
    );
    setSliderBgWidth(btnOffsetX);
  }, [btnOffsetX]);
  function handleDrag() {
    setBtnOffsetX(
      Number(
        sliderBtn.current?.style.transform.slice(
          11,
          sliderBtn.current?.style.transform.indexOf(".")
        )
      ) + 16
    );
    setSliderBgWidth(btnOffsetX);

    //*******THIS IS 2ND WAY BUT LONGER IDK WHAT'S BETTER****** */

    // if (btnContainer.current != undefined) {
    //   x <= btnContainer.current?.offsetLeft
    //     ? setSliderBgWidth(0)
    //     : x <=
    //       btnContainer.current?.clientWidth + btnContainer.current?.offsetLeft
    //     ? setSliderBgWidth(x - btnContainer.current?.offsetLeft)
    //     : setSliderBgWidth(btnContainer.current?.clientWidth);
    // } else {
    //   return;
    // }
  }
  useEffect(() => {
    const handleResize = () => {
      setSliderBgWidth(
        Number(
          sliderBtn.current?.style.transform.slice(
            11,
            sliderBtn.current?.style.transform.indexOf(".")
          )
        ) + 16
      );
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);
  }, []);
  return (
    <div id={styles.awarenessWrapper} ref={sectionWrapper}>
      <div className={styles.flexBox}>
        <h2 className="H2">
          Social <br /> Awareness{" "}
        </h2>
        <div id={styles.sliderWrapper}>
          <div style={{ width: "100%" }} ref={btnContainer}>
            <motion.div
              style={{ x }}
              onDrag={() => handleDrag()}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              drag="x"
              dragConstraints={btnContainer}
              dragMomentum={false}
              dragElastic={0.08}
              id={styles.sliderBtn}
              ref={sliderBtn}
            ></motion.div>
          </div>
          <div style={{ width: sliderBgWidth }} id={styles.sliderBG} />
        </div>
      </div>
      <div className={styles.flexBox}>
        <div className={styles.meterWrapper}>
          <ReputationMeter
            value={
              sliderBgWidth != undefined && btnContainer.current != undefined
                ? (sliderBgWidth * 100) / btnContainer.current?.clientWidth
                : 0
            }
          />
        </div>
        <div className={styles.meterWrapper}>
          <StabilityMeter
            value={
              sliderBgWidth != undefined && btnContainer.current != undefined
                ? (sliderBgWidth * 100) / btnContainer.current?.clientWidth
                : 0
            }
          />
        </div>
        <div className={styles.meterWrapper}>
          <ProfitMeter
            value={
              sliderBgWidth != undefined && btnContainer.current != undefined
                ? (sliderBgWidth * 100) / btnContainer.current?.clientWidth
                : 0
            }
          />
        </div>
        <div className={styles.meterWrapper}></div>
      </div>
    </div>
  );
}

export default AwarenessSection;
