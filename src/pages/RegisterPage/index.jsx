import { useNavigate } from "react-router-dom";
import { Formulary } from "../../components/Formulary";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import styles from "./style.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "../../formScheme";
import toast, { Toaster } from "react-hot-toast";
import { Select } from "../../components/Select";
import { api } from "../../services/api";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const registerUser = async (formData) => {
    try {
      const { data } = await api.post("/users", formData);
      console.log(data);
      toast.success('Conta criada com sucesso!')
      navigate('/')
    } catch (error) {
      toast.error(error.response.data.message,
  {
    style: {
      borderRadius: '6px',
      background: '#333',
      color: '#fff',
    },
  }
);
    }
  };

  const submit = (formData) => {
    registerUser(formData);
  };
  return (
    <>
      <Header>
        <button
        className={styles.register__back_button}
          onClick={() => {
            navigate("/");
          }}
        >
          Voltar
        </button>
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
              {...register("course_module")}
              error={errors.course_module}
            />
            <button className={styles.register__submit_button}>
              Cadastrar
            </button>
          </div>
        </Formulary>
      </div>
    </>
  );
};