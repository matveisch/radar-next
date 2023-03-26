import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import styles from './index.module.scss';

export default function LanguageToggleMobile() {
  const [selectedLang, setSelectedLang] = useState('Eng');
  const languagesArr = ['Eng', 'Heb', 'Rus'];
  return (
    <div id={styles.main}>
      {languagesArr.map((item, index) => {
        return (
          <p
            key={index}
            onClick={() => setSelectedLang(item)}
            style={{ color: item == selectedLang ? '#69fe8b' : '#eeeeee' }}>
            {item}
          </p>
        );
      })}
    </div>
  );
}
