import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email noto‘g‘ri"),
  password: z.string().min(6, "Kamida 6 ta belgi"),
});
