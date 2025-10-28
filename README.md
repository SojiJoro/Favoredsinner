# Favored Sinner

**Art like a dream, tech like a machine**

Professional digital services website blending creative design with technical infrastructure solutions.

## About

Favored Sinner offers comprehensive digital services spanning:
- **Creative & Marketing**: Web design, branding, UI/UX, SEO, social media management
- **Technical Infrastructure**: Cloud infrastructure, network design, cybersecurity, disaster recovery
- **Support & Consultation**: IT support, helpdesk services, professional CV review

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Email**: Resend API
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your RESEND_API_KEY
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Email Configuration

The quote form requires Resend API configuration. See [EMAIL_SETUP.md](EMAIL_SETUP.md) for detailed setup instructions.

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable React components
├── data/            # Service and blog post data
└── lib/             # Utility functions (email)
```

## Features

- 13 professional service offerings with detailed descriptions
- Blog system with 5+ articles on digital services
- Quote request form with email integration
- Responsive design optimized for all devices
- SEO-optimized meta tags and content
- Category-based service filtering

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

1. Push code to GitHub
2. Import repository in Vercel
3. Add `RESEND_API_KEY` environment variable
4. Deploy

### Environment Variables

Required environment variables:
- `RESEND_API_KEY` - API key from [Resend](https://resend.com)

## License

Copyright © 2025 Favored Sinner. All rights reserved.

## Contact

- Email: info@favoredsinner.com
- Website: [favoredsinner.com](https://favoredsinner.com)
