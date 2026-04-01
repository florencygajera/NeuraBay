'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { apiClient } from '@/lib/api'
import { ContactFormValues, contactFormSchema } from '@/types/contact'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'

export default function ContactForm() {
  const [serverError, setServerError] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  })

  async function onSubmit(values: ContactFormValues) {
    setServerError(null)
    setIsSuccess(false)

    try {
      await apiClient.request<{ success: boolean }>('/api/contact', {
        method: 'POST',
        body: JSON.stringify(values),
      })
      setIsSuccess(true)
      reset()
    } catch {
      setServerError('Something went wrong while sending your message. Please try again.')
    }
  }

  return (
    <form className="surface-card space-y-5 p-6 sm:p-8" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-800" htmlFor="name">
          Name
        </label>
        <Input id="name" placeholder="Alex Johnson" {...register('name')} />
        {errors.name ? <p className="mt-1 text-xs text-rose-600">{errors.name.message}</p> : null}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-800" htmlFor="email">
          Work Email
        </label>
        <Input id="email" placeholder="alex@company.com" type="email" {...register('email')} />
        {errors.email ? <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p> : null}
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-800" htmlFor="company">
          Company (optional)
        </label>
        <Input id="company" placeholder="Your company" {...register('company')} />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-800" htmlFor="message">
          Project Details
        </label>
        <Textarea id="message" placeholder="Tell us about your product, goals, and timeline..." {...register('message')} />
        {errors.message ? <p className="mt-1 text-xs text-rose-600">{errors.message.message}</p> : null}
      </div>

      {serverError ? (
        <p className="flex items-center gap-2 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-700">
          <AlertCircle className="h-4 w-4" />
          {serverError}
        </p>
      ) : null}

      {isSuccess ? (
        <p className="flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-700">
          <CheckCircle2 className="h-4 w-4" />
          Message sent. We will reach out within 1 business day.
        </p>
      ) : null}

      <Button className="w-full" isLoading={isSubmitting} size="lg" type="submit">
        Send Message
      </Button>
    </form>
  )
}
