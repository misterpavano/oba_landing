import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "One Block Away — AI Training for Small Businesses",
  description: "I teach Apex and RTP small businesses how to use AI to save time, cut costs, and compete with anyone. Free intro call — no pitch, no pressure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sora.variable}>
      <body className="antialiased">
        <ScrollReveal />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
