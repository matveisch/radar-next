import React from 'react';
import Link from 'next/link';
import styles from './NavbarButton.module.scss';
import { useRouter } from 'next/router';

interface Props {
  buttonName: string;
  linkTo: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function NavbarButton({ linkTo, onClick, buttonName }: Props) {
  const { pathname } = useRouter();

  return (
    <Link
      href={linkTo}
      className={`${pathname === '/lab' ? styles.navbarButtonLab : styles.navbarButton} link`}
      onClick={onClick}>
      {buttonName}
    </Link>
  );
}
