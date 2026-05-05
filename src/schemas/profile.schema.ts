import { z } from "zod";

export const profileSchema = z.object({
  full_name: z.string().min(2, "Name kamida 2 ta harf bo‘lsin"),
  address: z.string().optional(),
  password: z.string().min(6, "Parol kamida 6 ta bo‘lsin"),
  phone_number: z.string().min(9, "Telefon noto‘g‘ri"),
});

export type ProfileSchema = z.infer<typeof profileSchema>;
