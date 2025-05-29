import { z } from 'zod';


export const Authschema = z.object({
  username: z.string()
    .min(2, "Le nom d'utilisateur doit contenir au moins 2 caractères")
    .max(30, "Le nom d'utilisateur doit contenir moins de 30 caractères"),
  password: z.string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .max(30, "Le mot de passe doit contenir moins de 30 caractères")
})

export type AuthRequest = z.infer<typeof Authschema>;
