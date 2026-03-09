import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vinityadav.dev"),

  title: "Vinit Yadav | Software Engineer | Full Stack Developer",

  description:
    "Portfolio of Vinit Yadav – Full Stack Software Engineer specializing in scalable web applications, distributed systems, and modern cloud architecture using React, Node.js, .NET, and ASP.NET Core.",

  keywords: [
    "Vinit Yadav",
    "Vinit Yadav Software Engineer",
    "Vinit Yadav Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "Full Stack Engineer",
    "Web Developer Portfolio",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Node.js Developer",
    ".NET Developer",
    "C# Developer",
    "ASP.NET Core Developer",
    "Backend Developer",
    "Cloud Developer",
    "Distributed Systems Engineer",
    "Scalable Web Applications",
    "Modern Web Architecture"
  ],

  openGraph: {
    title: "Vinit Yadav | Software Engineer",
    description:
      "Full Stack Software Engineer building scalable systems with React, Node.js, .NET, and ASP.NET Core.",
    url: "https://vinityadav.dev",
    siteName: "Vinit Yadav Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Vinit Yadav Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vinit Yadav | Software Engineer",
    description:
      "Full Stack Software Engineer specializing in React, Node.js, .NET, and scalable cloud systems.",
    images: ["/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
