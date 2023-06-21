"use client";

import Link from "next/link";
import { useState } from "react";

const selectOptions = [
  "PNG",
  "JPG",
  "EPS",
  "BLP",
  "BMP",
  "DIB",
  "ICNS",
  "IM",
  "TGA",
  "GIF",
  "TIFF",
  "DDS",
  "ICO",
  "MSP",
  "WEBP",
  "PPM",
];
function ConvertOptions() {
  const [fromTo, setFromTo] = useState({
    from: "JPG",
    to: "PNG",
  });
  let convertToOptions = selectOptions?.filter((opt) => opt !== fromTo.from);

  const onChange = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    if (e.currentTarget.name === "from") {
      convertToOptions = selectOptions?.filter(
        (opt) => opt !== e.currentTarget.value
      );

      setFromTo({
        from: e.currentTarget.value,
        to: convertToOptions[0],
      });
    } else {
      setFromTo({
        ...fromTo,
        [e.currentTarget.name]: e.currentTarget.value,
      });
    }
  };

  return (
    <div className="w-full flex flex-col justify-start space-y-4 md:justify-center items-center md:space-x-2 my-10">
      <h3 className="w-full text-center text-emerald-400 font-extrabold text-2xl">
        I want to convert
      </h3>
      <select
        name="from"
        onChange={onChange}
        className="w-full md:w-2/5 outline-none border p-2 "
        value={fromTo.from}
      >
        {selectOptions.map((opt, index) => (
          <option key={`${opt}-${index}`}>{opt}</option>
        ))}
      </select>
      <span className="text-emerald-400 font-extrabold text-2xl">to</span>
      <select
        value={fromTo.to}
        name="to"
        onChange={onChange}
        className="w-full md:w-2/5 outline-none border p-2 "
      >
        {convertToOptions.map((opt, index) => (
          <option key={`${opt}-${index}`}>{opt}</option>
        ))}
      </select>
      <Link
        href={`/convert-image/${fromTo.from.toLowerCase()}-to-${fromTo.to.toLowerCase()}`}
        className="w-full md:w-2/5 text-center rounded text-white bg-red-400 font-extrabold hover:bg-red-500 transition delay-75 ease-in-out tracking-wider p-2 outline-none"
      >
        Proceed
      </Link>
    </div>
  );
}

export default ConvertOptions;
