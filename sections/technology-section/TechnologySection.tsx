import TechRectangle from "../../ui/tech-rectangle/TechRectangle";
import Image from "next/image";
import styles from "./TechnologySection.module.scss";

import radarTechGif from "../../images/Radar-tech.gif";
import trandResearch from "../../images/Group 36.svg";
import marketTracking from "../../images/Group 34.svg";
import bots from "../../images/Group 39.svg";
import automaticServices from "../../images/Group 37.svg";

export default function TechnologySection() {
  return (
    <div id={styles.mainContainer}>
      <div id={styles.flex}>
        <div id={styles.leftContainer}>
          <h2 id={styles.techTitle} className="H2">
            Technology
          </h2>
          <p id={styles.techParagraph} className="paragraph">
            - Мы сделаем рекламу дешевле - Сохраним твое время - Качественно
            сформулируем и оформим рекламную идею - Выбираем поверхности с
            лучшим соотношением цена - качество
          </p>
          <div id={styles.techCardsWrapper}>
            <TechRectangle img={marketTracking} title={"Market Tracking"} />
            <TechRectangle img={trandResearch} title={"Trand Research"} />
            <TechRectangle img={bots} title={"Bots"} />
            <TechRectangle
              img={automaticServices}
              title={"Automatic Services"}
            />
          </div>
        </div>
        <div id={styles.rightContainer}>
          <Image
            id={styles.techRadarGif}
            src={radarTechGif}
            alt="Tech radar animation"
          />
        </div>
      </div>
    </div>
  );
}
