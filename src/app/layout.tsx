import type { Metadata } from 'next'
import { inter } from '@/config/fonts';

import './globals.css';
import Provider from '@/components/provider/Provider';

export const metadata: Metadata = {
  title: {
    template: '%s - STORE | Shop',
    default: 'Home'
  },
  description: 'Nuestro ecommerce de productos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
