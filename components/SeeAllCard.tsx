import Image from "next/image";
import Link from "next/link";

const SeeAllCard = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <article className="w-full max-w-sm xl:max-w-lg relative bg-project-yellow flex flex-col justify-between">
      <div className=" w-full aspect-square px-14 xl:px-20 flex items-end justify-center">
        <Link className="relative w-full aspect-[4/5]" href="/projects">
          <Image
            className="object-cover"
            priority={true}
            src={imgUrl}
            fill={true}
            sizes="(min-width: 1023px) 50vw, 100vw"
            alt="our team"
          ></Image>
        </Link>
      </div>
      <div className="flex items-end justify-between py-7 px-3 sm:p-7">
        <h4 className=" text-2xl font-bold">Alle projekter</h4>
        <Link
          className=" hover:bg-black hover:text-project-white bg-light-gray text-project-white px-5 py-3 text-sm font-semibold"
          href="/projects"
        >
          Se alle projekter
        </Link>
      </div>
    </article>
  );
};

export default SeeAllCard;
