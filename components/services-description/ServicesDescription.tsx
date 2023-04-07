import React from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesDescription.module.scss';
import TariffCard from '../../ui/serviceTariff';
import useServicesPricesList from '../../data/servicesPrices';

interface Props {
  serviceId: number;
}

const variants = {
  closed: { opacity: 1, y: 0, display: 'grid' },
  open: { opacity: 0, y: '0', display: 'none' },
};

export default function ServicesDescription({ serviceId }: Props) {
  const service = useServicesPricesList()[serviceId];
  return (
    <motion.div variants={variants} id={styles.mainWrapper}>
      <p id={styles.description}>{service.description}</p>
      {service.prices.map((item, index) => {
        return (
          <TariffCard
            price={item.price}
            tariff={item.tariff}
            tariffDescription={item.tariffDescription}
            key={`${index}-${item.price}`}
          />
        );
      })}
      {/* <motion.div id={styles.firstTariff}>
        <TariffCard
          price={service.prices[0].price}
          tariff={service.prices[0].tariff}
          tariffDescription={service.prices[0].tariffDescription}
        />
      </motion.div>
      <motion.div id={styles.secondTariff}>
        <TariffCard
          price={service.prices[1].price}
          tariff={service.prices[1].tariff}
          tariffDescription={service.prices[1].tariffDescription}
        />
      </motion.div>
      <motion.div id={styles.thirdTariff}>
        <TariffCard
          price={service.prices[2].price}
          tariff={service.prices[2].tariff}
          tariffDescription={service.prices[2].tariffDescription}
        />
      </motion.div> */}
    </motion.div>
  );
}
