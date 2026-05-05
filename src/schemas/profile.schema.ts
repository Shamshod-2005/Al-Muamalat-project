import { z } from "zod";

/* ---------------- ACCOUNT ---------------- */
export const accountSchema = z.object({
  full_name: z.string().min(1, "Name required"),
  address: z.string().optional(),
  phone_number: z.string().min(1, "Phone required"),
});

/* ---------------- PASSWORD ---------------- */
export const passwordSchema = z
  .object({
    password: z.string().min(6, "Min 6 characters"),
    confirm_password: z.string().min(6, "Confirm password required"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

/* ---------------- TYPES ---------------- */
export type AccountSchema = z.infer<typeof accountSchema>;
export type PasswordSchema = z.infer<typeof passwordSchema>;
