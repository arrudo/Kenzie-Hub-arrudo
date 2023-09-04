import { z } from "zod";

export const TechFormSchema = z.object({
  title: z.string().nonempty("Campo obrigatório"),
  status: z.string().nonempty("Campo obrigatório"),
});
