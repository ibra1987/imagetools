"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
function NavBar() {
  const pathname = usePathname();
  const linkClass =
    "p-2 hover:border-b-yellow-500 hover:text-yellow-500 border-b border-b-white transition delay-75 ease-in-out";
  const activeClass =
    " border-b-yellow-500 text-yellow-500  transition delay-75 ease-in-out";
  return (
    <nav className="">
      <ul className="w-full flex justify-center items-center space-x-6">
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
        <li
          className={
            pathname === "/apply-filters" ? linkClass + activeClass : linkClass
          }
        >
          <Link href={"/apply-filters"}>Apply Filters</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
