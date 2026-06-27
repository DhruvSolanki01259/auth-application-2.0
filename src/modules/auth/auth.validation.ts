import { z } from "zod";

export const RegisterSchema = z.object({
  name: z
    .string()
    .min(3, "Username must atleast contain 3 characters.")
    .max(20, "Username must be equal to or lesser than 20 characters."),
  email: z.email(),
  password: z.string().min(8, "Password must be atleast 8 Characters long."),
});

export const SignInSchema = z.object({
  email: z.email(),
  password: z.string().min(8, "Password must be atleast 8 Characters long."),
});
