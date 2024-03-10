import { z } from "zod";

export const createUserSchema = z.object({
    name: z
        .string()
        .min(1, "Name is required")
        .transform((name) => {
            return name
                .trim()
                .split(" ")
                .map((word) =>
                    word[0].toLocaleUpperCase().concat(word.substring(1))
                )
                .join(" ");
        }),
    email: z
        .string()
        .min(1, "Email is required")
        .email({
            message: "Formato de e-mail inválido",
        })
        .toLowerCase(),
    password: z.string().min(6, {
        message: "A senha precisa ter no mínimo 6 caracteres",
    }),
});

export type CreateUserProp = z.infer<typeof createUserSchema>;
