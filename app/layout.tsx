import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Cope Debug - Minecraft Meteor Addon",
    description:
        "Cope Debug is a Minecraft Meteor addon with advanced utilities, guides, documentation, and gameplay tools.",

    keywords: [
        "Cope Debug",
        "Minecraft addon",
        "Meteor addon",
        "Minecraft utility mod",
        "Minecraft client",
        "Minecraft Java Edition",
        "DonutSMP addon"
    ],

    openGraph: {
        title: "Cope Debug - Minecraft Meteor Addon",
        description:
            "Minecraft Meteor addon with utilities, documentation, and gameplay tools.",
        url: "https://copedebug.org",
        siteName: "Cope Debug",
        type: "website",
    },

    alternates: {
        canonical: "https://copedebug.org",
    },
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