import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: "Direct Chat",
  description: "Create chats and message with people you want to",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-black" lang="en">
      <body className={`${inter.className} bg-black`}>{children}</body>
    </html>
  );
}
