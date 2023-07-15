import CategoryCard from "./CategoryCard";
import { getData } from "../lib/getData";

export default async function CategoriesGrid() {
  const categoriesData = await getData(categoriesQuery);

  // console.log(categoriesData.data.post.ourExpertise.ourExpertise);

  return (
    <section className="px-7 xl:px-20 2xl:container 2xl:mx-auto flex flex-wrap xl:flex-nowrap justify-around gap-x-1 gap-y-10 md:gap-y-14">
      <CategoryCard
        title={categoriesData.data.post.ourExpertise.ourExpertise.area1.title}
        text={categoriesData.data.post.ourExpertise.ourExpertise.area1.text}
        imgAfter={
          categoriesData.data.post.ourExpertise.ourExpertise.area1.imageAfter
            .sourceUrl
        }
        imgBefore={
          categoriesData.data.post.ourExpertise.ourExpertise.area1.imageBefore
            .sourceUrl
        }
      ></CategoryCard>
      <CategoryCard
        title={categoriesData.data.post.ourExpertise.ourExpertise.area2.title}
        text={categoriesData.data.post.ourExpertise.ourExpertise.area2.text}
        imgAfter={
          categoriesData.data.post.ourExpertise.ourExpertise.area2.imageAfter
            .sourceUrl
        }
        imgBefore={
          categoriesData.data.post.ourExpertise.ourExpertise.area2.imageBefore
            .sourceUrl
        }
      ></CategoryCard>
      <CategoryCard
        title={categoriesData.data.post.ourExpertise.ourExpertise.area3.title}
        text={categoriesData.data.post.ourExpertise.ourExpertise.area3.text}
        imgAfter={
          categoriesData.data.post.ourExpertise.ourExpertise.area3.imageAfter
            .sourceUrl
        }
        imgBefore={
          categoriesData.data.post.ourExpertise.ourExpertise.area3.imageBefore
            .sourceUrl
        }
      ></CategoryCard>
    </section>
  );
}

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
