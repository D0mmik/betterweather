import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SideMenu from "./components/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BetterWeather",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-screen flex justify-start items-center flex-row divide-x divide-[#E1E8EC]">
          <nav className="w-1/5 h-full">
            <SideMenu />
          </nav>
          {children}
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
