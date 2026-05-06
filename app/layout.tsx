import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ActiveSectionContextProvider } from "./_context/ActiveSectionContext";
import { DarkModeProvider } from "./_context/DarkModeContext";
import ToastProvider from "./ToastProvider";
// @ts-expect-error: for no reason ts says file isnt detected but it is.
import "./globals.css";

export const metadata: Metadata = {
  title: "Giorgi Gamgebeli | Front-end Developer",
  description:
    "A dedicated React frontend developer with a strong background in HTML, CSS, and JavaScript. I enjoy creating responsive, interactive user interfaces that enhance the user experience. My focus is on building scalable and modern applications with the latest frontend technologies like React, Tailwind CSS, and Next.js.",
  keywords: [
    "frontend",
    "giorgi",
    "gamgebeli",
    "giorgi gamgebeli",
    "react",
    "nextjs",
    "tech",
    "javascript",
    "typescript",
    "UI development",
    "frontend engineer",
    "frontend developer",
    "developer portfolio",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
  ],
  openGraph: {
    title: "Giorgi Gamgebeli | Front-end Developer",
    description:
      "A dedicated React frontend developer with a strong background in HTML, CSS, and JavaScript, building scalable and modern applications with the latest frontend technologies like React, Tailwind CSS, and Next.js.",
    url: "https://www.giorgi-webdev-portfolio.vercel.app",
    siteName: "giorgi gamgebeli portfolio",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.className} w-full overflow-x-hidden bg-gray-100 text-gray-950 transition-all duration-300 dark:bg-darkPrimary dark:text-white`}
      >
        <DarkModeProvider>
          <ToastProvider>
            <ActiveSectionContextProvider>
              {children}
            </ActiveSectionContextProvider>
          </ToastProvider>
        </DarkModeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
