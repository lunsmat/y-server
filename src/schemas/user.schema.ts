import { z } from 'zod';

export const createUserSchema = z.object({
    body: z.object({
        name: z.string({
            error: "O nome é obrigatório"
        }).min(3, "O nome deve ter no mínimo 3 letras"),
        username: z.string({
            error: "O nome de usuário é obrigatório"
        }).min(3, "O nome de usuário deve ter no mínimo 3 letras")
        .slugify(),
        email: z.email({ error: "O email é obrigatório" }),
        password: z.string({ error: "A senha é obrigatória "})
            .min(6, "A senha deve ter ao menos 6 caracteres")
    })
});
