import { SiConvertio } from "react-icons/si";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function ImageConversion() {
  return (
    <section className="w-full flex flex-col justify-start items-center bg-gray-100 text-sm ">
      <h3 className="text-center font-extrabold border-b border-gray-300 mb-4 mt-10 text-2xl">
        Convert Images To Multiple Formats
      </h3>
      <div className=" relative w-full  flex justify-center items-center  space-x-6 border-b">
        <SiConvertio className=" text-6xl text-red-400" />
        <p className="w-11/12 md:w-2/3 my-2 p-4 text-left indent-3 font-medium  text-gray-500 text-sm md:text-base  ">
          Quickly and easily compress your images, making them easier to share
          while still looking great. Try it out today and see the difference for
          yourself!.
          <br />
          <Link href={"/convert-image"}>
            <span className="text-yellow-700 mt-4 font-extrabold hover:text-yellow-600 transition delay ease-in-out">
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
