"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SiteFooterProps {
  companyTitle: string;
  phone: string;
  email: string;
  cvr?: string;
  location?: string;
}

const SiteFooter = ({
  companyTitle,
  phone,
  email,
  cvr,
  location,
}: SiteFooterProps) => {
  const pathname = usePathname();

  const encodedLocation = location ? encodeURIComponent(location) : "";
  const googleMapsLink = location
    ? `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`
    : "";

  return (
    <footer className="w-full font-light text-sm px-5 md:px-20 py-20 bg-darker-gray text-project-white">
      <div className="mx-auto w-full container flex flex-col md:grid grid-cols-3 justify-start md:justify-between md:items-end pt-14 gap-y-14">
        <div className="flex flex-col gap-y-3 md:min-w-[22rem]">
          <span className="font-semibold">{companyTitle}</span>
          <ul className="flex flex-col gap-y-3">
            {cvr !== null && (
              <li className=" flex">
                <div className="font-semibold w-20">CVR</div>
                {cvr}
              </li>
            )}
            {location !== null && (
              <li className=" flex">
                <div className="font-semibold w-20">location</div>
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {location}
                </a>
              </li>
            )}
            {phone && (
              <li className=" flex">
                <div className="font-semibold w-20">phone</div>
                {phone}
              </li>
            )}
            <li className=" flex">
              <div className="font-semibold w-20">email</div>
              <a href={`mailto: ${email}`}>{email}</a>
            </li>
          </ul>
        </div>
        <div className="w-full flex justify-center">
          <a href="https://www.instagram.com/interio_cph/" target="_blank">
            <svg
              className="w-12 h-auto hover:scale-110"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="96px"
              height="96px"
            >
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8ma"
                cx="19.38"
                cy="42.035"
                r="44.899"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#fd5" />
                <stop offset=".328" stopColor="#ff543f" />
                <stop offset=".348" stopColor="#fc5245" />
                <stop offset=".504" stopColor="#e64771" />
                <stop offset=".643" stopColor="#d53e91" />
                <stop offset=".761" stopColor="#cc39a4" />
                <stop offset=".841" stopColor="#c837ab" />
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              />
              <radialGradient
                id="yOrnnhliCrdS2gy~4tD8mb"
                cx="11.786"
                cy="5.54"
                r="29.813"
                gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#4168c9" />
                <stop offset=".999" stopColor="#4168c9" stopOpacity="0" />
              </radialGradient>
              <path
                fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
              />
              <path
                fill="#fff"
                d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
              />
              <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
              <path
                fill="#fff"
                d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
              />
            </svg>
          </a>
        </div>
        <ul className="flex flex-col items-center md:items-end gap-y-3">
          <li className=" flex">
            <Link className={`${pathname === "/" && "font-bold"}`} href="/">
              Hjem
            </Link>
          </li>
          <li className=" flex">
            <Link
              className={`${pathname === "/projects" && "font-bold"}`}
              href="/projects"
            >
              Projekter
            </Link>
          </li>
          <li className=" flex">
            <Link
              className={`${pathname === "/about" && "font-bold"}`}
              href="/about"
            >
              Om os
            </Link>
          </li>
          <li className=" flex">
            <Link
              className={`${pathname === "/contact" && "font-bold"}`}
              href="/contact"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default SiteFooter;
