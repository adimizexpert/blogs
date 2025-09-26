import { DefaultSeoProps } from 'next-seo';

export const SEO: DefaultSeoProps = {
  title: 'Your Site Name',
  description: 'A modern blog built with Next.js, featuring articles on web development, technology, and more.',
  canonical: 'https://yoursite.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yoursite.com',
    siteName: 'Your Site Name',
    title: 'Your Site Name - Modern Blog Platform',
    description: 'A modern blog built with Next.js, featuring articles on web development, technology, and more.',
    images: [
      {
        url: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Your Site Name',
      },
    ],
  },
  twitter: {
    handle: '@yourhandle',
    site: '@yoursite',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0',
    },
    {
      name: 'author',
      content: 'Your Name',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
  ],
};