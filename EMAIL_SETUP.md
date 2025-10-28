# Email Setup Guide

This document explains how to set up the email functionality for the quote request form.

## Overview

When users submit a quote request through the website, the form data is sent to **info@favoredsinner.com** using the Resend email service.

## Setup Instructions

### 1. Get a Resend API Key

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to the API Keys section
4. Create a new API key
5. Copy the API key (it starts with `re_`)

### 2. Configure Environment Variables

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and add your Resend API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

3. **Important:** Never commit `.env.local` to git (it's already in `.gitignore`)

### 3. Verify Domain (Optional but Recommended)

For production use, you should verify your domain with Resend:

1. In your Resend dashboard, go to Domains
2. Add your domain (e.g., `favoredsinner.com`)
3. Follow the DNS verification steps
4. Once verified, update `/src/lib/email.ts` line 13 to use your domain:
   ```typescript
   from: 'Favored Sinner Website <noreply@favoredsinner.com>',
   ```

**Note:** For testing, you can use `onboarding@resend.dev` as the sender (default in the code).

### 4. Test the Form

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/quote` in your browser
3. Fill out and submit the form
4. Check that the email arrives at info@favoredsinner.com

## Form Features

- **Required fields:** Name, Email, Service, Message
- **Pre-selected service:** Users can click "Request Quote" from a service card and the service will be pre-selected
- **Email reply-to:** The customer's email is set as the reply-to address for easy responses
- **Validation:** All fields are required and email format is validated
- **Success/Error feedback:** Users receive immediate feedback after submission

## Troubleshooting

### Email not sending

1. Check that `RESEND_API_KEY` is set in `.env.local`
2. Verify the API key is valid in your Resend dashboard
3. Check the server console for error messages
4. Ensure you haven't exceeded Resend's free tier limits (100 emails/day)

### Emails going to spam

1. Verify your domain in Resend
2. Set up SPF and DKIM records
3. Use a verified sender address

## Rate Limits

Resend free tier includes:
- 100 emails per day
- 3,000 emails per month

Consider upgrading if you expect higher volume.
