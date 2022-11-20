import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
} from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { number } from "yup/lib/locale";

interface Props {
  children: React.ReactNode;
}

export interface cardIdContextType {
  cardId: number | null;
  setCardId: Dispatch<SetStateAction<number | null>>;
}

export const idContext = createContext<cardIdContextType | null>(null);

export default function Layout({ children }: Props) {
  const [showOptions, setShowOptions] = useState(false);
  const [cardId, setCardId] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const contextValue: cardIdContextType = { cardId, setCardId };

  function handleClickOutside(e: { target: any }) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setShowOptions(false);
    }
  }

  return (
    <div onClick={handleClickOutside}>
      <idContext.Provider value={contextValue}>
        <header>
          <Navbar
            setShowOptions={setShowOptions}
            showOptions={showOptions}
            wrapperRef={wrapperRef}
          />
        </header>
        <main>{children}</main>
      </idContext.Provider>
      <Footer />
    </div>
  );
}
