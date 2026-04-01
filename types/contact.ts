import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Please enter at least 2 characters for your name.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().optional(),
  message: z
    .string()
    .min(10, 'Please provide a few more details (at least 10 characters).'),
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
