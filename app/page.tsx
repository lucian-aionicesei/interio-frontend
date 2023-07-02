import CategoriesGrid from "@/components/CategoriesGrid";
import ContactForm from "@/components/ContactForm";
import HeroSlider from "@/components/HeroSlider";
import ProjectsGrid from "@/components/ProjectsGrid";
import TextComponent from "@/components/TextComponent";
import Image from "next/image";

export default function Home() {
  const sliderImages = [
    "/wood-floor.png",
    "/wood-floor.png",
    "/wood-floor.png",
  ];

  return (
    <main className="flex flex-col gap-y-16">
      <HeroSlider images={sliderImages}></HeroSlider>
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
