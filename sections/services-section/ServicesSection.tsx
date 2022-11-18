import React from "react";
import useServicesList from "../../data/servicesList";
import ServiceCard from "../../ui/service-card/ServiceCard";
import styles from "./ServicesSection.module.scss";

export default function ServicesSection() {
  const servicesArr = useServicesList();

  return (
    <div id={styles.mainWrapperServicesSection}>
      <h2 id={styles.servicesTitle} className="H2">
        Our Services
      </h2>
      <div id={styles.servicesWrapper} className="paragraph">
        <p className={styles.servicesParagraphSmaller}>
          Наша команда консультирует по поводу рекламной компании в интернете,
          создание концептов рекламных компаний и интеграцию в места размещения.
        </p>
        <div className={styles.serviceCardsContainer}>
          <p className={styles.servicesParagraphBigger}>
            Наша команда консультирует по поводу рекламной компании в интернете,
            создание концептов рекламных компаний и интеграцию в места
            размещения.
          </p>
          {servicesArr.map((item, index) => {
            return (
              <ServiceCard
                key={index}
                id={item.id}
                title={item.name}
                imageURL={item.img}
                description={item.describtionArr}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
