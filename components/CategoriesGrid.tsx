import CategoryCard from "./CategoryCard";

const CategoriesGrid = () => {
  return (
    <section className="px-7 xl:px-20 2xl:container 2xl:mx-auto flex flex-wrap xl:flex-nowrap justify-around gap-x-1 gap-y-10 md:gap-y-14">
      <CategoryCard
        title="Bathrooms"
        text="Lorem ipsum dolor sit amet mi bibendum rhoncus netus mollis. Aliquet hendrerit phasellus massa velit suspendisse proin mollis in pellentesque."
        imgUrl="/bathroom-category.png"
      ></CategoryCard>
      <CategoryCard
        title="Kitchens"
        text="Lorem ipsum dolor sit amet mi bibendum rhoncus netus mollis. Aliquet hendrerit phasellus massa velit suspendisse proin mollis in pellentesque."
        imgUrl="/kitchen-category.png"
      ></CategoryCard>
      <CategoryCard
        title="Painting"
        text="Lorem ipsum dolor sit amet mi bibendum rhoncus netus mollis. Aliquet hendrerit phasellus massa velit suspendisse proin mollis in pellentesque."
        imgUrl="/painting-category.png"
      ></CategoryCard>
    </section>
  );
};

export default CategoriesGrid;
