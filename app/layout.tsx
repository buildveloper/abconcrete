import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "AB Concrete | Premium Concrete Driveways in Houston, TX",
  description:
    "AB Concrete is a Houston concrete contractor for driveway replacement, repair, patios, sidewalks and parking lot repair. Call Tony for a free quote.",
  openGraph: {
    title: "AB Concrete in Houston, TX",
    description: "Top-notch driveway repair and concrete driveway services in Houston.",
    url: "https://ab-concrete.com/",
    siteName: "AB Concrete in Houston, TX",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@abconcrete76",
    title: "AB Concrete in Houston, TX",
    description: "Top-notch driveway repair in Houston. Contact AB Concrete today.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
