import Image from "next/image";
import Link from "next/link";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

type props = {
  title: string;
  imagePath: string;
  text: string;
  alt: string;
};

function SingleTool({ title, imagePath, text, alt }: props) {
  return (
    <section className="w-11/12  flex  justify-center items-center py-10  text-gray-100 border rounded border-gray-800  ">
      <div className="w-full  flex flex-col-reverse md:flex-row  md:justify-center items-center space-y-10">
        <div className="w-full md:w-1/2 flex flex-col justify-center   items-center p-2  ">
          <h3 className="text-center  font-extrabold border-gray-300   text-xl md:text-2xl">
            {title}
          </h3>
          <p className="w-11/12  my-2 p-4 text-center font-medium    ">
            {text}
          </p>
          <Link href="/remove-background" className="py-2 px-20 rounded  bg-red-600 text-gray-100 hover:bg-red-700 transition delay-75 ease-in-out text-xl font-extrabold tracking-wide">
            Try it
          </Link >
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-2 ">
          <div className="w-11/12  flex flex-col space-y-6 md:space-y-0 md:flex-row  justify-center items-center relative rounded">
            <div className="w-96 h-96 relative rounded bg-transparent-image  ">
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
