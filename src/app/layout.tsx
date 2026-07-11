import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Removed",
  description: "This website has been removed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
