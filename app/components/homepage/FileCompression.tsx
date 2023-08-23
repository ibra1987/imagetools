import { FaCompressArrowsAlt } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function FileCompression() {
  return (
    <section className="w-full lg:w-3/5 pt-8 h-56 flex flex-col justify-start items-center bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg   ">
      <h3 className="w-11/12  text-center font-extrabold p-4 border-gray-600  text-lg    md:text-2xl">
        Compress Image Size Easily
      </h3>
      <div className=" relative w-full flex justify-center p-4 items-center space-x-6    ">
        {/* <FaCompressArrowsAlt className="text-6xl text-red-400" /> */}
        <p className="w-11/12 my-2 text-left indent-3 font-medium   text-sm md:text-base  ">
          Effortlessly enhance your images with our powerful compression tool.
          Experience lightning-fast loading times and reduced file sizes while
          preserving exceptional quality.
          <br />
          <Link href={"/compress-image"}>
            <span className="text-indigo-600 mt-4 font-extrabold hover:text-indigo-500  transition delay ease-in-out">
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
