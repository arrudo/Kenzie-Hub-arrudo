import { useContext } from "react";
import styles from "./style.module.scss";
import { TechContext } from "../../providers/TechContext";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Select } from "../Select";
import { Option } from "../Select/Option";
import { UserContext } from "../../providers/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditFormSchema } from "./EditFormScheme";
export const EditTechModal = () => {
  const {
    setIsEditModalOpen,
    editTech,
    setTechList,
    techList,
    editingTech,
    setEditingTech,
  } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      title: editingTech.title,
      status: editingTech.content,
    },
    resolver: zodResolver(EditFormSchema),
  });
  const submit = (formData) => {
    editTech(formData);
    setIsEditModalOpen(false);
  };
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalBox}>
        <header>
          <h3>Tecnologia Detalhes</h3>
          <button onClick={() => setIsEditModalOpen(false)}>x</button>
        </header>
        <div>
          <form onSubmit={handleSubmit(submit)}>
            <Input
              id={"userName"}
              label={"Nome"}
              type={"text"}
              placeholder={"Material UI"}
              {...register("title")}
              readonly={true}
            />
            <Select {...register("status")}>
              <Option id={"Iniciante"} label={"Iniciante"} />
              <Option id={"Intermediário"} label={"Intermediário"} />
              <Option id={"Avançado"} label={"Avançado"} />
            </Select>
            <div className={styles.button_div}>
              <button className={styles.submit_button} type="submit">
                Salvar alterações
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
