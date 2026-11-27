import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hassan Ali — Sr. Software Engineer",
  description:
    "Senior Software Engineer specializing in cross-platform mobile development with React Native, Expo, TypeScript, and AI-powered realtime experiences.",
  openGraph: {
    title: "Hassan Ali — Sr. Software Engineer",
    description:
      "Cross-platform mobile engineer shipping React Native apps, integrations, and production releases.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0f14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
