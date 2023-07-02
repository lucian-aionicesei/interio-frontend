import Image from "next/image";

const CategoryCard = ({
  title,
  text,
  imgUrl,
}: {
  title: string;
  text: string;
  imgUrl: string;
}) => {
  return (
    <article className="w-full max-w-sm xl:max-w-lg relative flex flex-col gap-y-5 md:gap-y-9">
      <div className="relative w-full aspect-[4/5]">
        <Image
          className="object-cover"
          priority={true}
          src={imgUrl}
          fill={true}
          sizes="(min-width: 1023px) 50vw, 100vw"
          alt="our team"
        ></Image>
      </div>
      <div className="text-center md:px-7">
        <h2 className="text-xl md:text-3xl font-semibold pb-3">{title}</h2>
        <p className=" text-base">{text}</p>
      </div>
    </article>
  );
};

export default CategoryCard;
