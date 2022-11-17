import Link from "next/link";
import NavbarButton from "../../ui/navbar-button/NavbarButton";
import Image from "next/image";
import logo from "../../images/logo.png";
import burger from "../../images/burger.svg";
import styles from "./Navbar.module.scss";

interface Props {
  wrapperRef: React.RefObject<HTMLDivElement>;
  showOptions: boolean;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({
  wrapperRef,
  showOptions,
  setShowOptions,
}: Props) {
  function handleOptionClick() {
    setShowOptions(false);
  }

  return (
    <nav id={styles.navbar}>
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
      <div className={styles.imageWrapper} ref={wrapperRef}>
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
        </div>
      </div>
    </nav>
  );
}
