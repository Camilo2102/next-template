import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import "primereact/resources/primereact.min.css";

import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import GlobalProviders from './providers/common/globalProviders';

export const metadata: Metadata = {
  title: 'Template',
  description: 'Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProviders>
            {children}
        </GlobalProviders>
        </body>
    </html>
  )
}
