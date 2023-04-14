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
  const languagesArr = ['En', 'He', 'Ru'];
  const { pathname, locale } = useRouter();

  return (
    <motion.div
      style={pathname === '/lab' ? { border: '3px solid #B338FF' } : undefined}
      id={styles.main}
      variants={toggleVariants}
      initial={false}
      animate={open ? 'open' : 'closed'}
      onClick={() => setOpen(!open)}>
      <div id={styles.selected}>
        <Image
          src={languageIcon}
          alt="language icon"
          style={
            pathname === '/lab'
              ? { filter: 'invert(34%) sepia(87%) saturate(3749%) hue-rotate(261deg) brightness(98%) contrast(107%)' }
              : undefined
          }
        />
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
          <Image
            src={dropDown}
            alt="dropDown icon"
            id={styles.dropdown}
            style={
              pathname === '/lab'
                ? { filter: 'invert(34%) sepia(87%) saturate(3749%) hue-rotate(261deg) brightness(98%) contrast(107%)' }
                : undefined
            }
          />
        </motion.div>
      </div>

      {languagesArr.map((item, index) => {
        return <MenuItem text={item} key={index} isSelected={item.toLowerCase() === locale} />;
      })}
    </motion.div>
  );
}

const menuItemVariants = {
  open: {
    height: 'auto',
    display: 'flex',
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
  isSelected: boolean;
}

export function MenuItem({ text, isSelected }: menuItemProps) {
  const { pathname } = useRouter();

  function colorChooser() {
    if (isSelected) {
      if (pathname === '/lab') {
        return '#B338FF';
      } else {
        return '#69fe8b';
      }
    } else {
      return '#eeeeee';
    }
  }

  return (
    <motion.div variants={menuItemVariants} className={styles.menuItemWrapper}>
      <Link className={styles.menuItem} style={{ color: colorChooser() }} href={pathname} locale={text.toLowerCase()}>
        {text}
      </Link>
    </motion.div>
  );
}
