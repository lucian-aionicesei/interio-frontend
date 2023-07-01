import HeroSlider from "@/components/HeroSlider";
import Image from "next/image";

export default function Home() {
  const sliderImages = [
    "/wood-floor.png",
    "/wood-floor.png",
    "/wood-floor.png",
  ];

  return (
    <main>
      <HeroSlider images={sliderImages}></HeroSlider>
    </main>
  );
}
