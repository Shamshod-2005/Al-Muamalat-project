import { z } from "zod";

export const registerSchema = z
  .object({
    first_name: z.string().min(2, "Ism kamida 2 ta harf bo‘lishi kerak"),

    last_name: z.string().min(2, "Familiya kamida 2 ta harf bo‘lishi kerak"),

    email: z.string().email("Email noto‘g‘ri formatda"),

    password: z
      .string()
      .min(6, "Parol kamida 6 ta belgidan iborat bo‘lishi kerak"),

    confirm_password: z.string(),

    phone_number: z
      .string()
      .min(9, "Telefon raqam noto‘g‘ri")
      .max(15, "Telefon raqam juda uzun"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Parollar bir xil emas",
    path: ["confirm_password"],
  });
