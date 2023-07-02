import Image from "next/image";

const AboutComponent = () => {
  return (
    <section className=" py-14 px-7 md:p-20 w-full bg-light-gray font-light text-base text-project-white">
      <article className=" flex flex-col gap-y-10 lg:grid grid-cols-12 2xl:container 2xl:mx-auto ">
        <div className="relative max-w-md aspect-square col-span-5 xl:col-span-4">
          <Image
            className="object-cover"
            priority={true}
            src="/andy.png"
            fill={true}
            sizes="(min-width: 1023px) 50vw, 100vw"
            alt="our team"
          ></Image>
        </div>
        <div className=" col-start-7 xl:col-start-6 col-span-6 h-full flex flex-col gap-y-5 justify-center">
          <h2 className=" text-3xl font-semibold">
            We are a team of dedicated people
          </h2>
          <p className=" text-sm">
            After years of experience gained by working in the construction
            industry..... Lorem ipsum dolor sit amet hendrerit habitasse neque
            ultrices. Scelerisque ac convallis tincidunt ut aliquet nunc fames
            lacinia. Vestibulum ornare donec phasellus cursus platea condimentum
            ornare elementum tincidunt ultricies pretium. Justo maecenas aliqua
            ac urna do consectetur est tellus nisi vestibulum eiusmod venenatis.
            Lobortis bibendum molestie pellentesque sollicitudin non adipiscing
            risus cras dolore.
          </p>
          <div className="flex flex-col gap-y-2">
            <span className="font-semibold">Andrejs Mokalovs</span>
            <span>CEO & Project manager</span>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutComponent;
