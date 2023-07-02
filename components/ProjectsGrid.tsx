"use client";

import ProjectCard from "./ProjectCard";
import SeeAllCard from "./SeeAllCard";
import { usePathname } from "next/navigation";

const ProjectsGrid = () => {
  const pathname = usePathname();

  return (
    <section className="px-7 xl:px-20 py-20 w-full bg-light-gray">
      <div className="2xl:p-20 2xl:container 2xl:mx-auto flex flex-wrap justify-center lg:grid grid-cols-3 gap-x-1 gap-y-1">
        <ProjectCard
          title="Summer House"
          location="2300 København"
          imgUrl="/wood-floor.png"
        ></ProjectCard>
        <ProjectCard
          title="Summer House"
          location="2300 København"
          imgUrl="/project2.png"
        ></ProjectCard>
        <ProjectCard
          title="Summer House"
          location="2300 København"
          imgUrl="/project3.png"
        ></ProjectCard>
        <ProjectCard
          title="Summer House"
          location="2300 København"
          imgUrl="/project2.png"
        ></ProjectCard>
        <ProjectCard
          title="Summer House"
          location="2300 København"
          imgUrl="/wood-floor.png"
        ></ProjectCard>
        {pathname === "/" && <SeeAllCard imgUrl="/house.png"></SeeAllCard>}
      </div>
    </section>
  );
};

export default ProjectsGrid;
