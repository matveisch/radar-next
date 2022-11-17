import React from "react";
import Link from "next/link";
import styles from "./NavbarButton.module.scss";

interface Props {
  buttonName: string;
  linkTo: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function NavbarButton({ linkTo, onClick, buttonName }: Props) {
  return (
    <Link
      href={linkTo}
      className={`${styles.navbarButton} link`}
      onClick={onClick}
    >
      {buttonName}
    </Link>
  );
}
