import { FaCompressArrowsAlt } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function FileCompression() {
  return (
    <section className="w-full pt-8 flex flex-col justify-start items-center  ">
      <h3 className="text-center font-extrabold border-b border-gray-300 text-gray-600 text-lg    md:text-2xl">
        Compress Image Size Easily
      </h3>
      <div className=" relative w-full flex justify-center items-center space-x-6 p-2  border-b ">
        <FaCompressArrowsAlt className="text-4xl text-indigo-500" />
        <p className="w-11/12 md:w-2/3 my-2 text-left indent-3 font-medium  text-gray-500 text-sm md:text-base  ">
          Effortlessly enhance your images with our powerful compression tool.
          Experience lightning-fast loading times and reduced file sizes while
          preserving exceptional quality.
          <br />
          <Link href={"/conpress-images"}>
            <span className="text-yellow-700 mt-4 font-extrabold hover:text-yellow-600 transition delay ease-in-out">
              Compress Your Images Now
              <FaArrowRight className="inline mx-1" />
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
}

export default FileCompression;
