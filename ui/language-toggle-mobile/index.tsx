import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { colorChooser } from '../language-toggle-desctop';

export default function LanguageToggleMobile() {
  const languagesArr = ['En', 'He', 'Ru'];
  const { pathname, locale } = useRouter();

  return (
    <div id={styles.main}>
      {languagesArr.map((item, index) => {
        return (
          <Link
            href={pathname}
            locale={item.toLowerCase()}
            key={index}
            style={{ color: colorChooser(item.toLowerCase() === locale, pathname) }}
            className={styles.link}>
            {item}
          </Link>
        );
      })}
    </div>
  );
}
