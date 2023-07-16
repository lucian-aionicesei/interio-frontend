import Image from "next/image";

interface ContactInfoProps {
  companyTitle: string;
  contactPerson: string;
  cvr: string;
  email: string;
  location: string;
  personTitle: string;
  phone: string;
  title: string;
  image: {
    sourceUrl: string;
  };
}

const CallUs: React.FC<ContactInfoProps> = ({
  companyTitle,
  contactPerson,
  cvr,
  email,
  location,
  personTitle,
  phone,
  title,
  image,
}) => {
  return (
    <section className=" py-14 px-7 md:p-20 w-full bg-light-gray font-light text-base text-project-white">
      {title !== null && (
        <h1 className=" text-4xl pb-14 font-semibold">{title}</h1>
      )}
      <article className=" flex flex-col gap-y-10 lg:grid grid-cols-12 2xl:container 2xl:mx-auto ">
        <div className="relative max-w-md aspect-square col-span-4 xl:col-span-3">
          <Image
            className="object-cover"
            priority={true}
            src={image.sourceUrl}
            fill={true}
            sizes="(min-width: 1023px) 50vw, 100vw"
            alt="our team"
          ></Image>
        </div>
        <div className=" col-start-5 xl:col-start-4 col-span-8 px-0 lg:px-10 h-full flex flex-wrap gap-y-10 gap-x-10 items-end justify-between">
          <div className="flex flex-col gap-y-3">
            <h4 className=" font-semibold">{contactPerson}</h4>
            <p>{personTitle}</p>
            <p>{phone}</p>
            <p>{email}</p>
          </div>
          <div className="flex flex-col gap-y-3 md:min-w-[22rem]">
            <span className="font-semibold">{companyTitle}</span>
            <ul className="flex flex-col gap-y-3">
              {cvr !== null && (
                <li className=" flex">
                  <div className="font-semibold w-20">CVR</div>
                  {cvr}
                </li>
              )}
              <li className=" flex">
                <div className="font-semibold w-20">location</div>
                {location}
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CallUs;
