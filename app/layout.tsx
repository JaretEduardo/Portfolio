import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import Navbar from "@/src/components/Navbar";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jaret Eduardo — Software Engineer",
  description:
    "Software Engineer focused on High-Performance Computing. Building compilers, AutoML engines, and ML libraries in C, C++, and Rust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={quicksand.variable}>
      {/*
        Body mirrors referencia-liz index.html exactly:
        font-sans   → Quicksand via --font-quicksand CSS var
        selection   → primary-color bg, white text
        text-color  → #2b2d2f
      */}
      <body className="font-sans text-[#2b2d2f] selection:bg-[#B1AFFF] selection:text-white">
        {/* Mirrors main-layout.html outer div */}
        <div className="min-h-screen flex flex-col">
          <Navbar />

          {/* Mirrors main-layout.html <main> + inner container */}
          <main className="flex-1 bg-[#f3f4f6] min-h-screen">
            <div className="mx-auto w-full max-w-7xl 2xl:max-w-screen-2xl py-0">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}