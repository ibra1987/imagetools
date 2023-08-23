import { BsImages } from "react-icons/bs";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

function BackgroundRemoval() {
  return (
    <section className="w-full lg:w-3/5  h-56 pt-8 flex flex-col  justify-start items-center  mt-6 text-sm bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg ">
      <h3 className="w-11/12  text-center font-extrabold px-4 border-gray-600  text-lg    md:text-2xl">
        Remove Background from all sort of Images
      </h3>
      <div className=" relative w-full flex justify-center p-4 items-center space-x-6 ">
        {/* <BsImages className="text-6xl text-indigo-400" /> */}
        <p className="w-11/12 my-2 text-left indent-3 font-medium   text-sm md:text-base  ">
          Unleash the power of our background remover tool to effortlessly
          eliminate backgrounds from your images. Experience seamless removals,
          preserving high-quality results while saving time and effort.
          <br />
          <Link href={"/conpress-images"}>
            <span className="text-indigo-600  mt-4 font-extrabold hover:text-indigo-500  transition delay ease-in-out">
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
