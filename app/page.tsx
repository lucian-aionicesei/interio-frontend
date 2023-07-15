import CategoriesGrid from "@/components/CategoriesGrid";
import ContactForm from "@/components/ContactForm";
import HeroSlider from "@/components/HeroSlider";
import ProjectsGrid from "@/components/ProjectsGrid";
import TextComponent from "@/components/TextComponent";
import { getData } from "../lib/getData";

export default async function Home() {
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
            }
          }
          location {
            location
          }
          title
        }
      }
    }`,
  };
  const data = await getData(query);

  console.log(data.data.projects.nodes[0].images);

  const sliderImages = [
    "/wood-floor.png",
    "/wood-floor.png",
    "/wood-floor.png",
  ];

  return (
    <main className="flex flex-col gap-y-16">
      <HeroSlider images={sliderImages}></HeroSlider>
      {/* {data.data.posts.edges.map((post: any, index: number) => (
        <p key={index}>{post.node.title}</p>
      ))} */}
      {data.data.projects.nodes.map((project: any, index: number) => (
        <div key={index}>
          <h4>{project.title}</h4>
          <p>{project.location.location}</p>
        </div>
      ))}
      <TextComponent
        title="Elevate Your Living Space: Interior Renovations for Every Style and Budget"
        text="Lorem ipsum dolor sit amet mi bibendum rhoncus netus mollis. Aliquet hendrerit phasellus massa velit suspendisse proin mollis in pellentesque."
      ></TextComponent>
      <CategoriesGrid></CategoriesGrid>
      <ProjectsGrid></ProjectsGrid>
      <ContactForm></ContactForm>
    </main>
  );
}
