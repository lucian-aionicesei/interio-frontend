"use client";

import ProjectCard from "./ProjectCard";
import SeeAllCard from "./SeeAllCard";
import { useInView } from "react-intersection-observer";

const ProjectsGrid = ({
  projects,
  homePage,
  allProjectsImg,
}: {
  projects: Object[];
  homePage: Boolean;
  allProjectsImg?: string;
}) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <section ref={ref} className="px-7 xl:px-20 py-20 w-full bg-light-gray">
      <div
        className={`"2xl:p-20 2xl:container 2xl:mx-auto flex flex-wrap justify-center lg:grid grid-cols-3 gap-x-1 gap-y-1 duration-700 ease-in-out ${
          inView
            ? "md:translate-y-0 md:opacity-100"
            : "md:translate-y-10 md:opacity-0"
        }`}
      >
        {projects?.map((project: any, index: number) => (
          <ProjectCard
            key={`project${index}`}
            title={project.title}
            location={project.info.location}
            description={project.info.description}
            images={project.images.images}
          ></ProjectCard>
        ))}
        {homePage && (
          <SeeAllCard
            imgUrl={allProjectsImg ? allProjectsImg : ""}
          ></SeeAllCard>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;
