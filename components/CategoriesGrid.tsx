import CategoryCard from "./CategoryCard";
import { getData } from "../lib/getData";

interface Area {
  title: string;
  text: string;
  imageAfter: {
    sourceUrl: string;
  };
  imageBefore: {
    sourceUrl: string;
  };
}

interface OurExpertise {
  ourExpertise: {
    area1: Area;
    area2: Area;
    area3: Area;
  };
}

interface Post {
  ourExpertise: OurExpertise;
}

interface Data {
  post: Post;
}

interface Categories {
  data: Data;
}

interface CategoriesGridProps {
  categories: Categories;
}

const CategoriesGrid: React.FC<CategoriesGridProps> = ({ categories }) => {
  return (
    <section className="px-7 xl:px-20 2xl:container 2xl:mx-auto flex flex-wrap xl:flex-nowrap justify-around gap-x-1 gap-y-10 md:gap-y-14">
      <CategoryCard
        title={categories.data.post.ourExpertise.ourExpertise.area1.title}
        text={categories.data.post.ourExpertise.ourExpertise.area1.text}
        imgAfter={
          categories.data.post.ourExpertise.ourExpertise.area1.imageAfter
            .sourceUrl
        }
        imgBefore={
          categories.data.post.ourExpertise.ourExpertise.area1.imageBefore
            .sourceUrl
        }
      ></CategoryCard>
      <CategoryCard
        title={categories.data.post.ourExpertise.ourExpertise.area2.title}
        text={categories.data.post.ourExpertise.ourExpertise.area2.text}
        imgAfter={
          categories.data.post.ourExpertise.ourExpertise.area2.imageAfter
            .sourceUrl
        }
        imgBefore={
          categories.data.post.ourExpertise.ourExpertise.area2.imageBefore
            .sourceUrl
        }
      ></CategoryCard>
      <CategoryCard
        title={categories.data.post.ourExpertise.ourExpertise.area3.title}
        text={categories.data.post.ourExpertise.ourExpertise.area3.text}
        imgAfter={
          categories.data.post.ourExpertise.ourExpertise.area3.imageAfter
            .sourceUrl
        }
        imgBefore={
          categories.data.post.ourExpertise.ourExpertise.area3.imageBefore
            .sourceUrl
        }
      ></CategoryCard>
    </section>
  );
};

export default CategoriesGrid;
