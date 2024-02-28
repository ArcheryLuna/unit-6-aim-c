
import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import Dynamic from "next/dynamic"

import "./globals.scss";
import NavigationBar from "@/components/home-brew-ui/navbar";
import BackToTop from "@/components/home-brew-ui/back-to-top"

const Footer = Dynamic(() => import("@/components/home-brew-ui/footer"), { ssr: false })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("min-h-screen bg-background font-sans antialiased", GeistSans.variable)}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar/>
          {children}
          <BackToTop/>
          <Footer/>
        </ThemeProvider>  
      </body>
    </html>
  );
}
