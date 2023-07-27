import { BsImageFill } from "react-icons/bs";
import { BiImages } from "react-icons/bi";
import { IoIosImages } from "react-icons/io";
//import { MdOutlineFilterBAndW } from "react-icons/md";



function Showcase() {

 
  return (
    <div className="w-full z-10 p-10 bg-transparent   flex flex-col text-slate-400 justify-start items-center rounded bg-gray-700 mt-4  ">
      <ul className="w-full   grid grid-cols-1 place-items-center gap-4 md:divide-x   divide-gray-600   md:grid-cols-3 p-4 ">
        <li className="w-full h-48  flex flex-col justify-center  items-center  font-medium ">
          <div className="flex justify-center items-center text-indigo-400">
            <span className="p-4 bg-indigo-50  rounded mx-4">
              <BsImageFill />
            </span>
            <span>Background Removal</span>
          </div>
          <p className="w-11/12 h-60 py-4  indent-3   font-normal text-sm">
            Remove image backgrounds effortlessly with our powerful tool. Our
            background removal tool provides accurate results in just a few
            clicks, making it perfect for photographers, designers, and anyone
            who needs to remove backgrounds from their images. Try our tool
            today and take your images to the next level.
          </p>
        </li>
        <li className="w-full  h-48 flex flex-col justify-center   my-10  items-center space-x-4  font-medium ">
          <div className="flex justify-center items-center text-red-400">
            <span className="p-4 bg-red-100 rounded mx-4">
              <BiImages className="text-xl" />
            </span>
            <span>Size Compression</span>
          </div>
          <p className="w-11/12 h-48 my-6 indent-3  font-normal text-sm ">
            Easily compress your images with our reliable and fast tool that
            reduces file sizes without sacrificing quality. Our advanced
            compression algorithms ensure your images remain sharp and clear,
            making them perfect for websites, presentations, or personal use.
          </p>
        </li>
        <li className="w-full h-48 flex flex-col justify-center      items-center space-x-4 font-medium ">
          <div className="flex justify-center items-center text-yellow-600 ">
            <span className="p-4 bg-yellow-100 rounded mx-4">
              <IoIosImages className="text-xl" />
            </span>
            <span>Format Conversion</span>
          </div>
          <p className="w-11/12 h-48 my-6 indent-3  font-normal text-sm">
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
          <p className="w-11/12 my-6 indent-3  font-normal text-sm">
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
