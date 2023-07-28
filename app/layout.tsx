import SiteHeader from "@/components/SiteHeader";
import "./globals.css";
import { Inter } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import { getData } from "@/lib/getData";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Interio DK - Painting & Renovations",
  description:
    "Full service painting company engaged in office & home improvement. High quality painting service across the city at a reasonable price.",
  keywords: [
    "Interior",
    "Painting",
    "Renovation",
    "Renovations",
    "Danmark",
    "Copenhagen",
    "Construction",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://interio.dk"),
  openGraph: {
    title: "Interio DK - Painting & Renovations",
    description:
      "Full service painting company engaged in office & home improvement. High quality painting service across the city at a reasonable price.",
    url: "https://nextjs.org",
    siteName: "Interio.dk",
    images: [
      {
        url: "/under-construction.png",
        width: 800,
        height: 600,
      },
      {
        url: "/under-construction.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contactInfo = await getData(contactInfoQuery);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader
          phone={contactInfo.data.post.contactInfo.contactInfo.phone}
          email={contactInfo.data.post.contactInfo.contactInfo.email}
        />
        {children}
        <SiteFooter
          companyTitle={
            contactInfo.data.post.contactInfo.contactInfo.companyTitle
          }
          cvr={contactInfo.data.post.contactInfo.contactInfo.cvr}
          location={contactInfo.data.post.contactInfo.contactInfo.location}
          phone={contactInfo.data.post.contactInfo.contactInfo.phone}
          email={contactInfo.data.post.contactInfo.contactInfo.email}
        />
      </body>
    </html>
  );
}

const contactInfoQuery = {
  query: `query getContactInfo {
    post(id: "contact-info", idType: SLUG) {
      contactInfo {
        contactInfo {
          phone
          email
          cvr
          location
          companyTitle
        }
      }
    }
  }`,
};
