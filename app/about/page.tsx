import AboutComponent from "@/components/AboutComponent";
import CategoriesGrid from "@/components/CategoriesGrid";
import TextComponent from "@/components/TextComponent";
import { getData } from "../../lib/getData";

export default async function About() {
  const data = await getData(aboutPageQuery);

  // console.log(data.data.page.aboutUs.aboutUs.image.sourceUrl);

  return (
    <main className=" pt-40 flex flex-col gap-y-16">
      <TextComponent
        title={data.data.page.textBlock.textBlock.title}
        text={data.data.page.textBlock.textBlock.text}
      ></TextComponent>
      <CategoriesGrid></CategoriesGrid>
      <AboutComponent
        title={data.data.page.aboutUs.aboutUs.title}
        text={data.data.page.aboutUs.aboutUs.text}
        personName={data.data.page.aboutUs.aboutUs.personName}
        profession={data.data.page.aboutUs.aboutUs.profession}
        image={data.data.page.aboutUs.aboutUs.image.sourceUrl}
      ></AboutComponent>
    </main>
  );
}

const aboutPageQuery = {
  query: `query getAboutPage {
    page(id: "/about/", idType: URI) {
      id
      textBlock {
        textBlock {
          text
          title
        }
      }
      aboutUs {
        aboutUs {
          title
          text
          profession
          personName
          image {
            sourceUrl
          }
        }
      }
    }
  }`,
};
