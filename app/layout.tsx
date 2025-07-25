import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Golden Hills Ranch - Premium Grass-Fed Beef & Raw Milk Products',
  description: 'Premium grass-fed beef and raw milk products from Golden Hills Ranch. Three generations of sustainable farming in Montana.',
  keywords: 'grass-fed beef, raw milk, Montana ranch, premium beef, sustainable farming',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ranch-cream">
        {children}
      </body>
    </html>
  )
}