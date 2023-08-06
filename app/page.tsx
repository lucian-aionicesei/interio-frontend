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
            imageCopy3 {
              sourceUrl
            }
            imageCopy4 {
              sourceUrl
            }
            imageCopy5 {
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
            info {
              location
              description
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
                imageCopy3 {
                  sourceUrl
                }
                imageCopy4 {
                  sourceUrl
                }
                imageCopy5 {
                  sourceUrl
                }
                imageCopy6 {
                  sourceUrl
                }
                imageCopy7 {
                  sourceUrl
                }
                imageCopy8 {
                  sourceUrl
                }
                imageCopy9 {
                  sourceUrl
                }
                imageCopy10 {
                  sourceUrl
                }
                imageCopy11 {
                  sourceUrl
                }
                imageCopy12 {
                  sourceUrl
                }
                imageCopy13 {
                  sourceUrl
                }
                imageCopy14 {
                  sourceUrl
                }
                imageCopy15 {
                  sourceUrl
                }
                imageCopy16 {
                  sourceUrl
                }
                imageCopy17 {
                  sourceUrl
                }
                imageCopy18 {
                  sourceUrl
                }
                imageCopy19 {
                  sourceUrl
                }
                imageCopy20 {
                  sourceUrl
                }
                imageCopy21 {
                  sourceUrl
                }
                imageCopy22 {
                  sourceUrl
                }
                imageCopy23 {
                  sourceUrl
                }
                imageCopy24 {
                  sourceUrl
                }
                imageCopy25 {
                  sourceUrl
                }
                imageCopy26 {
                  sourceUrl
                }
                imageCopy27 {
                  sourceUrl
                }
                imageCopy28 {
                  sourceUrl
                }
                imageCopy29 {
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
