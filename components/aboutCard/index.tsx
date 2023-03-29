import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './index.module.scss';
import Image from 'next/image';

interface Props {
  img: string;
  name: string;
  textArr: string[];
  job: string;
  ltr: boolean;
}
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function AboutCard({ img, name, textArr, job, ltr }: Props) {
  return (
    <div className={styles.mainWrapper}>
      <motion.div
        // initial={{ x: xAnim }}
        initial={{ y: 0 }}
        whileInView={{ y: -50 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ type: 'ease' }}
        className={styles.imgWrapper}>
        <Image src={require(`../../images/${img}`)} alt="img" />
      </motion.div>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{ y: -25 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ type: 'ease' }}
        className={styles.contentWrapper}>
        <div className={styles.jobNameWrapper}>
          <p className={`H3 ${styles.job}`}>{job}</p>
          <p className={`${styles.name}`}>{name}</p>
        </div>
        <div className={styles.textWrapper}>
          {textArr.map((item, index) => {
            return (
              <p key={index} className={`paragraph ${styles.text}`}>
                {item}
              </p>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
