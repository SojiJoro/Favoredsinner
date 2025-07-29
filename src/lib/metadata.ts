export const siteConfig = {
  name: 'Favored Sinner',
  description: 'Surreal visuals. Bold designs. No face, just craft.',
  url: 'https://favoredsinner.com',
  email: 'info@favoredsinner.com',
  links: {
    twitter: 'https://twitter.com/favoredsinner',
    instagram: 'https://instagram.com/favoredsinner',
  },
}

export function generateMetadata(title?: string, description?: string) {
  return {
    title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
    description: description || siteConfig.description,
    openGraph: {
      title: title || siteConfig.name,
      description: description || siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title || siteConfig.name,
      description: description || siteConfig.description,
    },
  }
}