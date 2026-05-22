import type { Metadata } from "next";
import { Cinzel, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ayesha & Hassan | Royal Wedding Invitation",
  description: "Together with their families, Ayesha & Hassan cordially invite you to celebrate their union at their Grand Baraat Ceremony. Join us for a magical evening.",
  openGraph: {
    title: "Ayesha & Hassan | Royal Wedding Invitation",
    description: "Together with their families, Ayesha & Hassan cordially invite you to celebrate their union at their Grand Baraat Ceremony.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0d0116] text-[#fcf6e8]">
        {children}
      </body>
    </html>
  );
}
