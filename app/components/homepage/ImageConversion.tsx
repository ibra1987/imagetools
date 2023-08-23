import { SiConvertio } from "react-icons/si";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function ImageConversion() {
  return (
    <section className="w-full h-56 lg:w-3/5 flex flex-col justify-start items-center mt-6  text-sm bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg ">
      <h3 className="w-11/12  text-center font-extrabold p-4 border-gray-600  text-lg    md:text-2xl">
        Convert Images To Multiple Formats
      </h3>
      <div className=" relative w-full  flex justify-center p-4 items-center  space-x-6 ">
        {/* <SiConvertio className=" text-6xl text-yellow-500" /> */}
        <p className="w-11/12 my-2 text-left indent-3 font-medium   text-sm md:text-base  ">
          Transform your images effortlessly with our versatile image converter
          tool. Seamlessly convert between formats while preserving exceptional
          quality and optimizing file sizes for enhanced performance.
          <br />
          <Link href={"/convert-image"}>
            <span className="text-indigo-600 mt-4 font-extrabold hover:text-indigo-500 transition delay ease-in-out">
              Start Converting images
              <FaArrowRight className="inline mx-1" />
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
}

export default ImageConversion;
