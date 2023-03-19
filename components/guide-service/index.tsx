import React, { useContext } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import { cardIdContextType, idContext } from '../../components/Layout';
import Link from 'next/link';
import arrow from '../../images/learn-more.svg';

interface serviceContext {
  id: number;
  img: string;
  name: string;
  describtionArr: string[];
}

interface Props {
  service: serviceContext;
  highlight?: boolean;
}

export default function GuideService({ service, highlight }: Props) {
  const { setCardId } = useContext(idContext) as cardIdContextType;
  return (
    <div id={styles.main} style={{ border: highlight ? '#69fe8b 5px solid' : '#006e51 5px solid;' }}>
      <div id={styles.nameImg}>
        <Image src={require(`../../images/${service.img}.svg`)} alt="" />
        <p>{service.name}</p>
      </div>
      <ul>
        {service.describtionArr.map((item, index) => {
          return (
            <li key={index} id={styles[`listItem${index}`]} className="paragraph">
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
      <Link href="/services" onClick={() => setCardId(service.id)} id={styles.learnMoreParent}>
        <p id={styles.learnMore} className="link">
          Learn more
        </p>
        <Image id={styles.arrow} src={arrow} alt="Learn more arrow" />
      </Link>
    </div>
  );
}
