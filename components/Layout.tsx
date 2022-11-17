import React, { useRef, useState } from "react";
import Head from "next/head";
import Navbar from "./navbar/Navbar";

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
      <Navbar
        setShowOptions={setShowOptions}
        showOptions={showOptions}
        wrapperRef={wrapperRef}
      />
      <main>{children}</main>
    </div>
  );
}
