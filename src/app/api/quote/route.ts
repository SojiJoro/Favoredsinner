import { NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'

export async function POST(request: Request) {
  try {
    console.log('Received quote request')
    const data = await request.json()
    console.log('Quote data:', { ...data, email: data.email ? 'provided' : 'missing' })

    // Validate the data
    if (!data.name || !data.email || !data.service || !data.message) {
      console.error('Validation failed - missing fields:', {
        name: !!data.name,
        email: !!data.email,
        service: !!data.service,
        message: !!data.message
      })
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if RESEND_API_KEY is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Send email
    console.log('Attempting to send email...')
    await sendEmail(data)
    console.log('Email sent successfully')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error processing quote request:', error)
    console.error('Error details:', error instanceof Error ? error.message : 'Unknown error')
    return NextResponse.json(
      { error: 'Failed to process request', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}