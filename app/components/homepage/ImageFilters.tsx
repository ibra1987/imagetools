import { MdFilterBAndW } from "react-icons/md";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function ImageFilters() {
  return (
    <section className="w-full flex flex-col justify-start items-center bg-gray-100 ">
      <h3 className="text-center font-extrabold border-b-2 border-gray-300 mb-4 mt-10 text-2xl">
        Apply Stunning Filters To Your Images
      </h3>
      <div className=" relative w-full  flex justify-center items-center  py-4 space-x-6 border-b">
        <MdFilterBAndW className="text-7xl text-yellow-500" />
        <p className="w-11/12 md:w-2/3  text-left indent-3 font-medium  text-gray-500 text-sm md:text-base  ">
          Quickly and easily compress your images, making them easier to share
          while still looking great. Try it out today and see the difference for
          yourself!.
          <br />
          <Link href={"/conpress-images"}>
            <span className="text-yellow-700 mt-4 font-extrabold hover:text-yellow-600 transition delay ease-in-out">
              Try Out Our Image Converter
              <FaArrowRight className="inline mx-1" />
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
}

export default ImageFilters;
