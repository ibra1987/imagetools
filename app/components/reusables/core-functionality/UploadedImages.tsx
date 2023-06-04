import Image from "next/image";
import { BsArrowBarDown } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { ScaleLoader } from "react-spinners";

function UploadedImages({
  images,
  removeImage,
  loading,
  submit,
  downloadLink,
  tool,
  cancel,
}: {
  images: File[] | undefined;
  removeImage: (image: File) => void;
  loading: boolean;
  submit: () => void;
  downloadLink?: string;
  tool?: string;
  cancel: () => void;
}) {
  return (
    <div className="w-full flex flex-col md:flex-row-reverse justify-center items-start my-4 py-10 border bg-gray-800 ">
      <div className="w-full md:w-1/4 p-4 flex flex-1 flex-col  justify-start items-center">
        {images && images.length > 0 && (
          <span>You have selected {images.length} images</span>
        )}
        <button
          onClick={submit}
          className="w-full bg-yellow-400 p-2 my-2 font-medium hover:bg-yellow-500 transition delay-75 ease-in-out cursor-pointer"
        >
          {tool === "img-compressor"
            ? "Start Compressing"
            : tool === "img-converter"
            ? "convert"
            : tool === "bg-remover"
            ? "remove background"
            : "Submit"}
        </button>
        <button
          onClick={cancel}
          className="w-full bg-gray-400 p-2 my-2 font-medium hover:bg-gray-500 text-gray-100 transition delay-75 ease-in-out cursor-pointer"
        >
          Cancel
        </button>
        {loading && (
          <div className="">
            <ScaleLoader loading={loading} color="#555555" />
          </div>
        )}
        {downloadLink !== "" && (
          <a
            className="w-full flex justify-center items-center space-x-2 bg-blue-400 p-2 my-2 font-medium hover:bg-blue-500 text-gray-100 transition delay-75 ease-in-out cursor-pointer"
            href={downloadLink}
            download={true}
          >
            <span className="mx-2">Download </span>
            <span>
              <BsArrowBarDown className="mx-2 text-2xl font-medium" />
            </span>
          </a>
        )}
      </div>
      <div className="w-full md:w-3/4 ">
        <div className="w-11/12 mx-auto  grid grid-cols-2  md:grid-cols-fluid place-items-center">
          {images ? (
            images.map((image: File, index: number) => {
              return (
                <div
                  key={image.name + "-" + index}
                  className=" flex justify-center items-center    m-2"
                >
                  <div className="w-40 h-40 relative  flex justify-center items-center bg-white p-4 border-2 shadow-md">
                    <span
                      onClick={() => removeImage(image)}
                      className="cursor-pointer z-20 transition ease-in-out delay-75 absolute top-1 left-1 text-red-300  hover:text-red-400  w-5 h-5 border flex justify-center items-center border-red-300 rounded-full "
                    >
                      <MdClose />
                    </span>
                    <Image
                      alt={`user_uploaded_image-${index}`}
                      src={URL.createObjectURL(image)}
                      fill={true}
                    />{" "}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="w-full md:w-40 h-40 relative  flex justify-center items-center bg-white p-4 border-2 shadow-md"></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadedImages;
