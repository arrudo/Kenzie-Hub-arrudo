import { Link } from "react-router-dom";
import { Formulary } from "../../components/Formulary";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import styles from "./style.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "../../components/Formulary/formScheme";
import { Select } from "../../components/Select";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";
import { Option } from "../../components/Select/Option";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  const { registerUser } = useContext(UserContext);

  const submit = (formData) => {
    registerUser(formData);
  };
  return (
    <>
      <Header hasButton={true}>
        <Link className={styles.back__button} to={"/"}>
          Voltar
        </Link>
      </Header>
      <div className="container">
        <Formulary onSubmit={handleSubmit(submit)}>
          <div className={styles.form__container}>
            <Input
              id={"userName"}
              label={"Nome"}
              type={"text"}
              placeholder={"Digite aqui seu nome"}
              {...register("name")}
              error={errors.name}
            />
            <Input
              id={"userEmail"}
              label={"Email"}
              type={"email"}
              placeholder={"Digite aqui seu email"}
              {...register("email")}
              error={errors.email}
            />
            <Input
              id={"userPassword"}
              label={"Senha"}
              type={"password"}
              placeholder={"Digite aqui sua senha"}
              {...register("password")}
              error={errors.password}
            />
            <Input
              id={"userConfirmedPassword"}
              label={"Confirmar senha"}
              type={"password"}
              placeholder={"Digite novamente sua senha"}
              {...register("confirmPassword")}
              error={errors.confirmPassword}
            />
            <Input
              id={"userBio"}
              label={"Bio"}
              type={"text"}
              placeholder={"Fale sobre você"}
              {...register("bio")}
              error={errors.bio}
            />
            <Input
              id={"userContact"}
              label={"Contato"}
              type={"text"}
              placeholder={"Opção de contato"}
              {...register("contact")}
              error={errors.contact}
            />
            <Select
              label={"Selecionar módulo"}
              {...register("course_module")}
              error={errors.course_module}
            >
              <Option label={"Selecione seu módulo"} value={""} />
              <Option
                label={"Primeiro Módulo"}
                value={"Primeiro módulo (Introdução ao Frontend"}
              />
              <Option
                label={"Segundo Módulo"}
                value={"Segundo módulo (Frontend Avançado)"}
              />
              <Option
                label={"Terceiro Módulo"}
                value={"Terceiro módulo (Introdução ao Backend)"}
              />
              <Option
                label={"Quarto Módulo"}
                value={"Quarto módulo (Backend Avançado)"}
              />
            </Select>
            <button type="submit" className={styles.register__submit_button}>
              Cadastre-se
            </button>
          </div>
        </Formulary>
      </div>
    </>
  );
};
