import type { Metadata } from "next"
import { Inter } from "next/font/google"
import TanstackProvider from "@/lib/tanstack-provider"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Flow Client",
  description: "Test App",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-background`}>
        <TanstackProvider>{children}</TanstackProvider>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
