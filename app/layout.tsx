import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.scss";
import NavigationBar from "@/components/home-brew-ui/navbar";


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
        </ThemeProvider>  
      </body>
    </html>
  );
}
