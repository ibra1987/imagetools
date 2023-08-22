import { BsImages } from "react-icons/bs";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function BackgroundRemoval() {
  return (
    <section className="w-full pt-8 flex flex-col justify-start items-center  mt-6 text-sm ">
      <h3 className="w-11/12 md:w-2/3 text-left font-extrabold p-4 border-gray-600  text-lg    md:text-2xl">
        Remove Background from all sort of Images
      </h3>
      <div className=" relative w-full flex justify-center items-center space-x-6 p-4 ">
        <BsImages className="text-4xl text-blue-500" />
        <p className="w-11/12 md:w-2/3 my-2 text-left indent-3 font-medium   text-sm md:text-base  ">
          Unleash the power of our background remover tool to effortlessly
          eliminate backgrounds from your images. Experience seamless removals,
          preserving high-quality results while saving time and effort.
          <br />
          <Link href={"/conpress-images"}>
            <span className="text-yellow-500 mt-4 font-extrabold hover:text-yellow-600 transition delay ease-in-out">
              Try Background Remover Tool Now!
              <FaArrowRight className="inline mx-1" />
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
}

export default BackgroundRemoval;
