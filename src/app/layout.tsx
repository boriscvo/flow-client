import type { Metadata } from "next"
import { Inter } from "next/font/google"
import TanstackProvider from "@/lib/tanstack-provider"
import { Toaster } from "sonner"
import { ThemeProvider } from "next-themes"
import "./globals.css"

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-background`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TanstackProvider>{children}</TanstackProvider>
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}
