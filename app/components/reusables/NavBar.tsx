"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const pathname = usePathname();
  const linkClass =
    "  p-2  text-center mx-2 border-b border-b-white hover:border-b-gray-200 transition duration-200 ease-in-out";
  const activeClass = "p-2 border-b !border-b-gray-200   transition   duration-200 ease-in-out";
  return (
    <nav className="w-1/2 md:flex-grow   flex justify-end items-center relative z-10">
      <ul className={"hidden  lg:flex w-full justify-end items-center  "}>
        <li className={pathname === "/" ? linkClass + activeClass : linkClass}>
          <Link href={"/"}>Home</Link>
        </li>
        <li
          className={
            pathname === "/remove-background"
              ? linkClass + activeClass
              : linkClass
          }
        >
          <Link href={"/remove-background"}>Remove Background</Link>
        </li>
        <li
          className={
            pathname === "/compress-image" ? linkClass + activeClass : linkClass
          }
        >
          <Link href={"/compress-image"}>Compress Size</Link>{" "}
        </li>
        <li
          className={
            pathname === "/convert-image" ? linkClass + activeClass : linkClass
          }
        >
          <Link href={"/convert-image"}>Convert Image</Link>{" "}
        </li>
      </ul>
      <div
        onClick={toggleMenu}
        className={
          showMenu
            ? "hidden"
            : "flex lg:hidden w-2/12 flex-col space-y-1 cursor-pointer "
        }
      >
        <div className="h-1 w-full border-b border-gray-400 "></div>
        <div className="h-1 w-full border-b border-gray-400 "></div>
        <div className="h-1 w-full border-b border-gray-400"></div>
      </div>
      {showMenu && (
        <ul className="w-full lg:hidden flex flex-col justify-start items-center transition-all ease-in-out delay-100 ">
          {showMenu && (
            <li className={""}>
              <IoMdClose
                className="absolute top-2 right-2 text-xl cursor-pointer hover:text-gray-800"
                onClick={toggleMenu}
              />
            </li>
          )}
          <li
            className={pathname === "/" ? linkClass + activeClass : linkClass}
          >
            <Link onClick={toggleMenu} href={"/"}>
              Home
            </Link>
          </li>
          <li
            className={
              pathname === "/remove-background"
                ? linkClass + activeClass
                : linkClass
            }
          >
            <Link onClick={toggleMenu} href={"/remove-background"}>
              Remove Background
            </Link>
          </li>
          <li
            className={
              pathname === "/compress-image"
                ? linkClass + activeClass
                : linkClass
            }
          >
            <Link onClick={toggleMenu} href={"/compress-image"}>
              Compress Size
            </Link>{" "}
          </li>
          <li
            className={
              pathname === "/convert-image"
                ? linkClass + activeClass
                : linkClass
            }
          >
            <Link onClick={toggleMenu} href={"/convert-image"}>
              Convert Image
            </Link>{" "}
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
