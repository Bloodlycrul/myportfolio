import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Stack Web Developer | Gaurav Rana - RANA IT Consultant",
  description:
    "Explore the portfolio of Gaurav Rana, a passionate Full Stack Web Developer with expertise in HTML, CSS, JavaScript, React, Node.js, and more. Discover dynamic, responsive web applications crafted with dedication to continuous learning and innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="px-7 md:w-[45%] m-auto mt-20 md:flex">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
