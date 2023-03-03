import RtwBtn from "../../components/rtw-btn/RtwBtn";
import CarouselSection from "../../sections/carousel-section/CarouselSection";
import RadarSection from "../../sections/radar-section/RadarSection";
import ServicesSection from "../../sections/services-section/ServicesSection";
import TechnologySection from "../../sections/technology-section/TechnologySection";
import AwarenessSection from "../../sections/awareness-section/AwarenessSection";
import styles from "./index.module.scss";
import { motion, useScroll } from "framer-motion";

export default function Main() {
  return (
    <div>
      <RadarSection />
      <div className={styles.margin}>
        <ServicesSection />
        <TechnologySection />
        <AwarenessSection />
      </div>
      <CarouselSection />
      <RtwBtn />
    </div>
  );
}
