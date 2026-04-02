export const siteConfig = {
  name: 'NeuraBay',
  url: 'https://neurabay.com',
  email: 'hello@neurabay.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA',
  socialLinks: {
    github: 'https://github.com',
    twitter: 'https://x.com',
    linkedin: 'https://linkedin.com',
  },
  navItems: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Technologies', href: '/technologies' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Career', href: '/career' },
    { name: 'Contact', href: '/contact' },
  ],
} as const

export type NavItem = (typeof siteConfig.navItems)[number]
