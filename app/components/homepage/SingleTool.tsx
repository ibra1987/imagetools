import Image from "next/image";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

type props = {
  title: string;
  imagePath: string;
  text: string;
  alt: string;
};

function SingleTool({ title, imagePath, text, alt }: props) {
  return (
    <section className="w-full flex  justify-center items-center py-10 bg-gray-50 ">
      <div className="w-11/12   flex  justify-center items-center">
        <div className="w-1/2 flex flex-col justify-center   items-center p-2 ">
          <h3 className="text-center text-gray-500 font-extrabold border-b border-gray-300   text-xl md:text-2xl">
            {title}
          </h3>
          <p className="w-11/12  my-2 p-4 text-center font-medium  text-gray-500  ">
            {text}
          </p>
          <button className="py-2 px-20  bg-indigo-500 text-gray-100 hover:bg-indigo-600 transition delay-75 ease-in-out text-xl font-extrabold tracking-wide">
            Try it
          </button>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center p-2">
          <div className="w-11/12  flex flex-col space-y-6 md:space-y-0 md:flex-row  justify-center items-center relative rounded">
            <div className="w-80 h-80 relative rounded bg-transparent-image  ">
              <Image
                alt={alt}
                src={imagePath}
                fill={true}
                className="rounded"
              />
            </div>
            {/* <FaArrowRight className="text-6xl text-gray-200 font-extrabold hidden md:block" />
          <FaArrowDown className="text-6xl text-gray-200 font-extrabold block md:hidden" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleTool;
