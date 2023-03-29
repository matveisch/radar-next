import React, { useState } from 'react';

import styles from './index.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LanguageToggleMobile() {
  const [selectedLang, setSelectedLang] = useState('Eng');
  const languagesArr = ['En', 'He', 'Ru'];
  const router = useRouter();

  return (
    <div id={styles.main}>
      {languagesArr.map((item, index) => {
        return (
          <Link
            href={router.pathname}
            locale={item.toLowerCase()}
            key={index}
            onClick={() => setSelectedLang(item)}
            style={{ color: item == selectedLang ? '#69fe8b' : '#eeeeee' }}
            className={styles.link}>
            {item}
          </Link>
        );
      })}
    </div>
  );
}
