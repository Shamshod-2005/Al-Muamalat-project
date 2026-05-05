import { z } from "zod";

export const otpSchema = z.object({
  otp: z.string().max(6, "OTP maksimum 6 ta raqam"),
});
