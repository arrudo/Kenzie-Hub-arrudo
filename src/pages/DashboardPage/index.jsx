import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import styles from "./style.module.scss";

export const DashboardPage = ({ user, setUser }) => {
  const navigate = useNavigate();
  const logout = () => {
    setUser({});
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };
  return (
    <>
      <div className={styles.dashboard__container}>
        <Header inDashboard={true} hasButton={true}>
          <button className={styles.logout__button} onClick={logout}>
            Sair
          </button>
        </Header>
        <section className={styles.main__section}>
          <h1>Olá, {user.name}</h1>
          <p className={styles.user__course}>{user.course_module}</p>
        </section>
        <section className={styles.second_section}>
          <h1>Que pena! Estamos em desenvolvimento :(</h1>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </section>
      </div>
    </>
  );
};
