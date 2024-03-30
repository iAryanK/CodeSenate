import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Provider from "./provider";
import Header from "@/components/shared/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeSenate",
  description:
    "Get submerged in the world of 1vs1 pair programming with amazing minds from different corners of the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextTopLoader />
            <Header />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
