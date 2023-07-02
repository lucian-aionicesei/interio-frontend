import Image from "next/image";

const CallUs = () => {
  return (
    <section className=" py-14 px-7 md:p-20 w-full bg-light-gray font-light text-base text-project-white">
      <h1 className=" text-4xl pb-14 font-semibold">
        Don&apos;t hesitate to give us a call
      </h1>
      <article className=" flex flex-col gap-y-10 lg:grid grid-cols-12 2xl:container 2xl:mx-auto ">
        <div className="relative max-w-md aspect-square col-span-4 xl:col-span-3">
          <Image
            className="object-cover"
            priority={true}
            src="/andy.png"
            fill={true}
            sizes="(min-width: 1023px) 50vw, 100vw"
            alt="our team"
          ></Image>
        </div>
        <div className=" col-start-5 xl:col-start-4 col-span-8 px-0 lg:px-10 h-full flex flex-wrap gap-y-10 gap-x-10 items-end justify-between">
          <div className="flex flex-col gap-y-3">
            <h4 className=" font-semibold">Andrejs Mocalovs</h4>
            <p>CEO & Project manager</p>
            <p>+45 22 44 33 55</p>
            <p>andy@interio.dk</p>
          </div>
          <div className="flex flex-col gap-y-3 md:min-w-[22rem]">
            <span className="font-semibold">Interio ApS</span>
            <ul className="flex flex-col gap-y-3">
              <li className=" flex">
                <div className="font-semibold w-20">CVR</div>1923041740
              </li>
              <li className=" flex">
                <div className="font-semibold w-20">location</div>C.F. Møllers
                Alle 38, 2300 København S
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CallUs;
