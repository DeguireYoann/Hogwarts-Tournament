import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AuthProvider } from "@/app/context/Auth";
import "./globals.css";
import { HogwartsProvider } from "./context/Hogwarts";
import Header from "@/app/ui/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hogwarts Tournament",
  description: "This is a sample app used to encourage students into a friendly competition",
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
        <AuthProvider>
          <HogwartsProvider>
            <Header/>
            {children}
          </HogwartsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
