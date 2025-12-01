import type { Metadata } from "next";
import RootLayoutInner from "@/layouts/root";

import "./globals.css";

export const metadata: Metadata = {
  title: "Therasim",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <RootLayoutInner>{children}</RootLayoutInner>
      </body>
    </html>
  );
}
