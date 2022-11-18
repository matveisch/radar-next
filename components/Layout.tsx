import React, { useRef, useState } from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [showOptions, setShowOptions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  function handleClickOutside(e: { target: any }) {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setShowOptions(false);
    }
  }

  return (
    <div onClick={handleClickOutside}>
      <header>
        <Navbar
          setShowOptions={setShowOptions}
          showOptions={showOptions}
          wrapperRef={wrapperRef}
        />
      </header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
