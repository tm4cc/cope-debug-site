import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cope Debug",
  description: "Minecraft DonutSMP Meteor Addon",
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