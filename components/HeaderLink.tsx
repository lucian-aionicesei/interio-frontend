import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderLinkProps {
  path: string;
  name: string;
  burgerMenu?: boolean;
}

const HeaderLink = ({ path, name, burgerMenu = false }: HeaderLinkProps) => {
  const pathname = usePathname();

  return (
    <>
      {!burgerMenu ? (
        <li
          className={`${
            pathname.endsWith(path)
              ? "bg-project-light-yellow text-black font-bold"
              : "hover:bg-project-light-yellow hover:text-black hover:font-bold"
          } pointer-events-none h-full flex items-center justify-center w-24`}
        >
          <Link className=" pointer-events-auto" href={path}>
            {name}
          </Link>
        </li>
      ) : (
        <li>
          <Link
            className={
              pathname.endsWith(path) ? " font-bold" : "hover:font-semibold"
            }
            href={path}
          >
            {name}
          </Link>
        </li>
      )}
    </>
  );
};

export default HeaderLink;
