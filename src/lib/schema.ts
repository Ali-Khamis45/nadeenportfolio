import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter at least 2 characters"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Subject is a little short"),
  message: z.string().min(10, "Tell me a bit more (10+ characters)"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
