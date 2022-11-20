import Link from "next/link";
import React from "react";

interface Props {
  to: string;
  title: string;
  onClick: () => void;
}

export default function Sublink({ to, title, onClick }: Props) {
  return (
    <Link href={to} onClick={onClick}>
      <p className="link">{title}</p>
    </Link>
  );
}
