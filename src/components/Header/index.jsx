import Logo from "../../assets/Logo.svg";
import styles from "./style.module.scss";
export const Header = ({ children }) => {
  return (
    <header>
      <div className="container">
        <div className={styles.header__container}>
          <img className={styles.header__logo} src={Logo} alt="Logo" />
          {children}
        </div>
      </div>
    </header>
  );
};
