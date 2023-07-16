import CallUs from "@/components/CallUs";
import ContactForm from "@/components/ContactForm";
import { getData } from "@/lib/getData";

export default async function Contact() {
  const contactInfo = await getData(contactInfoQuery);

  return (
    <main className=" pt-24 flex flex-col gap-y-16">
      <CallUs
        title={contactInfo.data.page.contactInfo.contactInfo.title}
        image={contactInfo.data.page.contactInfo.contactInfo.image}
        contactPerson={
          contactInfo.data.page.contactInfo.contactInfo.contactPerson
        }
        personTitle={contactInfo.data.page.contactInfo.contactInfo.personTitle}
        phone={contactInfo.data.page.contactInfo.contactInfo.phone}
        email={contactInfo.data.page.contactInfo.contactInfo.email}
        companyTitle={
          contactInfo.data.page.contactInfo.contactInfo.companyTitle
        }
        cvr={contactInfo.data.page.contactInfo.contactInfo.cvr}
        location={contactInfo.data.page.contactInfo.contactInfo.location}
      ></CallUs>
      <ContactForm></ContactForm>
    </main>
  );
}

const contactInfoQuery = {
  query: `query getContactInfo {
    page(id: "/contact/", idType: URI) {
      contactInfo {
        contactInfo {
          companyTitle
          contactPerson
          cvr
          email
          fieldGroupName
          location
          personTitle
          phone
          title
          image {
            sourceUrl
          }
        }
      }
    }
  }`,
};
