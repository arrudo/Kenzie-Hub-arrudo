import { useContext } from "react";
import styles from "./style.module.scss";
import { TechContext } from "../../providers/TechContext";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Select } from "../Select";
import { Option } from "../Select/Option";
import { zodResolver } from "@hookform/resolvers/zod";
import { TechFormSchema } from "./TechFormSchema";
export const CreateTechModal = () => {
  const { setIsTechModalOpen, addTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(TechFormSchema),
  });
  const submit = (formData) => {
    addTech(formData);
    setIsTechModalOpen(false);
  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <header>
          <h3>Cadastrar tecnologia</h3>
          <button onClick={() => setIsTechModalOpen(false)}>x</button>
        </header>
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <Input
              id={"userName"}
              label={"Nome"}
              type={"text"}
              placeholder={"Material UI"}
              {...register("title")}
              error={errors.title}
            />
            <Select error={errors.status} {...register("status")}>
              <Option id={"Iniciante"} label={"Iniciante"} />
              <Option id={"Intermediário"} label={"Intermediário"} />
              <Option id={"Avançado"} label={"Avançado"} />
            </Select>
            <div className={styles.button_div}>
              <button className={styles.submit_button} type="submit">
                Cadastrar Tecnologia
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
