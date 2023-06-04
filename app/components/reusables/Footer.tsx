import Link from "next/link";
import React from "react";

const liClass = "w-full md:w-1/2 text-left";
function Footer() {
  return (
    <footer className="w-full flex justify-center items-center p-4 bg-gray-600 text-gray-400 text-xs md:text-sm">
      <div className="w-11/12 flex justify-center items-center ">
        <ul className="w-full  flex flex-col justify-start items-center ">
          <h3 className="w-full md:w-1/2 my-2 text-left text-gray-300 font-medium">
            Tools{" "}
          </h3>
          <li className={liClass}>
            <Link href={"/remove-background"}>Remove Background</Link>
          </li>
          <li className={liClass}>
            <Link href={"/compress-size"}>Compress Size</Link>{" "}
          </li>
          <li className={liClass}>
            <Link href={"/convert-image"}>Convert Image</Link>{" "}
          </li>
          <li className={liClass}>
            <Link href={"/apply-filters"}>Apply Filters</Link>
          </li>
        </ul>
        <ul className="w-full flex flex-col justify-start items-center ">
          <h3 className="w-full md:w-1/2 my-2 text-left text-gray-300 font-medium">
            Contact and Usage
          </h3>
          <li className={liClass}>
            <Link href={"/contact"}>Contact us</Link>
          </li>
          <li className={liClass}>
            <Link href={"/compress-size"}>Compress Size</Link>{" "}
          </li>
          <li className={liClass}>
            <Link href={"/convert-image"}>Convert Image</Link>{" "}
          </li>
          <li className={liClass}>
            <Link href={"/apply-filters"}>Apply Filters</Link>
          </li>
        </ul>
        <ul className="w-full flex flex-col justify-start items-center ">
          <h3 className="w-full md:w-1/2 my-2 text-left text-gray-300 font-medium">
            Tools{" "}
          </h3>
          <li className={liClass}>
            <Link href={"/remove-background"}>Remove Background</Link>
          </li>
          <li className={liClass}>
            <Link href={"/compress-size"}>Compress Size</Link>{" "}
          </li>
          <li className={liClass}>
            <Link href={"/convert-image"}>Convert Image</Link>{" "}
          </li>
          <li className={liClass}>
            <Link href={"/apply-filters"}>Apply Filters</Link>
          </li>
        </ul>
        <ul className="w-full flex flex-col justify-start items-center ">
          <h3 className="w-full md:w-1/2 my-2 text-left text-gray-300 font-medium">
            Tools{" "}
          </h3>
          <li className={liClass}>
            <Link href={"/remove-background"}>Remove Background</Link>
          </li>
          <li className={liClass}>
            <Link href={"/compress-size"}>Compress Size</Link>{" "}
          </li>
          <li className={liClass}>
            <Link href={"/convert-image"}>Convert Image</Link>{" "}
          </li>
          <li className={liClass}>
            <Link href={"/apply-filters"}>Apply Filters</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
