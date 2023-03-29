import React, { useEffect, createContext, Dispatch, SetStateAction, useState } from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
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
  const [cardId, setCardId] = useState<number | null>(null);
  const [guideId, setGuideId] = useState<number>(0);

  const contextValue: cardIdContextType = { cardId, setCardId };
  const guideIdValue: guideIdContextType = { guideId, setGuideId };
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
    <div style={{ overflowX: 'hidden' }}>
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
