import React, { useRef, useEffect, useState, LegacyRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./AwarenessSection.module.scss";
import ReputationMeter from "../../components/reputation-meter/ReputationMeter";
import StabilityMeter from "../../components/stability-meter/StabilityMeter";
import ProfitMeter from "../../components/profit-meter/ProfitMeter";
import AttendanceMeter from "../../components/attendance-meter/AttendanceMeter";
import ReactSlider from "react-slider";

function AwarenessSection() {
  // new sliders value – accepts from 0 to 100
  const sectionWrapper = useRef<HTMLDivElement>(null);
  const [sliderValue, setSliderValue] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    // looking for an element to appear on the page
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
        intersecting ? setSectionVisible(true) : setSectionVisible(false);
      });
    });

    // creating observer of the element
    if (sectionWrapper.current) {
      observer.observe(sectionWrapper.current);
    }
  }, []);

  // adding scroll listener when there the section is on the screen
  useEffect(() => {
    if (sectionVisible) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionVisible]);

  useEffect(() => {
    // change it! no hard coded numbers
    let position = Math.floor(scrollPosition / 10 - 240);

    if (position > 0 && position < 100) {
      setSliderValue(position);
    }
  }, [scrollPosition]);

  return (
    <div id={styles.awarenessWrapper} ref={sectionWrapper}>
      <div className={styles.header}>
        <h2 className="H2">
          Social <br /> Awareness{" "}
        </h2>
        <div id={styles.sliderWrapper}>
          <div className={styles.insideWrapper}>
            <ReactSlider
              className="customSlider"
              trackClassName="customSlider-track"
              thumbClassName="customSlider-thumb"
              value={sliderValue}
              onChange={(value) => {
                setSliderValue(value);
              }}
              renderThumb={(props) => <div {...props}></div>}
            />
          </div>
        </div>
      </div>
      <div className={styles.meters}>
        <div className={styles.meterWrapper}>
          <ReputationMeter value={sliderValue} />
        </div>
        <div className={styles.meterWrapper}>
          <StabilityMeter value={sliderValue} />
        </div>
        <div className={styles.meterWrapper}>
          <ProfitMeter value={sliderValue} />
        </div>
        <div className={styles.meterWrapper}>
          <AttendanceMeter value={sliderValue} />
        </div>
      </div>
    </div>
  );
}

export default AwarenessSection;
