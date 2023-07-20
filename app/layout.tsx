import SiteHeader from "@/components/SiteHeader";
import "./globals.css";
import { Inter } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import { getData } from "@/lib/getData";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Interio renovation",
  description: "Interior renovations company based in Copenhagen",
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
