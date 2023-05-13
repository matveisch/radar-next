import React from 'react';
import styles from './index.module.scss';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

interface Props {
  step: number;
  text: string;
  last?: boolean;
}

export default function GuideStepRight({ step, text, last }: Props) {
  const { t } = useTranslation('guides');
  const { locale } = useRouter();

  return (
    <div id={styles.main}>
      <div id={styles.border}>
        <div id={styles.stepNum}>
          <p className="H3">
            {t('step')} {step}
          </p>
        </div>
        <div id={styles.wrapper}>
          <p className="paragraph" dir={locale === 'he' ? 'rtl' : 'ltr'}>
            {text}
          </p>
        </div>
        {!last && <div id={styles.arrow}></div>}
      </div>
    </div>
  );
}
