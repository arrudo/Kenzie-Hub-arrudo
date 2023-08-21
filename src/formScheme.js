import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().nonempty("Campo obrigatório"),

    email: z
      .string()
      .nonempty("Campo obrigatório")
      .email("Forneça um e-mail válido"),

    password: z
      .string()
      .nonempty("Campo obrigatório")
      .min(8, "É necessário pelo menos oito caracteres.")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
    confirmPassword: z.string().nonempty("Campo obrigatório"),

    bio: z.string().nonempty("Campo obrigatório"),
    contact: z.string().nonempty("Campo obrigatório"),
    course_module: z.string().nonempty("Campo obrigatório"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
  });

export const LoginSchema = z.object({
  email: z.string().nonempty("Campo obrigatório"),
  password: z.string().nonempty("Campo obrigatório"),
});
