import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import languageIcon from '../../images/Web.svg';
import styles from './index.module.scss';
import dropDown from '../../images/drop-down.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';

const toggleVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function LanguageToggle() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedLang, setSelectedLang] = useState<string>('Eng');
  const languagesArr = ['En', 'He', 'Ru'];

  return (
    <motion.div
      id={styles.main}
      variants={toggleVariants}
      initial={false}
      animate={open ? 'open' : 'closed'}
      onClick={() => setOpen(!open)}>
      <div id={styles.selected}>
        <Image src={languageIcon} alt="language icon" />
        {/* <p>{selectedLang}</p> */}
        <motion.div
          id={styles.arrow}
          variants={{
            open: {
              rotate: -180,
            },
            closed: {
              rotate: 0,
            },
          }}>
          <Image src={dropDown} alt="dropDown icon" id={styles.dropdown} />
        </motion.div>
      </div>

      {languagesArr.map((item, index) => {
        return <MenuItem text={item} setSelected={setSelectedLang} key={index} isSelected={item == selectedLang} />;
      })}
    </motion.div>
  );
}

const menuItemVariants = {
  open: {
    height: 'auto',
    display: 'block',
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    height: 0,
    display: 'none',
    y: -20,
    opacity: 0,
    transition: {
      default: {
        duration: 0.5,
      },
      y: { stiffness: 1000 },
      display: { delay: 0.5, duration: 0.1 },
    },
  },
};

interface menuItemProps {
  text: string;
  setSelected: Function;
  isSelected: boolean;
}

export function MenuItem({ text, setSelected, isSelected }: menuItemProps) {
  const router = useRouter();

  return (
    <motion.div variants={menuItemVariants} onClick={() => setSelected(text)}>
      <Link
        className={styles.menuItem}
        style={{ color: isSelected ? '#69fe8b' : '#eeeeee' }}
        href={router.pathname}
        locale={text.toLowerCase()}>
        {text}
      </Link>
    </motion.div>
  );
}
