import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SiWhatsapp } from "react-icons/si";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHRAJ",
  description: "shraj",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <a target="_blank">
          <div className="fixed bottom-15 right-4 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600">
            <SiWhatsapp className="text-2xl" />
          </div>
        </a>
      </body>
    </html>
  );
}

// href={"https://wa.me/917829712159"}
