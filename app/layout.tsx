import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/header/Header";
import { DarkModeProvider } from "./_context/DarkModeContext";
import { ActiveSectionContextProvider } from "./_context/ActiveSectionContext";
import DarkModeToggle from "./_components/DarkModeToggle";
import ToastProvider from "./_utils/ToastProvider";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Giorgi Gamgebeli | Portfolio",
  description: "Portfolio of front-end webdeveloper",
  icons: {
    icon: "/gFavicon.png",
  },
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
        <>
          <DarkModeProvider>
            <ToastProvider>
              <ActiveSectionContextProvider>
                <Header />
                {children}
                <DarkModeToggle />
              </ActiveSectionContextProvider>
            </ToastProvider>
          </DarkModeProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
