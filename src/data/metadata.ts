import { Metadata } from "next";

import { appName, appSlogan } from "@/data/app-data";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const siteMetadata: Metadata = {
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
  description: appSlogan,
  authors: [{ name: appName }],
  creator: appName,
  metadataBase: new URL(siteUrl),
  icons: {
    icon: [
      {
        url: "/assets/favicons/favicon.ico",
        sizes: "32x32",
        type: "image/x-icon",
      },
      { url: "/assets/favicons/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: appName,
    title: appName,
    description: appSlogan,
  },
};
