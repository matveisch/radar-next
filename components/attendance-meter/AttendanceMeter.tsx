import React from 'react';
import { motion } from 'framer-motion';
import styles from './AttendanceMeter.module.scss';
import { useTranslation } from 'next-i18next';
interface Props {
  value: number;
}

function AttendanceMeter({ value }: Props) {
  const { t } = useTranslation('common');

  return (
    <>
      <div id={styles.borderAround}>
        <div id={styles.mainWrapper}>
          <div id={styles.bgMarkup}></div>
          {/* TRIANGLES */}
          <motion.div
            style={{ left: '10%', top: '40%' }}
            animate={{ opacity: value > 70 ? value / 100 : 0, rotate: 30 }}
            className={styles.triangle}></motion.div>
          <motion.div
            style={{ left: '40%', top: '85%' }}
            animate={{ opacity: value > 25 ? value / 100 : 0, rotate: 200 }}
            className={styles.triangle}></motion.div>

          <motion.div
            style={{ left: '70%', top: '35%' }}
            animate={{ opacity: value > 0 ? value / 100 : 0, rotate: 250 }}
            className={styles.triangle}></motion.div>
          {/* RECTANGLES */}
          <motion.div
            style={{ left: '70%', top: '5%' }}
            animate={{ opacity: value > 65 ? value / 100 : 0, rotate: 20 }}
            className={styles.rectangle}></motion.div>
          <motion.div
            style={{ left: '15%', top: '80%' }}
            animate={{ opacity: value > 30 ? value / 100 : 0, rotate: 80 }}
            className={styles.rectangle}></motion.div>
          <motion.div
            style={{ left: '60%', top: '70%' }}
            animate={{ opacity: value > 80 ? value / 100 : 0, rotate: 45 }}
            className={styles.rectangle}></motion.div>
          <motion.div
            style={{ left: '20%', top: '20%' }}
            animate={{ opacity: value > 10 ? value / 100 : 0 }}
            className={styles.rectangle}></motion.div>
          {/* CIRCLES */}
          <motion.div
            style={{ left: '20%', top: '20%' }}
            animate={{ opacity: value > 60 ? value / 100 : 0 }}
            className={styles.circle}></motion.div>
          <motion.div
            style={{ left: '50%', top: '15%' }}
            animate={{ opacity: value > 70 ? value / 100 : 0 }}
            className={styles.circle}></motion.div>
          <motion.div
            style={{ left: '30%', top: '55%' }}
            animate={{ opacity: value > 35 ? value / 100 : 0 }}
            className={styles.circle}></motion.div>
          <motion.div
            style={{ left: '80%', top: '80%' }}
            animate={{ opacity: value > 5 ? value / 100 : 0 }}
            className={styles.circle}></motion.div>
          <motion.div
            style={{ left: '90%', top: '30%' }}
            animate={{ opacity: value > 40 ? value / 100 : 0 }}
            className={styles.circle}></motion.div>
        </div>
      </div>
      <h4 id={styles.title} className="paragraph">
        {t('attendance')}
      </h4>
    </>
  );
}

export default AttendanceMeter;
