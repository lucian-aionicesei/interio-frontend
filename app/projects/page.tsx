import ContactForm from "@/components/ContactForm";
import ProjectsGrid from "@/components/ProjectsGrid";
import { getData } from "../../lib/getData";

export default async function Projects() {
  const data = await getData(query);

  return (
    <main className="pt-20 flex flex-col gap-y-16">
      <ProjectsGrid
        homePage={false}
        projects={data.data.projects.nodes}
      ></ProjectsGrid>
      <ContactForm></ContactForm>
    </main>
  );
}

const query = {
  query: `query getAllProjects {
    projects {
      nodes {
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
        info {
          location
          description
        }
        title
      }
    }
  }`,
};
