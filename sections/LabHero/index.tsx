import React, { useEffect, useState, useRef } from 'react';
import styles from './index.module.scss';
import Bubbles from '../bubbles';

export default function LabHero() {
  return (
    <div>
      <Bubbles />
      <div id={styles.titles}>
        <h1 className="H1">Radar Digitaly</h1>
        <h2 className="H3" style={{ marginTop: 10 }}>
          New Order Marketing Agency
        </h2>
      </div>
    </div>
  );
}
