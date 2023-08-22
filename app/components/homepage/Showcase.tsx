import { BsImageFill } from "react-icons/bs";
import { BiImages } from "react-icons/bi";
import { IoIosImages } from "react-icons/io";
//import { MdOutlineFilterBAndW } from "react-icons/md";

const cardClass = " w-full lg:w-1/3 p-6 flex flex-col justify-start items-center h-64 text-sm  rounded shadow-md"
const pClass = " w-full my-2  indent-3 h-48   font-normal text-gray-500"


function Showcase() {
 
  return (
    <div className="w-full z-10 md:p-10 mb-24   flex flex-col  text-gray-500 justify-start items-center rounded  mt-4  ">
      <h2 className="w-full text-center text-4xl leading-6 font-extrabold mb-10 text-black tracking-widest">Serivces</h2>
      <ul className="lg:w-11/12  flex flex-col  lg:flex-row justify-center items-center lg:space-x-4 space-y-6 lg:space-y-0  ">
        <li className={cardClass }>
          <div className="w-full flex justify-center items-center text-indigo-400">
            <span className="p-4 bg-indigo-50  rounded mx-4">
              <BsImageFill />
            </span>
            <span>Background Removal</span>
          </div>
          <p className={pClass}>
            Remove image backgrounds effortlessly with our powerful tool. Our
            background removal tool provides accurate results in just a few
            clicks, making it perfect for any use case.
          </p>
        </li>
        <li className={cardClass}>
          <div className="w-full flex  justify-center items-center text-red-400">
            <span className="p-4 bg-red-100 rounded mx-4">
              <BiImages className="text-xl" />
            </span>
            <span>Size Compression</span>
          </div>
          <p className={pClass}>
            Easily compress your images with our reliable and fast tool that
            reduces file sizes without sacrificing quality. Our advanced
            compression algorithms ensure your images remain sharp and clear.
          </p>
        </li>
        <li className={cardClass}>
          <div className="w-full flex justify-center items-center text-yellow-600 ">
            <span className="p-4 bg-yellow-100 rounded mx-4">
              <IoIosImages className="text-xl" />
            </span>
            <span>Format Conversion</span>
          </div>
          <p className={pClass}>
            fast and user-friendly tool that lets you easily convert your images
            to different file formats. With just a few clicks, you can quickly
            convert multiple images to the format of your choice.
          </p>
        </li>
        {/* <li className="w-full  flex flex-col justify-center  items-center space-x-4 text-green-600 font-medium ">
          <div className="flex justify-center items-center">
            <span className="p-4 bg-green-100 rounded mx-4">
              <MdOutlineFilterBAndW className="text-xl" />
            </span>
            <span>Filter Application</span>
          </div>
          <p className="w-11/12 my-6 indent-3 h-48  font-normal text-sm">
            "Transform your images into stunning works of art with our powerful
            image filters tool. Our tool provides a wide range of filters and
            effects to choose from, allowing you to add a personal touch to your
            images. With our tool, you can enhance colors, add textures, and
            create unique effects that make your images stand out.
          </p>
        </li> */}
      </ul>
    </div>
  );
}

export default Showcase;
