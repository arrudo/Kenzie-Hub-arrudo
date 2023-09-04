import { useContext, useState } from "react";
import { Header } from "../../components/Header";
import styles from "./style.module.scss";
import { UserContext } from "../../providers/UserContext";
import { TechList } from "../../components/TechList";
import { TechContext } from "../../providers/TechContext";
import { CreateTechModal } from "../../components/CreateTechModal";
import { EditTechModal } from "../../components/EditTechModal";

export const DashboardPage = () => {
  const { user, logout } = useContext(UserContext);
  const { techList } = useContext(TechContext);
  const { isTechModalOpen, setIsTechModalOpen, isEditModalOpen } =
    useContext(TechContext);

  const userTechs = user.techs;

  return (
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
        <div className={styles.tech_heading}>
          <p>Tecnologias</p>
          <button
            onClick={() => setIsTechModalOpen(true)}
            className={styles.add_button}
          >
            +
          </button>
        </div>
        {techList.length > 0 ? <TechList userTechs={userTechs} /> : null}
      </section>
      {isTechModalOpen ? <CreateTechModal /> : null}
      {isEditModalOpen ? <EditTechModal /> : null}
    </div>
  );
};
