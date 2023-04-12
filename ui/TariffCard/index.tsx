import React, { useContext } from 'react';
import styles from './index.module.scss';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import vshape from '../../images/vshape.svg';
import Link from 'next/link';
import useServicesList from '../../data/servicesList';
import { cardIdContextType, idContext } from '../../components/Layout';
interface Props {
  price: string;
  tariff: string;
  tariffDescription: string[];
}

export default function TariffCard({ price, tariff, tariffDescription }: Props) {
  const { t } = useTranslation('tariffs');
  const serviceList = useServicesList();
  const { cardId } = useContext(idContext) as cardIdContextType;

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
      <button id={styles.button}>
        <Link
          className="paragraph"
          href={{
            pathname: '/contact',
            query: {
              messageText:
                cardId != undefined ? t('messageText') + serviceList[cardId].name + ', ' + tariff + '. ' : '',
            },
          }}>
          {t('contact-us')}
        </Link>
      </button>
    </div>
  );
}
