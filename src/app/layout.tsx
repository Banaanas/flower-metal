import { Metadata } from "next";
import { ReactNode } from "react";

import "../styles/globals.css";

import { BaseLayout } from "@/components/layout/base-layout";
import { appMetadata } from "@/data/app-metadata";
import { roboto, robotoMono } from "@/lib/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: appMetadata.name,
    template: `%s | ${appMetadata.name}`,
  },
  description: appMetadata.description,
};
