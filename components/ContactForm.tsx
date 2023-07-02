import Image from "next/image";

const ContactForm = () => {
  return (
    <section className="mx-auto py-16 mb-16 lg:mb-0 bg-light-gray lg:bg-transparent px-10 flex flex-col lg:grid grid-cols-12 2xl:container 2xl:mx-auto">
      <div className=" max-w-lg lg:-translate-y-16 row-start-1 col-start-1 xl:col-start-2 col-span-6 xl:col-span-5 aspect-[7/8] relative">
        <Image
          className="object-cover"
          priority={true}
          src="/under-construction.png"
          fill={true}
          sizes="(min-width: 1023px) 50vw, 100vw"
          alt="our team"
        ></Image>
      </div>
      <div className=" hidden lg:block row-start-1 col-start-2 xl:col-start-3 col-span-11 xl:col-span-9 bg-light-gray"></div>
      <div className=" bg-light-gray max-w-lg text-project-white col-end-13 xl:col-end-12 col-span-6 xl:col-span-5 row-start-1 pt-10 px-0 sm:p-14 h-full flex flex-col gap-y-10 justify-center">
        <article className="w-full">
          <h2 className="text-2xl md:text-3xl font-semibold pb-3">
            We&apos;re ready to bring your project to life
          </h2>
          <span className="lg:font-bold text-sm lg:text-base">
            just contact us
          </span>
        </article>
        <form className="flex flex-col gap-y-4 text-sm">
          <div className="flex items-center h-10 pl-3 rounded-md w-full bg-lightest-gray">
            <label className="font-bold w-24" htmlFor="name">
              Name
            </label>
            <input
              className=" h-full w-full bg-transparent"
              type="text"
              id="name"
              name="name"
            ></input>
          </div>
          <div className="flex items-center h-10 pl-3 rounded-md w-full bg-lightest-gray">
            <label className="font-bold w-24" htmlFor="phone">
              Phone
            </label>
            <input
              className=" h-full w-full bg-transparent"
              type="text"
              id="phone"
              name="phone"
            ></input>
          </div>
          <div className="flex items-center h-10 pl-3 rounded-md w-full bg-lightest-gray">
            <label className="font-bold w-24" htmlFor="email">
              Email
            </label>
            <input
              className=" h-full w-full bg-transparent"
              type="text"
              id="email"
              name="email"
            ></input>
          </div>
          <textarea
            className=" flex items-start justify-start bg-lightest-gray rounded-md h-36 p-3"
            id="fname"
            name="fname"
          ></textarea>
          <button className=" ml-auto w-fit hover:bg-black hover:text-project-white bg-project-light-yellow text-black px-5 py-3 text-sm font-semibold">
            Send email
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
