import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { cn } from "@/lib/utils";
import Hero from "@/components/hero/hero";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christian's Construction",
  description: "Website for Christian's Construction business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("scroll-smooth", inter.className)}>
        <Header />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
