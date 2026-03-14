import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteDescription =
  "Vinit Yadav – Software Engineer building scalable full-stack applications using Java, .NET, React, Node.js, and modern cloud technologies. View projects, experience, and portfolio.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vinityadav.dev"),

  title: "Vinit Yadav | Software Engineer | Full Stack Developer",

  description: siteDescription,

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
    "Java Backend Developer",
    "Backend Developer",
    "Cloud Developer",
    "Distributed Systems Engineer",
    "Scalable Web Applications",
    "Modern Web Architecture"
  ],

  alternates: {
    canonical: "https://vinityadav.dev",
  },

  authors: [{ name: "Vinit Yadav", url: "https://vinityadav.dev" }],
  creator: "Vinit Yadav",
  publisher: "Vinit Yadav",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Vinit Yadav | Software Engineer | Full Stack Developer",
    description: siteDescription,
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
    title: "Vinit Yadav | Software Engineer | Full Stack Developer",
    description: siteDescription,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vinit Yadav",
              url: "https://vinityadav.dev",
              jobTitle: "Software Engineer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Northeastern University"
              },
              sameAs: [
                "https://linkedin.com/in/Vinit-Y",
                "https://github.com/Vinit-Y"
              ],
              knowsAbout: [
                "Java",
                ".NET",
                "ASP.NET Core",
                "React",
                "Node.js",
                "Cloud Computing"
              ]
            })
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <BackToTop />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}