"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import HeaderLink from "./HeaderLink";
import useScreenWidth from "../hooks/useScreenWidth";
import { usePathname } from "next/navigation";

const SiteHeader = ({ phone, email }: { phone: string; email: string }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const screenWidth = useScreenWidth();
  const pathname = usePathname();

  useEffect(() => {
    setToggleMenu(false);
  }, [pathname]);

  useEffect(() => {
    if (screenWidth > 1280) {
      // console.log("close the menu")
      setToggleMenu(false);
      document.body.style.overflow = "auto";
    }
  }, [screenWidth]);

  useEffect(() => {
    if (!toggleMenu) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [toggleMenu]);

  function setMenuState() {
    setToggleMenu(() => !toggleMenu);
  }

  return (
    <header className="fixed top-0 w-full h-0 z-50">
      <div className="w-full h-24 flex justify-between xl:grid grid-cols-3 bg-dark-gray">
        <span className="my-auto text-project-white pl-10 md:pl-20 text-6xl font-semibold">
          <Link href="/">Logo</Link>
        </span>
        <nav className=" text-project-white font-light text-base h-full w-full hidden xl:block">
          <ul className=" flex h-full">
            <HeaderLink name="Home" path="/" />
            <HeaderLink name="Projects" path="/projects" />
            <HeaderLink name="About" path="/about" />
            <HeaderLink name="Contact" path="/contact" />
          </ul>
        </nav>
        <div className=" w-full hidden xl:flex justify-end">
          <div className="bg-project-yellow h-full flex items-center px-28">
            <ul className="flex flex-col gap-y-3 font-medium">
              <li className="flex gap-x-3 items-center">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.06378 12.9697L7.21096 14.8225C6.82037 15.2131 6.19942 15.2131 5.79881 14.8325C5.68865 14.7224 5.57848 14.6222 5.46831 14.5121C4.43674 13.4705 3.50533 12.3788 2.67406 11.2371C1.85282 10.0953 1.19181 8.95361 0.711081 7.82189C0.240365 6.68015 0 5.58849 0 4.54691C0 3.86588 0.120183 3.21489 0.360548 2.61397C0.600913 2.00304 0.981492 1.44219 1.5123 0.941431C2.15327 0.310472 2.85434 0 3.59547 0C3.87589 0 4.15632 0.0600914 4.4067 0.180274C4.66709 0.300457 4.89744 0.480731 5.07772 0.741127L7.40125 4.0161C7.58152 4.26649 7.71172 4.49684 7.80186 4.71717C7.892 4.92749 7.94207 5.13781 7.94207 5.3281C7.94207 5.56846 7.87197 5.80883 7.73175 6.03918C7.60156 6.26953 7.41127 6.50989 7.1709 6.75026L6.40974 7.54146C6.29958 7.65163 6.2495 7.78183 6.2495 7.94207C6.2495 8.02219 6.25952 8.0923 6.27955 8.17242C6.30959 8.25254 6.33964 8.31263 6.35967 8.37273C6.53994 8.70323 6.85041 9.13388 7.29108 9.65468C7.74177 10.1755 8.2225 10.7063 8.74329 11.2371C8.84344 11.3372 8.95361 11.4374 9.05376 11.5375C9.45437 11.9281 9.46439 12.5691 9.06378 12.9697Z"
                    fill="#292D32"
                  />
                  <path
                    d="M20.0001 16.354C20.0001 16.6344 19.9501 16.9248 19.8499 17.2052C19.8199 17.2854 19.7898 17.3655 19.7498 17.4456C19.5795 17.8062 19.3592 18.1467 19.0687 18.4672C18.578 19.008 18.0372 19.3986 17.4262 19.649C17.4162 19.649 17.4062 19.659 17.3962 19.659C16.8053 19.8993 16.1643 20.0295 15.4733 20.0295C14.4517 20.0295 13.3601 19.7892 12.2083 19.2984C11.0566 18.8077 9.9048 18.1467 8.76307 17.3154C8.37248 17.025 7.98189 16.7345 7.61133 16.4241L10.8863 13.1491C11.1667 13.3594 11.4171 13.5196 11.6274 13.6298C11.6775 13.6498 11.7376 13.6799 11.8077 13.7099C11.8878 13.74 11.9679 13.75 12.0581 13.75C12.2283 13.75 12.3585 13.6899 12.4687 13.5797L13.2299 12.8286C13.4802 12.5782 13.7206 12.3879 13.951 12.2677C14.1813 12.1275 14.4117 12.0574 14.662 12.0574C14.8523 12.0574 15.0526 12.0975 15.273 12.1876C15.4933 12.2778 15.7236 12.408 15.974 12.5782L19.2891 14.9318C19.5495 15.1121 19.7297 15.3224 19.8399 15.5728C19.9401 15.8231 20.0001 16.0735 20.0001 16.354Z"
                    fill="#292D32"
                  />
                </svg>
                {phone}
              </li>
              <li className="flex gap-x-3 items-center">
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8824 0H5.29412C2.11765 0 0 1.58824 0 5.29412V12.7059C0 16.4118 2.11765 18 5.29412 18H15.8824C19.0588 18 21.1765 16.4118 21.1765 12.7059V5.29412C21.1765 1.58824 19.0588 0 15.8824 0ZM16.38 6.44824L13.0659 9.09529C12.3671 9.65647 11.4776 9.93177 10.5882 9.93177C9.69882 9.93177 8.79882 9.65647 8.11059 9.09529L4.79647 6.44824C4.45765 6.17294 4.40471 5.66471 4.66941 5.32588C4.94471 4.98706 5.44235 4.92353 5.78118 5.19882L9.09529 7.84588C9.9 8.49177 11.2659 8.49177 12.0706 7.84588L15.3847 5.19882C15.7235 4.92353 16.2318 4.97647 16.4965 5.32588C16.7718 5.66471 16.7188 6.17294 16.38 6.44824Z"
                    fill="#292D32"
                  />
                </svg>
                <a href={`mailto: ${email}`}>{email}</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          onClick={setMenuState}
          className="flex items-center justify-center xl:hidden cursor-pointer py-2 mr-10 md:mr-20"
        >
          <svg
            className="w-9 md:w-10 h-fit"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className={`ease-in-out duration-300 origin-center ${
                toggleMenu
                  ? "translate-y-0 translate-x-0 rotate-45"
                  : "-translate-y-[6px] -translate-x-[1px]"
              }`}
              y="18"
              x="1"
              width="38"
              height="5"
              fill="white"
            />
            <rect
              className={`ease-in-out duration-300 origin-center ${
                toggleMenu
                  ? "translate-y-0 translate-x-0 -rotate-45"
                  : "translate-y-[6px] translate-x-[1px]"
              }`}
              y="18"
              x="-1"
              width="38"
              height="5"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div
        className={`h-screen w-full bg-project-white flex flex-col justify-between items-end pb-24 ease-in-out duration-500 ${
          toggleMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className=" text-right text-6xl h-full flex flex-col justify-center pr-10 md:pr-20">
          <HeaderLink name="Home" path="/" burgerMenu={true} />
          <HeaderLink name="Projects" path="/projects" burgerMenu={true} />
          <HeaderLink name="About" path="/about" burgerMenu={true} />
          <HeaderLink name="Contact" path="/contact" burgerMenu={true} />
        </ul>
        <div className=" w-full flex justify-end">
          <div className="bg-project-yellow h-28 flex items-center w-full sm:w-auto px-10 sm:px-28">
            <ul className="flex flex-col gap-y-3 font-medium">
              <li className="flex gap-x-3 items-center">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.06378 12.9697L7.21096 14.8225C6.82037 15.2131 6.19942 15.2131 5.79881 14.8325C5.68865 14.7224 5.57848 14.6222 5.46831 14.5121C4.43674 13.4705 3.50533 12.3788 2.67406 11.2371C1.85282 10.0953 1.19181 8.95361 0.711081 7.82189C0.240365 6.68015 0 5.58849 0 4.54691C0 3.86588 0.120183 3.21489 0.360548 2.61397C0.600913 2.00304 0.981492 1.44219 1.5123 0.941431C2.15327 0.310472 2.85434 0 3.59547 0C3.87589 0 4.15632 0.0600914 4.4067 0.180274C4.66709 0.300457 4.89744 0.480731 5.07772 0.741127L7.40125 4.0161C7.58152 4.26649 7.71172 4.49684 7.80186 4.71717C7.892 4.92749 7.94207 5.13781 7.94207 5.3281C7.94207 5.56846 7.87197 5.80883 7.73175 6.03918C7.60156 6.26953 7.41127 6.50989 7.1709 6.75026L6.40974 7.54146C6.29958 7.65163 6.2495 7.78183 6.2495 7.94207C6.2495 8.02219 6.25952 8.0923 6.27955 8.17242C6.30959 8.25254 6.33964 8.31263 6.35967 8.37273C6.53994 8.70323 6.85041 9.13388 7.29108 9.65468C7.74177 10.1755 8.2225 10.7063 8.74329 11.2371C8.84344 11.3372 8.95361 11.4374 9.05376 11.5375C9.45437 11.9281 9.46439 12.5691 9.06378 12.9697Z"
                    fill="#292D32"
                  />
                  <path
                    d="M20.0001 16.354C20.0001 16.6344 19.9501 16.9248 19.8499 17.2052C19.8199 17.2854 19.7898 17.3655 19.7498 17.4456C19.5795 17.8062 19.3592 18.1467 19.0687 18.4672C18.578 19.008 18.0372 19.3986 17.4262 19.649C17.4162 19.649 17.4062 19.659 17.3962 19.659C16.8053 19.8993 16.1643 20.0295 15.4733 20.0295C14.4517 20.0295 13.3601 19.7892 12.2083 19.2984C11.0566 18.8077 9.9048 18.1467 8.76307 17.3154C8.37248 17.025 7.98189 16.7345 7.61133 16.4241L10.8863 13.1491C11.1667 13.3594 11.4171 13.5196 11.6274 13.6298C11.6775 13.6498 11.7376 13.6799 11.8077 13.7099C11.8878 13.74 11.9679 13.75 12.0581 13.75C12.2283 13.75 12.3585 13.6899 12.4687 13.5797L13.2299 12.8286C13.4802 12.5782 13.7206 12.3879 13.951 12.2677C14.1813 12.1275 14.4117 12.0574 14.662 12.0574C14.8523 12.0574 15.0526 12.0975 15.273 12.1876C15.4933 12.2778 15.7236 12.408 15.974 12.5782L19.2891 14.9318C19.5495 15.1121 19.7297 15.3224 19.8399 15.5728C19.9401 15.8231 20.0001 16.0735 20.0001 16.354Z"
                    fill="#292D32"
                  />
                </svg>
                {phone}
              </li>
              <li className="flex gap-x-3 items-center">
                <svg
                  width="22"
                  height="18"
                  viewBox="0 0 22 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.8824 0H5.29412C2.11765 0 0 1.58824 0 5.29412V12.7059C0 16.4118 2.11765 18 5.29412 18H15.8824C19.0588 18 21.1765 16.4118 21.1765 12.7059V5.29412C21.1765 1.58824 19.0588 0 15.8824 0ZM16.38 6.44824L13.0659 9.09529C12.3671 9.65647 11.4776 9.93177 10.5882 9.93177C9.69882 9.93177 8.79882 9.65647 8.11059 9.09529L4.79647 6.44824C4.45765 6.17294 4.40471 5.66471 4.66941 5.32588C4.94471 4.98706 5.44235 4.92353 5.78118 5.19882L9.09529 7.84588C9.9 8.49177 11.2659 8.49177 12.0706 7.84588L15.3847 5.19882C15.7235 4.92353 16.2318 4.97647 16.4965 5.32588C16.7718 5.66471 16.7188 6.17294 16.38 6.44824Z"
                    fill="#292D32"
                  />
                </svg>
                <a href={`mailto: ${email}`}>{email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
