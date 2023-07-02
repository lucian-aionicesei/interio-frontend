const TextComponent = ({ title, text }: { title: string; text: string }) => {
  return (
    <section className="w-full">
      <article className="m-auto text-center max-w-2xl px-5 sm:px-0">
        <h1 className=" text-2xl sm:text-3xl md:text-5xl font-semibold pb-5">
          {title}
        </h1>
        <p className="text-base m-auto max-w-md font-light leading-loose">
          {text}
        </p>
      </article>
    </section>
  );
};

export default TextComponent;
