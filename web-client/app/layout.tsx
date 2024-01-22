import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar/navbar'
const inter = Inter({ subsets: ['latin'] })
import React, { useState, useEffect } from 'react';
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'Hosea Tong-Ho',
  description: 'Hosea Tong-Ho\'s personal website. Explore my projects and past work experience, or contact me all in one place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const titleAsString = String(metadata.title ?? 'Default Title');
  
  return (
    <html lang="en">
      <Head>
        <title>{titleAsString}</title>
        <meta name="description" content={metadata.description?? ''} />
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
