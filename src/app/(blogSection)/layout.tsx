import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import HeaderBlog from "@/components/blog-UI/HeaderBlog";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Rana It Consultant",
    default: "Blog Section | Rana It Consultant ",
  },
  description: "Explore the latest blog on React, Next a ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <HeaderBlog />
          <main className="">{children}</main>
          <GoogleAnalytics gaId={process.env.GOOGLE_TAG_ID!} />
        </ThemeProvider>
      </body>
    </html>
  );
}
