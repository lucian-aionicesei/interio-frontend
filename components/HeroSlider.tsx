"use client";

import Image from "next/image";
import { Autoplay, Pagination, A11y, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/pagination";

interface SliderProps {
  images: string[];
}

const HeroSlider: React.FC<SliderProps> = ({ images }) => {
  return (
    <section className="h-screen w-full pt-24 relative">
      <Swiper
        // install Swiper modules
        className={`h-full w-full flex items-center justify-center relative`}
        modules={[Autoplay, Pagination, A11y, Virtual]}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {images.map((imgUrl, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <div className="w-full h-full relative">
              <div className="absolute top-0 left-0 w-full h-full bg-black/60 md:bg-black/20 z-40 pointer-events-none"></div>
              <Image
                className=" object-cover"
                priority={true}
                src={imgUrl}
                fill={true}
                alt="our team"
              ></Image>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperNavButtons /> */}
      </Swiper>
      <div className="absolute top-1/4 lg:left-20 md:bg-black/70 z-40 max-w-2xl py-20 px-12 pointer-events-none">
        <h1 className=" text-project-yellow text-5xl font-semibold pb-3">
          Interior Renovations for Every Style and Budget
        </h1>
        <p className="text-white font-light text-sm leading-loose">
          Lorem ipsum dolor sit amet mi bibendum rhoncus netus mollis. Aliquet
          hendrerit phasellus massa velit suspendisse proin mollis in
          pellentesque.
        </p>
      </div>
    </section>
  );
};

export default HeroSlider;
