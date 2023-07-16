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
      <div className="mx-auto w-full container flex flex-col md:flex-row justify-start md:justify-between md:items-end pt-14 gap-y-14">
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
            <li className=" flex">
              <div className="font-semibold w-20">phone</div>
              {phone}
            </li>
            <li className=" flex">
              <div className="font-semibold w-20">email</div>
              <a href={`mailto: ${email}`}>{email}</a>
            </li>
          </ul>
        </div>
        {/* <div className="w-full flex justify-center">
          <a
            href="https://www.linkedin.com/in/andrejs-mocalovs-722916114/"
            target="_blank"
          >
            <svg
              className=" w-8 h-fit"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              width="100px"
              height="100px"
              fill-rule="nonzero"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M8,3.00977c-3.47,0 -5.99023,2.07945 -5.99023,4.93945c0,2.87 2.58023,5.04102 5.99023,5.04102c3.47,0 5.99023,-2.11961 5.99023,-5.09961c-0.16,-2.87 -2.63023,-4.88086 -5.99023,-4.88086zM3,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h10c0.55,0 1,-0.45 1,-1v-29c0,-0.55 -0.45,-1 -1,-1zM18,15c-0.55,0 -1,0.45 -1,1v29c0,0.55 0.45,1 1,1h9c0.552,0 1,-0.448 1,-1v-15v-0.25v-0.25c0,-2.37 1.82062,-4.30047 4.14063,-4.48047c0.12,-0.02 0.23938,-0.01953 0.35938,-0.01953c0.12,0 0.23938,-0.00047 0.35938,0.01953c2.32,0.18 4.14063,2.11047 4.14063,4.48047v15.5c0,0.552 0.448,1 1,1h9c0.55,0 1,-0.45 1,-1v-17c0,-6.47 -3.47094,-13 -11.21094,-13c-3.52,0 -6.17906,1.36023 -7.78906,2.49023v-1.49023c0,-0.55 -0.45,-1 -1,-1z"></path>
                </g>
              </g>
            </svg>
          </a>
        </div> */}
        <ul className="flex flex-col items-center md:items-end gap-y-3">
          <li className=" flex">
            <Link className={`${pathname === "/" && "font-bold"}`} href="/">
              Home
            </Link>
          </li>
          <li className=" flex">
            <Link
              className={`${pathname === "/projects" && "font-bold"}`}
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li className=" flex">
            <Link
              className={`${pathname === "/about" && "font-bold"}`}
              href="/about"
            >
              About
            </Link>
          </li>
          <li className=" flex">
            <Link
              className={`${pathname === "/contact" && "font-bold"}`}
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default SiteFooter;
