import React, { useContext } from 'react';
import arrow from '../../images/Learn-more-arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ServiceCard.module.scss';
import { cardIdContextType, idContext } from '../../components/Layout';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

interface Props {
  id: number;
  imageURL: string;
  title: string;
  description: string[];
}

export default function ServiceCard({ id, imageURL, title, description }: Props) {
  const { setCardId } = useContext(idContext) as cardIdContextType;
  const { t } = useTranslation('common');
  const { locale } = useRouter();

  return (
    <div id={styles.cardParent}>
      <div>
        <Image id={styles.icon} alt="icon" src={require(`../../images/${imageURL}.svg`)} />
        <h4 id={styles.title} className="H4">
          {title}
        </h4>
        <ul>
          {description.map((item, index) => {
            return (
              <li key={index} id={styles[`listItem${index}`]} className="light-paragraph">
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <Link href="/services" onClick={() => setCardId(id)}>
        <div id={styles.learnMoreParent}>
          <p id={styles.learnMore} className="light-link">
            {t('learnMore')}
          </p>
          <Image
            id={styles.arrow}
            src={arrow}
            alt="Learn more arrow"
            style={locale === 'he' ? { transform: 'rotate(180deg)' } : undefined}
          />
        </div>
      </Link>
    </div>
  );
}
