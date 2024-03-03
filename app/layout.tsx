import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import { Toaster } from "@/components/ui/sonner"

import "./globals.css"

const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: { template: "%s | Oz Solar Needs", default: "Oz Solar Needs" },
  description: "Oz Solar Needs",
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  )
}

export default RootLayout
