import React from 'react';
import styles from './index.module.scss';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import vshape from '../../images/vshape.svg';

interface Props {
  price: string;
  tariff: string;
  tariffDescription: string[];
}

export default function TariffCard({ price, tariff, tariffDescription }: Props) {
  const { t } = useTranslation('tariffs');
  return (
    <div id={styles.mainWrapper}>
      <div id={styles.topWrapper}>
        <h3 id={styles.tariff} className="H3">
          {tariff}
        </h3>
        <p id={styles.price} className="H2">
          {`${t('from')}${price}`}
        </p>
      </div>
      <ul className="paragraph">
        {tariffDescription.map((item, index) => {
          return (
            <li key={index}>
              <Image className={styles.vshape} src={vshape} alt="vshape" />

              {item}
            </li>
          );
        })}
      </ul>
      <button id={styles.button} className="paragraph">
        {t('contact-us')}
      </button>
    </div>
  );
}
