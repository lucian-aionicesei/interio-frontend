"use client";

import Image from "next/image";
import { useState, FormEvent } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(
      "name:",
      name,
      "phone:",
      phone,
      "email:",
      email,
      "message:",
      message
    );

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setStatus(true);
  };

  return (
    <section className="mx-auto py-16 mb-16 lg:mb-0 bg-light-gray lg:bg-transparent px-10 flex flex-col lg:grid grid-cols-12 2xl:container 2xl:mx-auto">
      <div className=" max-w-lg lg:-translate-y-16 row-start-1 col-start-1 xl:col-start-2 col-span-6 xl:col-span-5 aspect-[7/8] relative">
        <Image
          className="object-cover"
          priority={true}
          src="/under-construction.png"
          fill={true}
          sizes="(min-width: 1023px) 50vw, 100vw"
          alt="our team"
        ></Image>
      </div>
      <div className=" hidden lg:block row-start-1 col-start-2 xl:col-start-3 col-span-11 xl:col-span-9 bg-light-gray"></div>
      <div className=" bg-light-gray max-w-lg text-project-white col-end-13 xl:col-end-12 col-span-6 xl:col-span-5 row-start-1 pt-10 px-0 sm:p-14 h-full flex flex-col gap-y-10 justify-center">
        <article className="w-full">
          <h2 className="text-2xl md:text-3xl font-semibold pb-3">
            We&apos;re ready to bring your project to life
          </h2>
          <span className="lg:font-bold text-sm lg:text-base">
            just contact us
          </span>
        </article>
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 text-sm">
          <div className="flex items-center h-10 pl-3 rounded-md w-full bg-lightest-gray">
            <label className="font-bold w-24" htmlFor="name">
              Name
            </label>
            <input
              className=" h-full w-full bg-lightest-gray"
              type="text"
              id="name"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="flex items-center h-10 pl-3 rounded-md w-full bg-lightest-gray">
            <label className="font-bold w-24" htmlFor="phone">
              Phone
            </label>
            <input
              className=" h-full w-full bg-transparent"
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]*"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
          <div className="flex items-center h-10 pl-3 rounded-md w-full bg-lightest-gray">
            <label className="font-bold w-24" htmlFor="email">
              Email
            </label>
            <input
              required
              className=" h-full w-full bg-transparent"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <textarea
            required
            className=" flex items-start justify-start bg-lightest-gray rounded-md h-36 p-3"
            id="fname"
            name="fname"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="flex flex-col-reverse md:flex-row gap-y-5 md:items-center">
            <p
              className={`font-semibold text-sm h-full bg-green-700 py-2 px-5 duration-300 ease-in-out ${
                status ? "opacity-1" : "opacity-0"
              }`}
            >
              Message sent successfully &#10003;
            </p>
            <button
              type="submit"
              className=" ml-auto w-fit hover:bg-black hover:text-project-white bg-project-light-yellow text-black px-5 py-3 text-sm font-semibold"
            >
              Send email
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
