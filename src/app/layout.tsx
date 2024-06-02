import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SideMenu from "@/components/SideMenu";
import { ClerkProvider } from "@clerk/nextjs";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BetterWeather",
  description: "Generated by create next app",
};

export const revalidate = 60;
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={jakarta.className}>
          <div className="w-full h-screen flex justify-start items-center flex-row divide-x divide-[#E1E8EC] max-sm:flex-col max-sm:h-full">
            <nav className="h-full w-1/5 max-sm:hidden">
              <SideMenu />
            </nav>
            {children}
            <SpeedInsights />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
