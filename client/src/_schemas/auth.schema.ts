import { z } from 'zod';


export const Authschema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(8).max(50)
})

export type AuthRequest = z.infer<typeof Authschema>;
