import type { Metadata } from "next";
import { Pirata_One } from "next/font/google";
import { AuthProvider } from "@/context/Auth";
import "./globals.css";
import { HogwartsProvider } from "../context/Hogwarts";
import Header from "@/ui/Header";
import Footer from "../ui/Footer";
;

const pirata = Pirata_One({
  weight: "400",
  subsets: ['latin']
})

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
        className={`${pirata.className} antialiased`}
      >
        <AuthProvider>
          <HogwartsProvider>
            <Header/>
            {children}
            <Footer/>
          </HogwartsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
