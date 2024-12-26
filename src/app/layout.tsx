import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Top } from "@/app/components/Top";

const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/LINESeedKR-Rg.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../public/fonts/LINESeedKR-Bd.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/LINESeedKR-Th.woff2",
      weight: "300",
      style: "thin",
    },
  ],
  variable: "--font-LINE",
});

export const metadata: Metadata = {
  title: "Santa",
  description: "Santa",
  openGraph: {
    title: "Santa",
    description: "Santa",
    url: "",
    images: [
      {
        url: "/images/og-image.png",
        width: 400,
        height: 300,
        alt: "",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#FBFFC9] ${myFont.variable} antialiasing`}>
        <Top />
        <div
          className={
            "relative flex h-screen w-full overflow-hidden p-4 pt-[90.95px] md:pt-[148px]"
          }
        >
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
