import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nextlvl Shop",
  description: "A loja mais braba do universo Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
