import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/components/Header";
import Particles from "@/components/magicui/particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Rana It Consultant",
    default: "Full Stack Web Developer | Rana It Consultant ",
  },
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
        <ThemeProvider attribute="class">
          <Particles className="w-screen h-screen">
            <SpeedInsights />
            <main className="w-[90%] px-7 md:w-[75%] lg:w-[75%] xl:w-[75%] 2xl:w-[55%] m-auto mt-20 md:flex ">
              <Header />
              {children}
              <div className="absolute right-1 top-2">
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  theme="dark"
                />
              </div>
            </main>
          </Particles>
          <GoogleAnalytics gaId={process.env.GOOGLE_TAG_ID!} />
        </ThemeProvider>
      </body>
    </html>
  );
}
