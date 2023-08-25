import { Link, useNavigate } from "react-router-dom";
import { Formulary } from "../../components/Formulary";
import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "../../formScheme";
import styles from "./style.module.scss";
import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const { loginUser } = useContext(UserContext);

  const submit = (formData) => {
    loginUser(formData);
  };
  return (
    <div className={styles.login_page__container}>
      <Header hasButton={false} />
      <div className="container">
        <Formulary onSubmit={handleSubmit(submit)}>
          <div className={styles.form__container}>
            <h1>Login</h1>
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
            <button className={styles.login__submit_button} type="submit">
              Entrar
            </button>
            <p className={styles.login__form_paragraph}>
              Ainda não possui uma conta?
            </p>
            <Link className={styles.register__button} to={"/register"}>
              Cadastre-se
            </Link>
          </div>
          <button
            onClick={() => {
              console.log(user);
            }}
          ></button>
        </Formulary>
      </div>
    </div>
  );
};
