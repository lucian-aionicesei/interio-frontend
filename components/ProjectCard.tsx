"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const ProjectCard = ({
  title,
  location,
  images,
}: {
  title: string;
  location: string;
  images: object;
}) => {
  const [open, setOpen] = useState(false);
  const imagesArray = Object.values(images);
  // console.log(imagesArray);
  const galleryArray = imagesArray
    .filter((obj) => obj !== null)
    .map((obj) => ({ src: obj.sourceUrl }));

  return (
    <article className="w-full max-w-sm xl:max-w-lg relative bg-project-white">
      <div
        onClick={() => setOpen(true)}
        className="relative w-full aspect-square cursor-pointer"
      >
        <Image
          className="object-cover"
          priority={true}
          src={imagesArray[0]?.sourceUrl}
          fill={true}
          sizes="(min-width: 1023px) 50vw, 100vw"
          alt="our team"
        ></Image>
      </div>
      <div className="flex items-end justify-between py-7 px-3 sm:p-7">
        <div className="flex flex-col gap-y-4">
          <h4 className=" text-xl font-bold">{title}</h4>
          <span className="flex items-center gap-x-2 text-sm font-light">
            <svg
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8169 4.90705C12.0479 1.52338 9.09635 0 6.50367 0C6.50367 0 6.50367 0 6.49635 0C3.91097 0 0.952097 1.51606 0.183083 4.89972C-0.673819 8.67888 1.64055 11.8794 3.7352 13.8935C4.51154 14.6406 5.50762 15.0141 6.50367 15.0141C7.49973 15.0141 8.49579 14.6406 9.2648 13.8935C11.3595 11.8794 13.6738 8.6862 12.8169 4.90705ZM6.50367 8.57634C5.22931 8.57634 4.19661 7.54367 4.19661 6.2693C4.19661 4.99493 5.22931 3.96226 6.50367 3.96226C7.77804 3.96226 8.81072 4.99493 8.81072 6.2693C8.81072 7.54367 7.77804 8.57634 6.50367 8.57634Z"
                fill="black"
              />
            </svg>
            {location}
          </span>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className=" hover:bg-black hover:text-project-white bg-project-light-yellow px-5 py-3 text-sm font-semibold"
        >
          View pictures
        </button>
        <Lightbox
          plugins={[Thumbnails]}
          open={open}
          close={() => setOpen(false)}
          slides={galleryArray}
        />
      </div>
    </article>
  );
};

export default ProjectCard;
