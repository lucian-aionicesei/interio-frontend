import Image from "next/image";

interface AboutComponentProps {
  title: string;
  text: string;
  personName?: string;
  profession?: string;
  image: string;
}

const AboutComponent = ({
  title,
  text,
  personName,
  profession,
  image,
}: AboutComponentProps) => {
  return (
    <section className=" py-14 px-7 md:p-20 w-full bg-light-gray font-light text-base text-project-white">
      <article className=" flex flex-col gap-y-10 lg:grid grid-cols-12 2xl:container 2xl:mx-auto ">
        <div className="relative max-w-md aspect-square col-span-5 xl:col-span-4">
          <Image
            className="object-cover"
            priority={true}
            src={image}
            fill={true}
            sizes="(min-width: 1023px) 50vw, 100vw"
            alt="our team"
          ></Image>
        </div>
        <div className=" col-start-7 xl:col-start-6 col-span-6 h-full flex flex-col gap-y-5 justify-center">
          <h2 className=" text-3xl font-semibold">{title}</h2>
          <p className=" text-sm">{text}</p>
          <div className="flex flex-col gap-y-2">
            <span className="font-semibold">{personName}</span>
            <span>{profession}</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutComponent;
