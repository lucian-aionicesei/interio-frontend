import ProjectCard from "./ProjectCard";
import SeeAllCard from "./SeeAllCard";

const ProjectsGrid = ({
  projects,
  homePage,
}: {
  projects: Object[];
  homePage: Boolean;
}) => {
  return (
    <section className="px-7 xl:px-20 py-20 w-full bg-light-gray">
      <div className="2xl:p-20 2xl:container 2xl:mx-auto flex flex-wrap justify-center lg:grid grid-cols-3 gap-x-1 gap-y-1">
        {projects?.map((project: any, index: number) => (
          <ProjectCard
            key={`project${index}`}
            title={project.title}
            location={project.location.location}
            imgUrl="/wood-floor.png"
            images={project.images.images}
          ></ProjectCard>
        ))}
        {homePage && <SeeAllCard imgUrl="/house.png"></SeeAllCard>}
      </div>
    </section>
  );
};

export default ProjectsGrid;
