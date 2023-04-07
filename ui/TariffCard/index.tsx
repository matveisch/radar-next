import React from 'react';
import styles from './index.module.scss';

interface Props {
  price: number;
  tariff: string;
  tariffDescription: string[];
}

export default function TariffCard({ price, tariff, tariffDescription }: Props) {
  return (
    <div id={styles.mainWrapper}>
      <div id={styles.topWrapper}>
        <h3 id={styles.tariff} className="H3">
          {tariff}
        </h3>
        <p id={styles.price} className="H2">
          от {price}₪
        </p>
      </div>
      <ul className="paragraph">
        {tariffDescription.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <button id={styles.button} className="paragraph">
        Связаться с нами
      </button>
    </div>
  );
}
