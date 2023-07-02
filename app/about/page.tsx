import AboutComponent from "@/components/AboutComponent";
import CategoriesGrid from "@/components/CategoriesGrid";
import TextComponent from "@/components/TextComponent";

const About = () => {
  return (
    <main className=" pt-40 flex flex-col gap-y-16">
      <TextComponent
        title="What we do"
        text="Lorem ipsum dolor sit amet mi bibendum rhoncus netus mollis. Aliquet hendrerit phasellus massa velit suspendisse proin mollis in pellentesque."
      ></TextComponent>
      <CategoriesGrid></CategoriesGrid>
      <AboutComponent></AboutComponent>
    </main>
  );
};

export default About;
