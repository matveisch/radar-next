import Head from "next/head";
import RtwBtn from "../components/rtw-btn/RtwBtn";
import CarouselSection from "../sections/carousel-section/CarouselSection";
import RadarSection from "../sections/radar-section/RadarSection";
import ServicesSection from "../sections/services-section/ServicesSection";
import TechnologySection from "../sections/technology-section/TechnologySection";
import AwarenessSection from "../sections/awareness-section/AwarenessSection";
import styles from "../styles/Home.module.scss";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.MainWrapper}>
      <Head>
        <title>Radar</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.App}>
        <motion.div
          className={styles.progressBar}
          style={{ scaleX: scrollYProgress }}
        />
        <RadarSection />
        <ServicesSection />
        <TechnologySection />
        <AwarenessSection />
        <CarouselSection />
        <RtwBtn />
      </section>
    </div>
  );
}
