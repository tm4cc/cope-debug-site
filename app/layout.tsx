import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cope Debug - Minecraft Meteor Addon",
  description: "Cope Debug is a Minecraft Meteor addon with advanced utilities and tools for gameplay enhancement.",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>{children}</body>
      </html>
  );
}