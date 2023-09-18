import { z } from "zod";

export const schemaRegister = z.object({
    name: z.string().min(3, { message: "3 caracteres requeridos" }),
    email: z
        .string()
        .min(1, { message: "E-mail requerido" })
        .email({ message: "Digite um email valido" }),
    password: z.string().min(3, { message: "3 caracteres requeridos" }),
});

export const schemaLogin = z.object({
    email: z
        .string()
        .min(1, { message: "E-mail requerido" })
        .email({ message: "Digite um email valido" }),
    password: z.string().min(3, { message: "3 caracteres requeridos" }),
});
