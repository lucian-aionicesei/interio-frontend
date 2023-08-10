"use client";

import { useInView } from "react-intersection-observer";

const TextComponent = ({ title, text }: { title: string; text: string }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="w-full">
      <article
        className={`m-auto text-center px-5 sm:px-0 duration-700 ease-in-out ${
          inView
            ? "md:translate-y-0 md:opacity-100"
            : " md:translate-y-10 md:opacity-0"
        }`}
      >
        <h1 className="text-3xl md:text-5xl mx-auto max-w-4xl font-semibold pb-5">
          {title}
        </h1>
        <p className="text-base m-auto max-w-3xl font-light leading-loose">
          {text}
        </p>
      </article>
    </section>
  );
};

export default TextComponent;
