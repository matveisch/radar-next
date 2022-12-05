import { motion } from "framer-motion";
import Image from "next/image";
import chain from "../../images/chain.svg";
import connection from "../../images/connection.svg";
import facebook from "../../images/facebook.svg";
import graph from "../../images/graph.svg";
import instagram from "../../images/instagram.svg";
import messenger from "../../images/messenger.svg";
import radar from "../../images/radar.svg";
import social from "../../images/social.svg";
import sound from "../../images/sound.svg";
import stat from "../../images/stat.svg";
import telegram from "../../images/telegram.svg";
import MotionDiv from "../../ui/motion-div/MotionDiv";
import style from "./Radar.module.scss";

export interface motionDivProps {
  source: string;
  id: string;
  coordinates: {
    x: string;
    y: string;
  };
  duration: number;
  delay?: number;
}

export default function Radar() {
  const iconsArr: Array<motionDivProps> = [
    {
      source: sound,
      id: style.sound,
      coordinates: { x: "1500%", y: "700%" },
      duration: 7,
    },
    {
      source: graph,
      id: style.graph,
      coordinates: { x: "1000%", y: "1200%" },
      duration: 5,
      delay: 0.2,
    },
    {
      source: facebook,
      id: style.facebook,
      coordinates: { x: "1100%", y: "1200%" },
      duration: 10,
      delay: 0.4,
    },
    {
      source: connection,
      id: style.connection,
      coordinates: { x: "400%", y: "1200%" },
      duration: 5,
      delay: 0.6,
    },
    {
      source: messenger,
      id: style.messenger,
      coordinates: { x: "-100%", y: "1200%" },
      duration: 8,
      delay: 0.8,
    },
    {
      source: social,
      id: style.social,
      coordinates: { x: "-500%", y: "1200%" },
      duration: 9,
      delay: 1,
    },
    {
      source: chain,
      id: style.chain,
      coordinates: { x: "-1100%", y: "1200%" },
      duration: 6,
      delay: 1.8,
    },
    {
      source: telegram,
      id: style.telegram,
      coordinates: { x: "-1300%", y: "1200%" },
      duration: 12,
    },
    {
      source: stat,
      id: style.stat,
      coordinates: { x: "-1400%", y: "500%" },
      duration: 11,
      delay: 2,
    },
  ];

  return (
    <div id={style.crop}>
      <div id={style.radarContainer}>
        <div id={style.titles}>
          {/* <h2 className="H3">Full cycle</h2> */}
          <h1 className="H2">Radar Digitaly</h1>
          <h2 className="H3" style={{ marginTop: 10 }}>
            New Order Marketing Agency
          </h2>
        </div>

        <div id={style.background}>
          {iconsArr.map((icon, index) => {
            return (
              <MotionDiv
                key={index}
                source={icon.source}
                id={icon.id}
                coordinates={icon.coordinates}
                duration={icon.duration}
                delay={icon.delay}
              />
            );
          })}
        </div>
        <div id={style.radarParent}>
          <motion.div
            id={style.radar}
            animate={{
              rotate: -270,
              opacity: 0.3,
            }}
            transition={{
              default: {
                ease: "linear",
                repeat: Infinity,
                duration: 4.5,
                repeatDelay: 0,
              },
              opacity: {
                ease: "linear",
                repeat: Infinity,
                duration: 0.8,
                repeatType: "reverse",
              },
              background: {
                repeat: Infinity,
                duration: 5,
                repeatType: "reverse",
              },
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
}
