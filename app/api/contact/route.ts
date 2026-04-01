import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/types/contact'

export async function POST(request: Request) {
  const payload = await request.json()
  const result = contactFormSchema.safeParse(payload)

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        message: 'Validation failed',
      },
      { status: 400 },
    )
  }

  return NextResponse.json({
    success: true,
    message: 'Contact request accepted.',
  })
}
