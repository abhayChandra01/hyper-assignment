import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/layout/Layout";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hyperhire Assignment",
  description: "Developed by Abhay Chandra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
