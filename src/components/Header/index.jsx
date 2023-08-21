import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";

export const Header = ({ children, hasButton }) => {
  return (
    <header>
      <div className="container">
        <div
          className={`${styles.header__container} ${
            hasButton ? styles.header__container_withButton : ""
          }`}
        >
          <img
            className={hasButton ? "" : styles.header__logo}
            src={Logo}
            alt="Logo"
          />
          {children}
        </div>
      </div>
    </header>
  );
};
