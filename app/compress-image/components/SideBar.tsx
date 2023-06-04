"use client";
import Image from "next/image";
import Link from "next/link";

function SideBar({ relatedTools }: { relatedTools: string[] }) {
  relatedTools.length === 0 && <></>;
  return (
    <aside className="w-full md:w-1/5 bg-white  ">
      {relatedTools.length > 0 && (
        <h3 className="p-2 bg-red-400 text-gray-100">
          Other Related Conversions
        </h3>
      )}
      <div className="w-full flex flex-col justify-start items-scenter border mb-6">
        {relatedTools.map((tool, index) => {
          return (
            <Link
              href={"/convert-image/" + tool}
              key={`${tool}-${index}`}
              className=" m-1 p-1 rounded text-yellow-gray-700"
            >
              {tool.replaceAll("-", " ")}
            </Link>
          );
        })}
      </div>
      <div className="">
        <Link
          href={
            "https://afflat3e1.com/lnk.asp?o=23853&c=918277&a=236088&k=5F8B23B9B4A9250C04BEC2D1F356DFD2&l=24873"
          }
        >
          <Image
            alt="battery_charger"
            src={"/adBanners/longbattery.gif"}
            width={790}
            height={1149}
          />
        </Link>
      </div>
    </aside>
  );
}

export default SideBar;
