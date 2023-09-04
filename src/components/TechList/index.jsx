import styles from "./style.module.scss";
import { TechCard } from "./TechCard";
export const TechList = ({ userTechs }) => {
  return (
    <ul className={styles.tech_container}>
      {userTechs.map((tech) => (
        <TechCard tech={tech} key={tech.id} />
      ))}
    </ul>
  );
};
