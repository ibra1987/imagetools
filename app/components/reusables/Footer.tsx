import Link from "next/link";
import React from "react";

const liClass =
  "w-full md:w-1/2 text-left hover:text-gray-200 transiton-colors ease-in-out delay-75";

function Footer() {
  return (
    <footer className="w-full flex justify-center items-center p-4 border-t border-gray-600  text-gray-400 text-xs md:text-sm">
      <div className="w-full flex justify-center items-start ">
        <ul className="w-full  flex flex-col justify-start items-center ">
          <h3 className="w-full md:w-1/2 my-2 text-left text-gray-300 font-medium">
            Current Services
          </h3>
          <li className={liClass}>
            <Link href={"/remove-background"}>Background Removal</Link>
          </li>
          <li className={liClass}>
            <Link href={"/compress-image"}>Image compressor</Link>{" "}
          </li>
          <li className={liClass}>
            <Link href={"/convert-image"}>Format conversion</Link>{" "}
          </li>
        </ul>
        <ul className="w-full flex flex-col justify-start items-start ">
          <h3 className="w-full md:w-1/2 my-2 text-left text-gray-300 font-medium">
            Terms and Services
          </h3>

          <li className={liClass}>
            <Link href={"/terms-of-use"}>terms of use</Link>{" "}
          </li>
          <li className={liClass}>
            <Link href={"/privacy-policy"}>Privacy policy</Link>{" "}
          </li>
          <li className={liClass}>
            <Link href={"/cookies-policy"}>Cookies policy</Link>{" "}
          </li>
        </ul>
        <ul className="w-full flex flex-col justify-start items-start">
          <h3 className="w-full md:w-1/2 my-2 text-left text-gray-300 font-medium">
            About us
          </h3>
          <li className={liClass}>
            <Link href={"/about"}>About</Link>
          </li>
          <li className={liClass}>
            <Link href={"/contact"}>Contact us</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
