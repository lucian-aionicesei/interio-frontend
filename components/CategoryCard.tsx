import Image from "next/image";

const CategoryCard = ({
  title,
  text,
  imgAfter,
  imgBefore,
}: {
  title: string;
  text: string;
  imgAfter: string;
  imgBefore: string;
}) => {
  return (
    <article className="w-full max-w-sm xl:max-w-lg relative flex flex-col gap-y-5 md:gap-y-9">
      <div className="relative w-full aspect-[4/5] group">
        <div>
          <Image
            className="object-cover"
            priority={true}
            src={imgBefore}
            fill={true}
            sizes="(min-width: 1023px) 50vw, 100vw"
            alt="our team"
          ></Image>
          <div className="absolute top-0 left-0 h-full w-full bg-black/10">
            <p className="text-project-yellow font-bold text-2xl sm:text-3xl pl-5">
              before
            </p>
          </div>
        </div>
        <Image
          className="object-cover hover:opacity-0 ease-in-out duration-300"
          priority={true}
          src={imgAfter}
          fill={true}
          sizes="(min-width: 1023px) 50vw, 100vw"
          alt="our team"
        ></Image>
      </div>
      <div className="text-center md:px-7">
        <h2 className=" text-2xl md:text-3xl font-semibold pb-3">{title}</h2>
        <p className=" text-base">{text}</p>
      </div>
    </article>
  );
};

export default CategoryCard;
