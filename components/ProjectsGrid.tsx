import ProjectCard from "./ProjectCard";
import SeeAllCard from "./SeeAllCard";

const ProjectsGrid = () => {
  return (
    <section className="px-7 xl:px-20 py-16 w-full bg-light-gray">
      <div className="2xl:p-20 2xl:container 2xl:mx-auto flex flex-wrap justify-around lg:grid grid-cols-3 gap-x-1 gap-y-1">
        <ProjectCard
          title="Bathrooms"
          text="Lorem ipsum dolor sit amet mi bibendum rhoncus netus mollis. Aliquet hendrerit phasellus massa velit suspendisse proin mollis in pellentesque."
          imgUrl="/bathroom-category.png"
        ></ProjectCard>
        <ProjectCard
          title="Bathrooms"
          text="Lorem ipsum dolor sit amet mi bibendum rhoncus netus mollis. Aliquet hendrerit phasellus massa velit suspendisse proin mollis in pellentesque."
          imgUrl="/bathroom-category.png"
        ></ProjectCard>
        <ProjectCard
          title="Bathrooms"
          text="Lorem ipsum dolor sit amet mi bibendum rhoncus netus mollis. Aliquet hendrerit phasellus massa velit suspendisse proin mollis in pellentesque."
          imgUrl="/bathroom-category.png"
        ></ProjectCard>
        <ProjectCard
          title="Bathrooms"
          text="Lorem ipsum dolor sit amet mi bibendum rhoncus netus mollis. Aliquet hendrerit phasellus massa velit suspendisse proin mollis in pellentesque."
          imgUrl="/bathroom-category.png"
        ></ProjectCard>
        <ProjectCard
          title="Bathrooms"
          text="Lorem ipsum dolor sit amet mi bibendum rhoncus netus mollis. Aliquet hendrerit phasellus massa velit suspendisse proin mollis in pellentesque."
          imgUrl="/bathroom-category.png"
        ></ProjectCard>
        <SeeAllCard imgUrl="/bathroom-category.png"></SeeAllCard>
      </div>
    </section>
  );
};

export default ProjectsGrid;
