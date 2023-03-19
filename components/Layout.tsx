import React, { useEffect, createContext, Dispatch, SetStateAction, useRef, useState } from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import { number } from 'yup/lib/locale';
import { useRouter } from 'next/router';

interface Props {
  children: React.ReactNode;
}

export interface cardIdContextType {
  cardId: number | null;
  setCardId: Dispatch<SetStateAction<number | null>>;
}
export interface guideIdContextType {
  guideId: number;
  setGuideId: Dispatch<SetStateAction<number>>;
}

export const idContext = createContext<cardIdContextType | null>(null);
export const guideContext = createContext<guideIdContextType | null>(null);

export default function Layout({ children }: Props) {
  const [showOptions, setShowOptions] = useState(false);
  const [cardId, setCardId] = useState<number | null>(null);
  const [guideId, setGuideId] = useState<number>(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const contextValue: cardIdContextType = { cardId, setCardId };
  const guideIdValue: guideIdContextType = { guideId, setGuideId };
  function handleClickOutside(e: { target: any }) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setShowOptions(false);
    }
  }
  const router = useRouter();

  useEffect(() => {
    if (router.route == '/guides') {
      document.body.style.background =
        'conic-gradient(from 90deg at 3px 3px, #232932 90deg, #242f3a 0) -3px -3px/70px 70px';
    } else {
      document.body.style.background = '#232932';
    }
  }, [router.route]);
  return (
    <div onClick={handleClickOutside}>
      <idContext.Provider value={contextValue}>
        <guideContext.Provider value={guideIdValue}>
          <header>
            <Navbar
            // setShowOptions={setShowOptions}
            // showOptions={showOptions}
            // wrapperRef={wrapperRef}
            />
          </header>
          <main>{children}</main>
          <Footer />
        </guideContext.Provider>
      </idContext.Provider>
    </div>
  );
}
