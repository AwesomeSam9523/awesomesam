import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AwesomeSam",
  description: "Get to know more about me here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel={"preconnect"} href="https://fonts.gstatic.com" />
        <link rel={"preconnect"} href={"https://fonts.googleapis.com"} />
        <title>AwesomeSam</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
