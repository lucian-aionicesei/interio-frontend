"use client";

import Image from "next/image";
import { Autoplay, Pagination, A11y, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";

import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";

interface SliderProps {
  heroText: string;
  sliderImages: {
    image: {
      sourceUrl: string;
    };
    imageCopy: {
      sourceUrl: string;
    };
    imageCopy2: {
      sourceUrl: string;
    };
    imageCopy3: {
      sourceUrl: string;
    };
    imageCopy4: {
      sourceUrl: string;
    };
    imageCopy5: {
      sourceUrl: string;
    };
  };
  title: string;
}

const HeroSlider: React.FC<SliderProps> = ({
  heroText,
  sliderImages,
  title,
}) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.3,
    triggerOnce: true,
  });
  // console.log(sliderData);
  const imagesArray = Object.values(sliderImages);
  return (
    <section className="h-screen w-full pt-24 relative">
      <Swiper
        // install Swiper modules
        className={`h-full w-full flex items-center justify-center relative`}
        modules={[Autoplay, Pagination, A11y, Virtual]}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {imagesArray.map(
          (image, index) =>
            image && (
              <SwiperSlide key={index} virtualIndex={index}>
                <div className="w-full h-full relative">
                  <div className="absolute top-0 left-0 w-full h-full bg-black/50 md:bg-black/0 z-40 pointer-events-none"></div>
                  <Image
                    className=" object-cover"
                    priority={true}
                    src={image?.sourceUrl}
                    fill={true}
                    alt="our team"
                  ></Image>
                </div>
              </SwiperSlide>
            )
        )}
        {/* <SwiperNavButtons /> */}
      </Swiper>
      <div
        ref={ref}
        className={`absolute top-1/4 lg:left-20 md:bg-black/70 z-40 max-w-2xl py-20 px-8 sm:px-12 pointer-events-none duration-700 ease-in-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h1 className=" text-project-yellow text-5xl font-semibold pb-3">
          {title}
        </h1>
        <p className="text-white font-light text-sm leading-loose">
          {heroText}
        </p>
      </div>
    </section>
  );
};

export default HeroSlider;
