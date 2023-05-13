import React, { useContext } from 'react';
import styles from './index.module.scss';
import { guideContext, guideIdContextType } from '../../components/Layout';

interface Props {
  text: string;
  id: number;
}

export default function GuideBtn({ text, id }: Props) {
  const { guideId, setGuideId } = useContext(guideContext) as guideIdContextType;
  return (
    <div
      id={styles.wrapper}
      style={{ background: id == guideId ? '#69FE8B' : '#3A3F47' }}
      onClick={() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

        setGuideId(id);
      }}>
      <p style={{ color: id == guideId ? '#232932' : '#EEEEEE' }} id={styles.text} className="link">
        {text}
      </p>
    </div>
  );
}
