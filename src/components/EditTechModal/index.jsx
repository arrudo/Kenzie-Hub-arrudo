import { useContext, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import { TechContext } from "../../providers/TechContext";
import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Select } from "../Select";
import { Option } from "../Select/Option";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditFormSchema } from "./EditFormScheme";

export const EditTechModal = () => {
  const { setIsEditModalOpen, editTech, editingTech } = useContext(TechContext);

  const modalRef = useRef(null);

  const handleKeyPress = (event) => {
    if (event.key === "Escape") {
      setIsEditModalOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsEditModalOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsEditModalOpen]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
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
      <div className={styles.modalBox} ref={modalRef}>
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
              readOnly={true}
              error={errors.title}
            />
            <Select error={errors.status} {...register("status")}>
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
