import ContactForm from "@/components/ContactForm";
import ProjectsGrid from "@/components/ProjectsGrid";

const Projects = () => {
  return (
    <main className="pt-20 flex flex-col gap-y-16">
      <ProjectsGrid></ProjectsGrid>
      <ContactForm></ContactForm>
    </main>
  );
};

export default Projects;
