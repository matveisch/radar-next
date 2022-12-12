import Link from "next/link";

import NavbarButton from "../../ui/navbar-button/NavbarButton";
import BurgerMenu from "../../ui/burger-menu-path/BurgerMenu";
import { motion, useCycle } from "framer-motion";
import Image from "next/image";
import logo from "../../images/logo.png";
import burger from "../../images/burger.svg";
import styles from "./Navbar.module.scss";
import { useContext, useRef, useEffect } from "react";
import { cardIdContextType, idContext } from "../Layout";
import { NodeNextRequest } from "next/dist/server/base-http/node";

interface Props {
  wrapperRef: React.RefObject<HTMLDivElement>;
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
}
const background = {
  open: {
    height: "auto",
    boxShadow: "0px 100px 90px 0px rgba(0, 0, 0, 0.5)",
  },
  closed: {
    height: 0,
  },
};
const navMenu = {
  open: {
    dislay: "block",
    visibility: "visible",
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    dislay: "none",
    visibility: "hidden",
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const navItem = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: -10,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function Navbar() {
  const { setCardId } = useContext(idContext) as cardIdContextType;

  // function handleOptionClick() {
  //   setShowOptions(false);
  // }
  const [isOpen, toggleOpen] = useCycle(false, true);
  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);
  const containerRef = useRef(null);

  return (
    <nav id={styles.navbar} onClick={() => setCardId(null)}>
      <Link href="/">
        <div id={styles.logo}>
          <Image src={logo} alt="logo" />
          <h1 className="H3">radar digitaly</h1>
        </div>
      </Link>
      <div id={styles.navbarLinks}>
        <NavbarButton buttonName={"Services"} linkTo={"/services"} />
        <NavbarButton buttonName={"About us"} linkTo={"/"} />
        <NavbarButton buttonName={"Research"} linkTo={"/"} />
        <div id={styles.contactBtn}>
          <NavbarButton buttonName={"Contact"} linkTo={"/contact"} />
        </div>
      </div>
      <motion.div
        id={styles.mobileNav}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <BurgerMenu toggle={() => toggleOpen()} />
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragStart={(event, info) => toggleOpen()}
          dragElastic={0}
          dragMomentum={false}
          id={styles.mobileNavBG}
          variants={background}
          onClick={() => toggleOpen()}
        >
          <motion.ul id={styles.mobileNavUl} variants={navMenu}>
            <motion.li className={styles.mobileNavLi} variants={navItem}>
              <NavbarButton buttonName={"Services"} linkTo={"/services"} />
            </motion.li>
            <motion.li className={styles.mobileNavLi} variants={navItem}>
              <NavbarButton buttonName={"About us"} linkTo={"/"} />
            </motion.li>
            <motion.li className={styles.mobileNavLi} variants={navItem}>
              <NavbarButton buttonName={"Research"} linkTo={"/"} />
            </motion.li>
            <motion.li className={styles.mobileNavLi} variants={navItem}>
              <NavbarButton buttonName={"Contact"} linkTo={"/contact"} />
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
      {/* <div className={styles.imageWrapper} ref={wrapperRef}>
        <Image
          src={burger}
          alt="burger-icon"
          className={styles.burgerIcon}
          onClick={() => setShowOptions(!showOptions)}
        />
      </div>
      <div
        className={styles.menuOptions}
        style={showOptions ? undefined : { display: "none" }}
      >
        <NavbarButton
          buttonName={"Services"}
          linkTo={"/services"}
          onClick={handleOptionClick}
        />
        <NavbarButton
          buttonName={"About us"}
          linkTo={"/"}
          onClick={handleOptionClick}
        />
        <NavbarButton
          buttonName={"Research"}
          linkTo={"/"}
          onClick={handleOptionClick}
        />
        <div id="contact-btn">
          <NavbarButton
            buttonName={"Contact"}
            linkTo={"/contact"}
            onClick={handleOptionClick}
          />
        </div> */}
      {/* </div> */}
    </nav>
  );
}
