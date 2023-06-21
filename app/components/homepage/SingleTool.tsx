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
    <section className="w-full flex  justify-center items-center py-10 bg-red-400 text-gray-100 ">
      <div className="w-10/12   flex flex-col-reverse md:flex-row  md:justify-center items-center space-y-10">
        <div className="w-full md:w-2/3 flex flex-col justify-center   items-center p-2  ">
          <h3 className="text-center  font-extrabold border-gray-300   text-xl md:text-2xl">
            {title}
          </h3>
          <p className="w-11/12  my-2 p-4 text-center font-medium    ">
            {text}
          </p>
          <button className="py-2 px-20  bg-gray-600 text-gray-100 hover:bg-gray-700 transition delay-75 ease-in-out text-xl font-extrabold tracking-wide">
            Try it
          </button>
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-center items-start p-2 ">
          <div className="w-11/12  flex flex-col space-y-6 md:space-y-0 md:flex-row  justify-center items-center relative rounded">
            <div className="w-64 h-64 relative rounded bg-transparent-image  ">
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
