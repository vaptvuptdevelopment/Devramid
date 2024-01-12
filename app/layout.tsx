import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import Image from "next/image";

export const metadata: Metadata = {
  title: 'Devramid',
  description: 'Devramid is a community of talented individuals who believe in the power of Pyramid Schemes and Cooperative work to reshape the future of technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-green-100'>
      <div className="p-2">
        <nav className="bg-green-950 font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 sm:items-baseline w-full">
          <div className="mb-2 sm:mb-0">
            <Link href="/"><Image className="w-100" src="/devramid.svg" width={150} height={150} alt="ChitChat Logo" /></Link>
          </div>
          <div>
            <Link href="why_deviramid" className="text-lg no-underline text-gray-200 hover:text-blue-400  ml-2">Why Deviramid</Link>
            <Link href="our_vision" className="text-lg no-underline text-gray-200 hover:text-blue-400 ml-2">Our Vision</Link>
            <Link href="contact_us" className="text-lg no-underline text-gray-200 hover:text-blue-400  ml-2">Contact us</Link>
          </div>
        </nav>
      </div>
        {children}</body>
    </html>
  )
}
