import { Resend } from 'resend'

export async function sendEmail(data: {
  name: string
  email: string
  service: string
  message: string
}) {
  try {
    // Initialize Resend client only when needed (not at module load time)
    const resend = new Resend(process.env.RESEND_API_KEY)

    const result = await resend.emails.send({
      from: 'Favored Sinner Website <onboarding@resend.dev>',
      to: 'info@favoredsinner.com',
      replyTo: data.email,
      subject: `New Quote Request: ${data.service}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #1DA1F2; color: white; padding: 20px; text-align: center; }
              .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #555; }
              .value { margin-top: 5px; }
              .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #888; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Quote Request</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${data.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Service Requested:</div>
                  <div class="value">${data.service}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value">${data.message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              <div class="footer">
                <p>This quote request was submitted through the Favored Sinner website.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    console.log('Email sent successfully:', result)
    return { success: true }
  } catch (error) {
    console.error('Failed to send email:', error)
    throw error
  }
}