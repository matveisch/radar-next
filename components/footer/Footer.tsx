import React, { useContext } from "react";
import NavbarButton from "../../ui/navbar-button/NavbarButton";
import useServicesList from "../../data/servicesList";
import Sublink from "../../ui/sublink/Sublink";
import Image from "next/image";
import styles from "./Footer.module.scss";

import logo from "../../images/logo.png";
import telegram from "images/filled-telegram.svg";
import whatsapp from "images/whatsapp.svg";
import { cardIdContextType, idContext } from "../Layout";

export default function Footer() {
  const servicesList = useServicesList();
  const { setCardId } = useContext(idContext) as cardIdContextType;

  return (
    <div id={styles.footerMainWrapper}>
      <div id={styles.footerLeftContainer}>
        <div id={styles.footerLogo}>
          <Image src={logo} alt="logo" />
          <h1 className="H3">radar digitaly</h1>
        </div>
        <div id={styles.footerContact}>
          <a className="link">email@radar.com</a>
          <a>012-345-6789</a>
          <div id={styles.footerSocialIcons}>
            <a href="">
              <Image src={telegram} alt="icon" />
            </a>
            <a href="">
              <Image src={whatsapp} alt="icon" />
            </a>
          </div>
        </div>
      </div>
      <div id={styles.footerRightContainer}>
        <div id={styles.footerMenu}>
          <NavbarButton buttonName={"Services"} linkTo={"/services"} />
          <NavbarButton buttonName={"About us"} linkTo={"/"} />
          <NavbarButton buttonName={"Research"} linkTo={"/"} />
          <NavbarButton buttonName={"Contact"} linkTo={"/contact"} />
        </div>
        <div id={styles.footerSubmenu}>
          {servicesList.map((item) => {
            return (
              <Sublink
                key={item.id}
                to="/services"
                title={item.name}
                onClick={() => setCardId(item.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
