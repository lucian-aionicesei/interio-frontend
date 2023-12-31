"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

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
  const encodedLocation = location ? encodeURIComponent(location) : "";
  const googleMapsLink = location
    ? `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`
    : "";
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className=" py-14 px-7 md:p-20 w-full bg-light-gray font-light text-base text-project-white"
    >
      {title !== null && (
        <h1 className=" text-4xl pb-14 font-semibold">{title}</h1>
      )}
      <article className=" flex flex-col gap-y-10 lg:grid grid-cols-12 2xl:container 2xl:mx-auto ">
        <div
          className={`relative max-w-md aspect-square col-span-4 xl:col-span-3 duration-700 ease-in-out ${
            inView
              ? "md:translate-x-0 md:opacity-100"
              : " md:translate-y-10 md:opacity-0"
          }`}
        >
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
          <div
            className={`flex flex-col gap-y-3 delay-100 duration-700 ease-in-out ${
              inView
                ? "md:translate-x-0 md:opacity-100"
                : " md:translate-y-10 md:opacity-0"
            }`}
          >
            <h4 className=" font-semibold">{contactPerson}</h4>
            <p>{personTitle}</p>
            {phone && <p>{phone}</p>}
            <a href={`mailto: ${email}`}>{email}</a>
          </div>
          <div
            className={`flex flex-col gap-y-3 md:min-w-[22rem] delay-200 duration-700 ease-in-out ${
              inView
                ? "md:translate-x-0 md:opacity-100"
                : " md:translate-y-10 md:opacity-0"
            }`}
          >
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
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {location}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default CallUs;
