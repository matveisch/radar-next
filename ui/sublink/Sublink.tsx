import Link from "next/link";
import React from "react";

interface Props {
  to: string;
  title: string;
}

export default function Sublink({ to, title }: Props) {
  return (
    <Link href={to}>
      <p className="link">{title}</p>
    </Link>
  );
}
