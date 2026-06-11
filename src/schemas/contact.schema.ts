import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  surname: z.string().min(2, "Surname is required"),
  email: z.string().email("Invalid email address"),
  organization: z.string().min(2, "Organization is required"),
  phone: z
    .string()
    .min(9, "Invalid phone number")
    .max(20, "Invalid phone number"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
