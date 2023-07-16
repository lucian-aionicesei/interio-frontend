import CategoriesGrid from "@/components/CategoriesGrid";
import ContactForm from "@/components/ContactForm";
import HeroSlider from "@/components/HeroSlider";
import ProjectsGrid from "@/components/ProjectsGrid";
import TextComponent from "@/components/TextComponent";
import { getData } from "../lib/getData";

export default async function Home() {
  const sliderData = await getData(sliderQuery);
  const selectedProjects = await getData(selectedProjectsQuery);
  const textBlock = await getData(textBlockQuery);
  const categories = await getData(categoriesQuery);

  console.log(
    selectedProjects.data.page.selectedProjects.allProjectsImage.sourceUrl
  );

  return (
    <main className="flex flex-col gap-y-16">
      <HeroSlider
        heroText={sliderData.data.page.homeSlider.homeSlider.heroText}
        title={sliderData.data.page.homeSlider.homeSlider.title}
        sliderImages={sliderData.data.page.homeSlider.homeSlider.sliderImages}
      ></HeroSlider>
      <TextComponent
        title={textBlock.data.page.textBlock.textBlock.title}
        text={textBlock.data.page.textBlock.textBlock.text}
      ></TextComponent>
      <CategoriesGrid categories={categories}></CategoriesGrid>
      <ProjectsGrid
        projects={selectedProjects.data.page.selectedProjects.projects}
        homePage={true}
        allProjectsImg={
          selectedProjects.data.page.selectedProjects.allProjectsImage.sourceUrl
        }
      ></ProjectsGrid>
      <ContactForm></ContactForm>
    </main>
  );
}

const sliderQuery = {
  query: `query getHeroSlider {
    page(id: "/home/", idType: URI) {
      homeSlider {
        homeSlider {
          heroText
          sliderImages {
            image {
              sourceUrl
            }
            imageCopy {
              sourceUrl
            }
            imageCopy2 {
              sourceUrl
            }
          }
          title
        }
      }
    }
  }`,
};

const textBlockQuery = {
  query: `query getHomeTextBlock {
    page(id: "/home/", idType: URI) {
      textBlock {
        textBlock {
          title
          text
        }
      }
    }
  }`,
};

const categoriesQuery = {
  query: `query getExpertiseAreas {
    post(id: "/our-expertise/", idType: URI) {
      ourExpertise {
        ourExpertise {
          area1 {
            imageAfter {
              sourceUrl
            }
            imageBefore {
              sourceUrl
            }
            title
            text
          }
          area2 {
            imageAfter {
              sourceUrl
            }
            imageBefore {
              sourceUrl
            }
            text
            title
          }
          area3 {
            imageAfter {
              sourceUrl
            }
            imageBefore {
              sourceUrl
            }
            text
            title
          }
        }
      }
    }
  }`,
};

const selectedProjectsQuery = {
  query: `query getHomeProjects {
    page(id: "/home/", idType: URI) {
      selectedProjects {
        projects {
          ... on Project {
            id
            title
            location {
              location
            }
            images {
              images {
                image {
                  sourceUrl
                }
                imageCopy {
                  sourceUrl
                }
                imageCopy2 {
                  sourceUrl
                }
              }
            }
          }
        }
        allProjectsImage {
          sourceUrl
        }
      }
    }
  }`,
};
