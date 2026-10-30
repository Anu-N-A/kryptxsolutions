import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// SEO helper: adds canonical / social URLs, structured data (JSON-LD),
// robots.txt and sitemap.xml at build time.
// Set SITE_URL in a .env file (see .env.example), e.g. SITE_URL=https://www.yourdomain.com
const seoPlugin = (siteUrl) => {
  const base = (siteUrl || '').replace(/\/+$/, '')

  const graph = [
    {
      '@type': ['FinancialService', 'LocalBusiness'],
      '@id': base ? `${base}/#organization` : undefined,
      name: 'KryptX Solutions Private Limited',
      alternateName: 'KryptX',
      description:
        'VDA service provider in Chalakudy, Thrissur, Kerala offering P2P VDA transaction facilitation, consulting, tax assistance, education, blockchain forensics and an escrow settlement platform (launching soon).',
      url: base || undefined,
      logo: base ? `${base}/favicon-512.png` : undefined,
      image: base ? `${base}/og-image.png` : undefined,
      identifier: { '@type': 'PropertyValue', propertyID: 'CIN', value: 'U74909KL2025PTC098115' },
      email: 'kryptxsolutions@gmail.com',
      telephone: '+91 89212 37435',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Divine Nagar, Muringoor',
        addressLocality: 'Chalakudy',
        addressRegion: 'Kerala',
        postalCode: '680309',
        addressCountry: 'IN',
      },
      areaServed: { '@type': 'Country', name: 'India' },
      contactPoint: [
        { '@type': 'ContactPoint', telephone: '+91 89212 37435', contactType: 'customer service', areaServed: 'IN', availableLanguage: ['English', 'Malayalam'] },
        { '@type': 'ContactPoint', telephone: '+91 96452 44272', contactType: 'customer service', areaServed: 'IN', availableLanguage: ['English', 'Malayalam'] },
      ],
      sameAs: ['https://www.instagram.com/kryptx_solutions'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'KryptX Solutions services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'P2P VDA buy and sell facilitation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VDA consulting' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VDA tax assistance' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VDA education' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'VDA and blockchain forensics' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': base ? `${base}/#website` : undefined,
      name: 'KryptX Solutions',
      url: base || undefined,
      inLanguage: 'en-IN',
    },
  ]

  return {
    name: 'kryptx-seo',
    transformIndexHtml() {
      const tags = [
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }),
          injectTo: 'head',
        },
      ]
      if (base) {
        tags.push(
          { tag: 'link', attrs: { rel: 'canonical', href: `${base}/` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: `${base}/` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:image', content: `${base}/og-image.png` }, injectTo: 'head' },
          { tag: 'meta', attrs: { name: 'twitter:image', content: `${base}/og-image.png` }, injectTo: 'head' },
        )
      }
      return tags
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /', base ? `Sitemap: ${base}/sitemap.xml` : ''].filter(Boolean).join('\n') + '\n'
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })
      if (base) {
        const today = new Date().toISOString().slice(0, 10)
        const sitemap =
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          `  <url><loc>${base}/</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>\n` +
          `</urlset>\n`
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), seoPlugin(env.SITE_URL)],
  }
})
